'use client';
import { useState } from 'react';
import styles from './JobForm.module.css';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import Head from 'next/head';
import Script from 'next/script';


export default function CareerPage() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    if (!executeRecaptcha) {
      alert("❌ reCAPTCHA not ready");
      return;
    }

    const resumeFile = form.resume.files[0];
    if (resumeFile && resumeFile.size > 2 * 1024 * 1024) {
      alert("Resume file must be under 2MB");
      return;
    }

    const token = await executeRecaptcha("job_posting");
    formData.append("recaptchaToken", token);

    setIsSubmitting(true);

    fetch("/api/job-posting", {
      method: "POST",
      body: formData,
    })
      .then(async (res) => {
        const data = await res.json();
        if (data.success) {
          form.reset();
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 4000);
        } else {
          alert("❌ Email sending failed.");
        }
      })
      .catch((err) => {
        alert("❌ Something went wrong.");
        console.error(err);
      })
      .finally(() => setIsSubmitting(false));
  };



  return (
    <>
    <Head>
  <title>Careers at Global Visa Internationals | Join Our Immigration Experts</title>
  <meta name="description" content="Explore exciting career opportunities at Global Visa Internationals in Bengaluru. Join our expert team helping clients achieve their immigration dreams across Canada, UK, Australia, and more." />
  <meta name="keywords" content="Immigration Careers, Visa Consultant Jobs, Global Visa Internationals Careers, Jobs in Bengaluru, Canada Visa Jobs, Work Visa Consulting Careers" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.globalvisa-internationals.com/career" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Careers at Global Visa Internationals | Join Our Immigration Experts" />
  <meta property="og:description" content="Discover job openings and career growth at Global Visa Internationals. Be part of a fast-growing visa consulting firm in Bengaluru." />
  <meta property="og:url" content="https://www.globalvisa-internationals.com/career" />
  <meta property="og:image" content="https://www.globalvisa-internationals.com/gvilogo.png" />
  <meta property="og:site_name" content="Global Visa Internationals" />

  {/* Twitter Cards */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Careers at Global Visa Internationals | Join Our Immigration Experts" />
  <meta name="twitter:description" content="Discover job opportunities at Global Visa Internationals in Bengaluru. Help people achieve their immigration goals." />
  <meta name="twitter:image" content="https://www.globalvisa-internationals.com/gvilogo.png" />
  <meta name="twitter:site" content="@GlobalVisaIntern" />

  {/* Schema */}
  <script type="application/ld+json" id="career-org-schema" dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Global Visa Internationals",
      "url": "https://www.globalvisa-internationals.com",
      "logo": "https://www.globalvisa-internationals.com/gvilogo.png",
      "description": "Unlock your entrepreneurial dreams in Canada with the Start-up Visa program...",
      "founder": { "@type": "Person", "name": "Naveen Kumar J" },
      "foundingDate": "2016",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "MG Road",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560025",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-7022213466",
        "contactType": "Customer Support",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Kannada", "Tamil"]
      },
      "areaServed": ["IN", "CA", "UK", "EU"],
      "sameAs": [
        "https://www.facebook.com/globalvisainternationals/",
        "https://www.instagram.com/globalvisa_internationals/",
        "https://www.linkedin.com/company/global-visa-internationals/",
        "https://twitter.com/GlobalVisaIntern",
        "https://www.youtube.com/@globalVisaInternationals",
        "https://www.google.com/maps/place/Global+Visa+Internationals/@12.967478,77.6035421,17z"
      ]
    })
  }} />
