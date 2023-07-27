import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Brands from './Components/Brands';
import About from './Components/About';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
// import Services from './Components/Services';
// import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import BackToTopBtn from './Components/BackToTopBtn';

const App = () => {
  return <div>
    <Header />
    <Hero />
    <Brands />
    <About />
    <Skills />
    <Portfolio />
    {/* <Services /> */}
    {/* <Testimonials /> */}
    <Contact />
    <Footer />
   <BackToTopBtn />

    
  </div>;
};

export default App;
