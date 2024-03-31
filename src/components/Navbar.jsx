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
import Sun from "@/icons/Sun";
import Button_Nav_Mobile from "@/lib/Button_Nav_Mobile";

const Navbar = () => {
  const [languageJSON, setLanguageJSON] = useAtom(languageAtom); //* Guarda el contenido de la pagina */
  const [queryValues, setQueryValues] = useAtom(queryOptions); //* Guarda los valores del query de la pagina */

  const router = useRouter();
  return (
    <main className="w-full">
      {languageJSON.map((item, index) => (
        <section key={index} className="mt-4  w-full relative">
          <div className="navbar-left mt-[6px]">
            <div className="left-content lg:flex hidden gap-4">
              <Button_Nav to={"home"} icon={<Github />} />
              <Button_Nav to={"projects"} icon={<Github />} />
              <Button_Nav to={"about"} icon={<Github />} />
              <Button_Nav to={"resume"} icon={<Github />} />
            </div>
          </div>
          <div className="navbar-right mt-[4px]">
            <div className="right-content gap-4 items-center lg:flex hidden ">
              <div className=" flex gap-3">
                <button
                  onClick={() =>
                    handleLanguageChange(
                      router,
                      !queryValues.language || queryValues.language === "ES"
                        ? "EN"
                        : "ES"
                    )
                  }
                  className="w-[52px]  aspect-square glass rounded-full"
                >
                  <div className=" font-semibold">
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
                  className="w-[52px]  aspect-square glass rounded-full flex "
                >
                  <div className=" m-auto">
                    {!queryValues.theme || queryValues.theme === "light" ? (
                      <Moon />
                    ) : (
                      <Sun />
                    )}
                  </div>
                </button>
              </div>

              <div className=" flex gap-5">
                {/* //*Work button*/}
                <Button_Talk text={item.talk} />
              </div>
            </div>
          </div>
          <div className=" lg:hidden flex gap-4 fixed bottom-4 overflow-x-auto z-50 w-fit sm:max-w-[800px] max-w-[325px] min-w-[325px] fixedCenterX pb-2 sm:pb-0  justify-center">
            <Button_Nav_Mobile to={"home"} icon={<Github />} />
            <Button_Nav_Mobile to={"projects"} icon={<Github />} />
            <Button_Nav_Mobile to={"about"} icon={<Github />} />
            <Button_Nav_Mobile to={"resume"} icon={<Github />} />
            <div
              onClick={() =>
                handleLanguageChange(
                  router,
                  !queryValues.language || queryValues.language === "ES"
                    ? "EN"
                    : "ES"
                )
              }
              className=" w-14 aspect-square flex glass select-none pointer active-section-mobile"
            >
              <div className=" font-semibold m-auto select-none">
                {!queryValues.language || queryValues.language === "ES" ? (
                  <div>EN</div>
                ) : (
                  <div>ES</div>
                )}
              </div>
            </div>
            <div
              onClick={() =>
                handleThemeChange(
                  router,
                  !queryValues.theme || queryValues.theme === "light"
                    ? "dark"
                    : "light"
                )
              }
              className=" w-14 aspect-square flex glass pointer active-section-mobile"
            >
              <div className=" m-auto">
                {!queryValues.theme || queryValues.theme === "light" ? (
                  <Moon />
                ) : (
                  <Sun />
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Navbar;
