"use client";
import styles from './USA.module.css';
import React,  { useState } from 'react';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function USA(){
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Global Visa Internationals",
    "url": "https://www.globalvisainternationals.com",
    "description": "Helping international students apply for USA student visas and choose the best courses and universities in the USA.",
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
        <title>Study in USA: Visa, Top Universities, Courses & Scholarships | Global Visa Internationals</title>
        <meta name="description" content="Your guide to a USA study visa. Explore top US universities, popular courses (STEM, MBA, Medicine), scholarships, and the visa application process with Global Visa Internationals." />
        <meta name="keywords" content="study in USA, USA student visa, US universities, scholarships USA, international students USA, F1 visa USA, J1 visa USA, M1 visa USA, top courses USA, MBA in USA, engineering in USA, medicine in USA, liberal arts USA, apply for US student visa, cost of studying in USA, student life USA, visa interview tips USA, SEVIS fee, Form DS-160" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.globalvisainternationals.com/Visa/student-visa/usa" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Study in USA: Visa, Top Universities, Courses & Scholarships | Global Visa Internationals" />
        <meta property="og:description" content="Your guide to a USA study visa. Explore top US universities, popular courses (STEM, MBA, Medicine), scholarships, and the visa application process with Global Visa Internationals." />
        <meta property="og:url" content="https://www.globalvisainternationals.com/Visa/student-visa/usa" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="URL_TO_YOUR_USA_IMAGE" /> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Study in USA: Visa, Top Universities, Courses & Scholarships | Global Visa Internationals" />
        <meta name="twitter:description" content="Your guide to a USA study visa. Explore top US universities, popular courses (STEM, MBA, Medicine), scholarships, and the visa application process with Global Visa Internationals." />
        <meta name="twitter:url" content="https://www.globalvisainternationals.com/Visa/student-visa/usa" />
        {/* <meta name="twitter:image" content="URL_TO_YOUR_USA_IMAGE" /> */}

        {/* Geo-related meta tags */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
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
        <img src="/images/USA1.png" alt="USA Image" className={styles.USAImage} />
      </div>
    
               <div className={styles.USASec}>
    
    
                      <div className={styles.USAData}>
                          <h1 className={styles.Title}>USA Study Visa | Study in the USA | Global Visa Internationals</h1>

                          <h2  className={styles.subTitle}>Study in USA – Features, Opportunities & More</h2>
                          <p>Are you an aspiring international student looking to study in the USA? StudyAbroadExpert brings you the perfect opportunity to achieve your dream! The United States remains the top destination for international students, offering world-class universities, high-quality education, excellent infrastructure, experienced faculty, and numerous post-study opportunities. With a multicultural environment and abundant study options, the USA is an ideal choice for higher education.</p>
                          <h2  className={styles.subTitle}>Why Choose to Study in the USA?</h2>
                          <ol>
                            <h4  className={styles.subTitle}><li>Diverse and Customized Programs</li></h4>
                          <p>The USA offers a wide range of higher education options compared to other developed countries. Many universities provide customizable courses, especially for international students, ensuring flexibility and a tailored learning experience.</p>

                          <h4  className={styles.subTitle}><li>Flexibility in Education</li></h4>
                        <p>One of the significant advantages of studying in the USA is the ability to change universities after two years under undergraduate programs within the same faculty. The credit transfer system allows students to shift to higher-ranked institutions without restarting their education journey.</p>
                        <h4 className={styles.subTitle}><li>Global Networking and Exposure</li></h4>
                        <p>Studying in the USA provides opportunities to connect with industry leaders, experts, and professionals. This exposure proves invaluable when gaining hands-on experience and advancing in your career.</p>
                        <h4 className={styles.subTitle} ><li>Multicultural Learning Environment</li></h4>
                        <p>The USA is a melting pot of cultures, with students from diverse backgrounds, including Mexicans, Asians, and Indians. This cultural diversity enriches the learning experience, broadens perspectives, and enhances adaptability.</p>
                        </ol>
                        
                        <h2 className={styles.subTitle}>Top Courses to Study in the USA</h2>
                        <ol>
                        <h4  className={styles.subTitle}><li>Engineering (STEM Courses)</li></h4>
                        <p>STEM (Science, Technology, Engineering, and Mathematics) courses are among the most popular in the USA. Many students opt for STEM fields due to excellent career prospects and preference for H-1B visa applications. Specializations include:
                          </p>
                          <ul>
                        <li>Aviation Engineering</li>
                        <li>Automobile Engineering</li>
                        <li>Computer Science Engineering</li>
                        <li>Software Engineering</li>
                        <li>Industrial & Manufacturing Engineering</li>
                        <li>Water Resources Engineering</li></ul>
                        
                        <h4 className={styles.subTitle}><li>Business Administration (MBA)</li></h4>
                        <p>The USA is home to some of the top MBA universities, offering extensive exposure through internships, training, and networking opportunities. Popular specializations include:
                        </p>
                        <ul>
                          <li>International Business</li>
                          <li>E-Commerce</li>
                          <li>Finance Leadership</li>
                          <li>Entrepreneurship</li>
                          <li>Marketing</li></ul>
                        
                          
                        <h4 className={styles.subTitle}><li>Medicine (MBBS)</li></h4>
                        <p>Medical education in the USA is highly prestigious, with advanced theoretical and practical courses. The curriculum is recognized globally and approved by the Medical Council of India.</p>
                        <h4 className={styles.subTitle}><li>Liberal Arts</li></h4>
                        <p>Apart from technical and business programs, the USA offers exceptional courses in Liberal Arts, including:</p>
                        <ul><li>Economics</li>
                        <li>Political Science</li>
                        <li>Fine Arts</li>
                        <li>Theatre</li>
                        <li>Psychology</li>
                        <li>Sociology</li></ul>
                        
                        <p></p>
                        <h4 className={styles.subTitle}><li>Applied Sciences</li></h4>
                        <p>For students seeking practical skill development, Applied Sciences programs in the USA provide ample opportunities for innovation and employment. Popular courses include:</p>
                        <ul><li>Biochemical Engineering</li>
                        <li>Astrophysics</li>
                        <li>Mathematics</li>
                        <li>Social Sciences</li>
                        <li>Criminology</li></ul>
                        
                        <h3 className={styles.subTitle}>Conclusion</h3>

                        <p>Studying in the USA opens doors to endless opportunities, high-quality education, and global career prospects. Whether you aim to pursue Engineering, Business, Medicine, Liberal Arts, or Applied Sciences, the USA offers top-ranked programs to help you achieve your dreams. With the right guidance, you can make the most of this incredible opportunity and secure a bright future!</p>
                        </ol>
                        
                        <h3 className={styles.subTitle}>Best Scholarships in USA</h3>
                        <ul><li><strong>Fulbright Foreign Student Program –</strong> A government-funded scholarship for graduate students, young professionals, and artists.</li>
                        <li><strong>Hubert Humphrey Fellowship Program –</strong> A government-sponsored 10-month academic study program</li>
                        <li><strong>Civil Society Leadership Awards –</strong> Fully-funded scholarships for eligible students.</li>
                        <li><strong>Preply Scholarship –</strong> Offers a USD 2,000 award to eligible students.</li>
                        <li><strong>Surfshark Privacy and Security Scholarship –</strong> Grants USD 2,000 to students enrolled in US institutions.</li>
                        <li><strong>Tortuga Backpacks Study Abroad Scholarship –</strong> Provides USD 1,000 twice a year to students.</li>
                        <li><strong>University-Specific Scholarships –</strong> Offered by Harvard, Illinois, Iowa, New York, Minnesota, Oregon, and Wisconsin universities.</li>
                        <li> <strong>AAUW International Fellowships –</strong> Provides funding for women pursuing full-time graduate or postgraduate studies in the U.S.</li>
                        <li><strong>Joint Japan/World Bank Graduate Scholarship Program –</strong>Supports students from developing countries applying for master’s programs in fields related to economic development.</li>
                        <li><strong>Inlaks Shivdasani Foundation Scholarships –</strong> Designed for Indian students seeking funding for master’s programs in the U.S.</li>
                        <li><strong>Stanford Reliance Dhirubhai Fellowship –</strong> Offers financial assistance to Indian students pursuing an MBA at Stanford University.</li>
                        <li> <strong>Knight-Hennessy Scholars Program –</strong> A prestigious fully funded scholarship for international students applying to <strong>Stanford University.</strong></li>
                        </ul>


                        <h2  className={styles.subTitle}>Student Visa for the USA</h2>
                        <h3 className={styles.subTitle}>Types of Student Visas</h3>
                        <ul><li><strong>F1 Student Visa – </strong>For full-time academic students. Spouses and children can apply for an F-2 visa.</li>
                        <li><strong>J1 Exchange Visitor Visa –</strong> For exchange programs, research fellowships, or vocational training.</li>
                        <li><strong>M-1 Vocational Student Visa –</strong> For non-academic, technical schools. Extensions or overstays are not permitted.</li></ul>
                        <h3 className={styles.subTitle}>How to Apply for a USA Student Visa?</h3>

                        <h4 className={styles.subTitle}>To study in the USA, students must meet the following <strong>eligibility requirements:</strong></h4>
                        <ul>
                          <li> Must be at least <strong>18 years old</strong></li>
                          <li>A <strong>valid passport</strong></li>
                          <li>Formal acceptance into a <strong>SEVP-approved</strong> college or university</li>
                          <li>Application <strong>forms I-20, DS-160,</strong> and <strong> non-immigrant visa application</strong></li>
                          <li>Academic transcripts and other required documents</li>
                          <li> Proof of <strong>financial stability (bank statements, funding sources, etc.)</strong></li>
                          <li> SEVIS fee payment receipt</li>
                        </ul>
                        <h3 className={styles.subTitle}>Additional USA Student Visa Tips</h3>
                        <p>To improve your chances of visa approval, consider these tips:</p>
                        <ul><li><strong>Financial Proof –</strong> Show sufficient funds to cover tuition fees, living expenses, and other costs.</li>
                        <li><strong>Strong Academic Profile –</strong> A good academic record enhances your chances of securing admission and visa approval.</li>
                        <li><strong>Genuine Study Intentions –</strong> Clearly explain why you chose the U.S. and how the program aligns with your career goals.</li>
                        <li><strong>English Proficiency –</strong> A good IELTS/TOEFL score boosts your application.</li>
                        <li> <strong>Be Honest in the Visa Interview –</strong> Answer questions confidently and truthfully.</li>
                        </ul>
                        <h4 className={styles.subTitle}>Step-by-Step USA Student Visa Process</h4>
                        <ol>
                          <li><strong>Apply for Admission –</strong> Secure admission in a U.S. university for the intended intake.</li>
                          <li><strong>Receive Form I-20 –</strong> This document confirms your admission status.</li>
                          <li><strong>Pay the SEVIS I-901 Fee –</strong> A necessary payment for international students.</li>
                          <li><strong>Find a U.S. Embassy or Consulate –</strong> Locate the nearest visa office in your city.</li>
                          <li><strong>Complete Form DS-160 –</strong> The online application for a U.S. non-immigrant visa.</li>
                          <li><strong>Book a Visa Interview –</strong> Schedule an appointment at your local U.S. embassy or consulate.</li>
                          <li><strong>Pay the Visa Fee –</strong> A $160 non-refundable visa application fee.</li>
                          <li><strong>Attend the Visa Interview –</strong> The final step in determining your student visa approval.</li>
                          <li><strong>Pay the Visa Issuance Fee (if applicable) –</strong> Some nationalities may be required to pay this fee.</li>
                          <li><strong>Receive Your Visa –</strong> Upon approval, your student visa will be issued.</li>
                        </ol>
                        <h1>To ensure a smooth and hassle-free process, consulting <strong>Global Visa Internationals,</strong> an experienced study abroad consultant, can be highly beneficial for expert visa guidance.</h1>
                        
                        <h3 className={styles.subTitle}>Education Model in USA</h3>
                        
                        <ol>
                          <h4 className={styles.subTitle}><li>Pre-School (Pre-Kindergarten)</li></h4>
                            <ul><li>Optional for children aged 4 to 6 years.</li>
                            <li>Programs vary by state</li></ul>
                          
                          <h4 className={styles.subTitle}> <li>Primary Education (Elementary School)</li></h4>
                          <ul> <li>Starts at age 6</li>
                          <li>Lasts for 5–6 years</li> </ul>
                          <h4 className={styles.subTitle}><li>Secondary Education</li></h4>
                            <ul><li>Divided into <strong>Middle School (Junior High)</strong> (Ages <strong>11–12</strong>) and <strong>High School</strong></li>
                            <li>Covers Grades 6–12</li>
                            <li>Completion of 12th grade qualifies students for higher education</li></ul>
                          
                          <h4 className={styles.subTitle}><li>Higher Education (Post-Secondary Education)</li></h4>
                          <ul><li><strong>Undergraduate Degree</strong> (Bachelor’s) – <strong>First level</strong></li>
                          <li><strong>Master’s Degree</strong> (Graduate Program) – <strong>Second level</strong></li>
                          <li><strong>Doctorate</strong> (Ph.D.) – <strong>Third level</strong></li></ul>
                          
                          </ol>
                          <p>Higher education in the USA is known for flexibility, practical exposure, and academic excellence.</p>


                        <h3 className={styles.subTitle} >Study in USA – Features, Opportunities & More</h3>

                        <p>Are you an aspiring international student looking to study in the USA? StudyAbroadExpert brings you the perfect opportunity to achieve your dream! The United States remains the top destination for international students, offering world-class universities, high-quality education, excellent infrastructure, experienced faculty, and numerous post-study opportunities. With a multicultural environment and abundant study options, the USA is an ideal choice for higher education.</p>


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
                        <h2 className={styles.subTitle}>Why Choose to Study in the USA?</h2>
                        <ol>
            
                        <li><h3 className={styles.subTitle}> Diverse and Customized Programs</h3></li>
                        <p>The USA offers a wide range of higher education options compared to other developed countries. Many universities provide customizable courses, especially for international students, ensuring flexibility and a tailored learning experience</p>
                        
                        <li><h3 className={styles.subTitle}>Flexibility in Education</h3></li>
                        <p>One of the significant advantages of studying in the USA is the ability to change universities after two years under undergraduate programs within the same faculty. The credit transfer system allows students to shift to higher-ranked institutions without restarting their education journey.</p>
                        <li><h3 className={styles.subTitle}>Global Networking and Exposure</h3></li>
                        <p>Studying in the USA provides opportunities to connect with industry leaders, experts, and professionals. This exposure proves invaluable when gaining hands-on experience and advancing in your career.</p>
                        <li><h3 className={styles.subTitle}>Multicultural Learning Environment</h3></li>
                        <p>The USA is a melting pot of cultures, with students from diverse backgrounds, including Mexicans, Asians, and Indians. This cultural diversity enriches the learning experience, broadens perspectives, and enhances adaptability.</p>
                        </ol>

                        <h2 className={styles.subTitle}>Top Universities in the USA</h2>
                        <ol>
                        <h4 className={styles.subTitle}><li>Princeton University</li></h4>
                        <p>Ranked as one of the top universities in the USA, Princeton offers highly regarded graduate programs and opportunities for independent research projects.</p>
                        <h4 className={styles.subTitle}><li>Columbia University</li></h4>
                        <p>Founded in 1754, Columbia University is a prestigious private institution offering undergraduate, graduate, and professional programs across various fields.</p>
                        <h4 className={styles.subTitle}><li>Harvard University</li></h4>
                        <p>Renowned globally, Harvard has produced notable alumni, including eight U.S. Presidents. It consistently ranks among the top universities in the world.</p>
                        <h4 className={styles.subTitle}><li>Massachusetts Institute of Technology (MIT)</li></h4>
                        <p>MIT is internationally recognized for excellence in Computer Science, Mechanical Engineering, Aerospace Engineering, Biomedical Engineering, and Physics.</p>
                        <h4 className={styles.subTitle}><li>Yale University</li></h4>
                        <p>A prestigious institution known for its innovative education and cutting-edge research, Yale is also famous for its excellent drama and music programs.</p>
                        <h4 className={styles.subTitle}><li>Stanford University</li></h4>
                        <p>Located in the California Bay Area, Stanford offers top-notch programs in business, engineering, mathematics, medicine, sports, arts, and sciences.</p>
                        <h4 className={styles.subTitle}><li>University of Chicago</li></h4>
                        <p>Offering over 50 majors and 40 minors, the University of Chicago is recognized for its rigorous academic environment and diverse enrichment programs.</p>
                        <h4 className={styles.subTitle}><li>University of Pennsylvania</li></h4>
                        <p>Founded by Benjamin Franklin, UPenn is a leading institution excelling in education, engineering, applied science, law, and design.</p>
                        <h4 className={styles.subTitle}><li>California Institute of Technology (Caltech)</li></h4>
                        <p>Caltech is known for its strong graduate programs in engineering, biology, chemistry, computer science, mathematics, and physics.</p>
                        <h4 className={styles.subTitle}><li>Duke University</li></h4>
                        <p>Duke boasts impressive academic quality and a diverse range of programs across various disciplines, making it a top choice for students worldwide.</p>
                        </ol>
                      

                      <h2 className={styles.subTitle}>Career Opportunities in the USA</h2>
                      <p>The USA is not only a top destination for education but also offers immense job opportunities for skilled professionals. Graduates from American universities have a competitive edge in the job market due to their high-quality education and industry exposure. The country's strong economic structure supports growth in multiple sectors, particularly in:
                        
                      </p>
                      <ul><li>Software Development</li>
                      <li>Engineering</li>
                      <li>Information Security Analysis</li>
                      <li>Nursing (Registered Nurses, Nursing Assistants)</li>
                      <li>Financial Advisory Services</li>
                      <li>Medical Technology</li>
                      <li>Operations Management</li>
                      <li>Digital Marketing</li>
                      <li>Home Health Assistance</li>
                      <li>Data Science</li>
                      <li>Dentistry</li>
                      <li>Sales and Marketing</li>
                      <li>Restaurant and Hospitality Management</li>
                      <li>Physical Therapy</li>
                      <li>Construction Work</li>
                      <li>Welding</li>
                      <li>Truck Driving</li></ul>
                      <p>Students can secure employment through campus placements, job portals, LinkedIn, and networking within professional circles in the USA.</p>

                      <h2  className={styles.subTitle}>Cost of Education and Living in the USA</h2>
                      <p>Studying in the USA can be more expensive than in other developed countries, but students benefit from excellent facilities and services. Many universities offer part-time job opportunities to help offset expenses. Below is an estimated cost breakdown for 2024:
                      </p>
                      <table className={styles.table}>
                          <tr className={styles.tableHeader}>
                            <th >Nature of Expenses</th>
                            <th>Cost (USD)</th>
                            <th>	Cost (INR Approx.)</th>
                          </tr>
                          <tr className={styles.tableRow}>
                            <td>One-Way Flight</td>
                            <td>$700 – $1,000</td>
                            <td>INR 55,000 - 75,000</td>
                          </tr>
                          <tr className={styles.tableRow}>
                            <td>Work Permit Application</td>
                            <td>$410</td>
                            <td>₹33,600</td>
                          </tr>
                          <tr className={styles.tableRow}>
                            <td>IELTS Test</td>
                            <td>	N/A</td>
                            <td>INR 14,700</td>
                          </tr>
                          <tr className={styles.tableRow}>
                            <td>University Tuition Feest</td>
                            <td>	$18,000 – $50,000</td>
                            <td>₹14,76,000 – ₹41,00,000</td>
                          </tr>
                          <tr className={styles.tableRow}>
                            <td>Books & Study Material</td>
                            <td>$900 – $2,000</td>
                            <td>₹73,800 – ₹1,64,000</td>
                          </tr>
                          <tr className={styles.tableRow}>
                            <td>Accommodation</td>
                            <td>$9,800 – $11,100</td>
                            <td>₹8,03,600 – ₹9,10,200</td>
                          </tr>
                          <tr className={styles.tableRow}>
                            <td>Travel Costs(Monthly)</td>
                            <td>$80 – $150</td>
                            <td>₹6,560 – ₹12,300</td>
                          </tr>
                          <tr className={styles.tableRow}>
                            <td>Food(Monthly)</td>
                            <td>$250 – $600</td>
                            <td>₹20,500 – ₹49,200</td>
                            </tr>
                            <tr>
                              <td>Health Insurance (Annual)</td>
                              <td>$500 – $2,500</td>
                              <td>₹41,000 – ₹2,05,000</td>
                            </tr>

                          
                          <tr className={styles.tableRow}>
                            <td>Miscellaneous Expenses (Monthly)</td>
                            <td>$700 – $1,000</td>
                            <td>₹57,400 – ₹82,000</td>
                          </tr>
                        </table>
                        <p>With proper planning and financial management, studying in the USA is a rewarding investment for a successful career.</p>
                        <h3 className={styles.subTitle}>Types of USA Student Visas</h3>

                        <p>International students can apply for different types of visas depending on their study program:</p>
                        <ol><li>F-1 Student Visa – The most common visa for international students pursuing academic programs in the USA. Requires at least 18 hours of study per week. Spouses and children may apply for an F-2 visa.</li><br />
                        <li> J-1 Exchange Visitor Visa – Designed for students, scholars, or lecturers participating in exchange programs, vocational training, or research fellowships. Dependents may apply for a J-2 visa.</li><br />
                        <li> M-1 Vocational/Technical Student Visa – Intended for students enrolling in vocational and technical programs. Holders of this visa cannot extend their stay beyond the authorized period.</li></ol>

                        <h3 className={styles.subTitle}>Best States for International Students in the USA</h3>
                        <p>The best U.S. states for education, affordability, and job opportunities include:</p>
                        <ul>
                          <li><strong>California –</strong> Home to Stanford, UC Berkeley, UCLA, and Silicon Valley job opportunities.</li>
                        <li><strong>New York –</strong> Offers top universities like Columbia, NYU, and a strong job market.</li>
                        <li><strong>Massachusetts –</strong> Houses Harvard, MIT, and other research institutions.</li>
                        <li><strong>Texas – </strong>Affordable tuition, lower cost of living, and strong job prospects.</li>
                        <li><strong>ennsylvania –</strong> Home to University of Chicago, UIUC, and a growing tech industry.</li>
                        <li><strong>Pennsylvania –</strong> Hosts University of Pennsylvania, Carnegie Mellon, and diverse industries.</li></ul>

    
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