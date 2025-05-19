"use client";
import styles from './Europe.module.css';
import React, { useState, useEffect } from 'react';
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
      "availableLanguage": ["English", "Hindi", "Kannada", "Tamil"]
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
  return (
    <>
      <head>
        <title>Europe Tourist Visa From India | Cost, Process & Top Attractions</title>
        <meta
          name="description"
          content="Apply for a Europe Tourist Visa (B-2) with expert guidance from Global Visa Internationals. Know the visa process, fees, documents required, and explore top tourist destinations in the Europe."
        />
        <meta
          name="keywords"
          content="Europe tourist visa, apply for US tourist visa from India, B2 visa Europe, cost of Europe trip, flight to Europe cost, US visa consultants in India, tourist attractions in Europe, visa process Europe, Europe visa fees"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.globalvisainternationals.com/visa/tourist-visa/usa" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Apply for Europe Tourist Visa From India | Global Visa Internationals" />
        <meta
          property="og:description"
          content="Planning to visit the Europe? Get expert assistance for your B-2 visa application, flight booking, cost estimate, and must-visit places. Start your Europe journey with Global Visa Internationals."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.globalvisainternationals.com/visa/tourist-visa/usa" />
        <meta property="og:image" content="https://www.globalvisainternationals.com/images/usa-tourist-visa-banner.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Europe Tourist Visa | Application, Cost & Documents Needed" />
        <meta
          name="twitter:description"
          content="Explore the Europe with the right tourist visa. Get visa application support, interview preparation, and travel cost breakdown from Global Visa Internationals."
        />
        <meta name="twitter:image" content="https://www.globalvisainternationals.com/images/usa-tourist-visa-banner.jpg" />
        <meta name="twitter:url" content="https://www.globalvisainternationals.com/visa/tourist-visa/usa" />

        {/* Geo Location Tags */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="Europe" />
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
              "description": "Leading visa consultancy offering expert Europe tourist visa assistance from India. We help with B-2 visa application, documentation, interview prep, and more.",
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
        <img src="/images/Europe1.png" alt="Europe Image" className={styles.EuropeImage} />
      </div>

      <div className={styles.EuropeSec}>


        <div className={styles.EuropeData}>
          <h1 className={styles.Title}> Explore Europe: Your Dream Vacation Awaits</h1>
          <p>Europe, a continent brimming with history, culture, and breathtaking landscapes, beckons travelers from around the globe. From iconic landmarks to hidden gems, a European tourist visa opens the door to unforgettable experiences.</p>

          <h3 className={styles.subTitle}>Must-See Tourist Spots in Europe</h3>
          <p>Embark on a journey to some of the world's most celebrated destinations:</p>

          <ul>
            <li>Paris, France: Stand in awe of the majestic Eiffel Tower, wander through romantic streets, and indulge in world-class cuisine.</li>
            <li>Rome, Italy: Immerse yourself in ancient history at the magnificent Colosseum and the Roman Forum, and savor authentic Italian flavors.</li>

            <li>Amsterdam, Netherlands: Glide along the charming vibrant canals, explore unique architecture, and discover world-renowned art.</li>

            <li>Athens, Greece: Step back in time at the historic sites of the Acropolis and the Parthenon, the birthplace of democracy.</li>
          </ul>
          <p>Beyond these highlights, Europe offers a tapestry of diverse experiences, from the stunning fjords of Norway to the sun-kissed beaches of Spain, and the fairytale castles of Germany.</p>


          <h3 className={styles.subTitle}>Why Choose Europe for Your Next Vacation?</h3>
          <p>Europe's allure lies in its unique blend of:</p>
          <ol>
            <li>Rich History: Explore millennia-old ruins, medieval castles, and historical landmarks that whisper tales of the past.</li>
            <br />
            <li>Diverse Cultures: Experience a continent of distinct languages, traditions, and artistic expressions, each offering a unique perspective.</li>
            <br />
            <li>World-Renowned Cuisine: Indulge your senses in a culinary journey, from French pastries and Italian pasta to Spanish tapas and Greek delicacies.</li>
            <br />
            <li>Stunning Landscapes: Discover dramatic coastlines, majestic mountains, serene lakes, and picturesque countryside that will leave you breathless.</li>
          </ol>
          <p>A tourist visa for Europe is your gateway to unlocking these incredible experiences.</p>

          <div className={styles.formSection1}>
            <h4 className={styles.subTitle}>Contact Global visa Internationals for Visa Documentation Assistance:</h4>
            <h1 className={styles.formtitle}>Visa And Immigration Inquiry Form</h1>
            <form id="inquiry-form" onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div>
                  <input className={styles.input} type="text" name="name" placeholder="Enter your name" required />
                </div>
                <div>
                  <input className={styles.input} type="text" name="phone" placeholder="Enter your phone number" required />
                </div>
              </div>

              <div className={styles.row}>
                <div>
                  <select className={styles.select} name="country" required>
                    <option value="">Select Country</option>
                    {["newzeland", "Europe", "UK", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <select className={styles.select} name="immigration_type" required>
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
                  <select className={styles.select} name="age" required>
                    <option value="">Select Age</option>
                    <option value="18-45">18-45</option>
                    <option value="45+">45+</option>
                  </select>
                </div>
              </div>

              <div className={styles.row}>
                <div>
                  <select className={styles.select} name="education" required>
                    <option value="">Select Qualification</option>
                    {["Diploma", "Bachelor's", "Master's", "Doctorate", "Doctor", "Other"].map((edu) => (
                      <option key={edu} value={edu}>{edu}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <input className={styles.input} type="email" name="email" placeholder="Enter your email" required />
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
          <h2 className={styles.subTitle}>Europe Trip Cost Breakdown from India (2025)</h2>
          <table className={styles.table}>
            <thead>
              <th>Expense Category</th>
              <th>Budget Traveler</th>
              <th>Mid-Range Traveler</th>
              <th>Luxury Traveler</th>
            </thead>
            <tbody>
              <tr>
                <td>Flights (Round-trip)</td>
                <td>₹40,000 – ₹60,000</td>
                <td>₹60,000 – ₹90,000</td>
                <td>₹90,000 – ₹1,50,000+</td>
              </tr>
              <tr>
                <td>Accommodation (per night)</td>
                <td>₹2,000 – ₹5,000</td>
                <td>₹5,000 – ₹12,000</td>
                <td>	₹12,000 – ₹25,000+</td>
              </tr>
              <tr>
                <td>Food (per day)</td>
                <td>	₹1,000 – ₹2,000</td>
                <td>₹2,000 – ₹5,000</td>
                <td>	₹5,000 – ₹10,000+</td>
              </tr>
              <tr>
                <td>Local Transport (per day)</td>
                <td>	₹500 – ₹1,000</td>
                <td>₹1,000 – ₹2,500</td>
                <td>	₹2,500 – ₹5,000+</td>
              </tr>
              <tr>
                <td>Sightseeing & Activities (per day)</td>
                <td>₹500 – ₹1,500</td>
                <td>₹1,500 – ₹3,000</td>
                <td>₹3,000 – ₹6,000+</td>
              </tr>
              <tr>
                <td>Schengen Visa Fee</td>
                <td>₹7,000 – ₹8,000</td>
                <td>	₹7,000 – ₹8,000</td>
                <td>₹7,000 – ₹8,000</td>
              </tr>
              <tr>
                <td>Travel Insurance</td>
                <td>₹1,500 – ₹3,000</td>
                <td>₹1,500 – ₹3,000</td>
                <td>	₹1,500 – ₹3,000</td>
              </tr>
              <tr>
                <td>Miscellaneous</td>
                <td>₹5,000 – ₹10,000</td>
                <td>₹10,000 – ₹20,000</td>
                <td>	₹20,000 – ₹40,000+</td>
              </tr>
            </tbody>
          </table>
          <p className={styles.note}>Note: Costs are approximate and can vary based on exchange rates, specific cities visited, and personal spending habits.</p>

          <p>For a 10-day trip, the total estimated cost would be:</p>
          <ul>
            <li>Budget Traveler: ₹1,50,000 – ₹2,00,000</li>
            <li>Mid-Range Traveler: ₹2,50,000 – ₹3,50,000</li>
            <li>Luxury Traveler: ₹5,00,000 – ₹7,00,000+</li>
          </ul>
          <p>These estimates include flights, accommodation, food, local transport, sightseeing, visa fees, travel insurance, and miscellaneous expenses.</p>
          <p>For a more accurate estimate, consider your travel style, preferences, and the specific countries you plan to visit.</p>

          <h3 className={styles.subTitle}>Flight Charges</h3>
          <p>Round-trip airfare from major Indian cities (e.g., Mumbai, Delhi, Bengaluru) to European hubs like Paris, Rome, or Frankfurt ranges between ₹40,000 and ₹1,50,000. Booking 3–6 months in advance and traveling during shoulder seasons (April–May, September–October) can lead to significant savings.</p>

          <h3 className={styles.subTitle}>Accommodation</h3>
          <p>Accommodation costs vary widely:</p>
          <ul>
            <li>Budget: Hostels or budget hotels at ₹2,000 – ₹5,000 per night.</li>
            <li>Mid-Range: 3-star hotels or Airbnb at ₹5,000 – ₹12,000 per night.</li>
            <li>Luxury: 4-5 star hotels or resorts at ₹12,000 – ₹25,000+ per night.</li>
          </ul>
          <p className={styles.note}>Eastern European countries generally offer more affordable lodging compared to Western Europe.</p>

          <h3 className={styles.subTitle}>Food Expenses</h3>
          <p>Daily food costs depend on dining preferences:</p>
          <ul>
            <li>Budget: Street food or fast food chains at ₹1,000 – ₹2,000 per day.</li>
            <li>Mid-Range: Local restaurants at ₹2,000 – ₹5,000 per day.</li>
            <li>Luxury: Fine dining experiences at ₹5,000 – ₹10,000+ per day.</li>
          </ul>
          <p className={styles.note}>Opting for accommodations with kitchen facilities can help reduce food expenses.
            www.bajajfinserv.in</p>

          <h3 className={styles.subTitle}>Transportation</h3>
          <p>Transportation within Europe includes:</p>
          <ul>
            <li>Public Transport: Buses, metros, and trams at ₹500 – ₹1,000 per day.</li>
            <li>Intercity Travel: Train or budget flights at ₹1,000 – ₹5,000 per trip.</li>
            <li>Car Rentals: ₹5,000 – ₹8,000 per day, excluding fuel and parking.</li>
          </ul>
          <p className={styles.note}>Eurail passes offer cost-effective train travel across multiple countries</p>

          <h3 className={styles.subTitle}>Sightseeing & Activities</h3>
          <p>Entry fees for popular attractions:</p>
          <ul>
            <li>Museums & Landmarks: ₹500 – ₹3,000 per entry.</li>
            <li>Guided Tours: ₹2,000 – ₹5,000 per tour.</li>
            <li>Special Experiences: Hot air balloon rides, wine tastings, etc., at ₹5,000 – ₹10,000+.</li>
          </ul>
          <p className={styles.note}>Many cities offer tourist passes that bundle multiple attractions at discounted rates.</p>

          <h3 className={styles.subTitle}> Visa & Insurance</h3>
          <ul>
            <li>Schengen Visa: Approximately ₹7,000 – ₹8,000 per person.</li>
            <li>Travel Insurance: Mandatory for Schengen visa; costs ₹1,500 – ₹3,000, covering medical emergencies up to €30,000.</li>
          </ul>
          <p className={styles.note}>Ensure your insurance covers all Schengen countries and is valid for the entire duration of your stay.</p>

          <h3 className={styles.subTitle}>Tips to Save on Your Europe Trip</h3>

          <ul>
            <li>Early Bookings: Secure flights and accommodations 3–6 months in advance.</li>
            <li>Travel Off-Season: Consider traveling during shoulder seasons for lower prices and fewer crowds.</li>
            <li>Use City Passes: Many cities offer passes that provide access to multiple attractions and public transport.</li>
            <li>Mix Accommodation Types: Combine hotel stays with Airbnb or hostels to balance comfort and cost.</li>
            <li>Plan Meals: Mix dining out with self-catering to manage food expenses.</li>
          </ul>

          <h2 className={styles.subTitle}>Traveling the European Tourist Visa Process</h2>
          <p>Obtaining a European tourist visa involves a systematic process. While specific requirements may vary depending on your nationality and the Schengen Area country you plan to visit first, the general steps include:</p>
          <ol>
            <li>Determine the correct visa type: Ensure you are applying for a short-stay tourist visa.</li>
            <li>Identify the relevant embassy or consulate: This is usually the embassy or consulate of the country you will be entering first or where you will spend the majority of your time.</li>
            <li>Gather the required documents: This typically includes a valid passport, visa application form, passport-sized photographs, proof of travel arrangements (flight and accommodation bookings), proof of sufficient financial means, travel insurance, and potentially other supporting documents.</li>
            <li>Schedule a visa appointment: Most embassies and consulates require an appointment to submit your application and provide biometric data (fingerprints and photograph).</li>
            <li>Attend the visa interview: Be prepared to answer questions about your travel plans and intentions.</li>
            <li>Submit your application and pay the visa fee.</li>
            <li>Wait for the visa processing: Processing times can vary, so it's advisable to apply well in advance of your intended travel dates.</li>
          </ol>
          <p>Traveling the intricacies of the European tourist visa process can be challenging. Let Global Visa Internationals be your trusted partner.</p>
          <h3 className={styles.subTitle}>Need Assistance with Your European Tourist Visa? Contact Us Today!</h3>
          <p>At Global Visa International, we understand the complexities of visa and immigration procedures. Our experienced consultants are dedicated to providing you with comprehensive support for your European tourist visa application.</p>
          <h4 className={styles.subTitle}> We offer services including:</h4>
          <ol>
            <li>Personalized one-on-one consultations to assess your specific needs and guide you through the process.</li>
            <li>Thorough document checklist and review to ensure your application is complete and accurate.</li>
            <li>Mock interviews for visa applications to help you feel confident and prepared for your interview.</li>
            <li>Guidance on all aspects of the visa application process, from form completion to submission.</li>
          </ol>
          <p>Don't let the visa process stand between you and your European dream vacation. Contact <b>Global Visa Internationals</b> today for expert assistance and a smoother journey.</p>



          <div className={styles.formSection1}>
            <h4 className={styles.subTitle}>Contact Global Visa Internationals for Visa and Documentation Assistance:</h4>
            <h1 className={styles.formtitle}>Visa And Immigration Inquiry Form</h1>
            <form id="inquiry-form" onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div>
                  <input className={styles.input} type="text" name="name" placeholder="Enter your name" required />
                </div>
                <div>
                  <input className={styles.input} type="text" name="phone" placeholder="Enter your phone number" required />
                </div>
              </div>

              <div className={styles.row}>
                <div>
                  <select className={styles.select} name="country" required>
                    <option value="">Select Country</option>
                    {["newzeland", "Europe", "UK", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <select className={styles.select} name="immigration_type" required>
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
                  <select className={styles.select} name="age" required>
                    <option value="">Select Age</option>
                    <option value="18-45">18-45</option>
                    <option value="45+">45+</option>
                  </select>
                </div>
              </div>

              <div className={styles.row}>
                <div>
                  <select className={styles.select} name="education" required>
                    <option value="">Select Qualification</option>
                    {["Diploma", "Bachelor's", "Master's", "Doctorate", "Doctor", "Other"].map((edu) => (
                      <option key={edu} value={edu}>{edu}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <input className={styles.input} type="email" name="email" placeholder="Enter your email" required />
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


          <h3 className={styles.subTitle}>Need Help With the DS-160 or Interview Prep?</h3>
          <p>Traveling the Europe on tourist visa  process can feel overwhelming — but you don’t have to do it alone. At Global Visa Internationals, we offer end-to-end support to ensure your application is error-free and your interview is successful.</p>
          <b className={styles.subTitle}>Here’s how we make your Europe visa journey seamless:</b>
          <ol>
            <h3 className={styles.subTitle}><li className={styles.subTitle}>Expert DS-160 Form Filling Assistance</li></h3>
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
          <form id="inquiry-form" onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div>
                <input className={styles.input} type="text" name="name" placeholder="Enter your name" required />
              </div>
              <div>
                <input className={styles.input} type="text" name="phone" placeholder="Enter your phone number" required />
              </div>
            </div>

            <div className={styles.row}>
              <div>
                <select className={styles.select} name="country" required>
                  <option value="">Select Country</option>
                  {["newzeland", "Europe", "UK", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              <div>
                <select className={styles.select} name="immigration_type" required>
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
                <select className={styles.select} name="age" required>
                  <option value="">Select Age</option>
                  <option value="18-45">18-45</option>
                  <option value="45+">45+</option>
                </select>
              </div>
            </div>

            <div className={styles.row}>
              <div>
                <select className={styles.select} name="education" required>
                  <option value="">Select Qualification</option>
                  {["Diploma", "Bachelor's", "Master's", "Doctorate", "Doctor", "Other"].map((edu) => (
                    <option key={edu} value={edu}>{edu}</option>
                  ))}
                </select>
              </div>
              <div>
                <input className={styles.input} type="email" name="email" placeholder="Enter your email" required />
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