import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = ({ toggleModal, modal }) => {
  const [toggleBorder, setToggleBorder] = useState("");

  const toggleClass = (e) => {
    setToggleBorder(e.currentTarget.hash);
    console.log(toggleBorder);
  };

  return (
    <>
      <nav className="bg-darkest shadow-lg fixed top-0 left-0 z-50 w-full h-24 flex flex-row items-center justify-between px-5 md:px-10">
        <Link
          to="home"
          offset={-100}
          smooth={true}
          duration={500}
          className="text-text-primary font-light text-3xl font-dream cursor-pointer"
        >
          photoronto
        </Link>
        <div className="hidden lg:flex flex-row flex-nowrap">
          <Link
            to="services"
            smooth={true}
            duration={500}
            onClick={toggleClass}
            className={`${
              toggleBorder == "#services" ? "border-b-fancy" : ""
            } text-text-primary border-transparent border-b-4 border-t-4 px-4 hover:border-b-fancy py-2 transition-border duration-300`}
            href="#services"
          >
            Services
          </Link>

          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            onClick={toggleClass}
            className={`${
              toggleBorder == "#portfolio" ? "border-b-fancy" : ""
            } text-text-primary border-transparent border-b-4 border-t-4 px-4 hover:border-b-fancy py-2 transition-border duration-300`}
            href="#portfolio"
          >
            Portfolio
          </Link>

          <Link
            to="rates"
            smooth={true}
            duration={500}
            onClick={toggleClass}
            className={`${
              toggleBorder == "#rates" ? "border-b-fancy" : ""
            } text-text-primary border-transparent border-b-4 border-t-4 px-4 hover:border-b-fancy py-2 transition-border duration-300`}
            href="#rates"
          >
            Rates
          </Link>
          <Link
            to="faq"
            smooth={true}
            duration={500}
            onClick={toggleClass}
            className={`${
              toggleBorder == "#faq" ? "border-b-fancy" : ""
            } text-text-primary border-transparent border-b-4 border-t-4 px-4 hover:border-b-fancy py-2 transition-border duration-300`}
            href="#faq"
          >
            FAQ
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={toggleClass}
            className={`${
              toggleBorder == "#about" ? "border-b-fancy" : ""
            } text-text-primary border-transparent border-b-4 border-t-4 px-4 hover:border-b-fancy py-2 transition-border duration-300`}
            href="#about"
          >
            About
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={toggleClass}
            className={`${
              toggleBorder == "#contact" ? "border-b-fancy" : ""
            } text-center text-[16px] rounded-md border-transparent bg-fancy py-1.5 px-4 transition-border duration-300 border-4 font-normal text-darkest ml-5`}
            href="#contact"
          >
            Get in touch
          </Link>
        </div>
        <button onClick={toggleModal} class="lg:hidden group">
          <div class="relative flex overflow-hidden items-center justify-center rounded-sm w-[50px] h-[50px] transform transition-all bg-darker duration-200 shadow-md">
            <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div
                class={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                  modal ? "translate-x-10" : "translate-x-0"
                }`}
              ></div>
              <div
                class={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${
                  modal ? "translate-x-10" : "translate-x-0"
                } delay-75`}
              ></div>
              <div
                class={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                  modal ? "translate-x-10" : "translate-x-0"
                } delay-150`}
              ></div>

              <div
                class={`absolute items-center justify-between transform transition-all duration-500 top-2.5 ${
                  modal ? "translate-x-0" : "-translate-x-10"
                } flex w-0 group-focus:w-12`}
              >
                <div
                  class={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 delay-300 ${
                    modal ? "rotate-45" : "rotate-0"
                  }`}
                ></div>
                <div
                  class={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 delay-300 ${
                    modal ? "-rotate-45" : "-rotate-0"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
