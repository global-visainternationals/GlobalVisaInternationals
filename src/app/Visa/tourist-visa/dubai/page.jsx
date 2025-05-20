"use client";
import styles from './Dubai.module.css';
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

          <h3 className={styles.subTitle}>Why Choose Dubai for Your Next Holiday?</h3>
          <p>Dubai is more than just a city of skyscrapers; it's a captivating destination that offers a unique blend of:</p>
          <ol>
            <li>Rich History and Culture: Explore the Al Fahidi Historical Neighbourhood, visit traditional souks brimming with spices and gold, and learn about Emirati heritage at museums and cultural centers.</li>

            <li>Diverse Global Influences: Experience a melting pot of cultures, reflected in the city's cuisine, architecture, and vibrant atmosphere..</li>

            <li>World-Renowned Cuisine: Indulge in a culinary journey, from authentic Emirati dishes to international gourmet experiences.</li>

            <li>Breathtaking Landscapes: Discover stunning beaches, vast desertscapes perfect for adventure activities, and meticulously designed urban oases.</li>

            <li>Unparalleled Shopping and Entertainment: From mega-malls to traditional markets, and from thrilling theme parks to world-class performances, Dubai offers endless entertainment options.</li>

            <li>Safety and Modern Infrastructure: Enjoy a safe and well-organized environment with excellent transportation and amenities.</li>
          </ol>

          <p>Dubai is a city that seamlessly blends tradition and modernity, making it an ideal destination for travelers seeking both adventure and relaxation.</p>
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
          <h1>Traveling to Dubai from India in 2025</h1>
          <p>Traveling to Dubai from India in 2025 offers a diverse experience, from luxurious stays to budget-friendly options. Here's a breakdown of estimated costs and the visa process for Indian citizens.</p>

          <h2>Flight Costs from India to Dubai (2025)</h2>
          <table className={styles.table}>
            <tr>
              <th>Destination</th>
              <th>Flight Type</th>
              <th>Starting Price (INR)</th>
              <th>Notes</th>
            </tr>
            <tr>
              <td>Dubai</td>
              <td>Direct</td>
              <td>₹11,005 - ₹20,000+</td>
              <td>Prices vary by city and airline. Look for deals from Mumbai, Delhi, Chennai, and Bangalore.</td>
            </tr>
          </table>
          <p className={styles.note}>Note: Costs are approximate and can vary based on exchange rates and personal spending habits.</p>

          <h2>Accommodation Costs in Dubai</h2>
          <table className={styles.table}>
            <tr>
              <th>Accommodation Type</th>
              <th>Price Range (AED)</th>
              <th>Price Range (INR)</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>Hostels / Budget Hotels</td>
              <td>100-300</td>
              <td>₹2,275-₹6,825</td>
              <td>Basic amenities, shared facilities.</td>
            </tr>
            <tr>
              <td>Mid-Range Hotels / Apartments</td>
              <td>300-800</td>
              <td>₹6,825-₹18,200</td>
              <td>Comfortable stays with amenities like pools and restaurants.</td>
            </tr>
            <tr>
              <td>Luxury Hotels / Resorts</td>
              <td>800-3000+</td>
              <td>₹18,200-₹68,250+</td>
              <td>World-class service and prime locations.</td>
            </tr>
          </table>

          <h2>Food and Dining Expenses in Dubai</h2>
          <table className={styles.table}>
            <tr>
              <th>Meal Type</th>
              <th>Price Range (AED)</th>
              <th>Price Range (INR)</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>Budget / Street Food</td>
              <td>10-40</td>
              <td>₹227-₹910</td>
              <td>Local street food like shawarma and falafel.</td>
            </tr>
            <tr>
              <td>Casual Dining</td>
              <td>50-150</td>
              <td>₹1,137-₹3,412</td>
              <td>Mid-range cafes and restaurants.</td>
            </tr>
            <tr>
              <td>Daily Food Budget</td>
              <td>150-250</td>
              <td>₹3,412-₹5,687</td>
              <td>Mid-range travel food budget per day.</td>
            </tr>
            <tr>
              <td>Fine Dining</td>
              <td>200-1000+</td>
              <td>₹4,550-₹22,750+</td>
              <td>Michelin-starred and upscale restaurants.</td>
            </tr>
          </table>

          <h2>Transportation Costs in Dubai</h2>
          <table className={styles.table}>
            <tr>
              <th>Mode</th>
              <th>Cost (AED)</th>
              <th>Cost (INR)</th>
              <th>Notes</th>
            </tr>
            <tr>
              <td>Metro/Bus Fare</td>
              <td>3-15</td>
              <td>₹68-₹341</td>
              <td>Zone-based fare system.</td>
            </tr>
            <tr>
              <td>Daily Nol Card</td>
              <td>~20-30</td>
              <td>~₹455-₹682</td>
              <td>Unlimited daily travel pass.</td>
            </tr>
            <tr>
              <td>Taxi (starting)</td>
              <td>12</td>
              <td>₹273</td>
              <td>Starting fare; AED 2.14/km after that.</td>
            </tr>
            <tr>
              <td>Ride-hailing (Uber/Careem)</td>
              <td>Varies</td>
              <td>Varies</td>
              <td>Depends on distance and demand.</td>
            </tr>
          </table>

          <h2>Estimated Total Trip Cost to Dubai (Excluding Flights)</h2>
          <table className={styles.table}>
            <tr>
              <th>Expense Category</th>
              <th>Budget Traveler (INR)</th>
              <th>Mid-Range Traveler (INR)</th>
              <th>Luxury Traveler (INR)</th>
            </tr>
            <tr>
              <td>Accommodation</td>
              <td>₹15,925-₹47,775</td>
              <td>₹47,775-₹127,400</td>
              <td>₹127,400-₹477,750+</td>
            </tr>
            <tr>
              <td>Food</td>
              <td>₹2,500-₹7,500/day</td>
              <td>₹7,500-₹15,000/day</td>
              <td>₹15,000-₹30,000+/day</td>
            </tr>
            <tr>
              <td>Transportation</td>
              <td>₹1,000-₹2,500/day</td>
              <td>₹2,500-₹5,000/day</td>
              <td>₹5,000-₹10,000+/day</td>
            </tr>
            <tr>
              <td>Sightseeing/Shopping</td>
              <td>₹2,000-₹5,000/day</td>
              <td>₹5,000-₹10,000/day</td>
              <td>₹10,000-₹30,000+/day</td>
            </tr>
            <tr>
              <th>Total (7 days)</th>
              <td>₹35,000-₹120,000</td>
              <td>₹120,000-₹350,000</td>
              <td>₹350,000-₹1,500,000+</td>
            </tr>
          </table>

          <h2>Navigating the Dubai Tourist Visa Process for Indian Citizens</h2>
          <p>Indian citizens generally require a visa to enter Dubai. Here’s a breakdown:</p>

          <h3>Visa Types:</h3>
          <ul>
            <li><strong>Tourist Visa:</strong> 30-day or 60-day single/multiple entry. 5-year multiple entry (conditions apply).</li>
            <li><strong>Transit Visa:</strong> 48-hour or 96-hour (with onward ticket).</li>
            <li><strong>Visa on Arrival:</strong> For holders of valid US/UK/EU visas/residence permits. Subject to immigration discretion.</li>
          </ul>

          <h3>Application Process:</h3>
          <ol>
            <li><strong>Determine Visa Type</strong></li>
            <li><strong>Gather Required Documents:</strong>
              <ul>
                <li>Valid Passport (6+ months validity, 2 blank pages)</li>
                <li>Recent Passport Photo (45mm x 35mm)</li>
                <li>Confirmed Return Flight Ticket</li>
                <li>Hotel Booking or Invitation Letter</li>
                <li>Proof of Funds (Bank Statement recommended)</li>
                <li>PAN Card</li>
                <li>Travel Insurance</li>
              </ul>
            </li>
            <li><strong>Apply Online:</strong>
              <ul>
                <li>Airlines (e.g., Emirates, Air India)</li>
                <li>Authorized Travel Agencies</li>
                <li>GDRFA Official Website</li>
              </ul>
            </li>
            <li><strong>Pay Visa Fees:</strong> Around AED 200–300 (₹4,500–₹6,800) + VAT + service charges</li>
            <li><strong>Processing Time:</strong> 3–4 working days (48-hour express options available)</li>
            <li><strong>"Ok to Board":</strong> Mandatory message added to your airline PNR post visa approval.</li>
          </ol>

          <h2>Why Choose Global Visa Internationals?</h2>
          <p>Global Visa Internationals simplifies your Dubai visa process with expert guidance and personalized support.</p>
          <ul>
            <li>One-on-One Visa Consultation</li>
            <li>Document Checklist & Review</li>
            <li>Form Filling Assistance</li>
            <li>Mock Interviews for visa prep</li>
            <li>11+ years of experience</li>
            <li>Over 55,000 visas processed</li>
            <li>Based in Bangalore, India</li>
          </ul>

          <p>Let Global Visa Internationals help you turn your Dubai travel dream into reality.</p>

          <h3>Sources</h3>
          <ul>
            <li>Exchange rate: 1 AED = 22.75 INR</li>
            <li>UAE GDRFA official website</li>
            <li>Authorized travel portals and airlines</li>
          </ul>

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