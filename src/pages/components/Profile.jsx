import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAtom } from "jotai";

import { defaultOptions } from "@/lib/atom";
import { queryOptions } from "@/lib/atom";

const Profile = () => {
  const [defaultValues, setDefaultValues] = useAtom(defaultOptions);
  const [queryValues, setQueryValues] = useAtom(queryOptions);

  const router = useRouter();

  //FUNCTION: ACTUALIZA EL TEMA
  const handleThemeChange = (theme) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, theme: theme },
    });
  };

  //FUNCTION: ACTUALIZA EL IDIOMA
  const handleLanguageChange = (language) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, language: language },
    });
  };

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

          <div className="mt-20 text-xl">{queryValues.theme}</div>
          <div className="mt-0 text-xl">{queryValues.language}</div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
