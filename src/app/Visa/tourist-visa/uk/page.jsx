 "use client";
import styles from './Uk.module.css';
import React,  { useState } from 'react';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function UK() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Global Visa Internationals",
    "url": "https://www.globalvisainternationals.com",
    "description": "Helping international students apply for UK student visas and choose the best courses and universities in the UK.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/GlobalVisaInternationals",
      "https://www.instagram.com/GlobalVisaInternationals"
      // Add other social media links as needed
    ]
  };
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
            <head>
        <title> Unlock Your Canadian Education: Your Guide to a Canada Student Visa| Global visa internationals</title>
        <meta name="description" content="Your comprehensive guide to UK student visas, top-ranked universities, popular courses, costs, and the application process. Unlock your UK education dream with Global Visa Internationals." />
        <meta name="keywords" content="UK student visa, study in UK, UK universities, top UK universities, courses in UK, MBA UK, cost of studying UK, UK student visa requirements, UK visa application, international students UK, student life UK, UK education system, Tier 4 visa UK, UK scholarships, post study work UK" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.globalvisainternationals.com/Visa/student-visa/uk" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="UK Student Visa: Top Universities, Courses & Application Guide | Global Visa Internationals" />
        <meta property="og:description" content="Your comprehensive guide to UK student visas, top-ranked universities, popular courses, costs, and the application process. Unlock your UK education dream with Global Visa Internationals." />
        <meta property="og:url" content="https://www.globalvisainternationals.com/Visa/student-visa/uk" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="URL_TO_YOUR_UK_IMAGE" /> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UK Student Visa: Top Universities, Courses & Application Guide | Global Visa Internationals" />
        <meta name="twitter:description" content="Your comprehensive guide to UK student visas, top-ranked universities, popular courses, costs, and the application process. Unlock your UK education dream with Global Visa Internationals." />
        <meta name="twitter:url" content="https://www.globalvisainternationals.com/Visa/student-visa/uk" />
        {/* <meta name="twitter:image" content="URL_TO_YOUR_UK_IMAGE" /> */}

        {/* Geo-related meta tags */}
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="United Kingdom" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <meta name="ICBM" content="12.9716,77.5946" />

        {/* Structured Data - EducationalOrganization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
  <div className={styles.imageContainer}>
    <img src="/images/uk-travel.jpeg" alt="UK Image" className={styles.ukImage} />
  </div>

           <div className={styles.UKSec}>


                  <div className={styles.UKData}>
                      <h1 className={styles.Title}>Unlock Your British Adventure: Your Comprehensive Guide to the UK Tourist Visa | Global visa internationals</h1>
                      <p>Dreaming of experiencing the iconic landmarks, rich history, and vibrant culture of the United Kingdom? From the majestic Buckingham Palace and the historic Tower of London to the scenic Scottish Highlands and the charming villages of the Cotswolds, the UK offers a diverse tapestry of experiences for every traveler.
                        </p>
                        <p>Embarking on your UK journey begins with understanding the essential requirements for obtaining a UK tourist visa. While the prospect might seem intricate, a clear understanding of the process is the first step towards making your travel aspirations a reality.</p>
                        <h3 className={styles.subTitle}>Navigating the UK Tourist Visa Landscape: Key Information for Your Application</h3>
                        <p>The UK tourist visa, designed for individuals seeking short-term entry for leisure, tourism, visiting family or friends (without engaging in paid work), specific short educational courses, or certain permissible business activities, has specific criteria that applicants must meet.</p>
                        <p><strong>Understanding the Core Requirements:</strong></p>
                        <ul>
                          <li>Genuine Intention to Visit: Applicants must demonstrate a genuine intention to visit the UK for tourism or other permitted short-term purposes and that they will leave the UK at the end of their authorized stay.</li>
                          <li>Financial Stability: A crucial aspect is proving sufficient funds to cover your travel, accommodation, and living expenses in the UK without relying on public funds. Evidence of your financial resources is essential.</li>
                          <li>Purpose of Visit Documentation: Clearly articulating the purpose of your trip with supporting documentation, such as travel itineraries, hotel bookings, and invitation letters (if applicable), strengthens your application.</li>
                          <li>Strong Ties to Home Country: Demonstrating strong ties to your home country through employment, property ownership, family responsibilities, and other commitments helps assure immigration authorities of your intent to return.</li>
                          <li>Adherence to Immigration Rules: Meeting all other specific eligibility criteria as outlined by the official UK immigration guidelines is paramount.</li>
                        </ul>
                        <h3 className={styles.subTitle}>The UK Tourist Visa Application Process: A General Overview:</h3>
                        <p>While the exact steps can vary slightly based on your location, the general process typically involves:</p>
                        <ol>
                          <li>Online Application: Completing the official UK visa application form accurately and comprehensively through the designated online portal.</li>
                          <br />
                          <li>Visa Fee Payment: Paying the required visa application fee.</li>
                          <br />
                          <li>Biometric Enrollment: Attending a biometric appointment at a designated visa application center to provide your fingerprints and photograph.</li>
                          <br />
                          <li>Document Submission: Submitting the necessary supporting documents as outlined by the UK immigration authorities.</li>

                          
                        </ol>
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
                    <p className={styles.note}><strong>Important Disclaimer:</strong> Please be aware that the information presented here is intended for general informational purposes only and does not constitute legal or immigration advice. UK visa regulations are subject to frequent updates and can vary significantly based on your nationality, individual circumstances, and the specific purpose of your visit. For the most accurate and up-to-date guidance tailored to your situation, it is crucial to consult with experienced immigration professionals.</p>
                    <h3 className={styles.subTitle}>Simplifying Your UK Visa Journey: Partner with the Experts</h3>
                <p>The intricacies of the UK tourist visa application process can be challenging to navigate alone. Ensuring accuracy, completeness, and adherence to the latest regulations is vital for a successful outcome.</p>
                <h3 className={styles.subTitle}>Ready to transform your UK travel aspirations into reality?</h3>
                <p>At Global Visa Internationals, we understand the importance of partnering with experienced professionals who can guide you through the visa application process. Our team of immigration experts is dedicated to helping you achieve your travel dreams. Contact us today to learn more about our services and how we can assist you in securing a UK visa.</p>
                <p>Ready to embark on your UK visa journey?</p>
                <p>Ready to transform your UK travel aspirations into reality?</p>
                <p>At Global Visa Internationals, we understand the importance of partnering with experienced professionals who can guide you through the visa application process. Our team of immigration experts is dedicated to helping you achieve your travel dreams. Contact us today to learn more about our services and how we can assist you in securing a UK visa.</p>
                <h3 className={styles.subTitle}>Unlock a Seamless UK Visa Experience with Global Visa Internationals</h3>
                <p>At Global Visa Internationals, we understand that the UK tourist visa application process can be daunting. Our team of dedicated and experienced visa consultants is committed to providing you with expert guidance and personalized support every step of the way.</p>
                <h3 className={styles.subTitle}>Why Choose Global Visa Internationals as Your Trusted Partner?</h3>
                <ul>
                  <li><strong>Personalized Assessment:</strong> We conduct a thorough evaluation of your individual circumstances to provide tailored advice and ensure you meet the specific requirements.</li>
                  <br />
                  <li><strong>Up-to-Date Knowledge:</strong> Our consultants stay abreast of the latest UK immigration policies and procedures, ensuring you receive the most current and accurate information.</li>
                  <br />
                  <li><strong>Comprehensive Documentation Support:</strong> We assist you in identifying, preparing, and organizing all the necessary supporting documents to strengthen your application.</li>
                  <br />
                  <li><strong>Expert Application Guidance:</strong> We guide you through the online application process, ensuring accuracy and completeness to minimize potential errors.</li>
                  <br />
                  <li><strong>Reduced Stress and Increased Confidence:</strong> By entrusting your visa application to us, you can alleviate stress and increase your chances of a successful outcome, allowing you to focus on planning your incredible UK adventure.</li>
                </ul>
                <h4 >Don't let the complexities of the visa application process stand between you and your dream UK getaway.</h4>
                <h4 >Contact Global Visa Internationals today for a confidential consultation and let our expertise pave the way for your smooth and successful UK visa application!</h4>
                <h2 className={styles.subTitle}>UK Tourist Visa Details:</h2>
                <p>The standard UK Tourist Visa (officially called a "Standard Visitor visa") allows you to visit the UK for tourism, leisure, visiting friends or family (without working), short-term study (if it meets certain criteria), or certain business activities.</p>
                <h3 className={styles.subTitle}>Key Requirements (General - Specifics depend on your situation):</h3>
                <ul>
                  <li>Genuine Intention to Visit: You must genuinely intend to visit the UK for a permitted activity and leave at the end of your visit.</li>
                  <br />
                  <li>Financial Stability: You need to show that you have enough money to support yourself and any dependents during your trip without relying on public funds.</li>
                  <br />
                  <li>Purpose of Visit: You need to provide evidence of the purpose of your visit (e.g., travel itinerary, hotel bookings, invitation letters).</li>
                  <br />
                  <li>Ties to Home Country: Demonstrating strong ties to your home country (India) through employment, property, family, etc., is important to show you will return.</li>
                  <br />
                  <li>Valid Passport: Your passport must be valid for the duration of your stay in the UK.</li>
                  <br />
                  <li>Online Application: You must complete the visa application online.</li>
                  <br />
                  <li>Biometrics: You will need to attend a biometric appointment to provide your fingerprints and photograph.</li>
                  
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
      <h1  className={styles.subTitle}>UK Tourist Visa Fees & Travel Cost Guide (2025)</h1>

      <p className={styles.description}>
        Below is the latest information on UK visa fees and estimated travel expenses from India. 
        For official and up-to-date details, visit the 
        <a 
          href="https://www.gov.uk/standard-visitor" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.link}
        >
          UK Government Visa Page
        </a>.
      </p>

      <h2 className={styles.subTitle}>UK Tourist Visa Fees (From April 9, 2025)</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Visa Type</th>
            <th>Fee (GBP)</th>
            <th>Approx. Fee (INR)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Short-term (up to 6 months)</td>
            <td>£127</td>
            <td>₹13,000 - ₹13,500</td>
          </tr>
          <tr>
            <td>Long-term (up to 2 years)</td>
            <td>£475</td>
            <td>₹48,500 - ₹50,500</td>
          </tr>
          <tr>
            <td>Long-term (up to 5 years)</td>
            <td>£848</td>
            <td>₹86,500 - ₹90,000</td>
          </tr>
          <tr>
            <td>Long-term (up to 10 years)</td>
            <td>£1,059</td>
            <td>₹108,000 - ₹113,000</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.subTitle}>Approximate Round-trip Flight Costs (India to UK)</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Class</th>
            <th>Estimated Cost (INR)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Economy</td>
            <td>₹50,000 - ₹90,000+</td>
          </tr>
          <tr>
            <td>Premium Economy / Business</td>
            <td>₹1,20,000 - ₹3,00,000+</td>
          </tr>
        </tbody>
      </table>

              <h2 className={styles.subTitle}>Field Expenses Per Day (Mid-Range)</h2>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>GBP</th>
                    <th>Approx. INR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Accommodation</td>
                    <td>£80 - £150</td>
                    <td>₹8,100 - ₹15,300</td>
                  </tr>
                  <tr>
                    <td>Food & Drink</td>
                    <td>£45 - £65</td>
                    <td>₹4,600 - ₹6,600</td>
                  </tr>
                  <tr>
                    <td>Transportation</td>
                    <td>£10 - £15</td>
                    <td>₹1,000 - ₹1,500</td>
                  </tr>
                  <tr>
                    <td>Attractions</td>
                    <td>£15 - £30</td>
                    <td>₹1,500 - ₹3,000</td>
                  </tr>
                  <tr>
                    <td>Miscellaneous</td>
                    <td>£10 - £20</td>
                    <td>₹1,000 - ₹2,000</td>
                  </tr>
                </tbody>
              </table>

              <p className={styles.note}>
                💡 For personalized UK travel planning and visa guidance, contact Global Visa Internationals.
              </p>
            <h2 className={styles.subTitle}> Frequently asked Questions FAQ</h2>
            <ol>
            <h4><li>What is a UK Tourist Visa?</li></h4>
              <p>The UK Tourist Visa (officially called a Standard Visitor visa) allows individuals to visit the UK for tourism, leisure, visiting friends or family (without working), short-term study (if it meets specific criteria), or certain business activities for up to 6 months. Longer-term visas are available under specific circumstances.</p>
              
              <h4><li>How long can I stay in the UK with a Tourist Visa?</li></h4>
              <p>Typically, a standard UK Tourist Visa grants a stay of up to 6 months. Longer-term visas (2, 5, or 10 years) are available, but the duration of each individual visit is usually limited to 6 months.</p>
              
              <h4><li>How much does the UK Tourist Visa cost?</li></h4>
              <p> The visa fee varies depending on the duration of the visa you are applying for. 1  As of April 2025, the fee for a short-term (up to 6 months) visa is £127. Longer-term visas have higher fees. (See our detailed fee breakdown above or contact us for the latest rates). </p>
              
              <h4><li> When should I apply for my UK Tourist Visa?</li></h4>
              <p>You can apply up to 3 months before your intended travel date to the UK. It's advisable to apply well in advance to allow sufficient processing time. </p>
              
              <h4><li> What documents do I need to apply for a UK Tourist Visa?</li></h4>
              <p>The required documents can vary based on your individual circumstances, but generally include a valid passport, proof of funds, travel itinerary, accommodation details, evidence of ties to your home country, and supporting letters (if applicable). (Contact Global Visa Internationals for a personalized document checklist). </p>
              
             <h4><li>Do I need to have travel insurance for my UK trip?</li></h4>
             <p>While not mandatory for a UK Tourist Visa, it is highly recommended to have comprehensive travel insurance to cover medical emergencies, cancellations, and other unforeseen events.</p>
              
              <h4><li> Can I work in the UK with a Tourist Visa?</li></h4>
              <p>No, you are not permitted to undertake any paid work or employment while in the UK on a Tourist Visa.</p>
              
              <h4><li>Can I study in the UK with a Tourist Visa?</li></h4>
              <p>You can undertake certain short-term courses of study that meet specific criteria under the Tourist Visa. For longer or more formal study, you will likely need a student visa.</p>
              
              <h4><li>What happens after I submit my online application?</li></h4>
              <p>After completing the online application and paying the fee, you will typically need to schedule and attend a biometric appointment at a visa application center to provide your fingerprints and photograph. 1  You will also need to submit your supporting documents as instructed.</p>
              
              <h4><li>How long does it take to process a UK Tourist Visa application?</li></h4>
              <p>Processing times can vary depending on the volume of applications and other factors. 1  It's generally advisable to allow several weeks for processing. (Contact Global Visa Internationals for current estimated processing times).</p>
              
              <h4><li> My visa was refused. Can I appeal?</li></h4>
              <p>The ability to appeal a visa refusal depends on the specific reasons for the refusal. In some cases, you may be able to apply again with corrected information. (Contact Global Visa Internationals for expert advice if your visa application has been refused).</p>
              
              <h4><li>I am visiting family in the UK. Do I still need a Tourist Visa?</li></h4>
              <p>Yes, if you are an Indian citizen visiting family for tourism or leisure purposes, you will typically need a UK Tourist Visa. You will need to provide details and potentially a letter of invitation from your family members in the UK.</p>
              
              <h4><li>What should I do if my passport expires soon?</li></h4>
              <p>Your passport should be valid for the duration of your intended stay in the UK. It's generally recommended to have at least 6 months of validity remaining on your passport beyond your planned departure date from the UK.</p>
              
            </ol>
            
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