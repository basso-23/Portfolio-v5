import React, { useState, useEffect } from "react";
import Right_side from "./components/Right_side";
import Profile from "./components/Profile";

const App = ({}) => {
  return (
    <main className="flex pageSize gap-5">
      <Profile />
      <Right_side />
    </main>
  );
};

export default App;
