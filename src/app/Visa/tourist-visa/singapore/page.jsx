"use client";
import styles from './Singapore.module.css';
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
  <title>Singapore Tourist Visa From India | Cost, Process & Top Attractions</title>
  <meta name="description" content="Apply for a Singapore Tourist Visa with expert guidance from Global Visa Internationals. Know the visa process, fees, documents required, and explore top tourist destinations in Singapore." />
  <meta name="keywords" content="Singapore tourist visa, apply for Singapore tourist visa from India, Singapore visa cost, Singapore visa consultants in India, tourist attractions in Singapore, Singapore visa process, Singapore visa fees" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Global Visa Internationals" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=0" />
  <meta name="theme-color" content="#0a66c2" />
  <link rel="canonical" href="https://www.globalvisainternationals.com/visa/tourist-visa/singapore" />
  <link rel="icon" href="/favicon.ico" />
  <link rel="preload" as="image" href="https://www.globalvisainternationals.com/images/singapore-tourist-visa-global-visa-internationals.png" imagesrcset="https://www.globalvisainternationals.com/images/singapore-tourist-visa-global-visa-internationals.png 1x" />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Apply for Singapore Tourist Visa From India | Global Visa Internationals" />
  <meta property="og:description" content="Planning to visit Singapore? Get expert assistance for your tourist visa application, cost estimate, and must-visit places. Start your Singapore journey with Global Visa Internationals." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.globalvisainternationals.com/visa/tourist-visa/singapore" />
  <meta property="og:image" content="https://www.globalvisainternationals.com/images/singapore-tourist-visa-global-visa-internationals.png" />
  <meta property="og:locale" content="en_IN" />
  <meta property="og:locale:alternate" content="en_US" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Singapore Tourist Visa | Application, Cost & Documents Needed" />
  <meta name="twitter:description" content="Explore Singapore with the right tourist visa. Get visa application support, travel cost breakdown, and expert help from Global Visa Internationals." />
  <meta name="twitter:image" content="https://www.globalvisainternationals.com/images/singapore-tourist-visa-global-visa-internationals.png" />
  <meta name="twitter:url" content="https://www.globalvisainternationals.com/visa/tourist-visa/singapore" />
  <meta name="twitter:site" content="@GlobalVisaIntl" />

  {/* Geo Location Tags */}
  <meta name="geo.region" content="SG" />
  <meta name="geo.placename" content="Singapore" />
  <meta name="geo.region" content="IN-KA" />
  <meta name="geo.placename" content="Bengaluru" />
  <meta name="ICBM" content="12.9716,77.5946" />

  {/* Local Business Structured Data */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Global Visa Internationals",
      "url": "https://www.globalvisainternationals.com",
      "logo": "https://www.globalvisainternationals.com/logo.png",
      "description": "Leading visa consultancy offering expert Singapore tourist visa assistance from India. We help with visa application, documentation, and more.",
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
          "name": "Tourist Visa",
          "item": "https://www.globalvisainternationals.com/visa/tourist-visa"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Singapore"
        }
      ]
    })
  }} />

  {/* FAQPage Structured Data */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the cost of a Singapore Tourist Visa from India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost typically ranges from ₹2,500 to ₹3,500 depending on processing and service charges."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are required for a Singapore tourist visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A valid passport, recent photographs, bank statements, travel itinerary, and confirmed hotel booking are usually required."
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
      "serviceType": "Singapore Tourist Visa Application Assistance",
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
              "name": "Tourist Visa - Single Entry"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Tourist Visa - Multiple Entry"
            }
          }
        ]
      }
    })
  }} />
