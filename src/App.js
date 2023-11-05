import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Sessions from "./components/sessions/Sessions";
import Contact from "./components/contact/Contact";
import Instagram from "./components/portfolio/instagram/Instagram";
import Faq from "./components/faq/Faq";
import Modal from "./components/modal/Modal";
import Footer from "./components/footer/Footer";

function App() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="App">
      <div>
        <Modal toggleModal={toggleModal} modal={modal} />
        <Navbar toggleModal={toggleModal} modal={modal} />
        <Home />
        <Services />
        <Portfolio />
        <Instagram />
        <Sessions />
        <Faq />
        <Contact />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
