import React, { useState, useEffect } from "react";

const Loader = () => {
  return (
    <>
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
    </>
  );
};

export default Loader;
