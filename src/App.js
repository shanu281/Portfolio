import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Brands from './Components/Brands';
import About from './Components/About';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

const App = () => {
  return <div>
    <Header />
    <Hero />
    <Brands />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
    <div style={{height: '2000px'}}>

    </div>
  </div>;
};

export default App;
