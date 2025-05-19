"use client";
import styles from './Japan.module.css';
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
        <img src="/images/Japan1.png" alt="Europe Image" className={styles.JapanImage} />
      </div>

      <div className={styles.JapanSec}>


        <div className={styles.JapanData}>
          <h1 className={styles.Title}> Discover the Wonders of Japan: Your Tourist Visa Guide</h1>
          <p>Japan, the Land of the Rising Sun, beckons with its captivating blend of ancient traditions and modern marvels. From bustling cityscapes to serene natural beauty, Japan offers an unforgettable travel experience. Let Global Visa Internationals guide you through the process of obtaining your Japan Tourist Visa so you can embark on this incredible journey.</p>

          <h3 className={styles.subTitle}>Must-See Japan Tourist Spots</h3>
          <p>Prepare to be enchanted by Japan's diverse attractions:</p>

          <ul>
            <li>Tokyo Tower: An iconic symbol of Tokyo, offering panoramic views of the sprawling metropolis.</li>
            <li>Historic Temples of Kyoto: Immerse yourself in Japan's rich cultural heritage by exploring the countless stunning temples and shrines of Kyoto, such as Kinkaku-ji (the Golden Pavilion) and Fushimi Inari-taisha with its thousands of vibrant red torii gates.</li>

            <li>Cherry Blossoms in Spring (Sakura): Witness the breathtaking beauty of Japan during cherry blossom season, typically from late March to mid-April. Enjoy hanami (flower viewing) picnics under the delicate pink blooms.</li>

            <li>Stunning Landscapes of Mount Fuji: Marvel at the majestic Mount Fuji, Japan's highest peak and a UNESCO World Heritage site. Capture its iconic silhouette from various vantage points, including the Fuji Five Lakes region.</li>
          </ul>
          <p>Beyond these highlights, Japan offers a wealth of experiences, from the vibrant street food scene of Osaka to the serene beauty of the Japanese Alps and the historical significance of Hiroshima.</p>


          <h3 className={styles.subTitle}>Why Visit Japan? Unveiling Its Unique Allure</h3>
          <p> Japan captivates travelers for countless reasons:</p>
          <ol>
            <li>Rich History and Traditions: Explore ancient castles, serene gardens, and participate in traditional tea ceremonies to immerse yourself in Japan's fascinating past.</li>
            <br />
            <li>Diverse Cultures: Experience the unique blend of ancient customs and cutting-edge modernity, from the respectful etiquette to the vibrant pop culture.</li>
            <br />
            <li>World-Renowned Cuisine: Indulge in Japan's exquisite culinary scene, from delicate sushi and flavorful ramen to intricate kaiseki multi-course meals.</li>
            <br />
            <li>Breathtaking Landscapes: Discover dramatic coastlines, towering mountains, tranquil forests, and picturesque rural villages. Japan's natural beauty is truly awe-inspiring.</li>
            <li>Exceptional Hospitality (Omotenashi): Experience the renowned Japanese hospitality, characterized by thoughtfulness, politeness, and attention to detail.</li>
            <li>Safety and Cleanliness: Japan is known for its low crime rates and impeccably clean environment, making it a comfortable and secure travel destination.</li>
          </ol>
          <p>These are just a few of the many compelling reasons to visit Japan. The country offers a unique and enriching experience for every type of traveler..</p>

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
          <h2 className={styles.subTitle}> Flight Costs from India to Japan (2025)</h2>
          <table className={styles.table}>
            <thead>
              <th>Destination</th>
              <th>Flight Type</th>
              <th>Starting Price (INR)</th>
              <th>Notes</th>
            </thead>
            <tbody>
              <tr>
                <td>Tokyo</td>
                <td>1+ stops</td>
                <td>₹29,759</td>
                <td>Cheapest in September</td>
              </tr>
              <tr>
                <td>Osaka</td>
                <td>1+ stops</td>
                <td>₹31,702</td>
                <td>Competitive fares available</td>
              </tr>
              <tr>
                <td>Nagoya</td>
                <td>	1+ stops</td>
                <td>₹32,437</td>
                <td>		Slightly higher fares</td>
              </tr>
              <tr>
                <td>Fukuoka</td>
                <td>	1+ stops</td>
                <td>	₹33,021</td>
                <td>Affordable options</td>
              </tr>

            </tbody>
          </table>
          <p className={styles.note}>Note: Costs are approximate and can vary based on exchange rates, specific cities visited, and personal spending habits.</p>

          <h2>Accommodation Costs in Japan</h2>
          <p>Japan offers a range of accommodations to suit various budgets.</p>
          <table className={styles.table}>
            <thead>
              <th>Accommodation Type</th>
              <th>Price Range (JPY)</th>
              <th>Price Range (INR)</th>
              <th>Description</th>
            </thead>
            <tbody>
              <tr>
                <td>Hostels</td>
                <td>1,500–4,000</td>
                <td>₹900–₹2,400</td>
                <td>Budget-friendly, shared facilities</td>
              </tr>
              <tr>
                <td>Capsule Hotels</td>
                <td>5,000–15,000</td>
                <td>₹3,000–₹9,000</td>
                <td>Mid-range, convenient locations</td>
              </tr>
              <tr>
                <td>Minshuku</td>
                <td>5,000–20,000</td>
                <td>	₹3,000–₹12,000</td>
                <td>Traditional guesthouses with meals</td>
              </tr>
              <tr>
                <td>Luxury Hotels/Ryokans</td>
                <td>30,000–300,000</td>
                <td>₹18,000–₹180,000</td>
                <td>High-end stays with premium services</td>
              </tr>

            </tbody>
          </table>

          <h2>Food and Dining Expenses</h2>
          <p>Japanese cuisine caters to all budgets, from street food to fine dining.</p>
          <table className={styles.table}>
            <thead>
              <th>Meal Type</th>
              <th>Price Range (JPY)</th>
              <th>Price Range (INR)</th>
              <th>Description</th>
            </thead>
            <tbody>
              <tr>
                <td>Hostels</td>
                <td>	300–1,500</td>
                <td>	₹180–₹900</td>
                <td>Ramen, onigiri, and snacks</td>
              </tr>
              <tr>
                <td>Casual Dining</td>
                <td>	1,000–1,500</td>
                <td>₹600–₹900</td>
                <td>	Chain restaurants and izakayas</td>
              </tr>
              <tr>
                <td>Daily Food Budget</td>
                <td>~10,000</td>
                <td>~₹6,000</td>
                <td>Three meals and snacks</td>
              </tr>
              <tr>
                <td>Fine Dining</td>
                <td>10,000–50,000</td>
                <td>₹6,000–₹30,000</td>
                <td>	Sushi, kaiseki experiences</td>
              </tr>

            </tbody>
          </table>

          <h2>Transportation Costs</h2>
          <p>Efficient transportation is a hallmark of Japan, with options for every traveler.</p>
          <h3>Local Travel</h3>
          <table className={styles.table}>
            <thead>
              <th>Mode</th>
              <th>Cost (JPY)</th>
              <th>Cost (INR)</th>
              <th>Notes</th>
            </thead>
            <tbody>
              <tr>
                <td>Metro/Bus Fare</td>
                <td>200–500</td>
                <td>₹120–₹300</td>
                <td>Per ride</td>
              </tr>
              <tr>
                <td>Day Pass</td>
                <td>~1,600</td>
                <td>	~₹960</td>
                <td>Unlimited daily travel</td>
              </tr>
            </tbody>
          </table>
          <h3>Long-Distance Travel</h3>
          <table className={styles.table}>
            <thead>
              <th>Mode</th>
              <th>Cost (JPY)</th>
              <th>Cost (INR)</th>
              <th>Notes</th>
            </thead>
            <tbody>
              <tr>
                <td>Shinkansen (Tokyo-Kyoto)</td>
                <td>~14,000</td>
                <td>~₹8,400</td>
                <td>One-way ticket</td>
              </tr>
              <tr>
                <td>Japan Rail Pass (7-day)</td>
                <td>50,000</td>
                <td>	~₹30,000</td>
                <td>Unlimited JR trains</td>
              </tr>
            </tbody>
          </table>

          <h2>Estimated Total Trip Cost (Excluding Flights)</h2>
          <table className={styles.table}>
            <thead>
              <th>Expense Category</th>
              <th>Budget Traveler (INR)</th>
              <th>Mid-Range Traveler (INR)</th>
              <th>Luxury Traveler (INR)</th>
            </thead>
            <tbody>
              <tr>
                <td>Accommodation</td>
                <td>₹900–₹3,000/night</td>
                <td>₹3,000–₹9,000/night</td>
                <td>	₹18,000–₹180,000/night</td>
              </tr>
              <tr>
                <td>Food</td>
                <td>₹1,800–₹3,000/day</td>
                <td>₹3,000–₹6,000/day</td>
                <td>₹6,000–₹30,000/day</td>
              </tr>
              <tr>
                <td>Transportation</td>
                <td>₹600–₹1,800/day</td>
                <td>	₹1,800–₹6,000/day</td>
                <td>₹6,000–₹30,000/day</td>
              </tr>
              <tr>
                <td>Sightseeing/Shopping</td>
                <td>₹1,200–₹3,000/day</td>
                <td>₹3,000–₹6,000/day</td>
                <td>	₹6,000–₹30,000/day</td>
              </tr>
              <tr>
                <td>Total (7 days)</td>
                <td>₹28,000–₹70,000</td>
                <td>	₹70,000–₹140,000</td>
                <td>	₹140,000–₹700,000</td>
              </tr>
            </tbody>
          </table>

          <p className={styles.note}>Note: Costs are approximate and can vary based on exchange rates, specific cities visited, and personal spending habits.</p>

          <h2 className={styles.subTitle}>Navigating the Japan Tourist Visa Process</h2>
          <p>Obtaining a tourist visa for Japan involves several key steps. While the specific requirements may vary based on your nationality, the general process typically includes:</p>
          <ol>
            <li>Determining Visa Requirements: Check the website of the Japanese Ministry of Foreign Affairs or the Japanese embassy/consulate in your country to confirm if you need a visa and the specific requirements for your nationality.</li>
            <li>Gathering Required Documents: This usually includes a valid passport, visa application form, passport-sized photographs, proof of sufficient funds, travel itinerary, and hotel booking confirmations. Additional documents may be required depending on your circumstances.</li>
            <li>Submitting Your Application: You will typically need to submit your application in person at the Japanese embassy or consulate in your country. Some countries may have authorized visa application centers.</li>
            <li>Visa Interview (if required): In some cases, you may be required to attend an interview as part of the visa application process.1 </li>
            <li>Visa Processing: The processing time for a Japan tourist visa can vary. It's crucial to apply well in advance of your intended travel dates.</li>
            <li>Receiving Your Visa: Once your application is approved, your visa will be affixed to your passport.</li>
          </ol>
          <p>The Japan visa process can seem complex, but Global Visa Internationals is here to simplify it for you.</p>

          <h3 className={styles.subTitle}>Let Global Visa Internationals Be Your Guide to Japan</h3>
          <p>Planning your dream trip to Japan should be exciting, not stressful. At Global Visa Internationals, we provide comprehensive assistance to ensure a smooth and successful Japan tourist visa application process.</p>
          <b className={styles.subTitle}>Our services include:</b>
          <ul>
            <li>Personalized guidance on Japan visa requirements based on your nationality.</li>
            <li>Assistance with gathering and preparing the necessary documentation for your Japan tourist visa.</li>
            <li>Thorough review of your application to minimize errors and delays.</li>
            <li>Mock interviews for visa applications to help you feel confident and prepared.</li>
            <li>One-on-one consultations to address all your questions and concerns about traveling to Japan and the visa process.</li>

          </ul>
          <p className={styles.note}>Don't let the complexities of the Japan visa application stand in the way of your adventure. Contact Global Visa Internationals today for expert support and personalized assistance. Let us help you turn your dream of exploring Japan into a reality!</p>


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