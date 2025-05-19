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
      <section className={styles.aboutUsContainer}>
      <h1>Global Visa Internationals – Your Trusted Immigration & Visa Experts</h1>
             <section className={styles.storyContainer}>
          <div className={styles.textContent}>
            
            <p className={styles.story}>It is our mission at Global Visa Internationals to simplify the complex business of global mobility. Founded by visionary leader Mrs. Anusha Prashanth, a seasoned professional with more than a decade's experience in immigration and visa consultancy, we have happily helped over 55,000+ people secure their visas and advised more than 75,000+ clients worldwide seeking global mobility solutions.</p>
            <p className={styles.story}>With offices in London, UK, providing UK visa services, and Bangalore, India, offering premier India visa consultancy, we provide a global perspective and local expertise to every case we handle. Whether you want to study abroad with our study visa assistance, seek work opportunities through our work visa and permits guidance, or reunite with family via our family visa services, we provide customized visa solutions to meet your goals for international relocation.</p>

            <h2>Meet the Visionary Behind Our Success</h2>
            <p className={styles.story}>Mrs. Anusha Prashanth, founder and driving force of Global Visa Internationals, is renowned for her single-minded dedication to transparency in visa processing, innovation in immigration solutions, and client-centricity. Her deep-seated knowledge of global immigration laws and international outlook have made Global Visa Internationals a leading name in the field of immigration consultancy.
</p>
            <p className={styles.story}>She leads a team of efficient visa professionals dedicated to delivering hassle-free visa processing and professional immigration guidance, making your international journey seamless and successful.</p>
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
        </section>
        </section>

        <section className={styles.aboutSec}>

    <section className={styles.whydata}>
        <h2 className={styles.subTitle}>Why Trust Global Visa Internationals for Your Immigration Needs?</h2>
        <p>Trust is more than a word at Global Visa Internationals—it's the cornerstone of all our services. With more than a decade of experience in the immigration industry and thousands of successful client experiences, we are a name that stands for reliability in visa services, integrity in immigration consulting, and positive results in visa outcomes. Here's why people, families, and professionals worldwide select us for their immigration needs:</p>
        <ul>
          <li><strong>Demonstrated Track Record: </strong> We have been able to represent more than 75,000+ clients across different visa categories—starting from visitor visas and student visas to work permits, dependent visas, and visa refusal cases. Our high visa success rate speaks volumes about our thorough understanding of immigration laws, visa documentation, and immigration procedures.</li>
          <li><strong>Expert Guidance, Every Step of the Way :</strong>  Our experienced immigration consultants provide transparent visa guidance, honest immigration advice, and customized visa strategies designed to meet your individual objectives and immigration journey. Whether you are a visa newbie or an experienced international traveler, we ensure that you are well-informed throughout the visa application process.</li>
          <li> <strong>ransparency and Ethical Behavior :</strong>  We operate with transparency in all our visa dealings and uphold ethical behavior in immigration consultancy. No bait-and-switch pricing, no misleading information about our capabilities. Just honest advice, proper case analysis, and total openness—because your trust is paramount to us as your trusted visa consultants.</li>
          <li><strong>End-to-End Support :</strong> From document authentication and visa application preparation to interview scheduling and post-approval counseling, we handle everything—so you can focus on your future while we manage the complete visa process.</li>
          <li><strong>Global Reach, Local Insight:</strong>  Global Reach, Local Insight: Headquartered in India (Bangalore) and London, UK, we provide international standards in visa services combined with local insight, offering the perfect combination of global reach and local touch in immigration assistance.</li>
          
        </ul>
       <h3>Our Key Strengths</h3>
        <strong>What Makes Global Visa Internationals Unique</strong>?
<p>At Global Visa Internationals, we do not just file applications; we create positive immigration experiences, build client trust, and transform lives through successful visa outcomes. Here's what truly sets us apart in the world of visa and immigration consultancy:</p>

<strong> Industry Experience of 11+ Years</strong>
<p> Having spent over a decade in the immigration services sector, we’ve gained in-depth knowledge of the detailed immigration policies and procedures of multiple countries around the world</p>

<strong> Brilliant Visa Success Ratio</strong>
<p>Our right visa strategy, meticulous visa documentation, and expert case handling contribute to our exceptional visa approval rate across all visa categories—making us a top choice for visa success.</p>

<strong> True and Honest Approach</strong>
<p> We operate with complete honesty and transparency in our immigration services. No unrealistic promises—just clear, accurate, and reliable guidance based on real eligibility and potential outcomes in your visa application.</p>

<strong> Personalized Consultancy</strong>
<p>Recognizing that no two immigration cases are alike, each dedicated case advisor crafts a personalized immigration strategy tailored to every client's unique profile, purpose of travel/relocation, and destination country.</p>

<strong> Global Network, Local Expertise</strong>
<p>With company-owned offices in India (Bangalore) and London, we blend international immigration insight with regional understanding to deliver exceptional visa and immigration service worldwide.</p>

<strong>End-to-End Process Handling</strong>
<p>End-to-End Process Handling: From initial profile evaluation and thorough documentation assistance to visa filing, interview preparation, and post-visa support—we manage every aspect of the immigration process under one roof.
</p>

<strong> Inclusive Visa Services</strong>
We cover all the major visa categories such as:
<ol>
  <li>Visitor/Tourist Visa</li>
  <li>Work Visa & Work Permits</li>
  <li>Student Visa</li>
  <li>Business & Investor Visas</li>
  <li>Dependent/Family Visa</li>
  <li>Visa Refusals & Appeals</li>
</ol>



<strong> Client-Centric Culture </strong>
<p> We treat every client with the same empathy, commitment, and care as we would our own family. We ensure that your immigration journey will be smooth, stress-free, and ultimately successful with our dedicated support.</p>
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
  