import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { languageAtom } from "@/lib/atom";
import { queryOptions } from "@/lib/atom";
import Instagram from "@/icons/Instagram";
import Mail from "@/icons/Mail";
import Github from "@/icons/Github";
import LinkedIn from "@/icons/LinkedIn";
import Profile_Light from "@/icons/Profile_Light";
import Profile_Dark from "@/icons/Profile_Dark";

const Profile = () => {
  const [languageJSON, setLanguageJSON] = useAtom(languageAtom);
  const [queryValues, setQueryValues] = useAtom(queryOptions); //* Guarda los valores del query de la pagina */

  return (
    <main>
      {languageJSON.map((item, index) => (
        <section
          key={index}
          className="2xl:w-[400px] w-[340px] h-[100vh] 2xl:min-h-[900px] min-h-[700px]  max-h-[900px] p-4 fixed lg:flex hidden"
        >
          {/* //* CONTENT */}
          <div className="relative w-full h-full px-10  2xl:py-12 py-8  profile flex flex-col  justify-between ">
            <div className="flex items-center gap-5">
              <div>
                {!queryValues.theme || queryValues.theme === "light" ? (
                  <Profile_Light />
                ) : (
                  <Profile_Dark />
                )}
              </div>
              <div className="font-bold  2xl:text-[36px] text-[28px] leading-none">
                Carlos <br />
                Baso
              </div>
            </div>

            <div className="avatar aspect-square w-full rounded-3xl shadow-sm"></div>
            {item.profile.map((item, index) => (
              <div key={index} className=" flex flex-col 2xl:gap-10 gap-5 ">
                <div>
                  <div className="secondary-text 2xl:text-[15px] text-[13px]">
                    {item.title1}
                  </div>
                  <div className="font-bold  2xl:text-[20px] text-[16px]">
                    {item.info1}
                  </div>
                </div>
                <div>
                  <div className="secondary-text  2xl:text-[15px] text-[13px]">
                    {item.title2}
                  </div>
                  <div className="font-bold  2xl:text-[20px] text-[16px]">
                    {item.info2}
                  </div>
                </div>
                <div className=" flex justify-between">
                  <button className="border-socials">
                    <Mail />
                  </button>
                  <button className="border-socials">
                    <Github />
                  </button>
                  <button className="border-socials">
                    <LinkedIn />
                  </button>
                  <button className="border-socials">
                    <Instagram />
                  </button>
                </div>
              </div>
            ))}
            <button className="font-bold 2xl:text-[20px] text-[16px] rounded-3xl py-[14px] work-button">
              {item.work}
            </button>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Profile;
