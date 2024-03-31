import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { languageAtom } from "@/lib/atom";
import { queryOptions } from "@/lib/atom";
import Github from "@/icons/Github";
import Button_Nav from "@/lib/Button_Nav";
import Moon from "@/icons/Moon";
import Button_Talk from "@/lib/Button_Talk";
import { useRouter } from "next/router";
import { handleLanguageChange, handleThemeChange } from "@/lib/routerUtils";

const Navbar = () => {
  const [languageJSON, setLanguageJSON] = useAtom(languageAtom); //* Guarda el contenido de la pagina */
  const [queryValues, setQueryValues] = useAtom(queryOptions); //* Guarda los valores del query de la pagina */

  const router = useRouter();
  return (
    <main className="w-full">
      {languageJSON.map((item, index) => (
        <section key={index} className="mt-4  w-full relative">
          <div className="navbar-left ">
            <div className="left-content flex gap-4">
              <Button_Nav to={"home"} icon={<Github />} />
              <Button_Nav to={"projects"} icon={<Github />} />
              <Button_Nav to={"about"} icon={<Github />} />
              <Button_Nav to={"resume"} icon={<Github />} />
            </div>
          </div>
          <div className="navbar-right">
            <div className="right-content flex gap-10 items-center">
              <button
                onClick={() =>
                  handleLanguageChange(
                    router,
                    !queryValues.language || queryValues.language === "ES"
                      ? "EN"
                      : "ES"
                  )
                }
              >
                <div>
                  {!queryValues.language || queryValues.language === "ES" ? (
                    <div>EN</div>
                  ) : (
                    <div>ES</div>
                  )}
                </div>
              </button>

              <button
                onClick={() =>
                  handleThemeChange(
                    router,
                    !queryValues.theme || queryValues.theme === "light"
                      ? "dark"
                      : "light"
                  )
                }
              >
                <div>
                  {!queryValues.theme || queryValues.theme === "light" ? (
                    <Moon />
                  ) : (
                    <div>light</div>
                  )}
                </div>
              </button>

              <div className=" flex gap-5">
                {/* //*Work button*/}
                <Button_Talk text={item.talk} />
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Navbar;
