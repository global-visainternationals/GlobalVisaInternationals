"use client";
import styles from './Australia.module.css';
import React, { useState, useEffect } from 'react';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { NextSeo, LocalBusinessJsonLd, FAQPageJsonLd } from 'next-seo';

export default function Australia() {
 
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
  <title>Australia Tourist Visa From India | Cost, Documents & Visa Process</title>
  <meta name="description" content="Apply for an Australia Tourist Visa with Global Visa Internationals. Get expert support on visa process, fees, documentation, and plan your visit to top Australian destinations." />
  <meta name="keywords" content="Australia tourist visa, apply for Australia visa from India, Australia visa cost, Australia visa consultants in India, tourist attractions in Australia, Australia visa process, Australia visit visa fees" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Global Visa Internationals" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#0a66c2" />
  <link rel="canonical" href="https://www.globalvisainternationals.com/visa/tourist-visa/australia" />
  <link rel="icon" href="/favicon.ico" />
  <link rel="preload" as="image" href="https://www.globalvisainternationals.com/images/australia-tourist-visa-banner.jpg" />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Apply for Australia Tourist Visa From India | Global Visa Internationals" />
  <meta property="og:description" content="Planning a trip to Australia? Get expert visa application assistance, cost breakdown, and travel guidance from Global Visa Internationals." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.globalvisainternationals.com/visa/tourist-visa/australia" />
  <meta property="og:image" content="https://www.globalvisainternationals.com/images/australia-tourist-visa-banner.jpg" />
  <meta property="og:locale" content="en_IN" />
  <meta property="og:locale:alternate" content="en_US" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Australia Tourist Visa | Application, Cost & Documents Needed" />
  <meta name="twitter:description" content="Visit Australia with ease. Get full visa support, process guidance, and cost estimate from Global Visa Internationals." />
  <meta name="twitter:image" content="https://www.globalvisainternationals.com/images/australia-tourist-visa-banner.jpg" />
  <meta name="twitter:url" content="https://www.globalvisainternationals.com/visa/tourist-visa/australia" />

  {/* Geo Location Tags */}
  <meta name="geo.region" content="AU" />
  <meta name="geo.placename" content="Sydney" />
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
      "description": "Trusted visa consultants helping Indian travelers with Australia tourist visa applications, document verification, and expert support.",
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
          "name": "Australia"
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
          "name": "How much does an Australia Tourist Visa cost from India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of an Australia tourist visa from India is approximately ₹11,000 to ₹14,000 including the visa fee and service charges."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are required for an Australia tourist visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You need a valid passport, recent photo, bank statements, ITR, travel itinerary, hotel bookings, and an invitation letter (if applicable)."
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
      "serviceType": "Australia Tourist Visa Application Assistance",
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
              "name": "Australia Visitor Visa (Tourist Stream)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Australia Family-Sponsored Visitor Visa"
            }
          }
        ]
      }
    })
  }} />
