"use client";
import Head from 'next/head';
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef,useCallback } from "react";
import styles from "./page.module.css";
import clsx from "clsx";
import { useReCaptcha } from 'next-recaptcha-v3';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";



const slides = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
];

const faqs = [
  {
    question: 'My visa was refused. Can I reapply?',
    answer: 'Yes—just address the reasons for the refusal and reapply with the necessary documentation.',
  },
  {
    question: 'How can I qualify for the Canada PR Visa Program?',
    answer: 'Firstly, the candidate should have an eligible occupation under the NOC 0, A, and B for Canada PR Visa...',
  },
  {
    question: 'Can my spouse work on a dependent visa?',
    answer: 'It varies by country; some grant work rights automatically, while others require a separate permit.',
  },
  {
    question: 'Can I work on a student visa?',
    answer: 'Yes, often up to 20 hours per week during term time (and sometimes full-time during breaks).',
  },
  {
    question: 'How long is the Portugal Job Seeker Visa valid for?',
    answer: 'The visa is initially valid for 120 days. If you do not find a job within this period, it can be extended for an additional 60 days, making the total potential stay up to 180 days.',
  },
  {
    question: 'Who is eligible for an Austrian job seeker visa?',
    answer: 'To apply for an Austrian job seeker visa, you must be a Non-EU citizen, have a recognized higher education degree...',
  },
];




export default function Home() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const reviewCarouselRef= useRef(null);
  const videoCarouselRef=useRef(null);
// google review
useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://apps.elfsight.com/p/platform.js";
  script.defer = true;
  document.body.appendChild(script);
}, []);


// video carousel

