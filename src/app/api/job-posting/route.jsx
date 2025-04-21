import { Resend } from 'resend';
import { Readable } from 'stream';

export const config = {
  api: {
    bodyParser: false,
  },
};

const resend = new Resend(process.env.RESEND_API_KEY);

// Convert Web Request to Node-style readable stream
function toNodeReadable(webReadable, headers = {}) {
  const nodeStream = Readable.from(webReadable);
  nodeStream.headers = headers;
  nodeStream.method = 'POST';
  nodeStream.url = '/api/job-posting'; // required by formidable
  return nodeStream;
}

// Parse multipart form using formidable
async function parseForm(request) {
  const formidable = (await import('formidable')).default;
  const form = formidable({ keepExtensions: true });

  const stream = toNodeReadable(request.body, Object.fromEntries(request.headers));

  return new Promise((resolve, reject) => {
    form.parse(stream, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

export async function POST(request) {
  try {
    const { fields, files } = await parseForm(request);

    const resumeFile = files.resume[0];
    const fs = await import('fs/promises');
    const resumeBuffer = await fs.readFile(resumeFile.filepath);

    await resend.emails.send({
      from: 'Global Visa <onboarding@resend.dev>',
      to: process.env.EMAIL_TO,
      subject: 'New Job Application Received',
      text: `
Name: ${fields.name}
Email: ${fields.email}
Phone: ${fields.phone}
DOB: ${fields.dob}
Age: ${fields.age}
Experience: ${fields.experience}
Education: ${fields.education}
Job Title: ${fields.jobTitle}
      `,
      attachments: [
        {
          filename: resumeFile.originalFilename,
          content: resumeBuffer.toString('base64'),
        },
      ],
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return Response.json({ success: false, message: 'Email sending failed.' }, { status: 500 });
  }
}
