import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Test from './components/services/Test';
import Sessions from './components/sessions/Sessions';
import ValueProposition from './components/proposition/ValueProposition';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Faq from './components/faq/Faq';
import { useRef } from 'react';

function App() {
  // const servicesRef = useRef();
  // const portfolioRef = useRef();
  const contactRef = useRef();
  // const ratesRef = useRef();
  // const aboutRef = useRef();
  // const faqRef = useRef();
  // const homeRef = useRef();
  // const howRef = useRef();


  return (
    <div className="App">
        <div>
            <Navbar 
            // servicesRef={servicesRef} 
            // portfolioRef={portfolioRef} 
            // contactRef={contactRef} 
            // ratesRef={ratesRef}
            // aboutRef={aboutRef}
            // faqRef={faqRef}
            // homeRef={homeRef} 
            // howRef={howRef}
            />
            <Home contactRef={contactRef} />
            <Services />
            <About />
            <Portfolio />
            <ValueProposition />
            <Sessions />
            <Faq />
            <Contact contactRef={contactRef} />
            {/* <Footer /> */}
        </div>
    </div>
  );
}

export default App;
