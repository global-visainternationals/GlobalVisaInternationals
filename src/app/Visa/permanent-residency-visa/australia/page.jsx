"use client";
import styles from './Australia.module.css';
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
        <title>Dubai Tourist Visa From India | Cost, Process & Top Attractions</title>
        <meta name="description" content="Apply for a Dubai Tourist Visa with expert guidance from Global Visa Internationals. Know the visa process, fees, documents required, and explore top tourist destinations in Dubai." />
        <meta name="keywords" content="Dubai tourist visa, apply for Dubai tourist visa from India, Dubai visa cost, flight to Dubai cost, Dubai visa consultants in India, tourist attractions in Dubai, Dubai visa process, Dubai visa fees" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Global Visa Internationals" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=0" />
        <meta name="theme-color" content="#0a66c2" />
        <link rel="canonical" href="https://www.globalvisainternationals.com/visa/tourist-visa/dubai" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" as="image" href="https://www.globalvisainternationals.com/images/Dubai-Tourist-Visa-Global-Visa-Internationals.png" imagesrcset="https://www.globalvisainternationals.com/images/Dubai-Tourist-Visa-Global-Visa-Internationals.png 1x" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Apply for Dubai Tourist Visa From India | Global Visa Internationals" />
        <meta property="og:description" content="Planning to visit Dubai? Get expert assistance for your tourist visa application, flight booking, cost estimate, and must-visit places. Start your Dubai journey with Global Visa Internationals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.globalvisainternationals.com/visa/tourist-visa/dubai" />
        <meta property="og:image" content="https://www.globalvisainternationals.com/images/Dubai-Tourist-Visa-Global-Visa-Internationals.png" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:locale:alternate" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dubai Tourist Visa | Application, Cost & Documents Needed" />
        <meta name="twitter:description" content="Explore Dubai with the right tourist visa. Get visa application support and travel cost breakdown from Global Visa Internationals." />
        <meta name="twitter:image" content="https://www.globalvisainternationals.com/images/Dubai-Tourist-Visa-Global-Visa-Internationals.png" />
        <meta name="twitter:url" content="https://www.globalvisainternationals.com/visa/tourist-visa/dubai" />
        <meta name="twitter:site" content="@GlobalVisaIntl" />

        {/* Geo Location Tags */}
        <meta name="geo.region" content="AE" />
        <meta name="geo.placename" content="Dubai" />
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
            "description": "Leading visa consultancy offering expert Dubai tourist visa assistance from India. We help with visa application, documentation, and more.",
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
              // {
              //   "@type": "ListItem",
              //   "position": 2,
              //   "name": "Tourist Visa",
              //   "item": "https://www.globalvisainternationals.com/visa/tourist-visa"
              // },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Dubai"
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
                "name": "What is the cost of a Dubai Tourist Visa from India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It typically ranges from ₹6,500 to ₹9,000 depending on visa type and duration."
                }
              },
              {
                "@type": "Question",
                "name": "What documents are required for a Dubai tourist visa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Valid passport, recent photograph, bank statements, confirmed flight ticket, and hotel booking are usually required."
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
            "serviceType": "Dubai Tourist Visa Application Assistance",
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
                    "name": "14 Days Tourist Visa"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "30 Days Tourist Visa"
                  }
                }
              ]
            }
          })
        }} />
      </head>



      <div className={styles.imageContainer}>
        <img src="/images/Dubai-Turist-Visa-Global-Visa-Internationals.png" alt="Dubai-Turist-Visa-Global-Visa-Internationals" className={styles.JapanImage} />
      </div>

      <div className={styles.JapanSec}>

        <div className={styles.JapanData}>
          <h1 className={styles.Title}>Discover the Wonders of Dubai: Your Guide to a Tourist Visa</h1>
          <p>Dubai, a dazzling jewel in the Middle East, beckons travelers with its futuristic skyline, rich cultural heritage, and unparalleled experiences. Whether you dream of scaling the Burj Khalifa, exploring traditional souks, or relaxing on pristine beaches, Dubai offers an unforgettable adventure.</p>

          <h3 className={styles.subTitle}>Must-See Tourist Spots in Dubai</h3>
          <p>While Dubai might conjure images of modern marvels, it also boasts captivating historical sites and natural beauty. Prepare to be enchanted by:</p>

          <ul>
            <li>Burj Khalifa: Ascend the world's tallest building for breathtaking panoramic views of the city and the Arabian Gulf.</li>

            <li>The Dubai Mall: Indulge in world-class shopping, entertainment, and dining, including the mesmerizing Dubai Fountain show.</li>

            <li>Palm Jumeirah: Marvel at this iconic man-made island, shaped like a palm tree, featuring luxurious resorts and stunning waterfront villas.</li>

            <li>Dubai Creek: Take an abra (traditional boat) ride along this historic waterway, witnessing the city's past and present.</li>
            <li>Jumeirah Beach: Relax on the golden sands and soak up the sun, with the iconic Burj Al Arab in the backdrop.</li>
            <li>The Dubai Fountain: Witness the spectacular water, light, and music show at the base of the Burj Khalifa.</li>
            <li>Dubai Marina: Stroll along the vibrant promenade lined with skyscrapers, restaurants, and yachts.</li>
            <li>Global Village: Experience the cultures and cuisines of over 90 countries in one exciting location (seasonal).</li>
            <li>Dubai Desert Conservation Reserve: Embark on a desert safari, experiencing Bedouin culture, camel rides, and stunning sunsets.</li>
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

          <h2>Food and Dining Expenses in Japan</h2>
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

          <h2>Transportation Costs in Japan</h2>
          <p>Efficient transportation is a hallmark of Japan, with options for every traveler.</p>
          <h3>Local Travel in Japan</h3>
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
          <h3>Long-Distance Travel in Japan</h3>
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

          <h2>Estimated Total Trip Cost to Japan (Excluding Flights)</h2>
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
          <h3 className={styles.subTitle}>Need Help With the DS-160 or Interview Prep for Your Europe Tourist Visa?</h3>
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