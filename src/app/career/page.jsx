'use client';
import { useState } from 'react';
import styles from './JobForm.module.css';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function CareerPage() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [age, setAge] = useState('');


  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let ageNow = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      ageNow--;
    }
    return ageNow;
  };

  const handleDOBChange = (e) => {
    const dob = e.target.value;
    const calculatedAge = calculateAge(dob);
    setAge(calculatedAge > 0 ? calculatedAge : '');
  };

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
    formData.append("age", age);

    setIsSubmitting(true);

    fetch("/api/job-posting", {
      method: "POST",
      body: formData,
    })
      .then(async (res) => {
        const data = await res.json();
        if (data.success) {
          form.reset();
          setAge('');
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
   
<div className={styles.JobSec}>
<div className={styles.JobData}>
  <h2 className={styles.Title}>Job Title: Documentation Assistance</h2>
  <p><strong>Job Overview:</strong> This role involves assisting clients with documentation related to their visa applications. Both freshers and experienced individuals can thrive in this position with the right training and a client-centric attitude. Success in this role comes from clear communication, attention to detail, and the ability to guide clients effectively. The role is essential in ensuring smooth, accurate documentation to reduce application errors and delays.</p>

  <h3 className={styles.subTitle}>Responsibilities and Duties:</h3>
  <ul>
    <li>Assist clients in preparing and organizing visa-related documents.</li>
    <li>Clarify client queries and guide them through the documentation process.</li>
    <li>Ensure all forms and supporting materials meet visa application standards.</li>
    <li>Coordinate with internal teams for document verification when required.</li>
    <li>Keep records organized and update clients on progress or missing paperwork.</li>
    <li>Follow up proactively to ensure timely submission of applications.</li>
  </ul>

  <h3 className={styles.subTitle}>Qualifications:</h3>
  <ul>
    <li>Education level: Minimum PUC or Diploma; Bachelor's degree preferred.</li>
    <li>Experience: Freshers welcome; 0–2 years in documentation or client service preferred.</li>
    <li>Specific skills: Strong communication, basic computer proficiency, and multitasking abilities.</li>
    <li>Personal characteristics: Patient, organized, and eager to learn.</li>
    <li>Training in customer service or documentation is a bonus.</li>
    <li>Physical abilities: Ability to work on a computer for extended hours and manage physical files if needed.</li>
  </ul>
</div>

<div className={styles.formSection}>
  <h2>Application Form</h2>
  <form id="inquiry-form" onSubmit={handleSubmit} encType="multipart/form-data">
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
          placeholder="Phone Number"
          pattern="[0-9]{10}"
          title="Enter a 10-digit mobile number"
          required
        />
      </div>
    </div>

    <div className={styles.row}>
      <div>
        <select className={styles.select} name="experience" required>
          <option value="">Select Experience</option>
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
          onChange={handleDOBChange}
          required
        />
      </div>
    </div>

    <div className={styles.row}>
      <div>
        <select className={styles.select} name="education" required>
          <option value="">Select Qualification</option>
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
        <input
          className={styles.input}
          type="text"
          value={age}
          placeholder="Calculated Age"
          disabled
        />
      </div>
    </div>

    <button
      className={styles.submittingBtn}
      type="submit"
      disabled={isSubmitting}
    >
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

    </div>
  );
}
