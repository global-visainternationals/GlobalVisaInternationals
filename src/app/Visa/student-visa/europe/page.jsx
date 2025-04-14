"use client";
import styles from './Europe.module.css';
import React,  { useState } from 'react';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Head from 'next/head';
export default function Europe(){
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
        <title>Study in Europe: Visa Guide, Top Universities & Costs | Global Visa Internationals</title>
        <meta
          name="description"
          content="Your comprehensive guide to studying in Europe. Learn about student visas (Schengen & Non-Schengen), top universities, course costs, and application processes with Global Visa Internationals."
        />
        <meta
          name="keywords"
          content="study in Europe, European student visa, Schengen visa, non-Schengen visa, study abroad Europe, top universities Europe, cost of studying Europe, student visa Germany, student visa France, student visa Netherlands, student visa UK, student visa Ireland, Global Visa Internationals"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.globalvisainternationals.com/Visa/student-visa/europe" /> {/* Replace with your actual URL */}

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Study in Europe: Visa Guide, Top Universities & Costs | Global Visa Internationals" />
        <meta
          property="og:description"
          content="Your comprehensive guide to studying in Europe. Learn about student visas (Schengen & Non-Schengen), top universities, course costs, and application processes with Global Visa Internationals."
        />
        <meta property="og:url" content="https://www.globalvisainternationals.com/Visa/student-visa/europe" /> {/* Replace with your actual Facebook URL */}
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="URL_TO_YOUR_EUROPE_IMAGE" /> */} {/* Add your Europe image URL */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Study in Europe: Visa Guide, Top Universities & Costs | Global Visa Internationals" />
        <meta
          name="twitter:description"
          content="Your comprehensive guide to studying in Europe. Learn about student visas (Schengen & Non-Schengen), top universities, course costs, and application processes with Global Visa Internationals."
        />
        <meta property="twitter:url" content="https://www.globalvisainternationals.com/Visa/student-visa/europe" /> {/* Replace with your actual Twitter URL */}
        {/* <meta name="twitter:image" content="URL_TO_YOUR_EUROPE_IMAGE" /> */} {/* Add your Europe image URL */}

        {/* Geo-related meta tags */}
        <meta name="geo.region" content="EU" />
        <meta name="geo.placename" content="Europe" />
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
              "description": "Helping international students obtain European student visas and navigate the application process for various European countries.",
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
        <img src="/images/Europe1.png" alt="Europe Image" className={styles.EuropeImage} />
      </div>
    
               <div className={styles.EuropeSec}>
    
    
                      <div className={styles.EuropeData}>
                          <h1 className={styles.Title}>Dreaming of Studying in Europe? Your Visa Journey Starts Here at Global Visa Internationals</h1>
                          <p>Europe is not just home to prestigious universities—it's a vibrant hub for cultural exchange and personal development. Studying in Europe immerses you in a diverse environment that enhances your global networking skills and offers life-changing experiences. From the historical charm of cities like Rome and Prague to the innovative energy of Berlin and Amsterdam, each location presents a unique fusion of tradition and modernity.</p>
                          <p>Whether you're delving into engineering in Germany, exploring fashion in Italy, or engaging with literature in France, a European education equips you for an impressive global career. It's clear why thousands of international students choose Europe each year.</p>
                          <p>Keep in mind that there isn't a standardized “European Union student visa.” Your visa type will depend on your destination, and you may need to navigate either the Schengen visa regulations or the national rules if you’re headed to non-Schengen countries like the UK or Ireland.</p>
                          <h3 className={styles.subTitle}>Why choose Europe for your academic pursuits?</h3>
                          <p>Beyond the prestigious universities and cutting-edge research opportunities, Europe offers a unique cultural experience. From bustling metropolitan cities to charming historical towns, each country boasts its own distinct character and heritage. Studying in Europe provides an unparalleled chance for personal growth, cross-cultural understanding, and the development of a global network.</p>
                          <p>It's important to understand that there isn't a single "European Union student visa." Each member country within the Schengen Area and beyond has its own specific regulations and application procedures for international students. Factors such as your nationality, the duration of your studies, and the specific country you plan to study in will significantly influence the visa requirements you need to fulfill.</p>
                          <p>While general categories and common documents often exist, the precise details regarding financial requirements, accepted proof of enrollment, and specific application forms can vary considerably. To gain a clear understanding of the exact requirements applicable to your unique situation and chosen European destination, we encourage you to reach out to our experienced team at Global Visa Internationals.</p>
                          <h2 className={styles.subTitle}>Understanding Visa Differences: Schengen vs. Non-Schengen</h2>
                          <p>There’s no single “European Union student visa.” Depending on your destination, you may fall under the Schengen visa regulations or the national rules of non-Schengen countries like the UK or Ireland.</p>
                          <h3 className={styles.subTitle}> Schengen Student Visas</h3>
                          <p>The Schengen Area includes 29 European countries that have abolished internal border checks. While a short-stay Schengen visa (up to 90 days) might suit students attending short courses or conferences, longer academic programs require a national long-stay visa issued by the specific Schengen country.</p>
                          <h4 className={styles.subTitle}>General Requirements:</h4>
                          <ul>
                            <li>Valid passport</li>
                            
                            <li>Visa application form</li>
                            
                            <li>Passport-sized photos</li>
                            
                            <li>Acceptance letter from a recognized institution</li>
                            
                            <li>Proof of sufficient financial means</li>
                            
                            <li>Travel medical insurance</li>
                            
                            <li>Proof of accommodation</li>
                            
                          </ul>
                          <p className={styles.note}>
                           <strong>⚠️ Important:</strong> While there are shared rules for Schengen entry, each country has unique requirements. For country-specific advice tailored to your study destination, reach out to our expert team at Global Visa Internationals.</p>

                          <h3 className={styles.subTitle}>Non-Schengen Student Visas</h3>
                          <p>Countries like the United Kingdom, Ireland, Croatia, and others are not part of the Schengen Area, and they issue their own national student visas.</p>
                          <strong>Examples:</strong>
                          <ul>
                            <li>United Kingdom: Requires a Student visa with a Confirmation of Acceptance for Studies (CAS).</li><br />
                            <li>Ireland: Needs a visa supported by an acceptance letter and financial proof.</li><br />
                            <li>Croatia, Cyprus, and Romania: Each has its own documentation and application system.</li>
                          </ul>
                          <h3 className={styles.subTitle}>Common Requirements:</h3>
                          <ul>
                            <li>Valid passport</li>
                            <li>National visa application form</li>
                            <li>Passport-sized photos</li>
                            <li>Acceptance letter</li>
                            <li>Proof of financial means</li>
                            <li>Health insurance</li>
                            <li>Police clearance or TB test (depends on the country)</li>
                          </ul>
                          <p className={styles.note}>
                            <strong>📝 Note:</strong>
                            Non-Schengen countries often have distinct timelines, interview processes, and documentation requirements. To ensure accuracy, speak with a Global Visa Internationals advisor.
                          </p>






                    <div className={styles.formSection1}>
                    <h2 className={styles.subTitle}>Immigration Inquiry Form</h2>
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
                        <div className="table-responsive">
                        <div className={styles.container}>
      <h1 className={styles.heading}>
        Cost of Education and Living in Europe for International Students
      </h1>
      <p className={styles.intro}>
        Understanding the financial aspects of studying in Europe is crucial. Below is an overview of estimated tuition fees and living expenses for international students in selected European countries:
      </p>

      <div className={styles.tableResponsive}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Country</th>
              <th>Tuition Fees (EUR/year)</th>
              <th>Tuition Fees (INR/year)</th>
              <th>Living Expenses (EUR/month)</th>
              <th>Living Expenses (INR/month)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Germany</td>
              <td>Free (public universities)</td>
              <td>—</td>
              <td>€850 – €1,200</td>
              <td>₹76,500 – ₹1,08,000</td>
            </tr>
            <tr>
              <td>France</td>
              <td>€170 – €650</td>
              <td>₹15,300 – ₹58,500</td>
              <td>€800 – €1,200</td>
              <td>₹72,000 – ₹1,08,000</td>
            </tr>
            <tr>
              <td>Norway</td>
              <td>Free (public universities)</td>
              <td>—</td>
              <td>€1,200 – €2,000</td>
              <td>₹1,08,000 – ₹1,80,000</td>
            </tr>
            <tr>
              <td>Finland</td>
              <td>€6,000 – €20,000</td>
              <td>₹5,40,000 – ₹18,00,000</td>
              <td>€700 – €1,100</td>
              <td>₹63,000 – ₹99,000</td>
            </tr>
            <tr>
              <td>Sweden</td>
              <td>SEK 80,000 – 190,000</td>
              <td>₹6,00,000 – ₹14,25,000</td>
              <td>SEK 8,000 – 12,000</td>
              <td>₹60,000 – ₹90,000</td>
            </tr>
            <tr>
              <td>Netherlands</td>
              <td>€6,000 – €15,000</td>
              <td>₹5,40,000 – ₹13,50,000</td>
              <td>€800 – €1,200</td>
              <td>₹72,000 – ₹1,08,000</td>
            </tr>
            <tr>
              <td>Italy</td>
              <td>€500 – €4,000</td>
              <td>₹45,000 – ₹3,60,000</td>
              <td>€700 – €1,000</td>
              <td>₹63,000 – ₹90,000</td>
            </tr>
            <tr>
              <td>Spain</td>
              <td>€750 – €2,500</td>
              <td>₹67,500 – ₹2,25,000</td>
              <td>€900 – €1,200</td>
              <td>₹81,000 – ₹1,08,000</td>
            </tr>
            <tr>
              <td>Denmark</td>
              <td>€6,000 – €16,000</td>
              <td>₹5,40,000 – ₹14,40,000</td>
              <td>€1,200 – €1,800</td>
              <td>₹1,08,000 – ₹1,62,000</td>
            </tr>
            <tr>
              <td>Austria</td>
              <td>€726.72/semester</td>
              <td>₹65,404.80/semester</td>
              <td>€950 – €1,500</td>
              <td>₹85,500 – ₹1,35,000</td>
            </tr>
            <tr>
              <td>Belgium</td>
              <td>€906 – €4,175</td>
              <td>₹81,540 – ₹3,75,750</td>
              <td>€850 – €1,200</td>
              <td>₹76,500 – ₹1,08,000</td>
            </tr>
            <tr>
              <td>Ireland</td>
              <td>€9,750+</td>
              <td>₹8,77,500+</td>
              <td>€1,000 – €1,500</td>
              <td>₹90,000 – ₹1,35,000</td>
            </tr>
            <tr>
              <td>Lithuania</td>
              <td>€1,500 – €3,000</td>
              <td>₹1,35,000 – ₹2,70,000</td>
              <td>€400 – €600</td>
              <td>₹36,000 – ₹54,000</td>
            </tr>
            <tr>
              <td>Greece</td>
              <td>€1,500</td>
              <td>₹1,35,000</td>
              <td>€700 – €1,000</td>
              <td>₹63,000 – ₹90,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className={styles.note}>
        <strong>Note:</strong> Tuition fees and living expenses are approximate and can vary based on the institution, city, and personal lifestyle. Major cities typically have higher living costs compared to smaller towns. Exchange rates fluctuate; the above INR estimates are based on an approximate rate of 1 EUR = ₹90. For the most accurate and up-to-date information, refer to the official websites of your chosen educational institutions and local resources.
      </p>
    </div>
                        </div>

                        <h3 className={styles.subTitle}> Essential Steps in the European Student Visa Application Process</h3>
                        <p>Regardless of whether you are applying for a visa to a Schengen or a non-Schengen country, some general steps are commonly involved in the European student visa application process:</p>
                        <ol>
                        <li><strong>Acceptance from an Educational Institution:</strong> The first crucial step is to secure admission to a recognized university, college, or other educational institution in your chosen European country. You will receive an official acceptance letter, which is a primary document for your visa application.</li>
                        <li><strong>Gathering Required Documents:</strong> You will need to collect a set of documents to support your visa application. The specific documents will vary based on the country and your individual circumstances.</li><br />
                        <li><strong>Completing the Visa Application Form:</strong> You will need to fill out the official visa application form of the specific country you are applying to. This form is usually available on the embassy or consulate's website.</li><br />
                        <li><strong>Scheduling an Appointment:</strong> In most cases, you will need to schedule an appointment at the embassy or consulate of the European country in your home country to submit your application and potentially attend an interview.</li><br />
                        <li><strong>Submitting Your Application: </strong>Attend your scheduled appointment and submit all the required documents. Ensure you have original documents and their copies as requested.</li><br />
                        <li><strong>Paying the Visa Fee:</strong> You will be required to pay a non-refundable visa application fee. The amount varies depending on the country.</li><br />
                        <li><strong>Attending an Interview (If Required): </strong>Some countries may require you to attend an interview with a consular officer to discuss your study plans and intentions.</li><br />
                        <li><strong>Waiting for the Visa Decision:</strong> The processing time for student visas can vary. It's essential to apply well in advance of your intended travel date.</li><br />
                        <li><strong>Receiving Your Visa: </strong>If your application is successful, your visa will be affixed to your passport.</li>
                        </ol>
                        <p className={styles.note}><strong>🕒 Timely Tip:</strong> Some embassies have long wait times or require additional documents. Contact us at Global Visa Internationals to avoid delays and submit a complete, compelling application.</p>
                        <h3 className={styles.subTitle}>Why You Should Start Early</h3>
                        <p>Student visa applications can take weeks or even months. Applying early:</p>
                        <ul>
                        <li>Helps you handle unexpected delays</li>
                        <li>Gives time for document corrections</li>
                        <li>Aligns better with academic intake deadlines</li>
                        </ul>
                        <p>Embarking on your academic journey in Europe is an exciting prospect. By understanding the general framework of the student visa process for both Schengen and non-Schengen countries and seeking expert assistance when needed, you can navigate the requirements with confidence. <strong>Let Global Visa Internationals be your trusted partner in making your European study abroad aspirations a reality. Contact us today for a personalized consultation!</strong></p>
                        <p className={styles.note}>Don’t risk missing out on your dream course due to visa delays. Get in touch with Global Visa Internationals today for a stress-free start to your academic journey.</p>
                        <h2 className={styles.subTitle}>Why Contact Global Visa Internationals?</h2>
                        <p>We specialize in helping international students like you successfully obtain European student visas. With expert insight into both Schengen and non-Schengen requirements, we ensure your application is accurate, timely, and strong.</p>
                        <ul className={styles.list}>
                          <li>✅ Personalized guidance</li>
                          <li>✅ Up-to-date regulations</li>
                          <li>✅ Country-specific documentation support</li>
                          <li>✅ End-to-end visa assistance</li>
                        </ul>
                        <p className={styles.note}>📞 Contact us today for a free consultation and unlock your path to European education with confidence.</p>


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