import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Sessions from "./components/sessions/Sessions";
import ValueProposition from "./components/proposition/ValueProposition";
import Contact from "./components/contact/Contact";
import Instagram from "./components/portfolio/instagram/Instagram";
import Footer from "./components/footer/Footer";
import Faq from "./components/faq/Faq";
import { useRef } from "react";

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
        <Navbar />
        <Home />
        <Services />
        <Portfolio />
        <Instagram />
        {/* <ValueProposition /> */}
        <Sessions />
        <Faq />
        <Contact />
        <About />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
