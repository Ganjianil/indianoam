import React from "react";
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
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Services/>
      <BookNow />
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
