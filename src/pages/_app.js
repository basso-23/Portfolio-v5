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

  const [queryValues, setQueryValues] = useAtom(queryOptions);
  const [defaultValues, setDefaultValues] = useAtom(defaultOptions);
  const [languageJSON, setLanguageJSON] = useAtom(languageAtom);

  //FUNCTION: SE EJECUTA CADA VEZ QUE CAMBIA EL QUERY DE LA PAGINA Y GUARDA LOS VALORES EN LAS VARIABLES
  useEffect(() => {
    const { query } = router_;
    setQueryValues({ theme: query.theme, language: query.language });
  }, [router_]);

  //FUNCTION: SE EJECUTA CADA VEZ QUE CAMBIA EL QUERY DE LA PAGINA, CONSOLE LOG DEL QUERY
  useEffect(() => {
    console.log("THEME QUERY:", queryValues.theme);
    console.log("IDIOMA QUERY:", queryValues.language);

    //* NO EXISTE EL VALOR DEL TEMA EN LA URL, UTILIZA EL TEMA DEFAULT */
    if (!queryValues.theme) {
      var tema = defaultValues.theme;
      document.documentElement.setAttribute("theme", tema);
    }
    //* SI EXISTE EL VALOR DEL TEMA EN LA URL, UTILIZA EL TEMA EN LA URL */
    else {
      var tema = queryValues.theme;
      document.documentElement.setAttribute("theme", tema);
    }

    //* NO EXISTE EL VALOR DEL IDIOMA EN LA URL, UTILIZA EL IDIOMA DEFAULT */
    if (!queryValues.language) {
      if (defaultValues.language === "ES") {
        setLanguageJSON(es);
      }
      if (defaultValues.language === "EN") {
        setLanguageJSON(en);
      }
    }
    //* SI EXISTE EL VALOR DEL IDIOMA EN LA URL, UTILIZA EL IDIOMA EN LA URL */
    else {
      if (queryValues.language === "ES") {
        setLanguageJSON(es);
      }
      if (queryValues.language === "EN") {
        setLanguageJSON(en);
      }
    }
  }, [queryValues]);

  return (
    <div style={{ fontFamily: "Syne Variable, sans-serif" }}>
      <Component key={router.pathname} {...pageProps} />
    </div>
  );
};

export default App;
