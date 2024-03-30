import React, { useState, useEffect } from "react";
import Content from "./components/Content";
import Profile from "./components/Profile";

const App = ({}) => {
  return (
    <main className="flex pageSize gap-5 ">
      <Profile />

      <Content />
    </main>
  );
};

export default App;
