import React, { useState } from "react";
import ScrollSpy from "react-scrollspy-navigation/dist/ScrollSpy";

const Navbar = () => {
  // const [height, setHeight] = useState();

  // const scrollValue = document.documentElement.scrollTop;

  // const handleScroll = () => {
  //     setHeight(scrollValue);
  // }

  // window.addEventListener('scroll', handleScroll);

  // const scrollToServices = (e) => {
  //     e.preventDefault();
  //     servicesRef.current.scrollIntoView({behavior: 'smooth'});
  // };
  // const scrollToPortfolio = (e) => {
  //     e.preventDefault();
  //     portfolioRef.current.scrollIntoView({behavior: 'smooth'});
  // };
  // const scrollToRates = (e) => {
  //     e.preventDefault();
  //     ratesRef.current.scrollIntoView({behavior: 'smooth'});
  // };
  // const scrollToContact = (e) => {
  //     e.preventDefault();
  //     contactRef.current.scrollIntoView({behavior: 'smooth'});
  // };
  // const scrollToAbout = (e) => {
  //     e.preventDefault();
  //     aboutRef.current.scrollIntoView({behavior: 'smooth'});
  // };
  // const scrollToHow = (e) => {
  //     e.preventDefault();
  //     howRef.current.scrollIntoView({behavior: 'smooth'});
  // };

  return (
    <>
      <nav className="bg-darkest shadow-lg fixed top-0 left-0 z-50 w-full h-24 flex flex-row items-center justify-between px-5 md:px-10">
        <span className="text-text-primary font-light text-3xl font-dream">
          photoronto
        </span>
        <div className="hidden lg:flex flex-row flex-nowrap">
          <ScrollSpy duration={2000}>
            <a
              className={`text-text-primary border-transparent border-b-4 border-t-4 px-4 hover:border-b-fancy py-2 transition-border duration-300`}
              href="#services"
              ref={React.createRef()}
            >
              Services
            </a>

            <a
              className={`text-text-primary border-transparent border-b-4 border-t-4 px-4 hover:border-b-fancy py-2 transition-border duration-300`}
              href="#portfolio"
              ref={React.createRef()}
            >
              Portfolio
            </a>

            <a
              className={`text-text-primary border-transparent border-b-4 border-t-4 px-4 hover:border-b-fancy py-2 transition-border duration-300`}
              href="#rates"
              ref={React.createRef()}
            >
              Rates
            </a>
            <a
              className={`text-text-primary border-transparent border-b-4 border-t-4 px-4 hover:border-b-fancy py-2 transition-border duration-300`}
              href="#faq"
              ref={React.createRef()}
            >
              FAQ
            </a>
            <a
              className={`text-text-primary border-transparent border-b-4 border-t-4 px-4 hover:border-b-fancy py-2 transition-border duration-300`}
              href="#about"
              ref={React.createRef()}
            >
              About
            </a>
            <a
              className="text-center text-[16px] rounded-md border-transparent bg-fancy py-1.5 px-4 transition-border duration-300 border-4 font-normal text-darkest ml-5"
              href="#contact"
              ref={React.createRef()}
            >
              Get in touch
            </a>
          </ScrollSpy>
          {/* <a className="text-text-primary border-transparent border-b-4 px-4 hover:border-b-fancy py-2" href="">{height}</a> */}
          {/* <a onClick={scrollToServices} className={`${height > (servicesRef.current.offsetTop - 40) && height < (aboutRef.current.offsetTop - 80) ? 'border-b-fancy' : ''} text-text-primary border-transparent border-b-4 px-4 hover:border-b-fancy py-2 transition-border duration-300`} href="">Services</a>
                <a onClick={scrollToAbout} className={`${height > (aboutRef.current.offsetTop - 80) && height < (portfolioRef.current.offsetTop - 40) ? 'border-b-fancy' : ''} text-text-primary border-transparent border-b-4 px-4 hover:border-b-fancy py-2 transition-border duration-300`} href="">About</a>
                <a onClick={scrollToPortfolio} className={`${height > (portfolioRef.current.offsetTop - 40) && height < (howRef.current.offsetTop - 40) ? 'border-b-fancy' : ''} text-text-primary border-transparent border-b-4 px-4 hover:border-b-fancy py-2 transition-border duration-300`} href="">Portfolio</a>
                <a onClick={scrollToHow} className={`${height > (howRef.current.offsetTop - 40) ? 'border-b-fancy' : ''} text-text-primary border-transparent border-b-4 px-4 hover:border-b-fancy py-2 transition-border duration-300`} href="">How</a>
                <a onClick={scrollToRates} className={`${height > (ratesRef.current.offsetTop - 40) ? 'border-b-fancy' : ''} text-text-primary border-transparent border-b-4 px-4 hover:border-b-fancy py-2 transition-border duration-300`} href="">Rates</a>
                <a onClick={scrollToContact} className={`${height > (contactRef.current.offsetTop - 40) ? 'border-b-fancy' : ''} text-text-primary border-transparent border-b-4 px-4 hover:border-b-fancy py-2 transition-border duration-300`} href="">Contact</a> */}
        </div>

        <button class="lg:hidden group">
          <div class="relative flex overflow-hidden items-center justify-center rounded-sm w-[50px] h-[50px] transform transition-all bg-darker duration-200 shadow-md">
            <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
              <div class="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
              <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

              <div class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
              </div>
            </div>
          </div>
        </button>
        {/* <div className="w-40 h-10 bg-white lg:hidden"></div> */}
      </nav>
    </>
  );
};

export default Navbar;
