import React, { useState, useEffect } from "react";

const Button = ({ text }) => {
  return (
    <>
      <button className="button font-bold 2xl:text-[20px] text-[16px] rounded-3xl work-button">
        <span class="label-up"> {text}</span>
        <span class="label-up"> {text}</span>
      </button>
    </>
  );
};

export default Button;