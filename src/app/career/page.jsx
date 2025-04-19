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
    <h2 className={styles.Title}>Job Title: Visa Documentation Assistance Specialist</h2>
    <p><strong>Reports To:</strong> Visa Documentation Manager</p>
    <p><strong>Job Overview:</strong> This role involves assisting clients with visa documentation, ensuring their applications are complete and accurate. Success in this position requires excellent communication skills, attention to detail, and the ability to clarify client doubts regarding visa requirements. The specialist plays a crucial role in ensuring that all documents are submitted correctly to avoid application failures.</p>
    
    <h3 className={styles.subTitle}>Responsibilities and Duties:</h3>
    <ul>
      <li>Assist clients in preparing and submitting visa documentation.</li>
      <li>Clarify client doubts regarding visa requirements and processes.</li>
      <li>Review applications to ensure they meet all required standards.</li>
      <li>Guide clients in gathering the necessary supporting documents.</li>
      <li>Coordinate with relevant departments to verify documentation status.</li>
      <li>Provide timely updates to clients on application progress.</li>
    </ul>
    
    <h3 className={styles.subTitle}>Qualifications:</h3>
    <ul>
      <li>Education level: Bachelor's degree or equivalent.</li>
      <li>Experience: Previous experience in visa documentation or immigration services is preferred.</li>
      <li>Specific skills: Excellent communication and organizational skills.</li>
      <li>Personal characteristics: Detail-oriented, proactive, and client-focused.</li>
      <li>Certifications: Immigration consultancy or documentation-related certifications are a plus.</li>
      <li>Licenses: None required.</li>
      <li>Physical abilities: Ability to work with documents and online application systems for extended periods.</li>
    </ul>
  </div>


      <div className={styles.formSection}>
        <h2>Immigration Inquiry Form</h2>
        <form id="inquiry-form" onSubmit={handleSubmit} encType="multipart/form-data">
          <div className={styles.row}>
            <div>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <input
                className={styles.input}
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div>
              <select className={styles.select} name="experience" required>
                <option value="">Select Experience</option>
                <option value="0 years">0 years</option>
                <option value="0-1 years">0-1 years</option>
                <option value="1-3 years">1-3 years</option>
                <option value="3-5 years">3-5 years</option>
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
                {["Diploma", "Bachelor's", "Master's", "PUC", "Other"].map((edu) => (
                  <option key={edu} value={edu}>{edu}</option>
                ))}
              </select>
            </div>
            <div>
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="Enter your email"
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
                placeholder="Auto-calculated Age"
                disabled
              />
            </div>
          </div>

          <button
            className={styles.submittingBtn}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        {showPopup && (
          <div className={styles.popupOverlay}>
            <div className={styles.popupContent}>
              <p>✅ Your form has been submitted successfully!</p>
              <button onClick={() => setShowPopup(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
