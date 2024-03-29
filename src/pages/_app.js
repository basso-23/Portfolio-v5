import "@/styles/globals.css";
import "@fontsource-variable/syne";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { queryOptions } from "@/lib/atom";

const App = ({ Component, pageProps, router }) => {
  const router_ = useRouter();

  const [queryValues, setQueryValues] = useAtom(queryOptions);

  //FUNCTION: SE EJECUTA CADA VEZ QUE CAMBIA EL QUERY DE LA PAGINA Y GUARDA LOS VALORES EN LAS VARIABLES
  useEffect(() => {
    const { query } = router_;
    setQueryValues({ theme: query.theme, language: query.language });
  }, [router_]);

  //FUNCTION: CONSOLE LOG DEL QUERY
  useEffect(() => {
    console.log("THEME QUERY:", queryValues.theme);
    console.log("IDIOMA QUERY:", queryValues.language);
  }, [queryValues]);

  return (
    <div style={{ fontFamily: "Syne Variable, sans-serif" }}>
      <Component key={router.pathname} {...pageProps} />
    </div>
  );
};

export default App;
