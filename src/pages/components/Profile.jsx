import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { handleLanguageChange, handleThemeChange } from "@/lib/routerUtils";
import { useAtom } from "jotai";
import { languageAtom } from "@/lib/atom";

const Profile = () => {
  const router = useRouter();
  const [languageJSON, setLanguageJSON] = useAtom(languageAtom);

  return (
    <main>
      {/* //SECTION: PROFILE CONTAINER // */}
      <section className="w-[400px] h-[100vh] min-h-[700px]  max-h-[900px] p-4">
        {/* //* CONTENT */}
        <div className="relative w-full h-full bg-black rounded-3xl px-8 py-12 text-white">
          <div>TITULO</div>
          <div>FOTO</div>
          <div>SPECIALIZATION</div>
          <div>BASED IN</div>
          <div>SOCIALS</div>
          <div>BUTTON</div>
          <div className="flex gap-5">
            <button onClick={() => handleThemeChange(router, "light")}>
              Light
            </button>
            <button onClick={() => handleThemeChange(router, "dark")}>
              Dark
            </button>
          </div>
          <div className="flex gap-5">
            <button onClick={() => handleLanguageChange(router, "ES")}>
              ES
            </button>
            <button onClick={() => handleLanguageChange(router, "EN")}>
              EN
            </button>
          </div>

          {languageJSON.map((item, index) => (
            <div className="mt-10 text-lime-400" key={index}>
              <div> {item.language} </div>
              <div> {item.title} </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Profile;
