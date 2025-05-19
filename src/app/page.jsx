"use client";
import Head from 'next/head';
import Image from "next/image";
import { useState, useEffect, useRef,useCallback } from "react";
import styles from "./page.module.css";
import clsx from "clsx";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { motion } from 'framer-motion';



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

const locations = [
  { name: 'USA', flag: '🇺🇸', top: '30%', left: '15%', link: '/Visa/tourist-visa/usa' },
  { name: 'Canada', flag: '🇨🇦', top: '15%', left: '15%', link: '/Visa/tourist-visa/canada' },
  { name: 'UK', flag: '🇬🇧', top: '15%', left: '43%', link: '#uk' },
  { name: 'Ireland', flag: '🇮🇪', top: '22%', left: '44%', link: '#ireland' },
  { name: 'Scotland', flag: '🏴', top: '28%', left: '45%', link: '#scotland' }, // St. Andrew’s Cross
  { name: 'Finland', flag: '🇫🇮', top: '8%', left: '53%', link: '#finland' },
  { name: 'Sweden', flag: '🇸🇪', top: '13%', left: '55%', link: '#sweden' },
  { name: 'Germany', flag: '🇩🇪', top: '20%', left: '52%', link: '#germany' },
  { name: 'Austria', flag: '🇦🇹', top: '25%', left: '54%', link: '#austria' },
  { name: 'Dubai', flag: '🇦🇪', top: '40%', left: '60%', link: '#dubai' },
  { name: 'Japan', flag: '🇯🇵', top: '28%', left: '85%', link: '#japan' },
  { name: 'Singapore', flag: '🇸🇬', top: '55%', left: '75%', link: '#singapore' },
  { name: 'Australia', flag: '🇦🇺', top: '74%', left: '80%', link: '#australia' },
  { name: 'Iceland', flag: '🇮🇸', top: '10%', left: '39%', link: '#iceland' },
  { name: 'Greenland', flag: '🇬🇱', top: '5%', left: '33%', link: '#greenland' },
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
            <p>We at Global Visa Internationals, proud to be India's finest visa consultants, are dedicated to making your dreams into reality. With our 11+ years of experience as leading visa consultants in Bangalore, we have successfully managed to process over 55,000+ visas and offer over 75,000 expert visa advice sessions till date. You can confidently rely on our vast visa and immigration consulting experience in India.</p>
              
            <p>We are committed to providing an end-to-end visa solution in India for all categories of different visas, including work visa Bangalore, study visa Bangalore, business visa Bangalore, travel visa Bangalore, dependent visa Bangalore, permanent residency in Bangalore, and refusal assistance Bangalore. We aim to ensure your entire hassle-free visa and trouble-free visa experience in Bangalore. Whether you want to expand your career abroad with our guidance, gain superior education abroad through our expert consultation, or begin a new life abroad with our support, we can guide you through it with superior professional visa advice in sync with your needs in Bangalore. We can help you follow your aspirations abroad from Bangalore.</p>

            <p>At Global Visa Internationals, we value efficiency in the visa process, transparency in our dealings, and the human touch in our client relationships in the visa and immigration sector in Bangalore. This is what sets us apart as reliable immigration consultants in Bangalore. We handle the complexities of the visa process, so you can have a more convenient and smoother visa experience. Start your journey to a world of opportunities today with the leading visa agency in Bangalore!
            </p>
          </div>
        </section>

      </section>

      
<section className={styles.whyChooseContainer} id="why-us">
      <h2 className={styles.subtitle}>Why Global Visa Internationals?</h2>
<ul>
  <li>Benefit from 11+ Years of Proven Expertise in visa and immigration consultancy services in Bangalore since 2013.</li>
  <li>Join our community of 75,000+ Clients Assisted across diverse visa categories with high success rates in their visa applications from Bangalore.</li>
  <li>We have processed Thousands of Visa Applications, including: 
    <ul>
      <li>Permanent Residency </li>
      <li>Work Visas for various countries from India</li>
      <li>Student Visas to top global institutions from India</li>
      <li>Visitor/Tourist Visas from India</li>
      <li>Business Visas for international travel from India</li>
      <li>Skilled Immigration pathways from India</li>
      <li>Family/Dependent Visas to reunite families abroad from India</li>
      and more
    </ul>
  </li>
  <li>Our In-depth Knowledge of Global Immigration Laws ensures accurate guidance and faster visa approvals for our clients in Bangalore.</li>
  <li>We cover Top Destinations including: Canada visa consultants India, Australia immigration consultants India, UK visa agency India, USA visa services India, Europe visa consultants Bangalore, and more</li>
  <li>Our Experienced & Certified Consultants are dedicated to guiding you every step of the way in your visa journey from India.
  </li>
  <li> We offer Personalized Immigration Solutions for individuals, students, professionals, and families seeking visas from India</li>
  <li>Experience a Transparent and Trustworthy Process with complete support from start to finish for your visa needs in India.</li>
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
    At Global Visa Internationals, our mission is to simplify and streamline the complex process of international immigration and visa application services. We are committed to delivering clear, ethical, and expert visa consultancy to individuals, families, students, skilled professionals, and business travelers across the globe. </p>
      <p>
      By combining deep immigration industry experience, personalized attention, and AI-powered visa processing tools, we enable our clients to pursue study abroad opportunities, international employment, business expansion, or personal travel with total confidence..
    </p>
    <p>Whether it's a tourist visa, student visa, work permit, or permanent residency, we stand by our clients at every stage, offering end-to-end support that transforms dreams into global realities.</p>
  </div>

  <div className={styles.visionCard}>
    <h2>OUR VISION</h2>
    <div >
      <img className={styles.custImg} src="/images/focus.png" alt="Vision Icon" loading="lazy" />
    </div>
    <p>
    Our vision at Global Visa Internationals is to become the world’s most trusted, innovative, and client-focused immigration consultancy. We believe that the future of immigration lies in breaking barriers and building global bridges—where borders are not obstacles, but gateways to opportunity, growth, and personal transformation.</p>
      <p>
      We aim to lead the global immigration industry through a client-centric approach, providing customized, fast, and reliable visa solutions. With a relentless focus on transparency, service excellence, and continuous improvement, we aspire to be the first choice for individuals, families, and enterprises seeking seamless global mobility across all visa categories.
    </p>
  </div>

  <div className={styles.valuesCard}>
    <h2>CORE VALUES</h2>
    <div >
      <img className={styles.custImg} src="/images/global-service.png" alt="Core Values Icon" loading="lazy" />
    </div>
    <p><strong>Transparency :</strong> We provide clear, honest, and straightforward guidance. Our clients are always informed, empowered, and in control of their immigration journey. <br />
    <strong>Client-First Policy : </strong> 
    Every client matters. We personalize our services to align with your unique goals, ensuring tailored strategies for maximum success. <br />
    <strong>Empathy :</strong> Immigration is personal. We understand the emotions and life transitions involved, and support our clients with compassion and care.
<br />
    <strong>Accountability</strong>
    We take full responsibility for every step of the process—your success is our success, and your trust is our highest priority. <br />
     <strong>Global Perspective</strong>
    We operate with a global mindset. Our advice is always informed by up-to-date immigration laws, global trends, and local nuances.
    </p>
    
    
  </div>
</section>

<div className={styles.mapContainer}>
      <img src="/images/svg/map-img.webp" alt="World Map" className={styles.mapImage} />

      {locations.map((loc, i) => (
        <motion.a
          key={loc.name}
          href={loc.link}
          className={styles.pin}
          style={{ top: loc.top, left: loc.left }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05 }}
        >
          <span className={styles.flag}>{loc.flag}</span>
          <span className={styles.label}>{loc.name}</span>
        </motion.a>
      ))}
    </div>

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


