"use client";
import styles from './new-zealand.module.css';
import React, { useState, useEffect } from 'react';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Dubai() {

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
  <title>New Zealand Tourist Visa From India | Application, Fees & Documents</title>
  <meta name="description" content="Apply for a New Zealand Tourist Visa with expert help from Global Visa Internationals. Get complete support on visa fees, documentation, process, and travel planning." />
  <meta name="keywords" content="New Zealand tourist visa, apply for New Zealand visa from India, NZ visa cost, New Zealand visa consultants India, tourist attractions New Zealand, NZ visa process, visit visa fees" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Global Visa Internationals" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#0a66c2" />

  {/* ✅ Mobile-specific SEO */}
  <meta name="HandheldFriendly" content="true" />
  <meta name="MobileOptimized" content="320" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

  <link rel="canonical" href="https://www.globalvisainternationals.com/visa/tourist-visa/new-zealand" />
  <link rel="icon" href="/favicon.ico" />
  <link rel="preload" as="image" href="https://www.globalvisainternationals.com/images/new-zealand-tourist-visa-banner.webp" />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Apply for New Zealand Tourist Visa From India | Global Visa Internationals" />
  <meta property="og:description" content="Planning to visit New Zealand? Get full support for your tourist visa application, cost estimate, documents checklist, and travel tips from Global Visa Internationals." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.globalvisainternationals.com/visa/tourist-visa/new-zealand" />
  <meta property="og:image" content="https://www.globalvisainternationals.com/images/new-zealand-tourist-visa-banner.webp" />
  <meta property="og:locale" content="en_IN" />
  <meta property="og:locale:alternate" content="en_US" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="New Zealand Tourist Visa | Cost, Process & Requirements" />
  <meta name="twitter:description" content="Get expert assistance to apply for a New Zealand tourist visa. We help with the visa process, cost, documents, and travel planning." />
  <meta name="twitter:image" content="https://www.globalvisainternationals.com/images/new-zealand-tourist-visa-banner.webp" />
  <meta name="twitter:url" content="https://www.globalvisainternationals.com/visa/tourist-visa/new-zealand" />

  {/* Geo Tags */}
  <meta name="geo.region" content="NZ" />
  <meta name="geo.placename" content="Auckland" />
  <meta name="geo.region" content="IN-KA" />
  <meta name="geo.placename" content="Bengaluru" />
  <meta name="ICBM" content="12.9716,77.5946" />

  {/* LocalBusiness Structured Data */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Global Visa Internationals",
      "url": "https://www.globalvisainternationals.com",
      "logo": "https://www.globalvisainternationals.com/logo.png",
      "description": "Trusted visa consultants in India for New Zealand tourist visa support including application assistance, documents, and travel consultation.",
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
        "https://www.facebook.com/globalvisainternationals/",
        "https://www.instagram.com/globalvisa_internationals/",
        "https://www.linkedin.com/company/global-visa-internationals/",
        "https://x.com/GLOBALVISA1505",
        "https://www.youtube.com/@globalVisaInternationals",
        "https://www.google.com/maps/place/Global+Visa+Internationals/@12.967478,77.6035421,17z"
      ]
    })
  }} />

  {/* BreadcrumbList Structured Data */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.globalvisainternationals.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "New Zealand"
        }
      ]
    })
  }} />

  {/* FAQPage Structured Data - ✅ Cleaned version */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the cost of a New Zealand tourist visa from India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of a New Zealand tourist visa from India typically ranges between ₹8,000 to ₹12,000, depending on the visa type and processing time."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are required for a New Zealand tourist visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Applicants must submit a valid passport, passport-size photographs, proof of funds, travel itinerary, accommodation details, and return flight tickets."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to get a New Zealand tourist visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Processing time for a New Zealand tourist visa typically takes 20 to 30 working days, depending on the application and document verification process."
          }
        },
        {
          "@type": "Question",
          "name": "Is a personal interview required for a New Zealand tourist visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In most cases, a personal interview is not required. However, the embassy may request additional information or an interview in some cases."
          }
        },
        {
          "@type": "Question",
          "name": "Can Global Visa Internationals help with the application process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We offer end-to-end support for the New Zealand tourist visa process, including documentation assistance, mock interviews, and application tracking."
          }
        }
      ]
    })
  }} />

  {/* Service Structured Data */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "New Zealand Tourist Visa Application Assistance",
      "provider": {
        "@type": "Organization",
        "name": "Global Visa Internationals",
        "url": "https://www.globalvisainternationals.com"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Visa Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "New Zealand Visitor Visa (Tourist Stream)"
            }
          }
        ]
      }
    })
  }} />
