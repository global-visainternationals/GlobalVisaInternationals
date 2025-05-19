"use client";
import styles from './Canada.module.css';
import React, { useState, useEffect } from 'react';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Canada() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Global Visa Internationals",
    "url": "https://www.globalvisainternationals.com/visa/tourist-visa/canada",
    "logo": "https://www.globalvisainternationals.com/gvilogo.png",
    "description": "Unlock Your Canada Adventure! Global Visa Internationals provides expert guidance for your Canada tourist visa application. Simplify the process and explore Canada's wonders. Contact us today!",
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
    "areaServed": ["IN", "Canada", "EU"],
    "sameAs": [
      "https://www.facebook.com/GlobalVisaInternationals",
      "https://www.instagram.com/globalvisa_internationals/",
      "https://www.linkedin.com/company/globalvisainternationals"
      // Add more links if you have Twitter, YouTube, etc.
    ]

  };
  //review

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);
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

  return (
    <>
      <head>
        <title> Canada Tourist Visa: Requirements, Application & Top Places | Global Visa Internationals</title>
        <meta name="description" content="Planning a trip to Canada? Global Visa Internationals offers expert guidance on Canada tourist visa requirements and the application process. Discover the top places to visit in Canada." />
        <meta name="keywords" content="Canada tourist visa, Canada visitor visa, Canada visa requirements, apply for Canada tourist visa, Canada travel visa, tourist visa for Canada, visit Canada, top places to visit in Canada, Canada tourism, Canada travel guide, Canada visa application process" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.globalvisainternationals.com/visa/tourist-visa/canada" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Canada Tourist Visa: Requirements, Application & Top Places | Global Visa Internationals" />
        <meta property="og:description" content="Planning a trip to Canada? Global Visa Internationals offers expert guidance on Canada tourist visa requirements and the application process. Discover the top places to visit in Canada." />
        <meta property="og:url" content="https://www.globalvisainternationals.com/visa/tourist-visa/canada" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="URL_TO_YOUR_Canada_TOURIST_IMAGE" /> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Canada Tourist Visa: Requirements, Application & Top Places | Global Visa Internationals" />
        <meta name="twitter:description" content="Planning a trip to Canada? Global Visa Internationals offers expert guidance on Canada tourist visa requirements and the application process. Discover the top places to visit in Canada." />
        <meta name="twitter:url" content="https://www.globalvisainternationals.com/visa/tourist-visa/canada" />
        {/* <meta name="twitter:image" content="URL_TO_YOUR_Canada_TOURIST_IMAGE" /> */}

        {/* Geo-related meta tags */}
        <meta name="geo.region" content="AU" />
        <meta name="geo.placename" content="Canada" />
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
        <img src="/images/Canada1.png" alt="Canada Image" className={styles.CanadaImage} />
      </div>

      <div className={styles.CanadaSec}>


        <div className={styles.CanadaData}>
          <h1 className={styles.Title}>Discovering Canada: A Traveler's Paradise</h1>
          <p>Canada, a land of immense natural beauty and vibrant multicultural cities, stands as a premier destination for travelers from around the globe. From the towering peaks of the Rocky Mountains to the historic streets of Quebec City and the bustling metropolis of Toronto, Canada offers a diverse range of experiences to captivate every visitor. This guide aims to provide comprehensive information for planning your tourist visit to this extraordinary country, ensuring you are well-prepared to discover its many wonders. At Global Visa Internationals, we understand that embarking on an international journey involves careful planning, and we are here to partner with you to ensure your experience in Canada is smooth, seamless, and truly unforgettable. </p>
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
                    {["newzeland", "USA", "UK", "Canada", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
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
          <h2 className={styles.subTitle}>Discover the Wonders of Canada: A Tourist's Paradise</h2>
          <p>Canada boasts a wealth of iconic landmarks and must-visit attractions, each offering a unique glimpse into the country's diverse landscapes and rich heritage.</p>
          <strong className={styles.subTitle}>Iconic Landmarks and Must-Visit Attractions</strong>
          <ul>
            <li><h4 className={styles.subTitle}>Banff National Park</h4>
              Nestled in the heart of the Canadian Rockies, Banff National Park is a jewel of natural beauty, renowned for its breathtaking turquoise lakes and majestic mountains. The park's iconic Lake Louise, with its emerald waters reflecting the surrounding glaciers, and Moraine Lake, set in the Valley of the Ten Peaks, are sights that leave a lasting impression on all who visit. Key attractions within the park include the serene Lake Louise Lakeshore, the picturesque Moraine Lake and Valley of the Ten Peaks, and the vividly colored Peyto Lake. Visitors can also relax in the Banff Upper Hot Springs, explore the fascinating Johnston Canyon with its waterfalls, and drive along the scenic Icefields Parkway, which connects Banff to Jasper National Park, offering stunning views of glaciers and emerald lakes. For a glimpse into the park's history, the Cave and Basin National Historic Site and the Banff Park Museum National Historic Site are well worth a visit. Seasonal activities abound, with hiking and canoeing popular in the summer months, while winter transforms the park into a snowy wonderland perfect for skiing and snowshoeing. The Icefields Parkway, a 230 km route, provides a breathtaking journey through glaciers, lakes, and valleys, making it a must-do for any visitor to the region</li>
            <li><h4 className={styles.subTitle}>Quebec City</h4>
              Steeped in history and boasting a distinct European charm, Quebec City offers a culturally rich experience unlike any other in Canada. Its historic Old Quebec, a UNESCO World Heritage site, is a treasure trove of cobblestone streets, charming boutiques, and architectural marvels. Dominating the skyline is the majestic Château Frontenac, an iconic hotel that embodies the city's grandeur. Other must-see sites include the historic Plains of Abraham, the site of a pivotal battle, and the stunning Notre-Dame Cathedral Basilica. Quebec City experiences four distinct seasons, each bringing its own unique enchantment and a range of exciting activities. </li>
            <li><h4 className={styles.subTitle}>Toronto</h4>
              As Canada's largest city, Toronto pulsates with urban excitement and stands as a vibrant, multicultural hub. Defining its skyline is the iconic CN Tower, offering unparalleled panoramic views of the city, thrilling experiences like the EdgeWalk, and fine dining at its revolving 360 Restaurant. Culture enthusiasts will be captivated by the Royal Ontario Museum, showcasing extensive collections of art, world culture, and natural history. Other notable attractions include the historic Distillery Historic District, with its Victorian-era architecture and vibrant atmosphere, and the Art Gallery of Ontario, home to a significant collection of artwork. </li>
            <li><h4 className={styles.subTitle}>Niagara Falls</h4>A natural wonder of immense power and beauty, Niagara Falls is an awe-inspiring sight that attracts visitors from around the world. On the Canadian side, key attractions include Journey Behind the Falls, offering an up-close experience of the falls' thunderous power, Niagara City Cruises, taking visitors into the mist at the base of the falls, and the Whirlpool Aero Car, providing stunning aerial views of the Niagara Whirlpool. Visitors also have the option to experience the falls from the US side, offering different perspectives and attractions.   </li>
            <li><h4 className={styles.subTitle}>Jasper National</h4> ParkAdjacent to Banff, Jasper National Park is the largest national park in the Canadian Rockies, celebrated for its vast wilderness, majestic mountains, and abundant wildlife. Must-see locations and activities include the serene Maligne Lake, home to the iconic Spirit Island, the powerful Athabasca Falls, and the breathtaking Icefields Parkway. Visitors can also explore the stunning Mount Edith Cavell, embark on numerous hiking trails catering to all skill levels, and enjoy exceptional opportunities for wildlife viewing. The Icefields Parkway seamlessly connects Jasper and Banff, allowing for an extended exploration of the Canadian Rockies.   </li>
            <li><h4 className={styles.subTitle}>Historic Sites in Ottawa</h4>As the capital city of Canada, Ottawa holds significant historical and political importance, offering a wealth of historic sites for tourists to explore. Dominating the city's landscape is Parliament Hill, home to Canada's federal government, featuring the iconic Parliament Buildings, the Peace Tower, and the Centennial Flame. The Rideau Canal National Historic Site, a UNESCO World Heritage site, offers scenic waterways and historical significance. Other key sites include the Canadian War Museum, showcasing Canada's military history, the National Gallery of Canada, housing an impressive collection of art, and the beautiful Notre-Dame Cathedral Basilica. The city's architecture showcases a stunning blend of Gothic Revival and Victorian styles.   </li>
          </ul>

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
                    {["newzeland", "USA", "UK", "Canada", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
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
          <h3 className={styles.subTitle}>A Year of Adventure: Best Times to Visit Canada</h3>
          <p>Canada's diverse climate offers unique experiences throughout the year, making it a year-round destination for tourism.</p>
          <ul>
            <li><h3 className={styles.subTitle}>Summer (June to August)</h3>Summer in Canada, from June to August, brings warm weather and clear skies, creating ideal conditions for a wide range of outdoor adventures. This is the perfect time for hiking through the stunning trails of Banff and Jasper National Parks, canoeing or kayaking on the pristine lakes, and camping under the vast Canadian skies. With long daylight hours and pleasant temperatures, popular sites like Lake Louise and Moraine Lake are fully accessible, allowing visitors to fully immerse themselves in their breathtaking beauty.   </li>
            <li><h3 className={styles.subTitle}>Winter (December to February)</h3>For snow enthusiasts, winter in Canada, particularly from December to February, offers a magical experience. The Canadian Rockies, including Banff, Lake Louise, and Sunshine Village, become a haven for skiing and snowboarding, boasting prime conditions with fluffy, dry powder, especially in February. Beyond the slopes, visitors can enjoy ice skating on frozen lakes and embark on serene snowshoeing adventures through the winter landscapes. The sight of snow-capped peaks and vast lakes covered in ice creates a truly unforgettable winter wonderland.   </li>
            <li><h3 className={styles.subTitle}>Shoulder Seasons (Spring: March to May; Fall: September to November)</h3>The shoulder seasons in Canada, spring (March to May) and fall (September to November), offer a unique blend of pleasant weather, fewer crowds, and distinct seasonal attractions. Spring sees the return of life to the landscapes, making it a good time for camping, hiking, and wildlife spotting as animals emerge from hibernation. With fewer tourists before the summer rush, visitors can enjoy a more tranquil experience. March brings the sweet tradition of maple syrup season in Quebec , while Vancouver bursts into color with its stunning cherry blossoms. Fall transforms Canada into a tapestry of vibrant colors, making it an ideal time for hiking and admiring the autumn foliage, particularly in Quebec City and the Rockies. With the summer crowds having departed, a more serene atmosphere prevails. September also offers a chance to witness the mesmerizing Northern Lights in regions like the Yukon.   </li>
          </ul>
          <h3 className={styles.subTitle}>Immerse Yourself in Canadian Culture: Festivals and Events</h3>
          <p>Canada's vibrant cultural scene comes alive throughout the year with a diverse array of festivals and events.</p>
          <ul>
            <li><h3 className={styles.subTitle}>Summer Festivals</h3>During the summer months, Canada hosts numerous festivals celebrating a wide range of interests. Music lovers can enjoy the renowned Montreal International Jazz Festival. Vancouver lights up with the spectacular Celebration of Light, an international fireworks competition. Toronto comes alive with the vibrant Toronto Caribbean Carnival , while Calgary hosts the iconic Calgary Stampede, a celebration of rodeo and cowboy culture. Winnipeg showcases its multiculturalism with Folkorama , and Cape Breton Island in Nova Scotia celebrates its Celtic heritage with the Celtic Colours International Festival.   </li>

            <li><h3 className={styles.subTitle}>Winter Festivals</h3>Winter in Canada is far from dull, with numerous festivals embracing the snowy season. Quebec City hosts the world-famous Carnaval de Québec, a grand winter carnival featuring ice sculptures and parades. Ottawa celebrates winter with Winterlude, offering ice sculptures and skating along the Rideau Canal. Niagara Falls illuminates with the Winter Festival of Lights , while Winnipeg celebrates French Canadian and Métis culture at the Festival du Voyageur. Jasper in Alberta offers a range of winter activities, music, and food during Jasper in January.   </li>

            <li><h3 className={styles.subTitle}>Spring Festivals</h3>Spring brings a sense of renewal and celebration across Canada. Ottawa bursts into color with the Canadian Tulip Festival , while Vancouver showcases its beautiful cherry blossoms during the Vancouver Cherry Blossom Festival. Quebec celebrates its maple syrup season with visits to Sugar Shacks , and Stratford, Ontario, hosts the renowned Stratford Spring Theatre Season.   </li>
            <li><h3 className={styles.subTitle}>Fall Festivals</h3>As the leaves turn golden, Canada continues its festival season with a variety of events. Toronto hosts the prestigious Toronto International Film Festival (TIFF) , while Cape Breton Island comes alive with the Celtic Colours International Festival. Kitchener-Waterloo, Ontario, celebrates its German heritage with Oktoberfest , and Jasper National Park offers a celestial experience at the Jasper Dark Sky Festival. Wine enthusiasts can indulge in the Fall Okanagan Wine Festival in British Columbia.   </li>
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
                      {["newzeland", "USA", "UK", "Canada", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
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
          </ul>
          <h2 className={styles.subTitle}>Planning Your Canadian Journey: Essential Travel Information</h2>
          <p>To help you plan your trip to Canada, here is essential information regarding travel costs and daily expenses.</p>
          <h3 className={styles.subTitle}>Navigating the Skies: Average Flight Costs to Canada</h3>
          <p>The cost of flights to Canada varies depending on your departure location, the specific Canadian city you are flying into, the airline you choose, and the time of year you plan to travel.</p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Origin Region</th>
                <th>Destination City</th>
                <th>Average Round-Trip Flight Cost (USD)</th>
                <th>Cheapest Months to Fly</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>USA</td>
                <td>Toronto</td>
                <td>$456</td>
                <td>May, June</td>
              </tr>
              <tr>
                <td>Europe</td>
                <td>Toronto</td>
                <td>$500 - $800+ (CAD)</td>
                <td>February</td>
              </tr>
              <tr>
                <td>Asia</td>
                <td>Vancouver</td>
                <td>$577 - $914+</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Southeast</td>
                <td>Asia</td>
                <td>Vancouver	$673+</td>
                <td>-</td>
              </tr>
              <tr>
                <td>South America</td>
                <td>Montreal</td>
                <td>$579 - $896+</td>
                <td>October, November</td>
              </tr>
            </tbody>
          </table>
          <p className={styles.note}><b>Note:</b> These are average estimates and actual prices may vary.</p>

          <h2 className={styles.subTitle}>Your Home Away From Home: Accommodation Options in Canada</h2>
          <p>Canada offers a wide range of accommodation options to suit every budget and preference.</p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>City</th>
                <th>Budget (Hostels/Budget Hotels)</th>
                <th>Mid-Range Hotels</th>
                <th>Luxury Hotels (4-5 Stars)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Toronto	</td>
                <td>$28 - $100</td>
                <td>$100 - $250</td>
                <td>$200 - $500+</td>
              </tr>
              <tr>
                <td>Montreal</td>
                <td>	$18 - $70</td>
                <td>$70 - $200</td>
                <td>$200 - $500+</td>
              </tr>
              <tr>
                <td>Vancouver</td>
                <td>	$28 - $100</td>
                <td>$100 - $300</td>
                <td>$300 - $700+</td>
              </tr>
              <tr>
                <td>Banff</td>
                <td>$44 - $150</td>
                <td>$150 - $300	</td>
                <td>$300 - $1000+</td>
              </tr>
              <tr>
                <td>Quebec City</td>
                <td>$28 - $70</td>
                <td>$70 - $180</td>
                <td>$180 - $400+</td>
              </tr>
            </tbody>
          </table>

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
                    {["newzeland", "USA", "UK", "Canada", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
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
          <h2 className={styles.subTitle}>Everyday Expenses: Average Daily Living Costs</h2>
          <p>The average daily living expenses for tourists in Canada can vary based on your travel style and spending habits.</p>
          <table className={styles.table}>
            <tr>
              <th>City	</th>
              <th>Food (Budget)</th>
              <th>Food (Moderate)</th>
              <th>Food (Luxury)</th>
              <th>Public Transport (Single Fare)</th>
              <th>Public Transport (Day Pass)</th>
            </tr>
            <tbody>
              <tr>
                <td>Toronto</td>
                <td>$50 CAD</td>
                <td>$85 CAD</td>
                <td>$125 CAD</td>
                <td>$3.30 - $3.35 CAD</td>
                <td>$13.50 CAD</td>
              </tr>
              <tr>
                <td>Montreal</td>
                <td>$19 CAD</td>
                <td>$52 CAD</td>
                <td>$150 CAD</td>
                <td>$3.75 CAD</td>
                <td>$11.00 CAD</td>
              </tr>
              <tr>
                <td>Vancouver</td>
                <td>$50 - $100 CAD</td>
                <td>$85 - $150 CAD</td>
                <td>$125 - $200+ CAD</td>
                <td>$2.60 - $3.20 CAD</td>
                <td>$11.50 CAD</td>
              </tr>
              <tr>
                <td>Banff	</td>
                <td>$40 - $80 CAD</td>
                <td>$70 - $120 CAD</td>
                <td>$100 - $200+ CAD</td>
                <td>$5 - $25 CAD</td>
                <td>$12 - $35 CAD</td>
              </tr>
              <tr>
                <td>Quebec City</td>
                <td>$40 - $70 CAD</td>
                <td>$70 - $120 CAD</td>
                <td>$100 - $180+ CAD</td>
                <td>$3.50 - $3.75 CAD</td>
                <td>$10.00 CAD</td>
              </tr>
            </tbody>
          </table>

          <p className={styles.note}><b>Note:</b> These are average estimates and actual costs may vary.</p>
          <h2 className={styles.subTitle}>Why Canada? Unveiling the Allure of a Top Tourist Destination</h2>
          <p>Canada's desirability as a tourist destination stems from a multitude of factors that cater to a wide range of travelers.</p>
          <ul>
            <li><h4 className={styles.subTitle}>Breathtaking Landscapes and Natural Beauty</h4>From coast to coast, Canada is blessed with breathtaking landscapes and iconic natural wonders. The majestic mountains of the Rockies, with their snow-capped peaks and turquoise lakes like Lake Louise and Moraine Lake, offer unparalleled scenic beauty. The sheer power of Niagara Falls captivates millions of visitors each year. The rugged coastlines of Nova Scotia, the vast forests of Ontario, and the unique tidal phenomena of the Bay of Fundy showcase Canada's diverse geography. In the northern territories, the mesmerizing Northern Lights dance across the night sky, offering a truly unforgettable spectacle. This natural beauty provides endless opportunities for outdoor activities, including hiking, canoeing, kayaking, skiing, snowboarding, and wildlife viewing.   </li>
            <li><h4 className={styles.subTitle}>Rich Cultural Experiences and Warm Hospitality</h4>Beyond its natural wonders, Canada offers rich cultural experiences and is renowned for its warm and welcoming hospitality. As a multicultural nation, Canada embraces diversity, with vibrant cities like Vancouver, Toronto, Montreal, and Quebec City showcasing a blend of Indigenous traditions, French and British heritage, and influences from around the world. Canadians are known for their politeness and friendly nature, making visitors feel at home. Throughout the year, numerous festivals celebrate music, art, food, and culture, providing immersive experiences into Canada's diverse heritage.   </li>
            <li><h4 className={styles.subTitle}>Safety and Security: Your Worry-Free Destination</h4>
              Canada consistently ranks as one of the safest countries in the world, offering a secure and stable environment for travelers. Major Canadian cities are known for their low crime rates and visible policing, ensuring visitors can explore with peace of mind. The country boasts a reliable healthcare system, providing access to quality medical services if needed. Canada also has safe and well-maintained transportation systems, including public transit and roads. Additionally, most tourist areas in Canada experience a low risk of major natural disasters, contributing to a worry-free travel experience.</li>
          </ul>
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
                    {["newzeland", "USA", "UK", "Canada", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
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
          <h2 className={styles.subTitle}>Smooth Sailing: Understanding the Canadian Tourist Visa Process</h2>
          <p>For many international travelers, a Canadian tourist visa is required to enter the country. Understanding the process can help ensure a smooth journey.</p>
          <h3 className={styles.subTitle}>Eligibility and Requirements for a Canadian Tourist Visa:</h3>
          <p>To be eligible for a Canadian tourist visa, you generally need to meet the following detailed requirements:</p>
          <ul>
            <li><strong className={styles.subTitle}>Valid Passport:</strong>
              <ul>
                <li>You must hold a valid passport.</li>
                <li>The passport must be valid for the entire duration of your intended stay in Canada. It's often recommended that your passport have at least six months of validity beyond your planned departure date from Canada.</li>
                <li>Ensure there are sufficient blank pages in your passport for any necessary visa stamps.</li>
              </ul>
            </li>
            <li><strong className={styles.subTitle}>Good Health:</strong>
              <ul>
                <li>You must be in good health.</li>
                <li>You may be required to undergo a medical examination by a panel physician designated by Immigration, Refugees and Citizenship Canada (IRCC), depending on your country of origin and intended length of stay.</li>
                <li>Certain medical conditions may render you inadmissible to Canada.</li>
              </ul>
            </li>
            <li><b className={styles.subTitle}>No Criminal Record:</b>
              <ul>
                <li>You must not have any criminal record or be involved in any criminal activity.</li>
                <li>You may be required to provide police certificates from your country of residence and any other country where you have lived for six months or more since the age of 18.</li>
                <li>Past criminal convictions could lead to your visa application being refused.</li>
              </ul>
            </li>
            <li><strong className={styles.subTitle}>Demonstrate Strong Ties to Your Home Country:</strong>
              <ul>
                <li>You must convince the immigration authorities that you will leave Canada at the end of your authorized stay. This is crucial to demonstrate you are a genuine temporary resident. Strong ties can include:
                  <ul>
                    <li><strong className={styles.subTitle}>Ongoing Studies:</strong> Enrollment verification from an educational institution in your home country. A letter from your employer confirming your position, salary, and that you are expected to return to your job.</li>
                    <li><strong className={styles.subTitle}>Property Ownership:</strong> Documents proving ownership of a house, land, or other significant assets in your home country.</li>
                    <li><strong className={styles.subTitle}>Financial Assets:</strong> Bank statements, investment records, or other financial documents demonstrating your economic stability in your home country.</li>
                    <li><strong className={styles.subTitle}>Family Ties: </strong>Marriage certificate, birth certificates of dependent children residing in your home country, or other documents demonstrating significant family responsibilities.</li>
                    <li><strong className={styles.subTitle}>Ongoing Studies:</strong> Enrollment verification from an educational institution in your home country.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><b className={styles.subTitle}>Proof of Sufficient Funds:</b>
              <ul>
                <li>You must demonstrate that you have enough money to support yourself during your stay in Canada and to return home.</li>
                <li>The required amount of funds will vary depending on:
                  <ul>
                    <li>The length of your intended stay.</li>
                    <li>Your accommodation arrangements (e.g., staying with family/friends vs. staying in hotels).</li>
                    <li>Your travel companions (if any).
                    </li>
                  </ul>
                </li>
                <li><b className={styles.subTitle}>Acceptable proof of funds may include:</b>
                  <ul>
                    <li>Bank statements for the past few months.</li>
                    <li>Fixed deposit certificates.</li>
                    <li>Evidence of other liquid assets.</li>
                    <li>If you are being supported by someone in Canada, a letter of support and their financial documents may be required.</li>

                  </ul>
                </li>

              </ul>
            </li>

            <li><b className={styles.subTitle}>Letter of Invitation (If Applicable):</b>
              <ul>
                <li>If you are visiting family or friends in Canada, a letter of invitation from them can be helpful.</li>
                <li>The letter should include details about the inviter (their status in Canada, contact information, relationship to you), details about you (your name, date of birth, purpose and duration of visit), and details about accommodation and financial support, if any.</li>
                <li>While a letter of invitation is not mandatory in all cases, it can strengthen your application by providing additional context for your visit.</li>
              </ul>
            </li>
            <li><b className={styles.subTitle}>Biometric Information (If Required):</b>
              <ul>
                <li>Citizens from certain countries are required to provide biometric information (fingerprints and a photograph) as part of their visa application.</li>
                <li>You will typically need to attend an appointment at a Visa Application Centre (VAC) in your country of residence to provide your biometrics.</li>
                <li>A biometric instruction letter will be issued after you submit your online application and pay the fee.</li>
              </ul>
            </li>
          </ul>
          <div className={styles.formSection1}>

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
                    {["newzeland", "USA", "UK", "Canada", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
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
          <h2 className={styles.subTitle}>Steps Involved in the Visa Application Process:</h2>
          <p>The process of applying for a Canadian tourist visa involves the following detailed steps:</p>
          <ol type='I'>
            <li><b className={styles.subTitle}>Determine Visa Requirements:</b>
              <ul>
                <li>First and foremost, determine if you actually need a tourist visa to travel to Canada.</li>
                <li>Citizens of certain countries are visa-exempt and may only require an Electronic Travel Authorization (eTA) for air travel.</li>
                <li>Use the official Government of Canada website (IRCC) to check the visa requirements based on your citizenshi</li>
              </ul>
            </li>
            <li><b className={styles.subTitle}>Gather Necessary Supporting Documents:</b>
              <ul>
                <li>Collect all the required documents to support your application. This may include:
                  <ul>
                    <li><strong className={styles.subTitle}>Passport:</strong> Ensure it meets the validity requirements mentioned earlier. Include copies of the bio-data page and any previous visas or entry stamps.</li>
                    <li><strong className={styles.subTitle}>Proof of Financial Resources:</strong> Gather bank statements, fixed deposit certificates, investment records, or letters of support and financial documents from your host in Canada, as applicable. Ensure these documents are recent and clearly show sufficient funds.</li>
                    <li><strong className={styles.subTitle}>Proof of Ties to Home Country:</strong> Collect employment letters, property ownership documents, marriage certificate, birth certificates of dependents, school enrollment letters, etc.</li>
                    <li><strong className={styles.subTitle}>Travel History: </strong>Include copies of previous visas, entry/exit stamps in your passport, and any other evidence of your travel history.</li>
                    <li><strong className={styles.subTitle}>Letter of Invitation (If Applicable):</strong> Obtain a detailed letter of invitation from your host in Canada, along with their proof of status in Canada (e.g., copy of their Permanent Resident card, citizenship certificate, or valid visa).</li>
                    <li><strong className={styles.subTitle}>Purpose of Travel:</strong> Provide details about your intended trip, such as flight bookings (if available, but not recommended to purchase before visa approval), hotel reservations (if applicable), and a detailed itinerary of your planned activities in Canada.</li>
                    <li><strong className={styles.subTitle}>Family Information Form:</strong> Complete the required family information form accurately and comprehensively.</li>
                    <li>Digital Photo: Ensure you have a digital photograph that meets the specific requirements of IRCC.</li>
                    <li><strong className={styles.subTitle}>Any Other Supporting Documents:</strong> Depending on your individual circumstances, you may need to provide additional documents as requested1 by IRCC.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><b className={styles.subTitle}>Complete the Online Application:</b>
              <ul>
                <li>The primary method for applying for a Canadian tourist visa is online through the official IRCC website.</li>
                <li>Create an account on the IRCC portal.</li>
                <li>Follow the instructions to complete the online application form accurately and truthfully. Ensure all fields are filled out completely.</li>
                <li>Upload all the required supporting documents in the specified formats and sizes. Ensure the scanned documents are clear and legible.</li>
              </ul>
            </li>
            <li><b className={styles.subTitle}>Pay the Application Fee:</b>
              <ul>
                <li>A non-refundable application fee of $100 CAD per person is required.</li>
                <li>Payment is typically made online using a credit card or other accepted methods.</li>
                <li>Keep a record of your payment confirmation.</li>
              </ul>
            </li>
            <li><b className={styles.subTitle}>Pay the Biometric Fee (If Applicable):</b>
              <ul>
                <li>If you are required to provide biometrics, an additional fee of $85 CAD per person may apply.</li>
                <li>This fee is usually paid online at the same time as the application fee.</li>
              </ul>
            </li>
            <li><b className={styles.subTitle}>Submit the Application:</b>
              <ul>
                <li>Once you have completed the online form, uploaded all documents, and paid the necessary fees, you can submit your application electronically.</li>
              </ul>
            </li>
            <li><b className={styles.subTitle}>Provide Biometrics (If Required):</b>
              <ul>
                <li>After submitting your online application and paying the biometric fee (if applicable), you will receive a biometric instruction letter.</li>
                <li>You will need to schedule an appointment at an authorized Visa Application Centre (VAC) in your country of residence to provide your fingerprints and photograph.</li>
                <li>Ensure you bring a copy of your biometric instruction letter and your passport to your appointment.</li>
              </ul>
            </li>
            <li><b className={styles.subTitle}>Processing of the Application:</b>
              <ul>
                <li>Once your application and biometrics (if required) are received, IRCC will begin processing your application.</li>
                <li>Processing times can vary significantly based on factors such as your country of residence, the volume of applications being processed, and the complexity of your case. It can take anywhere from a few weeks to several months.</li>
                <li>You can usually track the status of your application through your IRCC online account.</li>
              </ul>
            </li>
            <li><b className={styles.subTitle}>Passport Request:</b>
              <ul>
                <li>If your application is approved, you will receive a passport request letter from IRCC.</li>
                <li>You will need to submit your original passport to the designated VAC or Canadian visa office to have the visa counterfoil (sticker) placed in it.</li>
                <li>Follow the instructions provided in the passport request letter carefully regarding how and where to submit your passport.</li>
              </ul>
            </li>
            <li><b className={styles.subTitle}>Visa Stamping and Return of Passport:</b>
              <ul>
                <li>Once your passport is received, the visa will be printed and affixed to one of the blank pages.</li>
                <li>Your passport will then be returned to you. Ensure you check the details on the visa sticker for any errors.</li>
              </ul>
            </li>
          </ol>
          <h2 className={styles.subTitle}>Conclusion: Your Canadian Adventure Starts Here - Let Global Visa Internationals Be Your Guide</h2>
          <p>Canada beckons with its breathtaking landscapes, diverse cultures, and warm hospitality, promising an unforgettable travel experience. From the towering peaks of the Rockies to the charming historical sites of Quebec and the dynamic urban life of Toronto, a Canadian adventure offers something for every traveler. While the anticipation of exploring this vast and welcoming nation is thrilling, navigating the visa application process can sometimes feel overwhelming.</p>
          <p>At Global Visa Internationals, we are dedicated to simplifying this journey for you. Our team possesses the in-depth knowledge and expertise regarding Canadian visa regulations to provide comprehensive guidance through each stage of the application. We are committed to ensuring a seamless and stress-free experience by offering invaluable assistance with:</p>
          <ul>
            <li>Understanding eligibility requirements specific to your situation.</li>
            <li>Compiling and organizing your essential documentation meticulously.</li>
            <li>Navigating the online application process with precision.</li>
            <li>Providing guidance on biometric requirements and appointment scheduling.</li>
            <li>Keeping you informed throughout the processing timeline.</li>

          </ul>
          <p>With our support, you can focus on the excitement of your upcoming Canadian adventure while we handle the complexities of the visa process. Contact us today to embark on your journey to Canada with confidence!</p>
          <p>Let Global Visa Internationals be your trusted partner in transforming your Canadian dream into a reality. Contact us today, and allow our experienced team to expertly guide you through the visa application process, so you can focus on the excitement of planning your incredible Canadian adventure.</p>
          <section id='Client Reviews'>
            <h2 className={styles.subtitle}>Client Reviews</h2>
            <div className="elfsight-app-f560162c-1e98-4995-97af-3da789ac6ec5" data-elfsight-app-lazy></div>
          </section>
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
                  {["newzeland", "USA", "UK", "Canada", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
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
    </>
  );
}