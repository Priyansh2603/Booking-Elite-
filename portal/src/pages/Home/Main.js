import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Search from './Search';
import About from './About';
import Why from './Why';
import Contact from './Contact';

export default function Main() {
  return (
    <div>
        <main id='main'>
        
      <Hero/>
      <Services/>
      <Search/>
      <About/>
      <Why/>
      <Contact/>
      
        </main>
    </div>
  )
}
