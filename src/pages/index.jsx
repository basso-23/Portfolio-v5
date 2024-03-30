import React, { useState, useEffect } from "react";
import Content from "./components/Content";
import Profile from "./components/Profile";
import Profile_Mobile from "./components/Profile_Mobile";

const App = () => {
  return (
    <main className="lg:flex lg:flex-row flex flex-col pageSize lg:gap-5 gap-0 ">
      <Profile />
      <Profile_Mobile />
      <Content />
    </main>
  );
};

export default App;
