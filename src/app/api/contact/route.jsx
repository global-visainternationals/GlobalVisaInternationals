import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, country, immigration_type, applicants, age, education } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const message = `
      <h2>New Immigration Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Immigration Type:</strong> ${immigration_type}</p>
      <p><strong>Applicants:</strong> ${applicants}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Education:</strong> ${education}</p>
    `;

    const data = await resend.emails.send({
      from: `Global Visa Intl <${process.env.FROM_EMAIL}>`,
      to: [process.env.TO_EMAIL],
      subject: "New Immigration Inquiry",
      html: message,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