</head>

      
    
      <div className={styles.imageContainer}>
        <img src="/images/Australia1.png" alt="Australia Image" className={styles.AustraliaImage} />
      </div>

      <div className={styles.AustraliaSec}>


        <div className={styles.AustraliaData}>
          <h1 className={styles.Title}> Your Comprehensive Guide to the Australia Tourist Visa | Global visa internationals</h1>
          <p>Australia, a land of breathtaking landscapes, unique wildlife, and vibrant cities, beckons travelers from all corners of the globe. A tourist visa allows you to explore this magnificent country for leisure, offering an unforgettable experience filled with natural beauty and cultural richness.
          </p>
          <p></p>
          <h3 className={styles.subTitle}>Why Choose Australia for Tourism? What Makes It Special?</h3>
          <p>Australia offers a plethora of unique experiences that set it apart as a top tourist destination:</p>

          <ul>
            <li>Diverse Landscapes: From the iconic Outback with its red deserts and ancient rock formations like Uluru to lush rainforests, pristine beaches, and the underwater wonders of the Great Barrier Reef, Australia boasts an incredibly varied natural environment.

            </li>
            <li><strong>Unique Wildlife:</strong> Encounter iconic animals found nowhere else on Earth, such as kangaroos, koalas, wombats, and the elusive platypus. Explore national parks and wildlife sancWorld-Class Cities: Experience the cosmopolitan flair of Sydney with its iconic Opera House and Harbour Bridge, the cultural heart of Melbourne with its laneways and vibrant arts scene, and the laid-back charm of Brisbane and Perth.</li>
            <li><strong>Aboriginal Culture:</strong> Discover the rich and ancient culture of Australia's Aboriginal people, the oldest living culture in the world. Explore sacred sites, learn about Dreamtime stories, and witness traditional art and ceremonies.</li>
            <li><strong>Adventure Activities:</strong> Whether you're into surfing world-famous breaks, diving or snorkeling in the Great Barrier Reef, hiking through stunning national parks, or exploring the vast Outback, Australia offers endless opportunities for adventure.</li>
            <li><strong>Stunning Beaches:</strong> Relax on the golden sands of Bondi Beach, explore the silica white shores of Whitehaven Beach in the Whitsundays, or discover countless other breathtaking coastal havens.</li>
          </ul>
          <h3 className={styles.subTitle}>Must-Visit Tourist Spots in Australia</h3>
          <p>Australia is brimming with incredible places to explore. Here are some of the main tourist spots you shouldn't miss:</p>
          <ol>
            <li>Sydney: Home to the iconic Sydney Opera House and Harbour Bridge. Explore Bondi Beach, the historic Rocks district, and enjoy a ferry ride across the harbor.</li>
            <br />
            <li>Great Barrier Reef: The world's largest coral reef system, offering unparalleled snorkeling and diving experiences amidst diverse marine life. Located off the coast of Queensland.</li>
            <br />
            <li>MUluru (Ayers Rock): A massive sandstone monolith in the heart of the Northern Territory, sacred to the Aboriginal Anangu people. Witness stunning sunsets and learn about its cultural significance.</li>
            <br />
            <li>The Whitsunday Islands: A group of idyllic islands off the coast of Queensland, famous for their pristine beaches, turquoise waters, and sailing opportunities.</li>
            <li>Kakadu National Park: A UNESCO World Heritage site in the Northern Territory, rich in Aboriginal culture, diverse wildlife (including crocodiles and kangaroos), and stunning landscapes.</li>
            <li>Gold Coast: A vibrant city in Queensland known for its beautiful beaches, surfing spots (like Surfers Paradise), theme parks, and lively nightlife.</li>
            <li>Perth: A sunny coastal city in Western Australia with beautiful beaches like Cottesloe and Scarborough, and Kings Park offering panoramic city views. Don't miss a trip to Rottnest Island to see the adorable quokkas.</li>
            <li>Brisbane: A laid-back city in Queensland with the South Bank Parklands, a cultural and recreational hub, and the Lone Pine Koala Sanctuary.</li>
            <li>Adelaide: A charming city in South Australia known for its museums, galleries, and festivals. Explore the Adelaide Botanic Garden and the historic Port Adelaide. The Barossa Valley and McLaren Vale wine regions are also nearby.</li>

          </ol>

          <div className={styles.formSection1}>
            <h4>Contact Global visa Internationals for Visa Documentation Assistance:</h4>
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
                    {["newzeland", "USA", "UK", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
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
          <h2 className={styles.subTitle}>Tailor Your Australian Adventure</h2>
          <p>Not sure where to start? Take our quick quiz to discover your perfect Australian getaway!</p>

          <h2 className={styles.subTitle}>Sample Itineraries</h2>
          <p>Get inspired with these sample itineraries:</p>
          <ul>
            <li>7-Day East Coast Highlights: Sydney, Brisbane, Gold Coast, Great Barrier Reef</li>
            <li>14-Day Best of Australia: Sydney, Melbourne, Uluru, Great Barrier Reef</li>
            <li>10-Day West Coast Adventure: Perth, Exmouth, Broome</li>
          </ul>

          <h2>Cost of Traveling to Australia</h2>
          <p>The cost of a trip to Australia can vary significantly depending on your travel style, duration of stay, and preferences. Here's a general breakdown of potential expenses:</p>
          <ul>
            <li>Visa Cost: The current fee for an Australian tourist visa (subclass 600) is approximately AUD 190 (around INR 10,500), but this is subject to change.</li>
            <br />
            <li>Flight Charges: Return flights from India to Australia can range significantly based on the time of booking, airline, and route. On average, you might expect to pay anywhere from INR 22,000 to INR 50,000 or more for a round-trip ticket per person. Prices can be lower or higher depending on the season and availability.</li>
            <br />
            <li>Living Expenses: Daily living expenses for a tourist in Australia can vary widely based on your accommodation choices, dining preferences, and activities. Here's a general estimate:
              <ul>
                <li>Budget Traveler: AUD 89 - AUD 100 per day (approx. INR 4,900 - INR 5,500), potentially staying in hostels, cooking some meals, and using public transport.</li>
                <li>Mid-Range Traveler: AUD 230 - AUD 259 per day (approx. INR 12,700 - INR 14,300), staying in comfortable hotels or Airbnb, eating out occasionally, and participating in some tours.</li>
                <li>Luxury Traveler: AUD 621 - AUD 699 per day (approx. INR 34,200 - INR 38,500), staying in high-end accommodations, dining at top restaurants, and engaging in exclusive experiences.</li>
              </ul>
              For a moderate trip, you should budget at least AUD 150 - AUD 300 per day (approximately INR 8,250 - INR 16,500) per person for living expenses, excluding flights and visa costs. This would cover accommodation, food, local transport, and some sightseeing.
              <h2 className={styles.subTitle}>Example Costs:</h2>
              <ul>
                <li>Accommodation (per night): Budget hostels (AUD 37-42), mid-range hotels (AUD 100-112), luxury hotels (AUD 270+).</li>
                <li>Meals: Budget meal (AUD 10-15), mid-range restaurant (AUD 25-50), fine dining (AUD 80+).</li>
                <li>Local Transport (daily): Public transport pass (AUD 8-16 in major cities), individual taxi ride (AUD 3-7 base fare).</li>
              </ul>
            </li>
            <li>Activities and Tours: Costs for tours and activities will vary greatly depending on what you choose to do. For example, a day trip to the Great Barrier Reef can cost anywhere from AUD 150 to AUD 300 or more.</li>
          </ul>
          <h2 className={styles.subTitle}>Budget Calculator:</h2>
          <ul>
            <li>Therefore, for a 10-day trip to Australia, excluding flights and visa, you might budget:
              <ul>
                <li>Budget: AUD 890 - AUD 1000 (approx. INR 49,000 - INR 55,000)</li>
                <li>Mid-Range: AUD 2300 - AUD 2590 (approx. INR 126,500 - INR 142,500)</li>
                <li>Luxury: AUD 6210 - AUD 6990 (approx. INR 341,500 - INR 384,500)</li>
              </ul>
            </li>
            <li>Keep in mind that these are rough estimates, and actual costs can vary.</li>
          </ul>
          <h2 className={styles.subTitle}>Tips for a Successful Australian Trip:</h2>

          <ol>
            <li>Plan Ahead: Research the best time to visit, popular tourist attractions, and budget-friendly accommodations.</li>
            <li>Book in Advance: Reserve flights and accommodations to avoid last-minute hassles.</li>
            <li>Stay Safe: Be aware of local customs and laws, and carry necessary documents and valuables.</li>
            <li>Be Flexible: Adjust your plans based on unexpected events or changes in the itinerary.</li>
            <li>Enjoy the Journey: Take breaks, relax, and immerse yourself in the beauty of Australia.</li>
          </ol>
          <h2 className={styles.subTitle}>Top Attractions in Australia:</h2>

          <ul>
            <li>Local Insights & Hidden Gems:
              <ul>
                <li>Explore the ancient Aboriginal rock art in the Kimberley region.</li>
                <li>Swim with whale sharks on Ningaloo Reef.</li>
                <li>Hike the Overland Track in Tasmania's pristine wilderness.</li>
              </ul>
            </li>
            <li>Cultural Snippets:
              <ul>
                <li>"G'day" means hello!</li>
                <li>Australians love their "barbies" (barbecues).</li>
                <li>Don't forget to try some "Vegemite" on toast!</li>
              </ul>
            </li>
            <li>Food & Drink Highlights:
              <ul>
                <li>Indulge in fresh seafood like Sydney rock oysters.</li>
                <li>Taste world-class wines in the Barossa Valley.</li>
                <li>Experience a traditional Aussie barbecue with friends.</li>
              </ul>
            </li>
            <li>Sustainability & Responsible Tourism Tips:
              <ul>
                <li>Choose eco-certified tour operators.</li>
                <li>Respect Aboriginal sacred sites and cultural practices.</li>
                <li>Reduce your plastic consumption and dispose of waste responsibly.</li>
              </ul>
            </li>
          </ul>
          <ol>
            <li>Great Barrier Reef: A UNESCO World Heritage site, the world's largest coral reef system, and a paradise for divers and snorkelers.</li>
            <li>Uluru (Ayers Rock): A sacred site for Aboriginal Australians, known for its stunning sunsets and cultural significance.</li>
            <li>Sydney Opera House: A masterpiece of modern architecture, home to some of the world's most famous operas.</li>
            <li>Melbourne Cricket Ground: A historic stadium where the Australian national team plays.</li>
            <li>Wagga Wagga: A charming town known for its apple orchards and scenic views.</li>
            <li>Mount Kosciuszko National Park: A stunning national park offering hiking trails, waterfalls, and scenic drives.</li>
            <li>Gold Coast: A tropical paradise with world-class beaches, surfing, and live music festivals.</li>
          </ol>
          <h2 className={styles.subTitle}>Additional Tips:</h2>
          <ol>
            <li>Be Prepared for Weather: Australia experiences a diverse climate, with hot summers and cold winters. Pack accordingly and be prepared for unexpected weather changes.</li>
            <li>Learn Local Languages: Knowing a few words in the local language can go a long way in making your trip more enjoyable.</li>
            <li>Stay Hydrated: Australia's hot climate can make dehydration a concern. Drink plenty of water, especially during hot weather.</li>
            <li>Consider a Visa Extension: If you plan to stay longer than your visa allows, consider applying for a visa extension before your current visa expires.</li>
            <li>Respect Local Customs: Australia has a rich cultural heritage, and it's important to respect local customs and traditions.</li>
            <li>Enjoy the Adventure: Australia offers a wide range of outdoor activities, from hiking to surfing, and it's a great place to experience the outdoors.</li>
          </ol>



          <div className={styles.formSection1}>
            <h4>Contact Global Visa Internationals for Visa and Documentation Assistance:</h4>
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
                    {["newzeland", "USA", "UK", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
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
          <h2 className={styles.subTitle}>Applying for an Australian Tourist Visa</h2>
          <p>Indian citizens need to apply for a Tourist Stream (subclass 600) visa to visit Australia for tourism. Here are the key requirements and steps:</p>
          <ul>
            <li>Eligibility: You must genuinely intend to visit Australia for tourism purposes only, have sufficient funds for your stay, and not intend to work in Australia. You must be outside Australia when you apply and when the visa is decided.</li>
            <li>Online Application: The application must be submitted online through the Department of Home Affairs website (ImmiAccount).</li>
            <li>Required Documents: You will generally need to provide:
              <ul>
                <li>A valid passport with at least six months of validity.</li>
                <li>Proof of sufficient funds (e.g., bank statements for the last 3 months showing a minimum balance of approximately AUD 5,000 or INR 3.5 Lakhs per person).</li>
                <li>Evidence of your intention to return to your home country (e.g., a letter from your employer, proof of study, family ties, property ownership).</li>
                <li>Details of your planned itinerary in Australia.</li>
                <li>A copy of your national identity card (e.g., Aadhaar card, PAN card).</li>
                <li>Passport-sized photographs.</li>
                <li>Other supporting documents may be required based on your individual circumstances.</li>
              </ul>
            </li>
            <li>Visa Fee: The current visa application fee is approximately AUD 190.</li>
            <li>Processing Time: The processing time for an Australian tourist visa can vary but is generally around 3 to 4 weeks after submission of all required documents. It's advisable to apply well in advance of your intended travel dates.</li>
          </ul>
          <p>It is crucial to provide accurate information and all necessary documents to avoid delays or rejection of your visa application.</p>

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
                  {["newzeland", "USA", "UK", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
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