</head>



      <div className={styles.imageContainer}>
        <img src="/images/singapore-tourist-visa-global-visa-internationals.png" alt="Singapore-Turist-Visa-Global-Visa-Internationals" className={styles.JapanImage} />
      </div>

      <div className={styles.JapanSec}>

        <div className={styles.JapanData}>
          <h1 className={styles.Title}>Your Gateway to Singapore: Tourist Visa Assistance by Global Visa Internationals</h1>
          <p>Singapore, a dynamic island nation, captivates visitors with its stunning Singapore skyline, verdant Singapore gardens, and a rich tapestry of Singapore culture. Whether you envision yourself exploring futuristic landscapes or savoring diverse culinary experiences, a Singapore holiday promises an unforgettable escape. Allow Global Visa Internationals to streamline your travel by providing expert assistance with your Singapore tourist visa application. Contact Global Visa Internationals today to begin your journey!</p>

          <h3 className={styles.subTitle}>Discover the Must-See Singapore Attractions</h3>
          <p>Embark on a journey to discover the iconic landmarks and hidden gems that define Singapore's unique charm:</p>

          <ul>
            <li><b className={styles.subTitle}>Singapore attractions,</b> Immerse yourself in the mesmerizing Supertree Grove, discover the wonders of the Flower Dome and Cloud Forest conservatories, and witness the enchanting Garden Rhapsody light and sound spectacle.  Contact Global Visa Internationals for a smooth visa process to experience this!</li>

            <li><b className={styles.subTitle}> Singapore skyline: </b> Marvel at the architectural grandeur of Marina Bay Sands, capture breathtaking panoramic views of the Singapore skyline from the Sands SkyPark Observation Deck, and experience the excitement of its renowned casino. </li>

            <li><b className={styles.subTitle}>Sentosa Island:</b> Escape to the recreational haven of Sentosa Island, offering thrilling adventures at Universal Studios Singapore, serene beaches, the captivating S.E.A. Aquarium, and the iconic Merlion statue.</li>

            <li><b className={styles.subTitle}>Orchard Road Shopping:</b> Indulge in a world-class Orchard Road shopping experience along this prestigious boulevard, featuring luxurious boutiques, upscale department stores, and vibrant shopping malls.</li>

            <li><b className={styles.subTitle}>Singapore Food at Hawker Centres: </b>Immerse yourself in Singapore's vibrant culinary scene by exploring authentic Singapore food at local hawker centres, offering a delectable array of affordable and diverse dishes.</li>
            <li><b className={styles.subTitle}>Little India Singapore and Chinatown Singapore - Little India Singapore:</b> Experience the rich Singapore culture by wandering through the colorful streets of Little India Singapore and Chinatown Singapore, filled with ornate temples, bustling markets, and authentic cuisine.</li>

            <li><b className={styles.subTitle}>Singapore Botanic Gardens:</b> Unwind in the lush greenery of the Singapore Botanic Gardens, a UNESCO World Heritage Site, featuring the stunning National Orchid Garden and serene walking trails.</li>

            <li><b className={styles.subTitle}>Singapore Flyer:</b> Take a ride on the Singapore Flyer, one of the world's largest observation wheels, for breathtaking views of the city skyline and Marina Bay.</li>

            <li><b className={styles.subTitle}>Clarke Quay:</b> Experience the vibrant nightlife of Clarke Quay, a riverside quay filled with restaurants, bars, and clubs, perfect for dining and entertainment.</li>
            <li><b className={styles.subTitle}>ingapore Zoo:</b> Discover the wonders of wildlife at the Singapore Zoo, renowned for its open-concept enclosures and diverse animal exhibits.</li>
            <li><b className={styles.subTitle}>Marina Bay Sands SkyPark:</b> Visit the Marina Bay Sands SkyPark for panoramic views of the city skyline, gardens, and waterfront.</li>
            <li><b className={styles.subTitle}>Changi Airport:</b> Experience the world-class facilities of Changi Airport, including the Jewel Changi Airport with its stunning indoor waterfall and lush gardens.</li>
            <li><b className={styles.subTitle}>Singapore Night Safari:</b> Embark on a unique adventure at the Singapore Night Safari, the world's first nocturnal zoo, where you can observe wildlife in their natural habitat.</li>
            <li><b className={styles.subTitle}>Raffles Hotel Singapore:</b> Visit the iconic Raffles Hotel Singapore, a colonial-style luxury hotel known for its historical significance and the famous Singapore Sling cocktail.</li>
            <li><b className={styles.subTitle}>East Coast Park:</b> Relax at East Coast Park, a popular recreational area with beaches, cycling paths, and water sports activities.</li>
            <li><b className={styles.subTitle}>Singapore ArtScience Museum:</b> Explore the futuristic ArtScience Museum at Marina Bay Sands, featuring innovative exhibitions that blend art and science.</li>
            <li><b className={styles.subTitle}>Singapore River Cruise:</b> Take a scenic cruise along the Singapore River to admire the city's skyline and historical landmarks.</li>
            <li><b className={styles.subTitle}>Jurong Bird Park:</b> Visit the Jurong Bird Park, home to a diverse collection of birds and stunning aviaries.</li>
            <li><b className={styles.subTitle}>Esplanade - Theatres on the Bay:</b> Experience the vibrant arts scene at Esplanade, a performing arts center with theaters, concert halls, and outdoor spaces.</li>
            <li><b className={styles.subTitle}>Singapore Science Centre:</b> Engage in interactive exhibits and educational experiences at the Singapore Science Centre.</li>
            <li><b className={styles.subTitle}>Singapore River Safari:</b> Explore the River Safari, a wildlife park featuring river-themed exhibits and the Giant Panda Forest.</li>
            <li><b className={styles.subTitle}>Singapore National Gallery:</b> Discover Singapore's art and culture at the National Gallery, showcasing a vast collection of Southeast Asian art.</li>
          </ul>
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

          <h3 className={styles.subTitle}>Discover the Reasons to Visit Singapore</h3>
          <p>Singapore's unique blend of modernity, cultural richness, and natural beauty makes it a compelling destination for all types of travelers:</p>
          <ol>
            <li>Safe Travel Singapore and Clean City Singapore: Singapore is globally recognized for its exceptionally low crime rate and remarkably clean environment, offering visitors unparalleled peace of mind.</li>

            <li>Singapore Culture Diversity and Multicultural Singapore: Immerse yourself in Singapore's vibrant Singapore culture diversity, a harmonious blend of Chinese, Malay, Indian, and Western influences evident in its cuisine, festivals, and architecture, creating a truly multicultural Singapore.</li>

            <li>Top Attractions Singapore and Singapore Sightseeing: From futuristic Singapore gardens to thrilling theme parks, Singapore boasts a wealth of top attractions Singapore ensuring a memorable Singapore sightseeing experience.</li>

            <li>Singapore Food Scene and Best Food in Singapore: Indulge in the diverse and delectable Singapore food scene, ranging from Michelin-starred establishments to the best food in Singapore found in its bustling hawker centres.</li>

            <li>Singapore Changi Airport and Transportation in Singapore: Benefit from Singapore's Changi Airport, a major international hub offering seamless global connections, complemented by an excellent and efficient transportation in Singapore network.</li>

            <li>Parks in Singapore and Singapore Gardens: Despite its modern urban landscape, Singapore boasts numerous lush parks in Singapore and stunning Singapore gardens, providing refreshing escapes within the city. </li>
          </ol>


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

          <h2 className={styles.subTitle}>🇸🇬 Singapore Travel Cost Guide – May 2025</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Category</th>
                <th>Estimated Cost (SGD)</th>
                <th>Estimated Cost (INR)</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Category">Flights (One-way)</td>
                <td data-label="SGD">S$120–S$380</td>
                <td data-label="INR">₹7,490–₹22,000</td>
                <td data-label="Details">From major Indian cities – <a href="https://www.airindia.com/en-in/book-flights/flights-to-singapore?utm_source=chatgpt.com" target="_blank">Air India</a></td>
              </tr>
              <tr>
                <td data-label="Category">Accommodation (Per night)</td>
                <td data-label="SGD">S$20–S$423</td>
                <td data-label="INR">₹1,250–₹26,000</td>
                <td data-label="Details"><a href="https://www.booking.com/city/sg/singapore.html?utm_source=chatgpt.com" target="_blank">Booking.com</a>, <a href="https://www.agoda.com/country/singapore.html?utm_source=chatgpt.com" target="_blank">Agoda</a></td>
              </tr>
              <tr>
                <td data-label="Category">Food (Per day)</td>
                <td data-label="SGD">S$15–S$100</td>
                <td data-label="INR">₹950–₹6,300</td>
                <td data-label="Details">Hawker to mid-range – <a href="https://www.numbeo.com/cost-of-living/country_result.jsp?country=Singapore&utm_source=chatgpt.com" target="_blank">Numbeo</a></td>
              </tr>
              <tr>
                <td data-label="Category">Public Transport</td>
                <td data-label="SGD">S$4–S$10</td>
                <td data-label="INR">₹250–₹630</td>
                <td data-label="Details"><a href="https://www.ptc.gov.sg/fare-regulation/bus-rail/fare-structure?utm_source=chatgpt.com" target="_blank">Public Transport Council</a></td>
              </tr>
              <tr>
                <td data-label="Category">Attractions</td>
                <td data-label="SGD">S$10–S$56</td>
                <td data-label="INR">₹630–₹3,500</td>
                <td data-label="Details"><a href="https://www.singapore-tickets.com/?utm_source=chatgpt.com" target="_blank">Singapore Tickets</a></td>
              </tr>
              <tr>
                <td data-label="Category">Visa (Indian Citizens)</td>
                <td data-label="SGD">S$30 + S$10.50</td>
                <td data-label="INR">₹1,900 + ₹650</td>
                <td data-label="Details"><a href="https://www.mfa.gov.sg/Overseas-Mission/Mumbai/Consular-Services/Visa-Information?utm_source=chatgpt.com" target="_blank">Singapore MFA</a></td>
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

          <h3 className={styles.subTitle}>Let Global Visa Internationals Be Your Guide to Japan Visa Application</h3>
          <p>Planning your dream trip to Japan should be exciting, not stressful. At Global Visa Internationals, we provide comprehensive assistance to ensure a smooth and successful Japan tourist visa application process.</p>
          <b className={styles.subTitle}>Our Japan Visa Services include:</b>
          <ul>
            <li>Personalized guidance on Japan visa requirements based on your nationality.</li>
            <li>Assistance with gathering and preparing the necessary documentation for your Japan tourist visa.</li>
            <li>Thorough review of your application to minimize errors and delays.</li>
            <li>Mock interviews for visa applications to help you feel confident and prepared.</li>
            <li>One-on-one consultations to address all your questions and concerns about traveling to Japan and the visa process.</li>

          </ul>
          <p className={styles.note}>Don't let the complexities of the Japan visa application stand in the way of your adventure. Contact Global Visa Internationals today for expert support and personalized assistance. Let us help you turn your dream of exploring Japan into a reality!</p>

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
          <h1 className={styles.Title}>Navigating Singapore Visa Requirements for Indian Citizens with Global Visa Internationals</h1>
          <p>Planning your dream Singapore holiday? For Indian citizens holding ordinary passports, a valid Singapore tourist visa is essential before you embark on your journey to explore the stunning Singapore skyline and vibrant Singapore culture. <strong className={styles.subTitle}>Global Visa Internationals</strong> is here to simplify this crucial step, ensuring a smooth and stress-free visa application process. <strong className={styles.subTitle}>Don't take the risk of visa rejection; contact Global Visa Internationals for expert assistance and guidance!</strong></p>

          <h2 className={styles.subTitle}>Understanding the Key Singapore Visa Requirements:</h2>
          <p>To kickstart your Singapore tourist visa application, you'll typically need to prepare the following Singapore visa documents. Let <strong className={styles.subTitle}>Global Visa Internationals</strong> guide you through each step to ensure your application is complete and accurate:</p>
          <ul>
            <li><strong className={styles.subTitle}>Passport:</strong> A valid passport with at least six months of validity from your intended date of entry into Singapore and a minimum of two blank pages.</li>
            <li><strong className={styles.subTitle}>Application Form:</strong> A meticulously completed and signed Singapore visa application form (Form 14A). Our experts at <strong className={styles.subTitle}>Global Visa Internationals</strong> will ensure this form is filled out correctly to avoid any potential delays.</li>
            <li><strong className={styles.subTitle}>Photographs:</strong> Recent passport-sized color photographs (usually two) taken against a white background, adhering to the specific size requirements set by the Singaporean authorities (e.g., 35mm x 45mm).</li>
            <li><strong className={styles.subTitle}>Cover Letter:</strong> A well-drafted personal covering letter clearly stating the purpose of your visit to Singapore, the intended duration of your stay, and a detailed outline of your travel plans. If you are employed, this letter might need to be on your company's official letterhead.</li>
            <li><strong className={styles.subTitle}>Financial Proof:</strong> Original bank statements for the last six months, duly attested by a bank official, demonstrating sufficient funds to cover your expenses during your Singapore holiday (please note that some sources suggest a minimum balance of approximately ₹80,000).</li>
            <li><strong className={styles.subTitle}>Confirmed Return Ticket:</strong> Proof of your confirmed return or onward flight ticket, indicating your departure from Singapore.</li>
            <li><strong className={styles.subTitle}>Accommodation Proof:</strong> Confirmed hotel booking details, including the complete address and contact information of your accommodation in Singapore.</li>
            <li><strong className={styles.subTitle}>Form V39A (Letter of Introduction for Visa Application - LOI):</strong> This form might be a mandatory requirement and typically needs to be issued by a local contact in Singapore, who must be a Singapore citizen or a Permanent Resident. <strong className={styles.subTitle}>Global Visa Internationals</strong> can provide guidance on this requirement.</li>
            <li><strong className={styles.subTitle}>Other Supporting Documents:</strong> Depending on your individual circumstances (such as employment status, business ownership, or student status), additional Singapore visa documents like salary slips, business registration certificates, or a No Objection Certificate from parents might be necessary.</li>
          </ul>

          <h2 className={styles.subTitle}>How to Apply for Your Singapore Visa with Global Visa Internationals (Singapore Visa Online Application):</h2>
          <p>The Singapore High Commission in India mandates that all visa applications be submitted through authorized visa agents. <strong className={styles.subTitle}>Global Visa Internationals</strong> is your trusted partner in navigating this process seamlessly. Here's how we assist you with your Singapore visa online application:</p>
          <ul>
            <li><strong className={styles.subTitle}>Expert Consultation:</strong> Our knowledgeable consultants will provide you with personalized guidance based on your specific travel needs and circumstances. Contact Global Visa Internationals today to schedule your consultation.
            </li>
            <li><strong className={styles.subTitle}>Authorized Agent Assistance:</strong> We act as your authorized visa agent, managing the entire application process on your behalf.</li>
            <li><strong className={styles.subTitle}>Online Application Support:</strong> We will assist you in accurately completing the online Singapore visa application form, ensuring all necessary details are correctly filled.</li>
            <li><strong className={styles.subTitle}>Document Guidance and Upload:</strong> Our team will provide you with a comprehensive checklist of the required Singapore visa documents and guide you on how to properly scan and upload them in the correct format (usually PDF or JPG).</li>
            <li><strong className={styles.subTitle}>Visa Fee Payment:</strong> We will facilitate the online visa fee payment, ensuring a secure and hassle-free transaction.</li>
            <li><strong className={styles.subTitle}>Passport Handling (If Required):</strong> In cases where the original passport is required for stamping, we will provide clear instructions on how to securely courier it to the appropriate processing center.</li>
            <li><strong className={styles.subTitle}>Submission to ICA:</strong> <strong className={styles.subTitle}>Global Visa Internationals</strong> will meticulously review your application and supporting documents before submitting them to the Immigration & Checkpoints Authority (ICA) of Singapore on your behalf.</li>
            <li><strong className={styles.subTitle}>Regular Application Updates:</strong> We will keep you informed about the progress of your Singapore visa application, providing you with peace of mind throughout the process.</li>
            <li><strong className={styles.subTitle}>Visa Retrieval Guidance:</strong> Once your Singapore visa is approved, we will provide you with clear instructions on how to receive your e-visa, which you will need to print and carry with your passport during your travel.</li>
          </ul>

          <h2 className={styles.subTitle}>Understanding Singapore Visa Processing Time:</h2>
          <p>The typical Singapore visa processing time for Indian citizens is approximately <strong className={styles.subTitle}>3 to 5 working days</strong>, excluding the day of submission, weekends, and Singaporean public holidays. However, it's important to note that processing times can vary based on individual cases and the volume of applications received by the ICA. To avoid any last-minute stress, we strongly advise you to apply for your Singapore tourist visa at least two weeks before your intended travel date. Contact Global Visa Internationals for timely processing assistance.</p>

          <h2 className={styles.subTitle}>Understanding the Singapore Visa Cost (Tourist Visa Fees Singapore):</h2>
          <p>The total Singapore visa cost for Indian citizens typically comprises a non-refundable visa processing fee levied by the ICA and a service charge by the authorized agent, such as <strong className={styles.subTitle}>Global Visa Internationals</strong>.</p>
          <ul>
            <li>The standard <strong className={styles.subTitle}>visa processing fee is usually around INR 1,900</strong>.</li>
            <li><strong className={styles.subTitle}>Global Visa Internationals</strong> offers competitive service charges for our expert assistance. For detailed information on our service fees, please fill out the form, and our experts will contact you immediately.</li>
          </ul>
          <p >Therefore, the overall cost for your Singapore tourist visa will be the sum of these two components. Contact Global Visa Internationals for transparent and accurate information regarding the tourist visa fees Singapore.</p>

          <h2 className={styles.subTitle}>Important Points to Keep in Mind:</h2>
          <ul>
            <li><strong className={styles.subTitle}>Visa-Free Transit Facility (VFTF):</strong> If you are an Indian national transiting through Singapore by air to or from a third country, you might be eligible for the 96-hour Visa-Free Transit Facility (VFTF) under specific conditions. These conditions include possessing a valid onward/return air ticket and, in some instances, a valid visa or long-term pass from certain countries (Australia, Canada, Germany, Japan, New Zealand, Switzerland, UK, USA).</li>
            <li><strong className={styles.subTitle}>Visa Validity and Stay Duration:</strong> While a Singapore tourist visa for Indian citizens can be granted with a validity of up to 2 years and allow for multiple entries, the duration of each individual stay is typically limited to a maximum of 30 days. The final validity and the number of entries are determined at the discretion of the ICA.</li>
            <li><strong className={styles.subTitle}>No Visa on Arrival:</strong> It's crucial to remember that Singapore does not offer a visa-on-arrival facility for Indian citizens holding ordinary passports. <strong className={styles.subTitle}>You must secure a valid visa before commencing your travel. Don't take the risk; contact Global Visa Internationals for your visa needs.</strong></li>
            <li><strong className={styles.subTitle}>SG Arrival Card:</strong> All travelers to Singapore are required to submit an SG Arrival Card electronically via the official ICA website or mobile app within three days prior to their arrival. <strong className={styles.subTitle}>Global Visa Internationals</strong> can provide you with guidance on this mandatory requirement.</li>
          </ul>

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
          <h2 className={styles.subTitle}>Why Choose Global Visa Internationals for Your Visa Needs?</h2>
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