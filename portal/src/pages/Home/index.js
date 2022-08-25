
import './style.css';
import { Link } from 'react-router-dom';
import Nav from '../page3';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Why from './Why';
import Contact from './Contact';
import Footer from './Footer';
import Search from './Search';

export function HomePage() {
  return (
    <div className="App">

      
      <main className="App-main">
      <Nav/>
      <Hero/>
      <Search/>
      <Services/>
      <About/>
      <Why/>
      <Contact/>
      <Footer/>
     
      </main>
    
    </div>
  );
}
