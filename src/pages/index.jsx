import React, { useState, useEffect } from "react";
import Right_side from "./components/Right_side";
import Left_side from "./components/Left_side";

const App = ({
  themeQuery,
  languageQuery,
  setThemeQuery,
  setLanguageQuery,
}) => {
  return (
    <main className="flex pageSize gap-5">
      <Left_side themeQuery={themeQuery} languageQuery={languageQuery} />
      <Right_side themeQuery={themeQuery} languageQuery={languageQuery} />
    </main>
  );
};

export default App;
