import React, { useState, useEffect } from "react";
import Chat from "@/icons/Chat";

const Button_Talk = ({ text }) => {
  return (
    <>
      <button className="button font-bold 2xl:text-[20px] text-[16px] rounded-3xl work-button">
        <span className="label-up">
          <div className="flex items-center">
            <div>{text}</div> <span style={{ color: "transparent" }}>i</span>
            <Chat />
          </div>
        </span>
        <span className="label-up ">
          <div className="flex items-center">
            <div>{text}</div> <span style={{ color: "transparent" }}>i</span>
            <Chat />
          </div>
        </span>
      </button>
    </>
  );
};

export default Button_Talk;
