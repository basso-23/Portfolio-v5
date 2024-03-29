import "@/styles/globals.css";
import "@fontsource-variable/syne";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const App = ({ Component, pageProps, router }) => {
  const router_ = useRouter();

  const [themeQuery, setThemeQuery] = useState();
  const [languageQuery, setLanguageQuery] = useState();

  //FUNCTION: SE EJECUTA CADA VEZ QUE CAMBIA EL QUERY DE LA PAGINA Y GUARDA LOS VALORES EN LAS VARIABLES
  useEffect(() => {
    const { query } = router_;
    setThemeQuery(query.theme);
    setLanguageQuery(query.language);
  }, [router_]);

  //FUNCTION: CONSOLE LOG DEL QUERY
  useEffect(() => {
    console.log("THEME QUERY:", themeQuery);
    console.log("IDIOMA QUERY:", languageQuery);
  }, [themeQuery, languageQuery]);

  return (
    <div style={{ fontFamily: "Syne Variable, sans-serif" }}>
      <Component
        key={router.pathname}
        {...pageProps}
        themeQuery={themeQuery}
        setThemeQuery={setThemeQuery}
        languageQuery={languageQuery}
        setLanguageQuery={setLanguageQuery}
      />
    </div>
  );
};

export default App;
