import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { useRouter } from "next/router";

const Left_side = () => {
  const router = useRouter();

  const [themeQuery, setThemeQuery] = useState();
  const [languageQuery, setLanguageQuery] = useState();

  useEffect(() => {
    const { query } = router;
    setThemeQuery(query.theme);
    setLanguageQuery(query.language);
  }, [router]);

  const handleThemeChange = (theme) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, theme: theme },
    });
  };

  const handleLanguageChange = (language) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, language: language },
    });
  };

  useEffect(() => {
    console.log("THEME QUERY:", themeQuery);
    console.log("IDIOMA QUERY:", languageQuery);
  }, [themeQuery, languageQuery]);

  return (
    <main>
      {/*//SECTION: PROFILE CONTAINER // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // */}
      <section className=" w-[400px] h-[100lvh] min-h-[700px] max-h-[900px] p-4">
        {/*//* CONTENT */}
        <div className="relative w-full h-full bg-black rounded-3xl px-8 py-12 text-white">
          <div>TITULO</div>
          <div>FOTO</div>
          <div>SPECIALIZATION</div>
          <div>BASED IN</div>
          <div>SOCIALS</div>
          <div>BUTTON</div>

          <div className="flex gap-5">
            <button onClick={() => handleThemeChange("light")}>Light</button>
            <button onClick={() => handleThemeChange("dark")}>Dark </button>
          </div>

          <div className="flex gap-5">
            <button onClick={() => handleLanguageChange("ES")}>ES</button>
            <button onClick={() => handleLanguageChange("EN")}>EN</button>
          </div>

          {!languageQuery || languageQuery === "ES" ? (
            <div>Español</div>
          ) : (
            <div>Ingles</div>
          )}

          {!themeQuery || themeQuery === "light" ? (
            <div>Light</div>
          ) : (
            <div>Dark</div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Left_side;
