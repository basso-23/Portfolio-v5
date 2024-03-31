import React, { useState, useEffect } from "react";
import Chat from "@/icons/Chat";

const Button_Talk = ({ text }) => {
  return (
    <>
      <button
        style={{
          height: "50px",
          lineHeight: "50px",
          borderRadius: "20px",
        }}
        className="button font-bold text-[16px] rounded-3xl work-button"
      >
        <span
          style={{
            marginLeft: "30px",
            marginRight: "30px",
          }}
          className="label-up"
        >
          <div className="flex items-center">
            <div>{text}</div> <span style={{ color: "transparent" }}>i</span>
            <Chat />
          </div>
        </span>
        <span
          style={{
            marginLeft: "30px",
            marginRight: "30px",
          }}
          className="label-up "
        >
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