</Head>








    <div className={styles.JobSec}>
      <div className={styles.JobData}>
        <h2 className={styles.Title}>Job Title: Documentation Executive</h2>
        <p><strong>Job Overview:</strong> This role involves assisting clients with documentation related to their visa applications. Success in this role comes from clear communication, attention to detail, and the ability to guide clients effectively.</p>

        <h3 className={styles.subTitle}>Responsibilities and Duties:</h3>
        <ul>
          <li>Assist clients in preparing and organizing visa-related documents.</li>
          <li>Clarify client queries and guide them through the documentation process.</li>
          <li>Ensure all forms and supporting materials meet visa application standards.</li>
          <li>Coordinate with internal teams for document verification when required.</li>
          <li>Update clients on missing paperwork and progress.</li>
        </ul>

        <h3 className={styles.subTitle}>Qualifications:</h3>
        <ul>
          <li>Education: PUC or Diploma minimum; Bachelor’s preferred.</li>
          <li>Experience: 0–2 years in documentation or client service preferred.</li>
          <li>Skills: Strong communication, basic computer , multitasking.</li>
          <li>Traits: Patient, organized, eager to learn.</li>
        </ul>

        <h2 className={styles.Title}>Job Title: Sales Executive</h2>
        <p><strong>Job Overview:</strong> The Sales Executive will be responsible for converting leads, handling inquiries, and assisting potential clients throughout their visa consulting journey. The ideal candidate is target-driven with excellent interpersonal skills.</p>

        <h3 className={styles.subTitle}>Responsibilities and Duties:</h3>
        <ul>
          <li>Engage with inbound leads and provide accurate visa consulting info.</li>
          <li>Convert inquiries to successful applications.</li>
          <li>Maintain CRM and follow-up consistently with prospects.</li>
          <li>Coordinate with documentation and operations teams.</li>
        </ul>

        <h3 className={styles.subTitle}>Qualifications:</h3>
        <ul>
          <li>Education: Any degree.</li>
          <li>Experience: 0–3 years in sales, preferably in education/immigration sectors.</li>
          <li>Skills: Communication, persuasion, CRM tools, time management.</li>
        </ul>
      </div>

      <div className={styles.formSection}>
  <h2>Application Form</h2>
  <form id="inquiry-form" onSubmit={handleSubmit} encType="multipart/form-data">
    
    {/* Full Name & Phone */}
    <div className={styles.row}>
      <div>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Full Name"
          required
        />
      </div>
      <div>
        <input
          className={styles.input}
          type="tel"
          name="phone"
          placeholder="Phone Number (10 digits)"
          pattern="[0-9]{10}"
          title="Enter a 10-digit mobile number"
          required
        />
      </div>
    </div>

    {/* Experience & DOB */}
    <div className={styles.row}>
      <div>
        <select className={styles.select} name="experience" required>
          <option value="" disabled selected hidden>Select Experience</option>
          <option value="0 years">Fresher (0 years)</option>
          <option value="0-1 years">0–1 years</option>
          <option value="1-3 years">1–3 years</option>
          <option value="3-5 years">3–5 years</option>
          <option value="5+ years">5+ years</option>
        </select>
      </div>
      <div>
        <input
          className={styles.input}
          type="date"
          name="dob"
          required
          max={new Date().toISOString().split("T")[0]}
          title="Select your date of birth"
        />
      </div>
    </div>

    {/* Qualification & Email */}
    <div className={styles.row}>
      <div>
        <select className={styles.select} name="education" required>
          <option value="" disabled selected hidden>Select Qualification</option>
          {["PUC", "Diploma", "Bachelor's", "Master's", "Other"].map((edu) => (
            <option key={edu} value={edu}>{edu}</option>
          ))}
        </select>
      </div>
      <div>
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
      </div>
    </div>

    {/* Resume Upload & Job Role */}
    <div className={styles.row}>
      <div>
        <input
          className={styles.input}
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          required
        />
      </div>
      <div>
        <select className={styles.select} name="jobTitle" required>
          <option value="" disabled selected hidden>Applying For Job</option>
          <option value="Documentation Executive">Documentation Executive</option>
          <option value="Sales Executive">Sales Executive</option>
        </select>
      </div>
    </div>

    <button className={styles.submittingBtn} type="submit" disabled={isSubmitting}>
      {isSubmitting ? "Submitting..." : "Submit Application"}
    </button>
  </form>

  {showPopup && (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <p>✅ Your application has been submitted successfully!</p>
        <button onClick={() => setShowPopup(false)}>Close</button>
      </div>
    </div>
  )}
</div>

    </div></>
  );
}
