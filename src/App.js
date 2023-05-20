import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Brands from './Components/Brands';
import About from './Components/About';

const App = () => {
  return <div>
    <Header />
    <Hero />
    <Brands />
    <About />
    <div style={{height: '2000px'}}>

    </div>
  </div>;
};

export default App;
