import React, { useState, useEffect } from "react";

const Button_Socials = ({ icon, url }) => {
  return (
    <>
      <a target="_blank" href={url} className="button-socials border-socials">
        <span class="label-up-socials">{icon}</span>
        <span class="label-up-socials">{icon}</span>
      </a>
    </>
  );
};

export default Button_Socials;