</head>



      <div className={styles.imageContainer}>
        <img src="/images/new-zealand-tourist-visa-banner.webp" alt="new zealand tourist visa banner" className={styles.JapanImage} />
      </div>

      <div className={styles.JapanSec}>

        <div className={styles.JapanData}>

          <div className={styles.formSection1}>

            <h1 className={styles.FormTitle}>Visa And Immigration Inquiry Form</h1>
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

          <h1 className={styles.Title}>New-Zeland Tourist Visa | Global Visa Internationals | The Best Visa and immigraton Assistance in India</h1>
          <p>New Zealand is an island nation in the southwestern Pacific Ocean, is known for its stunning natural landscapes, vibrant Māori culture, and adventure tourism. It consists of two main landmasses—the North Island and the South Island—and numerous smaller islands. With its diverse geography ranging from snow-capped mountains and fjords to beaches and volcanic plateaus, New Zealand is a dream destination for nature lovers and thrill-seekers alike.</p>
          <h2 className={styles.subTitle}>Top Tourist Places In New Zealand</h2>
          <p> Discover the best places to visit in New Zealand:</p>
          <ol>
            <li>Queenstown – Adventure capital with bungee jumping, skydiving, and stunning alpine views.</li>

            <li>Rotorua – Geothermal wonders and Maori cultural experiences.</li>

            <li>Auckland – A cosmopolitan city with beautiful harbors, shopping, and dining.</li>

            <li>Milford Sound – Spectacular fjord landscapes and wildlife.</li>

            <li>Waiheke Island – Wine tasting, beaches, and boutique art galleries.</li>

            <li>Mount Cook National Park – Perfect for hiking, stargazing, and scenic photography.</li>

            <li>Lake Tekapo – Famous for its turquoise waters and Church of the Good Shepherd.</li>

            <li>Franz Josef & Fox Glaciers – Glacier walks and heli-hikes through icy terrain.</li>
          </ol>

          <h2 className={styles.subTitle}>Cost of Traveling to New Zealand from India (2025 Estimate)</h2>
          <p>Planning your travel budget? Here's an average breakdown for a 10-day trip to New Zealand from India:</p>
          <table className={styles.table}>
            <thead>
              <th>Category</th>
              <th>Estimated Cost (INR)</th>
            </thead>
            <tbody>
              <tr>
                <td>Round-trip Flights</td>
                <td>₹70,000 – ₹1,10,000</td>
              </tr>
              <tr>
                <td>Accommodation</td>
                <td>₹4,000 – ₹10,000/night</td>
              </tr>
              <tr>
                <td>Food & Dining</td>
                <td>	₹1,000 – ₹2,000/day</td>
              </tr>
              <tr>
                <td>Transportation</td>
                <td>₹10,000 – ₹20,000 (car rentals, local travel)</td>
              </tr>
              <tr>
                <td>Activities & Tours</td>
                <td>₹20,000 – ₹40,000</td>
              </tr>
              <tr>
                <td>Visa Application</td>
                <td>₹7,500 – ₹12,000</td>
              </tr>
            </tbody>

          </table>
          <div className={styles.formSection1}>

            <h1 className={styles.FormTitle}>Visa And Immigration Inquiry Form</h1>
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
          <h2 className={styles.subTitle}>Top Reasons to Visit New Zealand in 2025</h2>
          <p>Why choose New Zealand for your next vacation?</p>

          <ul>
            <li>Nature Lover’s Paradise – Lush forests, glaciers, lakes, and mountains.</li>
            <li>Adventure Sports – Skydiving, bungee jumping, white-water rafting.</li>
            <li>Safe & Tourist-Friendly – Ranked as one of the safest countries to travel.</li>
            <li>Rich Maori Culture – Unique traditions, food, and performances.</li>
            <li>Filming Locations – Visit Hobbiton and other iconic LOTR film sets.</li>
            <li>Planning your first overseas trip? New Zealand is the perfect destination for families, couples, and solo travelers alike.</li>
          </ul>
          <p className={styles.note}>Planning your first overseas trip? New Zealand is the perfect destination for families, couples, and solo travelers alike.</p>

          <div className={styles.formSection1}>

            <h1 className={styles.FormTitle}>Visa And Immigration Inquiry Form</h1>
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
          <h2 className={styles.subTitle}>How to Apply for a New Zealand Tourist Visa from India</h2>
          <p>Global Visa Internationals offers complete support for your New Zealand visitor visa application.</p>
          <h3 className={styles.subTitle}>New Zealand Tourist Visa Requirements:</h3>
          <ul>
            <li>Valid passport (minimum 6 months validity)</li>
            <li>Recent passport-sized photographs</li>
            <li>Travel itinerary and accommodation bookings</li>
            <li>Proof of financial capacity</li>
            <li>Employment or business proof</li>
            <li>Cover letter and visa application form</li>
          </ul>
          <h3 className={styles.subTitle}>Visa Application Process:</h3>
          <ul>
            <li>Initial Consultation & Eligibility Check</li>
            <li>Document Collection & Review</li>
            <li>Filling the Visa Application Form</li>
            <li>Booking Appointments (if required)</li>
            <li>Submitting the Application Online or via VAC</li>
            <li>Visa Decision & Passport Collection</li>
          </ul>
          <p className={styles.note}>We handle everything from visa documentation to mock interview sessions—making the process stress-free and successful.</p>

          <div className={styles.formSection1}>

            <h1 className={styles.FormTitle}>Visa And Immigration Inquiry Form</h1>
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
          <h2 className={styles.subTitle}>Why Choose Global Visa Internationals?</h2>
          <p>At Global Visa Internationals, we provide:</p>
          <ul>
            <li>End-to-End Visa Assistance</li>
            <li> Expert Guidance on Documentation</li>
            <li> Mock Interview Preparation</li>
            <li>Personalized One-on-One Consultations</li>
            <li>Tracking & Updates Throughout the Visa Process</li>
          </ul>
          <p>Let us take care of the complex paperwork so you can focus on planning your dream trip!</p>
          <h4 className={styles.subTitle}> Contact us today to speak with a visa expert or book a free consultation.</h4>
          <h3 className={styles.subTitle}> Serving clients PAN India – with a strong presence in Bangalore.</h3>
          <h2 className={styles.subTitle}>Get in Touch for New Zealand Tourist Visa Assistance</h2>


        </div>


        <div className={styles.formSection}>

          <h1 className={styles.FormTitle}>Visa And Immigration Inquiry Form</h1>
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