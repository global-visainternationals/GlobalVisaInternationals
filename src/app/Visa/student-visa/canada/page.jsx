"use client";
import styles from './Canada.module.css';
import React,  { useState } from 'react';
import Image from 'next/image';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Canada(){
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
 <title>Study in Canada: Student Visa, Top Universities & Scholarships | Global Visa Internationals</title>

<meta name="description" content="Achieve your dream of studying in Canada with Global Visa Internationals. Explore student visa guidance, top Canadian universities, popular courses, scholarships, and post-study work opportunities." />
<meta name="keywords" content="study in Canada, Canadian student visa, top universities in Canada, scholarships in Canada, Canada study permit, international students Canada, Canada immigration, post-study work Canada, Global Visa Internationals" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.globalvisainternationals.com/Visa/student-visa/canada" />

<meta property="og:title" content="Study in Canada: Student Visa, Top Universities & Scholarships | Global Visa Internationals" />
<meta property="og:description" content="Achieve your dream of studying in Canada with Global Visa Internationals. Explore student visa guidance, top Canadian universities, popular courses, scholarships, and post-study work opportunities." />
<meta property="og:url" content="https://www.globalvisainternationals.com/Visa/student-visa/canada" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://www.globalvisainternationals.com/images/canada-cover.jpg" />


<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Study in Canada: Student Visa, Top Universities & Scholarships | Global Visa Internationals" />
<meta name="twitter:description" content="Achieve your dream of studying in Canada with Global Visa Internationals. Explore student visa guidance, top Canadian universities, popular courses, scholarships, and post-study work opportunities." />
<meta name="twitter:url" content="https://www.globalvisainternationals.com/Visa/student-visa/canada" />
<meta name="twitter:image" content="https://www.globalvisainternationals.com/images/canada-cover.jpg" />


<meta name="geo.region" content="IN-KA" />
<meta name="geo.placename" content="Bengaluru" />
<meta name="geo.position" content="12.9716;77.5946" />
<meta name="ICBM" content="12.9716,77.5946" />
<meta name="geo.region" content="CA" />
<meta name="geo.placename" content="Canada" />


  {/* Structured Data - Educational Organization Schema */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Global Visa Internationals",
      "url": "https://www.globalvisainternationals.com",
      "description": "Helping international students apply for Canadian student visas and choose the best courses and universities in Canada.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.facebook.com/globalvisainternationals",
        "https://www.instagram.com/globalvisainternationals"
      ]
    }
    `}
  </script>
</head>


               
        <div className={styles.imageContainer}>
    <img
      src="/images/Canada1.png"
      alt="Study in Canada with Global Visa Internationals"
      className={styles.CanadaImage}
      loading="lazy"
    />
  </div>
    
               <div className={styles.CanadaSec}>
    
    
                      <div className={styles.CanadaData}>
                          <h1 className={styles.Title}>Unlock Your Canadian Education Dream with Global Visa Internationals</h1>
                          <p>Are you dreaming of experiencing world-class education in a vibrant and multicultural environment? Canada has emerged as a top destination for international students, offering unparalleled academic opportunities and a high quality of life. At Global Visa Internationals, we understand that navigating the Canadian student visa application process can feel overwhelming. That's why we're here to guide you every step of the way, turning your aspirations of studying in Canada into a reality.</p>
                          <h2 className={styles.subTitle}>Embark on a Journey to Academic Excellence in Canada</h2>
                          <p>Canada's renowned educational institutions offer a wide range of programs across diverse fields, from cutting-edge technology and innovative research to humanities and arts. Imagine yourself studying in state-of-the-art facilities, learning from leading academics, and collaborating with students from around the globe. A Canadian education is not just a degree; it's an investment in your future, opening doors to global career opportunities and personal growth.</p>
                          <h3 className={styles.subTitle}>Navigating the Path to Your Canadian Student Visa</h3>
                          <p>The process of obtaining a Canadian student visa involves several key stages. From understanding the eligibility criteria and gathering the necessary documentation to submitting a complete and accurate application, each step requires careful attention to detail. While the specifics can vary based on your country of origin and chosen program, some common elements include:

                          </p>
                          
                          <ul>
                            <li>Acceptance letter from a Designated Learning Institution (DLI)</li>
                            <li>Proof of sufficient funds to cover tuition fees and living expenses</li>
                            <li>Medical examination and police clearance certificate</li>
                            <li>Language proficiency test results (e.g., IELTS, TOEFL)</li>
                            <li>Statement of purpose outlining your study plans and career goals</li>
                            <li>Biometrics appointment and interview (if required)</li>
                            <li>Visa application fee payment</li>
                          </ul>


                          
                          <h3 className={styles.subTitle}>Why Choose Canada for Your Education?</h3>
                          <p>Canada is not just a country; it's a melting pot of cultures, languages, and experiences. With its stunning landscapes, friendly communities, and high standard of living, Canada offers an enriching environment for international students. You'll have the chance to explore breathtaking natural wonders, engage in vibrant city life, and build lifelong friendships with people from diverse backgrounds.</p>
                          <h3 className={styles.subTitle}>Why Choose Global Visa Internationals for Your Canada Student Visa?</h3>
                          <p>At Global Visa Internationals, we are more than just visa consultants; we are your partners in achieving your Canadian education dream. We offer:</p>
                          <ul>
                            <li><strong>Expert Guidance:</strong> Our experienced consultants possess in-depth knowledge of Canadian immigration policies and procedures, ensuring you receive accurate and up-to-date information.</li>
                            <br />
                            <li><strong>Personalized Support:</strong> We understand that every student's situation is unique. We provide tailored guidance and support to address your specific needs and concerns.</li>
                            <br />
                            <li><strong>Streamlined Process:</strong> We help you navigate the complexities of the application process, ensuring all documentation is correctly prepared and submitted on time</li>
                            <br />
                            <li><strong>Reduced Stress:</strong> Let us handle the intricate details, allowing you to focus on preparing for your academic journey.</li>
                            <br />
                            <li><strong>Increased Chances of Success:</strong> Our expertise and meticulous approach significantly enhance your chances of a successful visa application.</li>
                          </ul>
                          <h3 className={styles.subTitle}>Ready to Take the Next Step?</h3>
                          <p>Don't let the complexities of the visa process deter you from pursuing your academic ambitions in Canada. Contact Global Visa Internationals today for a comprehensive consultation. Our friendly and knowledgeable team is eager to discuss your study plans, assess your eligibility, and provide you with a clear roadmap to obtaining your Canadian student visa</p>
                          <b>Unlock your potential. Experience Canada. Partner with Global Visa Internationals.</b>
                          



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
                        <h3 className={styles.subTitle}></h3>
                        <strong>Dreaming of a Canadian Education? Here's your guide to making that dream a reality.</strong>
                        <section id="top-courses" className={styles.Section}>
                        <h3>Top Courses to Study in Canada</h3>
                        <p>Canada offers a diverse range of programs. Some of the most popular choices among international students include:</p>
                        <ul>
                          <li><strong>Engineering:</strong> Civil, Mechanical, Electrical, Computer (Keywords: engineering programs Canada, study engineering in Canada)</li>
                          <br />
                          <li><strong>Computer Science & IT:</strong> Software Development, Data Science, Cybersecurity (Keywords: computer science Canada, IT programs Canada)</li>
                          <br />
                          <li><strong>Business & Management:</strong> Finance, Marketing, International Business (Keywords: business schools Canada, MBA Canada)</li>
                          <br />
                          <li><strong>Healthcare:</strong> Nursing, Medicine, Pharmacy (Keywords: healthcare programs Canada)</li>
                          <br />
                          <li><strong>Humanities & Social Sciences:</strong> Psychology, Sociology, History (Keywords: humanities programs Canada)</li>
                        </ul>
                        </section>
                        <section id="Best Scholarships">
                        <h3 className={styles.subTitle}>Best Scholarships in Canada</h3>
                        <p>Funding your education can be a challenge. Explore these scholarship opportunities:</p>
                        <ul>
                          <li><strong>Vanier Canada Graduate Scholarships:</strong> For doctoral studies.</li><br />
                          <li><strong>Banting Postdoctoral Fellowships:</strong> For postdoctoral research.</li><br />
                          <li><strong>Ontario Graduate Scholarship (OGS): </strong>For master's and doctoral students in Ontario.</li><br />
                          <li><strong>ester B. Pearson International Scholarship:</strong> For undergraduate studies at the University of Toronto.</li><br />
                          <li><strong>UBC International Leader of Tomorrow Award:</strong> For undergraduate studies at the University of British Columbia.</li>
                          
                        </ul>
                        </section>
                        <h3 className={styles.subTitle}>Types of Student Visas</h3>
                        <ul>
                          <li><strong>Study Permit: </strong>The primary visa for international students.</li><br />
                          <li><strong>Work Permit (Optional):</strong> Allows part-time work during studies and post-graduation work experience.</li>
                        </ul>
                        <h3 className={styles.subTitle}>Education Model</h3>
                        <ul>
                          <li><strong>Focus on Practical Skills:</strong> Canadian education emphasizes hands-on learning, research, and industry collaborations.</li><br />
                          <li><strong>High-Quality Standards:</strong> Canadian universities and colleges are globally recognized for their academic excellenc</li><br />
                          <li><strong>Multicultural Environment:</strong> Experience a diverse and inclusive learning environment.</li>
                        </ul>
                        <h3 className={styles.subTitle}>Top Universities in Canada</h3>
                        <p>Canada is home to some of the world's leading universities:</p>
                        <ol>
                          <li><strong>University of Toronto:</strong> Known for its research and diverse programs.</li><br />
                          <li><strong>McGill University:</strong> Renowned for its medical and engineering programs.</li><br />
                          <li><strong>University of British Columbia (UBC):</strong> Offers a wide range of undergraduate and graduate programs.</li><br />
                          <li><strong>University of Alberta:</strong> Known for its engineering and business programs.</li><br />
                          <li><strong>McMaster University:</strong> Recognized for its health sciences and engineering programs.</li>
                          <br />
                          <li><strong>University of Montreal:</strong> Offers programs in French and English.</li><br />
                          <li><strong>University of Calgary:</strong> Known for its research and engineering programs.</li><br />
                          <li><strong>Western University:</strong> Offers a strong business program.</li><br />
                          <li><strong>Queen's University:</strong> Known for its business and law programs.</li><br />
                          <li><strong>Dalhousie University:</strong> Offers a range of programs in various fields.</li><br />
                          <li><strong>University of Ottawa:</strong> Known for its bilingual programs.</li><br />
                          <li><strong>Simon Fraser University:</strong> Offers a range of programs in various fields.</li><br />
                          <li><strong>York University:</strong> Known for its business and law programs.</li><br />
                          <li><strong>University of Victoria:</strong> Offers a range of programs in various fields.</li><br />
                          <li><strong>Carleton University:</strong> Known for its journalism and public affairs programs.</li><br />
                          <li><strong>University of Saskatchewan:</strong> Offers a range of programs in various fields.</li><br />
                          <li><strong>University of Manitoba:</strong> Known for its business and engineering programs.</li><br />
                          <li><strong>University of Guelph:</strong> Offers a range of programs in various fields.</li><br />
                          <li><strong>University of New Brunswick:</strong> Known for its engineering and business programs.</li><br />
                          <li><strong>University of Regina:</strong> Offers a range of programs in various fields.</li><br />
                          <li><strong>University of Windsor:</strong> Known for its law and business programs.</li><br />
                          <li><strong>University of Lethbridge:</strong> Offers a range of programs in various fields.</li><br />
                          <li><strong>Lakehead University:</strong> Known for its engineering and business programs.</li><br />
                          <li><strong>University of Northern British Columbia:</strong> Offers a range of programs in various fields.</li><br />
                          <li><strong>Trent University:</strong> Known for its environmental studies and humanities programs.</li><br />
                          <li><strong>Wilfrid Laurier University:</strong> Offers a range of programs in various fields.</li><br />
                          <li><strong>University of Ontario Institute of Technology:</strong> Known for its engineering and technology programs.</li><br />
                          <li><strong>Thompson Rivers University:</strong> Offers a range of programs in various fields.</li><br />

                        </ol>
                        <h3 className={styles.subTitle}>Career Opportunities in Canada</h3>
                        <p>Canada's strong economy and demand for skilled workers create numerous career opportunities for international graduates. Some in-demand fields include:</p>
                        <ul>
                          <li><strong>Information Technology:</strong> Software development, data analysis, cybersecurity.</li><br /> 
                          <li><strong>Technology:</strong> Software development, AI, cybersecurity.</li>
<br />
                          <li><strong>Healthcare:</strong> Nursing, pharmacy, medical research.</li><br />
                          <li><strong>Engineering:</strong> Civil, mechanical, electrical.</li><br />
                          <li><strong>Finance:</strong> Accounting, investment banking, financial analysis.</li><br />
                          <li><strong>Education:</strong> Teaching, research, administration.</li><br />
                          <li><strong>Hospitality and Tourism:</strong> Hotel management, event planning, travel services.</li><br />
                          <li><strong>Marketing and Sales:</strong> Digital marketing, sales management, market research.</li><br />
                          <li><strong>Construction:</strong> Project management, architecture, skilled trades.</li><br />
                          <li><strong>Environmental Science:</strong> Conservation, sustainability, research.</li><br />
                          <li><strong>Business and Management:</strong> Human resources, operations management, entrepreneurship.</li><br />
                          <li><strong>Legal Services:</strong> Law, paralegal, legal research.</li><br />
                          <li><strong>Arts and Culture:</strong> Graphic design, film production, music.</li><br />
                          <li><strong>Transportation and Logistics:</strong> Supply chain management, logistics, transportation planning.</li><br />
                          <li><strong>Telecommunications:</strong> Network engineering, telecommunications management.</li><br />
                          <li><strong>Pharmaceuticals:</strong> Research and development, quality control.</li><br />
                          <li><strong>Retail:</strong> Store management, merchandising, customer service.</li><br />
                          <li><strong>Real Estate:</strong> Property management, real estate sales.</li><br />
                          <li><strong>Insurance:</strong> Underwriting, claims management, risk assessment.</li><br />
                          <li><strong>Media and Communications:</strong> Journalism, public relations, content creation.</li><br />
                          <li><strong>Non-Profit and Community Services:</strong> Social work, community development, advocacy.</li><br />
                          <li><strong>Research and Development:</strong> Scientific research, product development.</li><br />
                          <li><strong>Public Administration:</strong> Government services, policy analysis, public affairs.</li><br />
                          <li><strong>Sports and Recreation:</strong> Sports management, coaching, fitness training.</li><br />
                          <li><strong>Fashion and Design:</strong> Fashion design, interior design, product design.</li><br />

                          <li><strong>Veterinary Services:</strong> Veterinary medicine, animal care.</li><br />
                          <li><strong>Construction and Trades:</strong> Carpentry, plumbing, electrical work.</li><br />
                          <li><strong>Security Services:</strong> Security management, loss prevention.</li><br />
                          <li><strong>Human Resources:</strong> Recruitment, employee relations, training and development.</li><br />
                          <li><strong>Public Relations:</strong> Media relations, crisis management, event planning.</li><br />
                          <li><strong>Advertising:</strong> Creative direction, copywriting, media planning.</li><br />
                          <li><strong>Graphic Design:</strong> Visual communication, branding, web design.</li><br />
                          </ul>
                          <h3 className={styles.subTitle}>Best States for International Students</h3>
                        <p>Some of the best provinces for international students in Canada include:</p>
                        <ul>
                          <li><strong>Ontario:</strong> Home to Toronto, the largest city in Canada, and many top universities.</li><br />
                          <li><strong>British Columbia:</strong> Known for its stunning landscapes and universities like UBC.</li><br />
                          <li><strong>Quebec:</strong> Offers a unique cultural experience and French-language programs.</li><br />
                          <li><strong>Alberta:</strong> Known for its strong economy and universities like the University of Alberta.</li><br />
                          <li><strong>Nova Scotia:</strong> Offers a friendly atmosphere and institutions like Dalhousie University.</li><br />
                          <li><strong>Manitoba:</strong> Known for its affordable living and universities like the University of Manitoba.</li><br />
                          <li><strong>Saskatchewan:</strong> Offers a strong agricultural and engineering focus.</li><br />
                          <li><strong>New Brunswick:</strong> Known for its friendly communities and affordable living.</li><br />
                          <li><strong>Prince Edward Island:</strong> Offers a unique cultural experience and smaller class sizes.</li><br />
                          <li><strong>Newfoundland and Labrador:</strong> Known for its stunning landscapes and friendly communities.</li><br />
                          <li><strong>Yukon:</strong> Offers a unique experience in the northern part of Canada.</li><br />
                          <li><strong>Northwest Territories:</strong> Known for its stunning landscapes and unique culture.</li><br />
                          <li><strong>Nunavut:</strong> Offers a unique experience in the northern part of Canada.</li><br />
                          <li><strong>Ontario:</strong> Home to Toronto, the largest city in Canada, and many top universities.</li><br />
                          <li><strong>British Columbia:</strong> Known for its stunning landscapes and universities like UBC.</li><br />
                          <li><strong>Quebec:</strong> Offers a unique cultural experience and French-language programs.</li><br />
                          <li><strong>Alberta:</strong> Known for its strong economy and universities like the University of Alberta.</li><br />
                          <li><strong>Nova Scotia:</strong> Offers a friendly atmosphere and institutions like Dalhousie University.</li><br />
                          </ul>
 
                        
    <div className="table-responsive">
 
  <div className={styles.container}>
      <h1 className={styles.heading}>
        Cost of Education and Living in Canada for International Students
      </h1>
      <p className={styles.intro}>
        Planning your education in Canada involves understanding both tuition and living expenses. Below is an overview of the estimated costs for international students:
      </p>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Expense Category</th>
            <th>Estimated Cost (CAD)</th>
            <th>Estimated Cost (INR)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tuition Fees (Undergraduate Programs)</td>
            <td>CAD 20,000 – 30,000/year</td>
            <td>₹12,00,000 – ₹18,00,000/year</td>
          </tr>
          <tr>
            <td>Tuition Fees (Postgraduate Programs)</td>
            <td>CAD 15,000 – 20,000/year</td>
            <td>₹9,00,000 – ₹12,00,000/year</td>
          </tr>
          <tr>
            <td>Accommodation (On-Campus Housing)</td>
            <td>CAD 8,000 – 10,000/year</td>
            <td>₹4,80,000 – ₹6,00,000/year</td>
          </tr>
          <tr>
            <td>Accommodation (Off-Campus Renting)</td>
            <td>CAD 700 – 2,500/month</td>
            <td>₹42,000 – ₹1,50,000/month</td>
          </tr>
          <tr>
            <td>Food & Groceries</td>
            <td>CAD 200 – 500/month</td>
            <td>₹12,000 – ₹30,000/month</td>
          </tr>
          <tr>
            <td>Transportation</td>
            <td>CAD 90 – 150/month</td>
            <td>₹5,400 – ₹9,000/month</td>
          </tr>
          <tr>
            <td>Health Insurance</td>
            <td>CAD 600 – 1,000/year</td>
            <td>₹36,000 – ₹60,000/year</td>
          </tr>
          <tr>
            <td>Miscellaneous Expenses</td>
            <td>CAD 500 – 1,000/month</td>
            <td>₹30,000 – ₹60,000/month</td>
          </tr>
        </tbody>
      </table>

      <p className={styles.note}>
        <strong>Note:</strong> Costs are approximate and can vary based on the institution, city, and personal lifestyle. Major cities like Toronto and Vancouver typically have higher living costs compared to cities like Montreal or Winnipeg. Health insurance requirements and costs may differ by province. Exchange rates fluctuate; the above INR estimates are based on an approximate rate of 1 CAD = ₹60. For the most accurate and up-to-date information, refer to the official websites of your chosen educational institutions and Canadian immigration authorities.
      </p>
    </div>
  
</div>



                        <h3 className={styles.subTitle}>Visa Application Process</h3>
                        <p>The visa application process involves several steps:</p>
                        <ul>
                          <li><strong>Gather Required Documents:</strong> Acceptance letter, proof of funds, medical exam, etc.</li><br />
                          <li><strong>Complete Application Form:</strong> Fill out the study permit application form.</li><br />
                          <li><strong>Pay Application Fee:</strong> Submit the required fee for processing.</li><br />
                          <li><strong>Submit Biometrics:</strong> Provide fingerprints and photo if required.</li><br />
                          <li><strong>Attend Interview (if necessary):</strong> Some applicants may be called for an interview.</li>
                        </ul>
                        <h3 className={styles.subTitle}>Processing Time</h3>
                        <p>Processing times vary based on the applicant's country and the volume of applications. On average, it can take 4-12 weeks.</p>
                        <p>After completing your studies, you may be eligible for a Post-Graduation Work Permit (PGWP), allowing you to work in Canada for up to three years. This valuable experience can enhance your employability and provide a pathway to permanent residency.</p>
                        <h3 className={styles.subTitle}>Conclusion</h3>
                        <p>Studying in Canada is an incredible opportunity to gain a world-class education while immersing yourself in a multicultural society. At Global Visa Internationals, we are committed to helping you navigate the complexities of the student visa process, ensuring you have the best chance of success. Contact us today to start your journey toward a brighter future in Canada!</p>
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
              </div>
                </>  
        ); }