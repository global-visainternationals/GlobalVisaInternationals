"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Global Visa Internationals</title>
        <meta
          name="description"
          content="We help you immigrate to your dream country – Canada, UK, USA, Australia, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Global Visa Internationals" />
        <meta
          name="keywords"
          content="visa, immigration, Canada visa, USA visa, work visa, study abroad"
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />

        {/* Favicon and PWA Icons */}
        <link rel="icon" href="/globalvisainternationals.webp" type="image/webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
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
