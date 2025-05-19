 "use client";
import styles from './USA.module.css';
import React,  { useState,useEffect } from 'react';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Australia() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Global Visa Internationals",
    "url": "https://www.globalvisainternationals.com",
    "logo": "https://www.globalvisainternationals.com/gvilogo.png",
    "description": "Unlock Your Australia Adventure! Global Visa Internationals provides expert guidance for your Australia tourist visa application. Simplify the process and explore Australia's wonders. Contact us today!",
    "founder": {
      "@type": "Organization",
      "name": "Naveen Kumar J"
    },
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
      "availableLanguage": ["English", "Hindi", "Kannada","Tamil"]
    },
    "areaServed": ["IN", "Australia", "EU"],
    "sameAs": [
      "https://www.facebook.com/GlobalVisaInternationals",
      "https://www.instagram.com/globalvisa_internationals/",
      "https://www.linkedin.com/company/globalvisainternationals"
      // Add more links if you have Twitter, YouTube, etc.
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
  //reviews
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);
     return(      
           <>    
       <head>
       <title>USA Tourist Visa From India | Cost, Process & Top Attractions</title>
      <meta
        name="description"
        content="Apply for a USA Tourist Visa (B-2) with expert guidance from Global Visa Internationals. Know the visa process, fees, documents required, and explore top tourist destinations in the USA."
      />
      <meta
        name="keywords"
        content="USA tourist visa, apply for US tourist visa from India, B2 visa USA, cost of USA trip, flight to USA cost, US visa consultants in India, tourist attractions in USA, visa process USA, USA visa fees"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.globalvisainternationals.com/visa/tourist-visa/usa" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Apply for USA Tourist Visa From India | Global Visa Internationals" />
      <meta
        property="og:description"
        content="Planning to visit the USA? Get expert assistance for your B-2 visa application, flight booking, cost estimate, and must-visit places. Start your USA journey with Global Visa Internationals."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.globalvisainternationals.com/visa/tourist-visa/usa" />
      <meta property="og:image" content="https://www.globalvisainternationals.com/images/usa-tourist-visa-banner.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="USA Tourist Visa | Application, Cost & Documents Needed" />
      <meta
        name="twitter:description"
        content="Explore the USA with the right tourist visa. Get visa application support, interview preparation, and travel cost breakdown from Global Visa Internationals."
      />
      <meta name="twitter:image" content="https://www.globalvisainternationals.com/images/usa-tourist-visa-banner.jpg" />
      <meta name="twitter:url" content="https://www.globalvisainternationals.com/visa/tourist-visa/usa" />

      {/* Geo Location Tags */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="USA" />
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bengaluru" />
      <meta name="ICBM" content="12.9716,77.5946" />

      {/* Structured Data - Local Business / Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Global Visa Internationals",
            "url": "https://www.globalvisainternationals.com",
            "logo": "https://www.globalvisainternationals.com/logo.png",
            "description": "Leading visa consultancy offering expert USA tourist visa assistance from India. We help with B-2 visa application, documentation, interview prep, and more.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "MG Road",
              "addressLocality": "Bengaluru",
              "addressRegion": "KA",
              "postalCode": "560025",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-7022213466",
              "contactType": "Customer Support"
            },
            "sameAs": [
              "https://www.facebook.com/GlobalVisaInternationals",
              "https://www.linkedin.com/company/globalvisainternationals",
              "https://twitter.com/GlobalVisaIntl"
            ]
          })
        }}
      />
</head>

  <div className={styles.imageContainer}>
    <img src="/images/USA1.png" alt="USA Image" className={styles.USAImage} />
  </div>

         <div className={styles.USASec}>


<div className={styles.USAData}>
    <h1 className={styles.Title}> Explore the Wonders of the USA: Your Dream Tourist Visa Awaits!</h1>
    <p>Dreaming of experiencing the vibrant energy of New York City, the breathtaking landscapes of the Grand Canyon, or the glitz and glamour of Hollywood? The United States of America offers a kaleidoscope of experiences for every traveler. From iconic landmarks and bustling cities to stunning natural wonders and diverse cultures, a USA tourist visa opens the door to unforgettable adventures.</p>
      
      <h3 className={styles.subTitle}>Why Choose USA for Tourism? What Makes It Special?</h3>
      <p>The USA is more than just a destination; it's a melting pot of cultures, a land of innovation, and a showcase of unparalleled beauty. Here's what makes it so special:</p>
      
      <ul>
        <li>Iconic Landmarks: Stand in awe of the Statue of Liberty, walk across the Golden Gate Bridge, and witness the power of Niagara Falls. These are just a few of the world-famous landmarks that will leave you spellbound.
          
        </li>
        <li><b className={styles.subTitle}>Diverse Landscapes:</b> From the snow-capped peaks of the Rocky Mountains and the vast plains of the Midwest to the sunny beaches of California and the lush forests of the Pacific Northwest, the USA boasts a breathtaking variety of natural landscapes. Adventure awaits at every turn, whether you're hiking, skiing, or simply soaking in the scenery.</li>

        <li><b className={styles.subTitle}>Vibrant Cities:</b> Immerse yourself in the fast-paced life of New York City, explore the cultural richness of Boston, experience the music scene in Nashville, or enjoy the laid-back vibes of Los Angeles. Each American city has its own unique character and charm.</li>
        
        <li><b className={styles.subTitle}>World-Class Entertainment:</b> Catch a Broadway show in New York, explore the movie studios in Hollywood, experience the thrill of Las Vegas, or enjoy the magic of Disneyland. The USA offers endless entertainment options for all ages.</li>

        <li><b className={styles.subTitle}>Rich History and Culture:</b> Discover the nation's history in Washington D.C., explore the jazz heritage of New Orleans, or delve into the Native American cultures of the Southwest. The USA's diverse history and cultural tapestry offer fascinating insights.</li>
      </ul>
      <h3 className={styles.subTitle}>Must-Visit Tourist Spots in USA</h3>
      <p>Your USA adventure wouldn't be complete without visiting some of these incredible destinations:</p>
      <ol>
        <li>New York City, New York: Experience the iconic skyline, visit Times Square, explore Central Park, and immerse yourself in world-class museums and theaters.</li>
        <br />
        <li>Los Angeles, California: Discover Hollywood glamour, stroll along the Walk of Fame, relax on the beaches of Santa Monica and Malibu, and visit world-famous theme parks.</li>
        <br />
        <li>San Francisco, California: Ride a cable car, visit Alcatraz Island, walk across the Golden Gate Bridge, and explore the city's unique neighborhoods.</li>
        <br />
        <li>Grand Canyon National Park, Arizona: Witness the awe-inspiring beauty and vastness of one of the world's natural wonders. Hike along the rim or take a mule ride into the canyon.</li>

        <li>Yellowstone National Park, Wyoming, Montana, Idaho: Explore geysers, hot springs, and abundant wildlife in America's first national park.</li>

        <li>Miami, Florida: Enjoy the vibrant nightlife, beautiful beaches, Art Deco architecture, and Latin American culture.</li>

        <li>Washington D.C.: Explore the nation's capital, visit iconic monuments and memorials, and delve into history at the Smithsonian museums.</li>

        <li>Las Vegas, Nevada: Experience the dazzling lights, world-class entertainment, and vibrant casino scene.</li>

        <li>Niagara Falls, New York: Witness the sheer power and beauty of these majestic waterfalls.</li>
        <li>Orlando, Florida: Discover the magic of world-renowned theme parks like Walt Disney World and Universal Studios.</li>
        
      </ol>
      
      <div className={styles.formSection1}>
      <h4 className={styles.subTitle}>Contact Global visa Internationals for Visa Documentation Assistance:</h4>
                  <h1 className={styles.formtitle}>Visa And Immigration Inquiry Form</h1>
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

                <h2 className={styles.subTitle}>Planning Your Trip: Understanding the Costs</h2>
      <p>Traveling to the USA can be an exciting adventure, but it's essential to plan your budget wisely. Here are some key cost considerations:</p>
      <p className={styles.subTitle}>Cost Breakdown: How Much Does a USA Trip Cost from India?</p>
      <table className={styles.table}>
        <thead>
          <th>Expense Category</th>
          <th>Estimated Cost</th>
          <th>Notes</th>
        </thead>
        <tbody>
          <tr>
            <td>Flight Charges</td>
            <td>₹70,000 – ₹1,50,000+ (return airfare)</td>
            <td>Varies by season, airline, and destination</td>
          </tr>
          <tr>
            <td>Accommodation</td>
            <td>See detailed table below</td>
            <td>From hostels to luxury hotels</td>
          </tr>
          <tr>
            <td>Food</td>
            <td>$20 – $100+ per day</td>
            <td>Budget to fine dining</td>
          </tr>
          <tr>
            <td>Transportation</td>
            <td>$30 – $100+ per day</td>
            <td>Includes car rental, public transport, ride-sharing</td>
          </tr>
          <tr>
            <td>Attractions & Activities</td>
            <td>$5 – $50+ per activity</td>
            <td>Museums, theme parks, guided tours, etc.</td>
          </tr>
          <tr>
            <td>Visa Fee (B-2)</td>
            <td>	$185</td>
            <td>Paid online or at authorized banks</td>
          </tr>
          <tr>
            <td>Travel Insurance</td>
            <td>$50 – $200+</td>
            <td>Highly recommended</td>
          </tr>
          <tr>
            <td>Miscellaneous</td>
            <td>Varies</td>
            <td>Shopping, souvenirs, unforeseen expenses</td>
          </tr>
        </tbody>
      </table>

      <h3 className={styles.subTitle}>Accommodation Costs in the USA</h3>
   <table className={styles.table}>
    <thead>
      <th>Type</th>
      <th>Average Price per Night (USD)</th>
      <th>Details</th>
    </thead>
    <tbody>
      <tr>
        <td>Hotels</td>
        <td>$100 – $500+</td>
        <td>Depends on city, location, and star rating</td>
      </tr>
      <tr>
        <td>Airbnb/Vacation Rentals</td>
        <td>$80 – $300+</td>
        <td>Ideal for families or longer stays</td>
      </tr>
      <tr>
        <td>Hostels (Dorm Beds)</td>
        <td>$30 – $80</td>
        <td>Great for solo travelers and budget-conscious visitors</td>
      </tr>
    </tbody>
   </table>
   <p className={styles.note}>Planning Tip: A 10-day trip to the USA (excluding flights) can cost anywhere between $1,500 and $5,000+ per person, depending on your travel style and choices.</p>


  <div className={styles.formSection1}>
  <h4 className={styles.subTitle}>Contact Global Visa Internationals for Visa and Documentation Assistance:</h4>
                  <h1 className={styles.formtitle}>Visa And Immigration Inquiry Form</h1>
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
                
<h2 className={styles.subTitle}> USA Tourist Visa Process from India (B-2 Visa)</h2>
<table className={styles.table}>
  <thead>
    <th>Step</th>
    <th>Description</th>
  </thead>
  <tbody>
    <tr>
      <td>1. Check Eligibility</td>
      <td>You must have temporary intent, sufficient funds, and strong ties to India</td></tr>
    <tr>
      <td>2. Fill DS-160 Form</td>
      <td>Online visa application form. Accuracy is crucial</td>
    </tr>
    <tr>
      <td>3.Pay Visa Fee</td>
      <td>	$185 (non-refundable)</td>
    </tr>
    <tr>
      <td>4.Schedule Interview</td>
      <td>Book appointment at U.S. Embassy/Consulates (Delhi, Mumbai, Chennai, Kolkata, Hyderabad)</td>
    </tr>
    <tr>
      <td>5. Prepare Documents</td>
      <td>Passport, DS-160 confirmation, fee receipt, proof of funds, ties to India, etc.</td>
    </tr>
    <tr>
      <td>6. Attend Visa Interview</td>
      <td>Be honest and confident. The officer will evaluate your intent and documentation</td>
    </tr>
    <tr>
      <td>7. Wait for Processing</td>
      <td>If approved, your passport will be returned with the visa stamped</td>
    </tr>
  </tbody>
</table>
<h3 className={styles.subTitle}>Need Help With the DS-160 or Interview Prep?</h3>
<p>Traveling the USA on tourist visa (B-2) process can feel overwhelming — but you don’t have to do it alone. At Global Visa Internationals, we offer end-to-end support to ensure your application is error-free and your interview is successful.</p>
<b className={styles.subTitle}>Here’s how we make your USA visa journey seamless:</b>
<ol>
  <h3><li className={styles.subTitle}>Expert DS-160 Form Filling Assistance</li></h3>
  <p>Filling out the DS-160 form incorrectly is one of the most common reasons for visa delays or denials. Our experts will help you:</p>
  <ul>
    <li>Complete the form accurately, avoiding costly mistakes</li>
    <li>Review all sections (travel history, background, purpose of visit)</li>
    <li>Upload the correct digital photo as per U.S. embassy requirements</li>
  </ul>
 <h3> <li className={styles.subTitle}> One-on-One Personalized Visa Consultation</li></h3>
 <p>Your case is unique — so we offer customized guidance based on:</p>
 <ul>
  <li>Your travel plans and itinerary</li>
  <li>Financial documents and proof of funds</li>
  <li>Employment and family ties in India</li>
  <p>You’ll have a dedicated visa expert to answer all your questions.</p>
 </ul>
  <h3><li className={styles.subTitle}> Mock Interviews with Real Consulate Questions</li></h3>
  <p>Get real-time practice with visa interview questions asked at:</p>
  <ul>
    <li className={styles.subTitle}>U.S. Consulates in Mumbai, Delhi, Chennai, Kolkata & Hyderabad
    Our mock sessions include:</li>
    <li>Behavioral coaching on how to answer confidently</li>
    <li>Commonly asked B-2 visa questions (and how to respond)</li>
    <li>Realistic role-playing with personalized feedback</li>
  </ul>
  <h3><li className={styles.subTitle}>Complete Document Checklist & Review</li></h3>
  <p>We’ll guide you on gathering all required documents, including:</p>
  <ul>
    <li>Valid passport, DS-160 confirmation, fee receipts</li>
    <li>Proof of finances, return intent, hotel bookings, flight details</li>
    <li>Sponsorship or invitation letters (if applicable)</li>
    <p>We’ll review everything to ensure it meets U.S. consulate standards.</p>
  </ul>
</ol>

<h2 className={styles.subTitle}>Why Choose Global Visa Internationals?</h2>
<p>At Global Visa Internationals, we understand that the visa application process can be complex and time-consuming. That's why we offer:</p>
<ul>
  <li>Personalized Guidance: Our experienced consultants provide tailored support throughout your application journey</li>
  <li>Expert Knowledge: We stay up-to-date with the latest visa regulations to ensure your application is accurate and complete.</li>
  <li>Hassle-Free Process: We handle the paperwork and guide you through each step, saving you time and stress.</li>
  <li>High Success Rate: We are committed to maximizing your chances of a successful visa outcome.</li>
  <li>Additional Services: We also take Mock Interviews to prepare you for the visa interview process.</li>
</ul>
<p>We at Global Visa Internationals, proud to be India's finest visa consultants, are dedicated to making your dreams into reality. With our 11+ years of experience as leading visa consultants in Bangalore, we have successfully managed to process over 55,000+ visas and offer over 75,000 expert visa advice sessions till date. You can confidently rely on our vast visa and immigration consulting experience in India.</p>
<p>Let Global Visa Internationals assist you in navigating the visa application process and planning your dream Australian adventure!</p>


</div>

        <div className={styles.formSection}>

                  <h1 className={styles.subTitle}>Visa And Immigration Inquiry Form</h1>
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
        <section id='Client Reviews'>
          <h2 className={styles.subtitle}>Client Reviews</h2>
          <div className="elfsight-app-f560162c-1e98-4995-97af-3da789ac6ec5" data-elfsight-app-lazy></div>
          </section>
            </>  
    ); 
    }