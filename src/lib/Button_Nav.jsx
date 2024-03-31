import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";

const Button_Nav = ({ to, icon }) => {
  return (
    <>
      <Link
        offset={0}
        activeClass="active-section"
        to={to}
        spy={true}
        smooth={true}
        duration={700}
        className="button-nav glass"
      >
        <span className="label-nav">{icon}</span>
      </Link>
    </>
  );
};

export default Button_Nav;
