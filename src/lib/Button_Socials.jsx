import React, { useState, useEffect } from "react";

const Button_Socials = ({ icon }) => {
  return (
    <>
      <button className="button-socials border-socials">
        <span class="label-up-socials">{icon}</span>
        <span class="label-up-socials">{icon}</span>
      </button>
    </>
  );
};

export default Button_Socials;
