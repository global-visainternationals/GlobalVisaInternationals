'use client'
import Image from 'next/image';
import styles from './about.module.css';
import React,  { useState } from 'react'; 
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";


export default function About() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
 
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) {
      alert("❌ Unexpected form submission target.");
      return;
    }

    const formData = new FormData(form);
   
  
    if (!executeRecaptcha) {
      alert("❌ reCAPTCHA not ready");
      return;
    }
  
    const token = await executeRecaptcha("inquiry_form");
  
    if (!token) {
      alert("❌ Please verify you're not a robot");
      return;
    }
  
    const payload = {
      ...Object.fromEntries(formData.entries()),
      recaptchaToken: token,
    };
  
    // Optimistic UX
    setShowPopup(true);
    form.reset();
    
    setTimeout(() => {
      setShowPopup(false);
    }, 4000);
    
    
  
    // Send email in background
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then(async (res) => {
      const data = await res.json();
      if (!data.success) {
        alert("❌ Email sending failed. Please try again.");
      }
    }).catch((err) => {
      alert("❌ Something went wrong while submitting the form.");
      console.error(err);
    }).finally(() => {
      setIsSubmitting(false);
    });
  };
     
  
    return (
      <>
             <section className={styles.storyContainer}>
             <h1>Global Visa Internationals – Your Trusted Immigration & Visa Experts</h1>
          <div className={styles.textContent}>
            
            <p className={styles.story}>At <strong>Global Visa Internationals,</strong> we specialize in simplifying the complex world of global mobility. Founded by <strong>Mrs. Anusha Prashanth,</strong> a dynamic leader with over a decade of hands-on experience in immigration and visa consultancy, we’ve proudly helped over <strong> 55,000+</strong> individuals secure their visas and advised more than <strong>75,000+ </strong>clients worldwide.</p>
            <p className={styles.story}>With offices in <strong>Bangalore, India</strong>, and <strong>London, UK,</strong> we bring a global perspective and local expertise to every case we handle. Whether you're planning to study abroad, explore work opportunities, or reunite with family, we provide customized visa solutions tailored to your goals.</p>
            <h2>Meet the Visionary Behind Our Success</h2>
            <p className={styles.story}><strong>Mrs. Anusha Prashanth,</strong> the founder and driving force behind Global Visa Internationals, is known for her commitment to <strong>transparency, innovation,</strong> and <strong>client-first service.</strong> Her in-depth knowledge and global outlook have made Global Visa Internationals a trusted name in the immigration consultancy space.</p>
            <p className={styles.story}>She leads a team of experienced professionals dedicated to delivering seamless visa processing and strategic immigration advice—making your overseas journey smooth and successful.</p>
          </div>


          {/* Image Section (Founder) */}
          <div className={styles.imageCard}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/founder.jpg"
                alt="Founder Image"
                fill
                quality={100}
                className={styles.responsiveImage}
              />
            </div>
          </div>

          <h2></h2>
        </section>


        <section className={styles.aboutSec}>

    <section className={styles.whydata}>
        <h2 className={styles.subTitle}>Why Trust Global Visa Internationals for Your Immigration Needs?</h2>
        <p>Migrating to a new country is a life-changing journey that requires expert guidance and precise execution. At Global Visa Internationals, we specialize in providing transparent, reliable, and personalized visa solutions to help individuals and businesses navigate complex immigration procedures with ease.</p>
        <p>Migrating to a new country is a life-changing journey that requires expert guidance and precise execution. At Global Visa Internationals, we specialize in providing transparent, reliable, and personalized visa solutions to help individuals and businesses navigate complex immigration procedures with ease.</p>
        <h3>Our Key Strengths</h3>
        <ul>
          <li><strong>✔️ Comprehensive Visa Services –</strong> Work, Study, Business, Dependent, Tourist, and PR visas.</li>
          <li><strong>✔️ Proven Track Record –</strong> High visa approval rates with a meticulous, success-driven approach.</li>
          <li><strong>✔️ End-to-End Support –</strong> From document preparation to visa approvals and post-landing services.</li>
          <li><strong>✔️ Expert Consultation –</strong> Personalized guidance based on individual eligibility and goals.</li>
          <li><strong>✔️ Mock Interview Preparation –</strong> Intensive coaching to maximize visa interview success.</li>
          <li><strong>✔️ Refusal Case Assistance –</strong> Strong case analysis and effective reapplication strategies.</li>
        </ul>
      <h3>What Sets Us Apart?</h3>
      <ul>
      Why Choose Us?
<li>✨ <strong>Comprehensive Immigration Services –</strong> We assist skilled professionals, entrepreneurs, business investors, and self-employed individuals in securing the right visa for their needs.</li>

<li>✨ <strong>Expanding Beyond Popular Destinations –</strong> In addition to Canada, Australia, the UK, and the USA, we support immigration to fast-growing destinations like Hungary, Denmark, Lithuania, and Latvia.</li>

<li>✨ <strong>Beyond Paperwork – Full-Service Consultancy –</strong> We provide more than just document processing. Our team offers strategic immigration advice and collaborates with licensed representatives for Canada and other destinations to ensure smooth applications.</li>

<li>✨ <strong>Business & Investor Visa Programs </strong>– We guide business professionals through investment-based immigration pathways, including Provincial Nominee Programs (PNPs) for Canada and Australia, Singapore’s EntrePass, and European residency programs like Lithuanian and Latvian Temporary Residence Permits (TRP).</li>

<li>✨ <strong>Expertise in Skilled Migration </strong>– Our specialists offer tailored guidance for skilled worker programs, including Canada’s Express Entry System, Australia’s General Skilled Migration (GSM) Program, and other country-specific work permits.</li>

<li>✨ <strong>Precise, Country-Specific Documentation Support –</strong> Every case is unique. Our experts ensure accurate and compliant documentation for each application.</li>

<li>✨<strong> Regulatory Compliance & Legal Expertise –</strong> We stay up to date with global immigration policies to ensure visa applications meet the latest legal standards.</li>

<strong>Start Your Immigration Journey Today!</strong>
Let Global Visa Internationals help you take the next step toward your dream destination. Contact us for a free consultation.
      </ul>
      </section>


      
      <div className={styles.formSection}>
                          <h2>Immigration Inquiry Form</h2>
                          <form  id="inquiry-form" onSubmit={handleSubmit}>
                            <div className={styles.row}>
                              <div>
                                <input  className={styles.input} type="text" name="name" placeholder="Enter your name" required />
                              </div>
                              <div>
                                <input  className={styles.input} type="text" name="phone" placeholder="Enter your phone number" required />
                              </div>
                            </div>
      
                            <div className={styles.row}>
                              <div>
                                <select className={styles.select} name="country" required>
                                  <option value="">Select Country</option>
                                  {["Canada", "USA", "UK", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
                                    <option key={country} value={country}>{country}</option>
                                  ))}
                                </select>
                              </div>
                              <div>
                                <select  className={styles.select} name="immigration_type" required>
                                  <option value="">Select Immigration Type</option>
                                  {["Work Visa", "Student Visa", "Visitor/Tourist Visa", "Business Visa", "Dependent Visa", "Permanent Residency Visa"].map((type) => (
                                    <option key={type} value={type}>{type}</option>
                                  ))}
                                </select>
                              </div>
                            </div>
      
                            <div className={styles.row}>
                              <div>
                                <input className={styles.input} type="number" name="applicants" min="1" placeholder="Enter number" required />
                              </div>
                              <div>
                                <select  className={styles.select} name="age" required>
                                  <option value="">Select Age</option>
                                  <option value="18-45">18-45</option>
                                  <option value="45+">45+</option>
                                </select>
                              </div>
                            </div>
      
                            <div className={styles.row}>
                              <div>
                                <select  className={styles.select} name="education" required>
                                  <option value="">Select Qualification</option>
                                  {["Diploma", "Bachelor's", "Master's", "Doctorate", "Doctor", "Other"].map((edu) => (
                                    <option key={edu} value={edu}>{edu}</option>
                                  ))}
                                </select>
                              </div>
                              <div>
                                <input  className={styles.input} type="email" name="email" placeholder="Enter your email" required />
                              </div>
                            </div>
      
      
                            <button className={styles.submittingBtn} type="submit" disabled={isSubmitting}>
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
        </section>
        
      
      
      </>
    );
  }
  