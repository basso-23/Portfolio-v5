import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";

const Button_Nav_Mobile = ({ to, icon }) => {
  return (
    <>
      <Link
        offset={0}
        activeClass="active-section-mobile"
        to={to}
        spy={true}
        smooth={true}
        duration={700}
        className=" w-14 aspect-square flex glass pointer"
      >
        <div className=" m-auto">{icon}</div>
      </Link>
    </>
  );
};

export default Button_Nav_Mobile;
