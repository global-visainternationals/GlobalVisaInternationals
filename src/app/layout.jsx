"use client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";

export default function RootLayout({ children }) {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  return (
    <html lang="en">
      <head>
        {/* Global default metadata */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Global Visa Internationals" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="keywords" content="top 10 travel agency in bangalore,visa, immigration, Canada visa, USA visa, work visa, study abroad,global visa services,global international consultancy,global visa services dubai,global company bangalore,global visa service,global bangalore,visa bangalore,global immigration consultant services,immigration canada consultant,best consultant for canada pr,global visa solutions,travel visa near me" />

        {/* Social Sharing - Open Graph */}
        <meta property="og:site_name" content="Global Visa Internationals" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.globalvisa-internationals.com/globalvisainternationals.webp" />
        <meta property="og:url" content="https://www.globalvisa-internationals.com/" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.globalvisa-internationals.com/globalvisainternationals.webp" />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <meta name="twitter:creator" content="@YourTwitterHandle" />

        {/* Favicon and Web Manifest */}
        <link rel="icon" href="/globalvisainternationals.webp" type="image/webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          crossOrigin="anonymous"
        ></script>

        {adsenseClient && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (adsbygoogle = window.adsbygoogle || []).push({
                  google_ad_client: "${adsenseClient}",
                  enable_page_level_ads: true
                });
              `,
            }}
          />
        )}

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Global Visa Internationals",
              "url": "https://www.globalvisa-internationals.com",
              "logo": "https://www.globalvisa-internationals.com/globalvisainternationals.webp",
              "description": "Visa and immigration consultants in Bangalore helping with study, work, and PR visas for Canada, USA, UK, Australia and more.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangalore",
                "addressRegion": "KA",
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
                "https://twitter.com/GlobalVisaIntern",
                "https://www.linkedin.com/company/global-visa-internationals/"
              ]
            }),
          }}
        />
      </head>
      <body>
        <GoogleReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          scriptProps={{ async: true, defer: true, appendTo: "head" }}
        >
          <NavBar />
          {children}
          <Footer />
        </GoogleReCaptchaProvider>
      </body>
    </html>
  );
}
