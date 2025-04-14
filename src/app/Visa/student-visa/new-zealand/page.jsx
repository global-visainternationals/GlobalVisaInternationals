"use client";
import styles from './newzeland.module.css';
import React,  { useState } from 'react';
import Head from 'next/head';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function newzeland(){
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
   
     
         return(      
               <>   
                    <Head>
        <title>Study in New Zealand: Visa, Universities & Costs Guide | Global Visa Internationals</title>
        <meta
          name="description"
          content="Your comprehensive guide to a New Zealand student visa in 2025. Explore top NZ universities, eligibility, required documents, costs, and the application process with Global Visa Internationals."
        />
        <meta
          name="keywords"
          content="study in New Zealand, New Zealand student visa, NZ universities, New Zealand education, student visa NZ, international students New Zealand, cost of studying New Zealand, NZ visa requirements, apply for NZ student visa, Pathway Student Visa, Fee-Paying Student Visa, Exchange Student Visa, Immigration New Zealand, NZQA"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.globalvisainternationals.com/Visa/student-visa/new-zealand" /> {/* Replace with your actual URL */}

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Study in New Zealand: Visa, Universities & Costs Guide | Global Visa Internationals" />
        <meta
          property="og:description"
          content="Your comprehensive guide to a New Zealand student visa in 2025. Explore top NZ universities, eligibility, required documents, costs, and the application process with Global Visa Internationals."
        />
        <meta property="og:url" content="https://www.globalvisainternationals.com/Visa/student-visa/new-zealand" /> {/* Replace with your actual Facebook URL */}
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="URL_TO_YOUR_NEW_ZEALAND_IMAGE" /> */} {/* Add your New Zealand image URL */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Study in New Zealand: Visa, Universities & Costs Guide | Global Visa Internationals" />
        <meta
          name="twitter:description"
          content="Your comprehensive guide to a New Zealand student visa in 2025. Explore top NZ universities, eligibility, required documents, costs, and the application process with Global Visa Internationals."
        />
        <meta property="twitter:url" content="https://www.globalvisainternationals.com/Visa/student-visa/new-zealand" /> {/* Replace with your actual Twitter URL */}
        {/* <meta name="twitter:image" content="URL_TO_YOUR_NEW_ZEALAND_IMAGE" /> */} {/* Add your New Zealand image URL */}

        {/* Geo-related meta tags */}
        <meta name="geo.region" content="NZ" />
        <meta name="geo.placename" content="New Zealand" />
        {/* Assuming your target audience might be in Bengaluru */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <meta name="ICBM" content="latitude, longitude" /> {/* Replace with actual latitude and longitude of your business location if relevant */}

        {/* Structured Data - EducationalOrganization Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Global Visa Internationals",
              "url": "https://www.globalvisainternationals.com",
              "description": "Helping international students obtain New Zealand student visas and navigate the application process for studying in New Zealand.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "addressCountry": "IN"
              },
              "sameAs": [
                "YOUR_FACEBOOK_PAGE_URL",
                "YOUR_INSTAGRAM_PAGE_URL"
                // Add other social media links
              ]
            }
          `}
        </script>
      </Head> 
      <div className={styles.imageContainer}>
        <img src="/images/Australia1.png" alt="New-Zeland Image" className={styles.newzelandImage} />
      </div>
    
               <div className={styles.newzelandSec}>
    
    
                      <div className={styles.newzelandData}>
                          <h1 className={styles.Title}>New Zealand Student Visa: A Comprehensive Guide for International Students</h1>
                          <p>Dreaming of pursuing world-class education amidst the breathtaking landscapes of Aotearoa, the Land of the Long White Cloud? New Zealand has become a coveted destination for international students seeking academic excellence and a unique cultural experience. Navigating the student visa process is your crucial first step. This in-depth guide will illuminate the path to obtaining your New Zealand student visa in 2025, providing you with essential information to kickstart your Kiwi adventure.</p>
                          <h3 className={styles.subTitle}>Why New Zealand Beckons International Students:</h3>
                          <p>New Zealand offers a compelling blend of academic rigor and an enviable lifestyle. Here's why it consistently attracts students from around the globe:</p>
                         
                          <ul>
                          <li><strong>Globally Recognized Education System:</strong> New Zealand's universities and institutes consistently rank high internationally, offering cutting-edge research and innovative teaching methodologies across diverse disciplines. </li>
                          <br />
                          <li><strong>A Spectrum of Academic Opportunities:</strong> Whether your passion lies in the arts, sciences, technology, or business, New Zealand provides a vast array of programs tailored to diverse academic pursuits and career aspirations.</li>
                          <br />
                          <li> <strong>Valuable Work Experience:</strong> International students on eligible visas can gain practical experience by working up to 20 hours per week during term time and full-time during scheduled breaks, helping to offset living costs and build valuable skills.</li>
                          <br />
                          <li><strong>Unparalleled Quality of Life:</strong> Renowned for its safety, welcoming communities, and stunning natural beauty, New Zealand offers a high quality of life and a supportive environment for international students.</li>
                          <br />
                          <li><strong>Potential Pathways to the Future:</strong> Depending on your qualifications and field of study, New Zealand offers post-study work opportunities, allowing you to gain international work experience and potentially explore long-term residency options.</li>
                          </ul>



                          <div className={styles.formSection1}>
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
                            {["newzeland", "USA", "UK", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
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

                        <h3 className={styles.subTitle}> Understanding the New Zealand Student Visa Landscape in 2025:</h3>
                          <p>Navigating the different visa categories is essential. Here's an overview of the primary New Zealand student visa types:</p>
                          <ul>
                            <li><strong>The Fee-Paying Student Visa:</strong> This is the most common route for individuals enrolling in full-time courses lasting longer than three months at an approved New Zealand educational institution (up to four years). It typically grants the right to work part-time.</li>
                          <br />
                          <li><strong>The Pathway Student Visa:</strong> Designed for students undertaking a sequence of up to three consecutive programs with a single approved education provider, with a total study duration not exceeding five years. This visa also usually permits part-time work.</li>
                          <br />
                          <li><strong>The Exchange Student Visa:</strong> For students participating in officially recognized exchange programs for a duration of up to four years</li></ul>

                          <p>In addition to these, there are specific visas for students enrolled in English language courses, vocational training, and postgraduate research programs. Each visa type has its own set of requirements and conditions, so it's crucial to choose the one that aligns with your academic goals.</p>
                          <p>In 2025, the New Zealand government is expected to continue its commitment to attracting international students, with policies aimed at streamlining the visa application process and enhancing support services for newcomers.</p>
                          
                          <h3 className={styles.subTitle}>Key Eligibility Criteria for Your New Zealand Student Visa Application:</h3>
                          <p>Meeting the eligibility requirements is paramount for a successful visa application. Generally, you will need to demonstrate</p>
                          <p>To successfully apply for a New Zealand student visa, you must meet specific eligibility criteria:</p>

                          <ul>
                            <li><strong>Age Requirement:</strong> You must be at least 18 years old at the time of application. If you are under 18, you will need a guardian or parent to support your application.</li>
                            <br />
                            <li><strong>Acceptance at an Approved Institution:</strong> You must enroll in a course at a registered and accredited New Zealand education provider, such as a university, polytechnic, or private training establishment.</li>
                            <br />
                            <li><strong>Sufficient Financial Resources:</strong> Evidence of having adequate funds to cover tuition fees, living expenses (approximately NZD 15,000 per year), and travel costs during your study period is mandatory.</li>
                            <br />
                            <li>A Confirmed Offer of Place: You must possess a formal Letter of Acceptance from a New Zealand education provider that is recognized and approved by the New Zealand Qualifications Authority (NZQA) or the Ministry of Education.</li>
                            <br />
                            <li>Demonstrable Financial Capacity: You need to provide robust evidence of sufficient funds to cover your tuition fees for the duration of your study and living expenses (currently set at [Contact Global Visa Internationals for the latest official amount] per year of study). This can be through personal savings, financial guarantees from sponsors, or scholarship awards.</li>
                            <br />
                            <li>Evidence of Tuition Fee Payment: You will need to provide proof that your tuition fees have been paid in full or that you have secured a scholarship that covers them.</li>
                            <br />
                            <li>Adherence to Health Standards: You must meet New Zealand's health requirements, which may involve undergoing a medical examination by an approved panel physician, especially for stays exceeding 24 months or if you are over 17 years old.</li>
                            <br />
                            <li>Good Character Standing: You are required to demonstrate good character, which may involve providing a police clearance certificate from your country of origin and any other country where you have resided for a significant period.</li>
                            <br />
                            <li>Valid Travel Documentation: Your passport must have a validity of at least three months beyond your intended stay in New Zealand.</li>
                            <br />
                            <li>Genuine Intention to Study: You must satisfy the authorities that your primary intention for being in New Zealand is to undertake genuine study.</li>
                            <br />
                            <li>Sufficient Funds for Return Travel: You may be required to show evidence of funds to purchase a return air ticket to your home country.</li>
                            <br />
                            <li>English Language Proficiency: While not always a universal requirement, a strong command of English is crucial for academic success and daily life. Your chosen institution may have specific English language requirements (e.g., IELTS score of [Contact Global Visa Internationals for typical score ranges]).</li>
                            </ul>

                            <h3 className={styles.subTitle}>Essential Documents for Your New Zealand Student Visa Application:</h3>
                            <p>Meticulous preparation of your documents is key. Here's a general list of what you'll likely need:</p>
                            <ol><li>A fully completed student visa application form (usually submitted online via the Immigration New Zealand website).</li>
                            <br />
                            <li>Your original, valid passport and clear copies of the identification pages.</li>
                            <br />
                            <li>Two recent passport-sized photographs that meet the specified requirements.</li>
                            <br />
                            <li>The official Letter of Acceptance from your chosen New Zealand education provider.</li>
                            <br />
                            <li>Official evidence of your tuition fee payment.</li>
                            <br />
                            <li>Comprehensive proof of sufficient funds for living expenses <strong>(detailed bank statements, sponsor letters with supporting financial documentation, official scholarship award letters).</strong></li>
                            <br />
                            <li>Your medical certificate (e-medical) obtained from an Immigration New Zealand-approved panel physician.</li>
                            <br />
                            <li>A police clearance certificate(s) from your home country and any other country where you have lived for <strong> [Contact Global Visa Internationals for specific duration requirements].</strong> </li>
                            <br />
                            <li>Official academic transcripts and degree/diploma certificates from your previous educational institutions.</li>
                            <br />
                            <li>Details of your employment history (if applicable).</li>
                            <br />
                            <li>A well-written statement of purpose outlining your academic goals and reasons for choosing to study in New Zealand.</li>
                            <br />
                            <li>Evidence of your English language proficiency <strong>(e.g., IELTS test report form)</strong>, if required by your institution.</li>
                            <br />
                            <li>Details of your travel insurance coverage.</li></ol>
                            <h3>Navigating the New Zealand Student Visa Application Process:</h3>
                            <p>Here's a step-by-step overview of the application journey:</p>
                            <ol>
                            <li><strong>Select Your Program and Institution:</strong> Thoroughly research and choose a program and an NZQA-approved institution that aligns with your academic and career objectives.</li>
                            <br />
                            <li><strong>Secure Your Offer of Place:</strong> Apply to your chosen institution. Upon successful admission, you will receive an official Letter of Acceptance.</li>
                            <br />
                            <li><strong>Meticulously Prepare Your Documentation:</strong> Gather all the required documents, ensuring accuracy and completeness. Any non-English documents must be accompanied by certified translations.</li>
                            <br />
                            <li><strong>Arrange Tuition Fee Payment:</strong> Make the necessary tuition fee payment as outlined in your Letter of Acceptance.</li>
                            <br />
                            <li><strong>Complete the Online Visa Application:</strong> Visit the official Immigration New Zealand website and create an account. Fill out the online student visa application form (INZ 1012) with accurate details.</li>
                            <br />
                            <li><strong>Upload Your Supporting Documents:</strong> Upload all the prepared documents in the specified digital format.</li>
                            <br />
                            <li><strong>Pay the Visa Application Fee:</strong> The current visa application fee is <strong>[Contact Global Visa Internationals for the current official fee].</strong></li>
                            <br />
                            <li><strong>Submit Your Application:</strong> Once you have carefully reviewed all information and uploaded all documents, submit your online application.</li>
                            <br />
                            <li><strong>Undergo Medical Assessment and Obtain Police Clearance:</strong> If required based on your intended duration of stay and age, schedule your medical examination with an approved panel physician and obtain the necessary police clearance certificate(s). You may need to submit these separately.</li>
                            <br />
                            <li><strong>Await the Visa Decision: </strong> Processing times can vary depending on various factors. Regularly monitor the status of your application through your online Immigration New Zealand account.</li>
                            <br />
                            <li><strong>Receive Your Visa Outcome:</strong> If your application is successful, you will receive a visa label in your passport or an electronic visa notification. Carefully review the conditions attached to your visa.</li>
                            <br />
                            <li><strong>Plan Your Travel to New Zealand: </strong>Make your travel arrangements, ensuring you have all necessary travel documents for your arrival in New Zealand.</li>
                            
                            </ol>
                            
                            <div className={styles.container}>
                                <h1 className={styles.heading}>Understanding the Costs: Investing in Your New Zealand Education</h1>
                                <p className={styles.description}>
                                  Planning your finances is a crucial step when considering studying in New Zealand. Here's a breakdown of expected costs in INR (approximate as of 2025):
                                </p>

                                <table className={styles.table}>
                                  <thead>
                                    <tr>
                                      <th>Expense Category</th>
                                      <th>Details</th>
                                      <th>Estimated Cost (INR)</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Tuition Fees</td>
                                      <td>Undergraduate, postgraduate & PhD program costs</td>
                                      <td>
                                        UG: ₹11.2–₹16.3 lakhs/year<br />
                                        PG: ₹13.3–₹18.9 lakhs/year<br />
                                        PhD: Often similar to domestic fees
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Living Expenses</td>
                                      <td>Accommodation, food, transport & personal costs</td>
                                      <td>Approx. ₹10.2 lakhs/year</td>
                                    </tr>
                                    <tr>
                                      <td>Visa Application Fee</td>
                                      <td>Fee for student visa application</td>
                                      <td>₹38,000</td>
                                    </tr>
                                    <tr>
                                      <td>Health Insurance</td>
                                      <td>Required for entire stay</td>
                                      <td>₹30,000 – ₹61,000/year</td>
                                    </tr>
                                    <tr>
                                      <td>Accommodation</td>
                                      <td>University halls, homestays, shared rentals</td>
                                      <td>₹10,000 – ₹25,500/week</td>
                                    </tr>
                                    <tr>
                                      <td>Transportation</td>
                                      <td>Public transport, walking, cycling</td>
                                      <td>₹5,100 – ₹7,700/month</td>
                                    </tr>
                                    <tr>
                                      <td>Part-Time Employment</td>
                                      <td>Minimum wage work during study</td>
                                      <td>₹1,200/hour (approx.)</td>
                                    </tr>
                                    <tr>
                                      <td>IVL Levy</td>
                                      <td>One-time fee with visa</td>
                                      <td>₹5,100</td>
                                    </tr>
                                  </tbody>
                                </table>

                                <p className={styles.note}>
                                  <strong>Note:</strong> Costs are approximate and based on an illustrative exchange rate of ₹51 per 1 NZD. Actual rates vary daily. For accurate INR values, check the latest exchange rate. Your expenses may differ based on your lifestyle, city, and course. Always refer to official university and Immigration New Zealand websites for updated fees and requirements.
                                </p>
                              </div>
                              <h2 className={styles.subTitle}>Important Considerations Regarding Costs:</h2>
                    <ul>
                    <li><strong>Fluctuations:</strong> These figures are estimates for 2025 and are subject to change based on institutional policies, government regulations, and economic factors. Always refer to the official websites of universities and Immigration New Zealand for the most accurate and up-to-date information.</li>
                    <br />
                    <li><strong>Regional Differences:</strong> The cost of living can vary significantly between different cities and regions in New Zealand. Auckland and Wellington are typically more expensive than smaller towns.</li>
                    <br />
                    <li><strong>Personal Spending:</strong> Your individual spending habits will significantly impact your actual living expenses. Budgeting and careful financial management are crucial for international students.</li>
                    <br />
                    <li><strong>Additional Costs:</strong> Remember to factor in other potential costs such as textbooks, course materials, internet and phone bills, social activities, and travel within New Zealand.</li>
                    <br />
                    <li><strong>Scholarships and Funding:</strong> Explore available scholarships and grants to help offset the costs of tuition and living expenses. These can be offered by the New Zealand government, educational institutions, or external organizations.</li>
                    <br />
                    <li><strong>Currency Exchange Rates:</strong> Keep in mind that currency exchange rates between your home country and New Zealand can fluctuate, affecting the actual cost of your studies and living expenses in your local currency</li>
                    <br /></ul>
                    <p><strong>To get precise and personalized cost estimates based on your chosen program and preferred location, and for the most current information on tuition fees, living expenses, visa application fees, and available scholarships, it is highly recommended to contact Global Visa Internationals.</strong> They can provide tailored guidance and up-to-date details relevant to your specific situation</p>
                        <p>
                          At Global Visa Internationals, we provide expert assistance to individuals navigating the newzeland immigration process. Whether you aim to study, work, or settle in the newzeland, our team is here to guide you every step of the way. Contact us today to explore your best immigration options!</p>
                              <h2>Frequently Asked Questions (FAQs)</h2>
                              <h3>1. What is the processing time for a New Zealand student visa?</h3>
                              <p>The processing time for a New Zealand student visa can vary based on several factors, including the volume of applications and the completeness of your documentation. Generally, it takes around 4 to 8 weeks. However, it's advisable to apply well in advance of your intended start date.</p>
                              <h3>2. Can I work while studying in New Zealand?</h3>
                              <p>Yes, most student visa holders can work up to 20 hours per week during the academic year and full-time during scheduled breaks. However, specific work rights depend on your visa type and the conditions attached to it.</p>
                              <h3>3. What are the visa requirements for international students?</h3>
                              <p>The visa requirements for international students vary depending on your academic program and the duration of your stay in New Zealand. Generally, you will need a New Zealand student visa, which can be obtained through the New Zealand Immigration Service.</p>
                              <h3>4. How do I apply for a New Zealand student visa?</h3>
                              <p>To apply for a New Zealand student visa, you will need to complete the New Zealand Immigration Application Form and submit all required documents. This process typically involves an interview with a New Zealand Immigration Officer.</p>
                              <h3>5. What are the costs associated with studying in New Zealand?</h3>
                              <p>The costs of studying in New Zealand can vary significantly based on your chosen program and institution. Tuition fees typically range from NZD 22,000 to NZD 32,000 per year, while living expenses can range from NZD 15,000 to NZD 20,000 per year.</p>
                              <h3>6. Can I extend my student visa?</h3>
                              <p>Yes, you can apply for an extension of your student visa if you wish to continue your studies in New Zealand. However, you must meet the eligibility criteria and provide valid reasons for the extension.</p>
                              <h3>7. What happens if my student visa application is declined?</h3>
                              <p>If your student visa application is declined, you will receive a letter explaining the reasons for the decision. You may have the option to appeal the decision or reapply with additional documentation.</p>
                              <h3>8. Do I need health insurance while studying in New Zealand?</h3>
                              <p>Yes, it is mandatory for international students to have health insurance while studying in New Zealand. This ensures that you are covered for any medical expenses during your stay.</p>
                              <h3>9. Can I bring my family with me on a student visa?</h3>
                              <p>Yes, you can bring your partner and dependent children with you on a student visa. However, they will need to apply for their own visas and meet the necessary requirements.</p>
                              <h3>10. What is the minimum IELTS score required for a New Zealand student visa?</h3>
                              <p>The minimum IELTS score required for a New Zealand student visa varies depending on the institution and program. Generally, a score of 6.0 to 7.0 is acceptable for most universities.</p>
                              <h3>11. Can I apply for a student visa if I have a criminal record?</h3>
                              <p>If you have a criminal record, it is advisable to consult with a lawyer or immigration specialist to determine if you can apply for a student visa. Some countries have specific rules regarding criminal records.</p>
                              <h3>12. Can I study part-time while working in New Zealand?</h3>
                              <p>Yes, you can study part-time while working in New Zealand. However, the total number of hours you work per week must not exceed the maximum allowed by your visa. It is essential to consult with your visa sponsor and the New Zealand Immigration Service for specific guidelines.</p>
                              <h3>13. What are the benefits of studying in New Zealand?</h3>
                              <p>Studying in New Zealand offers numerous benefits, including a high-quality education system, a multicultural environment, opportunities for practical work experience, and the chance to explore the country's stunning landscapes and rich culture.</p>
                              <h3>14. What are the visa requirements for studying in New Zealand?</h3>
                              <p>The visa requirements for studying in New Zealand depend on your academic program and the duration of your stay. Generally, you will need a New Zealand student visa, which can be obtained through the New Zealand Immigration Service.</p>
                              <h3>15. Can I study in New Zealand while working?</h3>
                              <p>Yes, you can study in New Zealand while working. However, it is important to ensure that your work hours do not exceed the maximum allowed by your visa.</p>
                              <h3>16. What are the requirements for a New Zealand student visa?</h3>
                              <p>The requirements for a New Zealand student visa include proof of acceptance into an approved educational institution, sufficient funds to cover tuition and living expenses, health insurance, and a valid passport.</p>
                              <h3>17. What are the visa requirements for a New Zealand student visa?</h3>
                              <p>The visa requirements for a New Zealand student visa include proof of acceptance into an approved educational institution, sufficient funds to cover tuition and living expenses, health insurance, and a valid passport.</p>
                              <h3>18. Can I apply for a student visa if I have a criminal record?</h3>
                              <p>If you have a criminal record, it is advisable to consult with a lawyer or immigration specialist to determine if you can apply for a student visa. Some countries have specific rules regarding criminal records.</p>
                              <h3>19. Can I study in New Zealand while working?</h3>
                              <p>Yes, you can study in New Zealand while working. However, it is important to ensure that your work hours do not exceed the maximum allowed by your visa.</p>
                              <h3>20. What are the visa requirements for studying in New Zealand?</h3>
                              <p>The visa requirements for studying in New Zealand depend on your academic program and the duration of your stay. Generally, you will need a New Zealand student visa, which can be obtained through the New Zealand Immigration Service.</p>
                              <h3>21. Can I study in New Zealand while working?</h3>
                              <p>Yes, you can study in New Zealand while working. However, it is important to ensure that your work hours do not exceed the maximum allowed by your visa.</p>
                              <h3>22. What are the visa requirements for studying in New Zealand?</h3>
                              <p>The visa requirements for studying in New Zealand depend on your academic program and the duration of your stay. Generally, you will need a New Zealand student visa, which can be obtained through the New Zealand Immigration Service.</p>

                    </div>




                    
    
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
                            {["newzeland", "USA", "UK", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
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
              </div>
                </>  
        ); }