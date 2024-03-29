import "@/styles/globals.css";
import "@fontsource-variable/syne";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { defaultOptions } from "@/lib/atom";
import { queryOptions } from "@/lib/atom";
import { languageAtom } from "@/lib/atom";

import { es } from "@/languages/es";
import { en } from "@/languages/en";

const App = ({ Component, pageProps, router }) => {
  const router_ = useRouter();
  const [defaultValues, setDefaultValues] = useAtom(defaultOptions); //* Guarda el idoma y tema por defecto de la pagina */
  const [queryValues, setQueryValues] = useAtom(queryOptions); //* Guarda los valores del query de la pagina */
  const [languageJSON, setLanguageJSON] = useAtom(languageAtom); //* Guarda el contenido de la pagina */

  //FUNCTION: Se ejecuta cada vez que se actualiza el query de la pagina; Guarda los valores del query en una variable
  useEffect(() => {
    const { query } = router_;
    setQueryValues({ theme: query.theme, language: query.language });
  }, [router_, setQueryValues]);

  //FUNCTION: Se ejecuta cada vez que se actualiza el query de la pagina; Maneja el idioma y el tema
  useEffect(() => {
    //* Pone el tema por defecto si theme NO existe en la URL */
    if (!queryValues.theme) {
      var temaDefault = defaultValues.theme;
      document.documentElement.setAttribute("theme", temaDefault);
    }
    //* Pone el tema que indica la URL */
    else {
      var temaCurrent = queryValues.theme;
      document.documentElement.setAttribute("theme", temaCurrent);
    }
    //* Pone el idioma por defecto si language NO existe en la URL */
    if (!queryValues.language) {
      setLanguageJSON(defaultValues.language === "ES" ? es : en);
    }
    //* Pone el idioma que indica la URL */
    else {
      setLanguageJSON(queryValues.language === "ES" ? es : en);
    }
    ////console.log("THEME QUERY:", queryValues.theme);
    ////console.log("IDIOMA QUERY:", queryValues.language);
  }, [queryValues, defaultValues, setLanguageJSON]);

  return (
    <div style={{ fontFamily: "Syne Variable, sans-serif" }}>
      <Component key={router.pathname} {...pageProps} />
    </div>
  );
};

export default App;
