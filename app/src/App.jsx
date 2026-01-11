import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async"; // Import Helmet
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Gallery from "./Gallery";
import BookNow from "./BookNow";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";
import Services from "./Services";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        {/* SEO Meta Tags */}
        <Helmet>
          <title>
            Indian Oam Holistic Health Care | Dr. Makala Satyanarayana
          </title>
          <meta
            name="description"
            content="Expert Drugless Therapy in Vijayawada. Specializing in Yoga Sakthi, Acupressure, and Multi-Therapies for root-cause cures under Dr. Makala Satyanarayana."
          />
          <meta
            name="keywords"
            content="Acupressure Vijayawada, Yoga Sakthi Chikitsa, Dr. Makala Satyanarayana, Holistic Health India, Drugless Treatment, Vijayawada Wellness"
          />

          {/* Open Graph Tags for Social Media (WhatsApp/Facebook) */}
          <meta property="og:title" content="Indian Oam Holistic Health Care" />
          <meta
            property="og:description"
            content="Professional Drugless Therapy & Yoga Sakthi Training in Vijayawada."
          />
          <meta property="og:image" content="/oamowner.jpeg" />
          <meta property="og:type" content="website" />

          {/* Canonical Link */}
          <link rel="canonical" href="https://yourwebsite.com" />
        </Helmet>

        <Navbar />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <BookNow />
        <Footer />
        <FloatingActions />
      </div>
    </HelmetProvider>
  );
}

export default App;
