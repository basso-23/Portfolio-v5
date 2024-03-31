import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Profile_Mobile from "./Profile_Mobile";

const Content = () => {
  return (
    <main className=" w-full 2xl:ml-[400px] lg:ml-[330px] ml-0">
      <Navbar />
      <Profile_Mobile />
      <section className="p-4 flex flex-col">
        <div name="home" className="h-96"></div>
        <div name="projects" className="h-96"></div>
        <div name="about" className="h-96"></div>
        <div name="resume" className="h-96"></div>
        <div className=" min-h-screen">footer</div>
      </section>
    </main>
  );
};

export default Content;
