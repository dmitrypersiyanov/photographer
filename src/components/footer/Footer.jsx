import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="h-72 sm:h-96 w-full bg-darker flex font-light text-sm text-white justify-center items-center">
      <Link
        to="home"
        offset={-100}
        smooth={true}
        duration={500}
        className="text-text-primary font-light text-4xl sm:text-5xl font-dream cursor-pointer"
      >
        Photoronto
      </Link>
    </div>
  );
};

export default Footer;