const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };


  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Function to start auto slide
  const startAutoSlide = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
  }, []);

  // Run auto-slide on mount
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [startAutoSlide]);

  // Move slides manually
  const moveGallerySlide = (direction) => {
    clearInterval(intervalRef.current); // Reset auto-slide when manually changing
    setCurrentIndex((prev) => (prev + direction + slides.length) % slides.length);
    startAutoSlide(); // Restart auto-slide after manual change
  };
  


  //Form Section
  
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
  

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
// services section
const visaTypes = [
  { type: "Tourist Visa", image:"/images/visa.webp", link: "/tourist-visa", countries: ["canada", "australia", "usa", "uk", "europe", "japan", "dubai", "new-zealand", "singapore"] },
  { type: "Student Visa", image:"/images/visa.webp", link: "/student-visa", countries: ["canada", "australia", "usa", "uk", "europe",   "new-zealand"] },
  { type: "Business Visa", image:"/images/visa.webp", link: "/business-visa", countries: ["canada", "australia",  "uk", "europe", "new-zealand"] },
  { type: "Permanent Residency Visa",image:"images/visa.webp", link: "/permanent-residency-visa", countries: ["canada", "australia" ] },
  { type: "Work Visa", image:"/images/visa.webp" ,link: "/work-visa", countries: ["canada", "australia",  "uk", "europe",  "new-zealand"] },
  { type: "Dependent Visa",image:"/images/visa.webp", link: "/dependent-visa", countries: ["canada", "australia", "uk", "europe", "new-zealand"] },
  { type: "Refusal Visa",image:"/images/visa.webp" , link: "/refusal-visa", countries: ["canada", "australia", "usa", "uk", "europe",  "new-zealand" ] },
  // { type: "Trade Visa",image:"/images/visa.webp" , comingSoon: true },
  { type: "Golden Visa",image:"/images/visa.webp" , comingSoon: true }
];



  return (
    <>
{/* SEO Meta Tags */}
<Head>

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta charSet="UTF-8" />
  

  {/* Title & Meta Description */}
  <title>Global Visa Internationals | Trusted Immigration Consultants in Bangalore</title>
  <meta name="description" content="Leading immigration consultants in Bangalore offering visa services for Canada PR, USA, UK, Australia, Schengen, and other countries. Over 75,000 clients served with fast and genuine guidance. Contact us for transparent visa services!" />

  {/* Favicon */}
  <link rel="icon" type="image/png" href="/gvilogo.png" />

  {/* Keywords */}
  <meta name="keywords" content="Immigration Consultants in Bangalore, Visa Agents, Canada PR, Study Abroad, Work Visa, Visitor Visa, Dependent Visa, Business Visa, Refusal Visa, Fast Visa Services, Australia Student Visa, Schengen Visa Agents, Trusted Immigration Consultants, Global Visa Services, Bangalore Immigration Experts" />

  {/* Author & Robots */}
  <meta name="author" content="Global Visa Internationals" />
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />
  <meta name="bingbot" content="index, follow" />

  {/* Canonical */}
  <link rel="canonical" href="https://www.globalvisa-internationals.com/" />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Global Visa Internationals | Trusted Immigration Consultants in Bangalore" />
  <meta property="og:description" content="Expert immigration guidance for Canada, USA, Australia, UK, and Europe. High success rate and transparent process. Trusted visa services for all your needs!" />
  <meta property="og:image" content="https://www.globalvisa-internationals.com/gvilogo.png" />
  <meta property="og:url" content="https://www.globalvisa-internationals.com/" />
  <meta property="og:type" content="website" />


  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Global Visa Internationals | Visa & Immigration Experts" />
  <meta name="twitter:description" content="Get fast and genuine immigration solutions. 75,000+ clients served. Expert PR, Work, Study & Visitor Visa Services in Bangalore." />
  <meta name="twitter:image" content="https://www.globalvisa-internationals.com/gvilogo.png" />

  {/* Google Fonts & Icons */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Open+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOM8d7xj1z5l5e5c5e5c5e5c5e5c5e5c5e5c5e5c5e" crossOrigin="anonymous" />

  {/* Structured Data - Local Business & Services */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Global Visa Internationals",
      "image": "https://www.globalvisa-internationals.com/gvilogo.png",
      "url": "https://www.globalvisa-internationals.com/",
      "telephone": "+917022213466",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "GF-9, Business Point, Brigade Road",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560025",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.9674808,
        "longitude": 77.606117
      },
      "sameAs": [
        "https://www.facebook.com/globalvisa.globalvisa",
        "https://www.instagram.com/globalvisa_internationals/",
        "https://x.com/GLOBALVISA1505"
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "10:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "10:00",
          "closes": "14:00"
        }
      ],
      "potentialAction": {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.globalvisa-internationals.com/contact"
        },
        "resultDescription": "Book a free consultation"
      }
    }
  ` }} />
</Head>



      {/* Background Image with Correct Styling */}
      <section className={styles.thoughtSection}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/w-map.webp"
          alt="World Map Background"
          fill
          quality={100}
          className={styles.backgroundImage}
        />
      </div>
    </section>

      <h1 className={styles.mainHeading}>
        Global Visa Internationals - Trusted Visa & Immigration Consultant
      </h1>

      {/* About Us Section */}
      <section id="aboutUs">
        <section className={styles.storyContainer}>
          
            <div className={styles.imageWrapper}>
              <Image
                src="/images/story.webp"
                alt="Our Story Image"
                fill
                quality={100}
                className={styles.responsiveImage1}
              />
            
          </div>

          {/* Text Section */}
          <div className={styles.textContent}>
            <h2 className={styles.subtitle}>Our Story</h2>
            <p>We, at <strong>Global Visa Internationals</strong>, are the leading visa consultants in Bangalore, turning your dreams into reality. With over 11+ years of experience in visa consultation services, we have successfully processed more than 55,000+ visas for our clients and provided 75,000+ pieces of advice. Our clients trust us for our expertise in visa and immigration consultation.</p>
              
            <p>At our firm, we take pride in providing comprehensive services for a wide range of visa options, including work, study, business, travel, dependent, permanent residency, and assistance with refusals. Our mission is to make the entire process as seamless and stress-free as possible for our clients. Whether you are pursuing career advancement, aiming for quality education, or looking for a new beginning in a foreign land, we are here to offer expert guidance tailored to your unique circumstances and aspirations. Let us help you turn your dreams of international opportunities into reality.</p>

            <p>At Global Visa Internationals, we prioritize transparency, efficiency, and personalized service in our approach to client relations. This commitment distinguishes us in the visa and immigration sector. Rely on us to navigate the complexities of your visa and immigration process, making it simpler and more accessible. Begin your journey to a world of opportunities with us today!
            </p>
          </div>
        </section>

      </section>

      
<section className={styles.whyChooseContainer} id="why-us">
      <h2 className={styles.subtitle}>Why Global Visa Internationals?</h2>
<ul>
  <li>11+ Years of Proven Expertise in visa and immigration consultancy services since 2013.</li>
  <li>75,000+ Clients Assisted across diverse visa categories with high success rates.</li>
  <li>Thousands of Visa Applications Processed, including:
    <ul>
      <li>Permanent Residency</li>
      <li>Work Visas</li>
      <li>Student Visas</li>
      <li>Visitor/Tourist Visas</li>
      <li>Business Visas</li>
      <li>Skilled Immigration</li>
      <li>Family/Dependent Visas</li>
      and more
    </ul>
  </li>
  <li>In-depth Knowledge of Global Immigration Laws ensures accurate guidance and faster approvals.</li>
  <li>Top Destinations Covered: Canada, Australia, UK, USA, Europe, and more.</li>
  <li>Experienced & Certified Consultants guiding you every step of the way.</li>
  <li> Personalized Immigration Solutions for individuals, students, professionals, and families.</li>
  <li>Transparent and Trustworthy Process with complete support from start to finish.</li>
</ul>
      
      
     
      
      
                                                                                              
      
     
      
    </section>
    <h3 className={styles.subtitle}>Our Impact at a Glance</h3>
    <section >
      
            <div className={styles.whyGrid}>
                <div className={styles.whyCard}>
                  <img className={styles.whyImg} src="/images/networking.png" alt="network" loading="lazy"/>
                  <strong>75+</strong> 
                   <p> 
                    Years of combined industry experience</p>
                </div>
                
                <div className={styles.whyCard}>
                    <img className={styles.whyImg} src="/images/globe.png" alt="connections" loading="lazy"/>
                    <strong>15+</strong>
                    <p>
                    Countries offered as immigration destinations</p>
                </div>
                
                <div className={styles.whyCard}>
                    <img className={styles.whyImg} src="/images/crowd-of-users.png" loading="lazy" alt=""/>
                    <strong>50+</strong>
                    <p>
                    Visa options for skilled and business categories</p>
                </div>
                
                <div className={styles.whyCard}>
                    <img className={styles.whyImg} src="/images/airplane.png" loading="lazy" alt=""/>
                    <strong>35000+</strong>
                    <p>
                    Immigrations executed</p>
                </div>               
                <div className={styles.whyCard}>
                    <img className={styles.whyImg} src="/images/calendar.png" loading="lazy" alt=""/>
                    <strong>Since 2013</strong>
                    
                    <p>Over One decades of excellence</p>
                </div>
            </div> 
    </section>

    <h2 className={styles.subtitle}>Client Reviews</h2>
    <div className="elfsight-app-f560162c-1e98-4995-97af-3da789ac6ec5" data-elfsight-app-lazy></div>
   

  

        
      <section id="gallery">
      <h2 className={styles.subtitle}>Gallery</h2>
      <div className={styles.galleryCarouselWrapper}>
        <div className={styles.galleryCarousel}>
          {slides.map((src, index) => {
            let positionClass = styles.hidden;
            if (index === currentIndex) positionClass = styles.active;
            else if (index === (currentIndex - 1 + slides.length) % slides.length) positionClass = styles.prev;
            else if (index === (currentIndex + 1) % slides.length) positionClass = styles.next;

            return (
              <div key={index} className={`${styles.gallerySlide} ${positionClass}`}>
                <img src={src} loading="lazy" alt={`Slide ${index + 1}`} />
              </div>
            );
          })}
        </div>
        <button className={clsx(styles.galleryNavBtn, styles.galleryPrevBtn)} onClick={() => moveGallerySlide(-1)}>
          &#10094;
        </button>
        <button className={clsx(styles.galleryNavBtn, styles.galleryNextBtn)} onClick={() => moveGallerySlide(1)}>
          &#10095;
        </button>
      </div>
    </section>


{/* Our Values */}
<h2 className={styles.subtitle}>Our Values</h2>
<section className={styles.missionVisionValues} id="ourvalues">
  <div className={styles.missionCard}>
    <h2>OUR MISSION</h2>
    <div >
      <img className={styles.custImg} src="/images/target.png" alt="Mission Icon" loading="lazy" />
    </div>
    <p>
      We at Global Visa Internationals offer top-notch consulting services for both immigration and non-immigration. 
      Our goal is to make international mobility easier by providing knowledgeable, open, and moral advice on work permits, 
      visas, study plans, business travel, and relocation.  </p>
      <p>
      We guarantee a smooth route for people and companies aiming for global success by putting the needs of our clients first.
    </p>
  </div>

  <div className={styles.visionCard}>
    <h2>OUR VISION</h2>
    <div >
      <img className={styles.custImg} src="/images/focus.png" alt="Vision Icon" loading="lazy" />
    </div>
    <p>
      At Global Visa Internationals, we see a world in which ambitions are unabated by boundaries and opportunities are limitless.
      Being the most reputable immigration consultant by streamlining international mobility in an open and effective manner is our aim.</p>
      <p>
      We assist individuals, families, and companies in realizing their aspirations of studying, working, and relocating overseas 
      by providing knowledgeable advice and individualized service.
    </p>
  </div>

  <div className={styles.valuesCard}>
    <h2>CORE VALUES</h2>
    <div >
      <img className={styles.custImg} src="/images/global-service.png" alt="Core Values Icon" loading="lazy" />
    </div>
    <p>
      At Global Visa Internationals, honesty, openness, and customer-focused service are our guiding principles. 
      We simplify international travel while upholding a customized, client-focused approach by fusing innovation and experience.</p>
      <p>
      To give correct advice, our staff keeps up with changing immigration rules. We effectively reduce procedures to 
      guarantee a seamless travel experience for you.
    </p>
  </div>
</section>

{/* Our Visa & Immigration Services */}
<section id="services">
        <h2 className={styles.subtitle}>Our Visa & Immigration Services</h2>

        <div className={styles.visaCardContainer}>
          {visaTypes.map((visa, index) => (
            <div key={index} className={styles.visaCard}>
              <div className={styles.visaCardInner}>
                
                {/* Front Side */}
                <div className={styles.visaCardFront}>
                  <img 
                    className={styles.responsiveImage} 
                    src={visa.image} 
                    loading="lazy"  
                    alt={`${visa.type} Services`} 
                  />
                  <div className={styles.textOverlay}>{visa.type}</div>
                </div>

                {/* Back Side */}
                <div className={styles.visaCardBack}>
                  <strong className={styles.visaType}>{visa.type}</strong>
                  {visa.comingSoon ? (
                    <div className={styles.comingSoon}>
                      <strong>🚧 Coming Soon 🚧</strong>
                      </div>
                  ) : (
                    <ul>
                      {visa.countries.map((country, i) => (
                        <li key={i}>
                          <a href={`/Visa/${visa.type.toLowerCase().replace(/ /g, "-")}/${country}`}>
                            {country.replace("-", " ").toUpperCase()}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

 
<h2 className={styles.subtitle}> Contact</h2>
<section className={styles.dataForm}>

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
                {["Canada", "USA", "UK", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
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

      
    
    <div className={styles.faqSection}>
      <h2 className={styles.textXl}>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
        >
          <div
            className={styles.faqQuestion}
            onClick={() => handleToggle(index)}
          >
            {faq.question}
          </div>
          {activeIndex === index && (
            <div className={styles.faqAnswer}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
    
</section>


{/* <section className={styles.clientReview}>
      <h2 id={styles.clientVideo} className={styles.subtitle}>Visa Services</h2>
      <div className={styles.videoContainer}>
        <button onClick={scrollLeft} className={styles.navButton + " " + styles.leftArrow}>‹</button>
        <div className={styles.videoCarousel} ref={carouselRef}>
          <div className={styles.carouselTrack}>
            <div className={styles.videoTestimonial}>
              <video src="/Videos/1.mp4" controls loop autoPlay muted loading="lazy" />
            </div>
            <div className={styles.videoTestimonial}>
              <video src="/Videos/2.mp4" controls loop autoPlay muted loading="lazy" />
            </div>
            <div className={styles.videoTestimonial}>
              <video src="/Videos/3.mp4" controls loop autoPlay muted loading="lazy" />
            </div>
            <div className={styles.videoTestimonial}>
              <video src="/Videos/4.mp4" controls loop autoPlay muted loading="lazy" />
            </div>
            <div className={styles.videoTestimonial}>
              <video src="/Videos/5.mp4" controls loop autoPlay muted loading="lazy" />
            </div>
          </div>
        </div>
        <button onClick={scrollRight} className={styles.navButton + " " + styles.rightArrow}>›</button>
      </div>
    </section> */}



<section >
    <div className={styles.containerLoc}>

      <div className={styles.map}>
        <iframe className={styles.iframe}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486.00853848403034!2d77.60577367689068!3d12.967480835531479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d5613d9a4b%3A0xea0b2fbdf4f08876!2sGlobal%20Visa%20Internationals!5e0!3m2!1sen!2sin!4v1741000774951!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"> </iframe>

    </div>
 
    </div>
</section>




    </>
  );
}


