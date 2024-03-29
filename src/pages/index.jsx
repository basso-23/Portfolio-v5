import React, { useState, useEffect } from "react";
import Right_side from "./components/Right_side";
import Left_side from "./components/Left_side";

const App = () => {
  return (
    <main className="flex pageSize gap-5">
      <Left_side />
      <Right_side />
    </main>
  );
};

export default App;
