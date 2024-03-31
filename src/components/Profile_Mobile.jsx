import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { languageAtom } from "@/lib/atom";
import { queryOptions } from "@/lib/atom";
import Instagram from "@/icons/Instagram";
import Mail from "@/icons/Mail";
import Github from "@/icons/Github";
import LinkedIn from "@/icons/LinkedIn";
import Profile_Light_Mobile from "@/icons/Profile_Light_Mobile";
import Profile_Dark_Mobile from "@/icons/Profile_Dark_Mobile";
import Button from "@/lib/Button";
import Button_Socials from "@/lib/Button_Socials";

const Profile_Mobile = () => {
  const [languageJSON, setLanguageJSON] = useAtom(languageAtom); //* Guarda el contenido de la pagina */
  const [queryValues, setQueryValues] = useAtom(queryOptions); //* Guarda los valores del query de la pagina */

  return (
    <main>
      {languageJSON.map((item, index) => (
        <section key={index} className="w-full p-2 lg:hidden flex">
          {/* //* Contenido */}
          <div className="relative w-full h-full px-6 2xl:py-12 py-8 profile flex flex-col justify-between gap-10">
            <div className="flex items-center gap-5 -mb-5">
              {/* //* Logo Visual Studio */}
              <div>
                {!queryValues.theme || queryValues.theme === "light" ? (
                  <Profile_Light_Mobile />
                ) : (
                  <Profile_Dark_Mobile />
                )}
              </div>

              {/* //* Nombre*/}
              <div className="font-bold  2xl:text-[36px] text-[28px] leading-none">
                Carlos <br />
                Baso
              </div>
            </div>
            {/* //* Imagen*/}
            <div className="avatar aspect-square w-full rounded-3xl shadow-sm"></div>
            {item.profile.map((item, index) => (
              <div key={index} className=" flex flex-col 2xl:gap-10 gap-5 ">
                {/* //* Specialization*/}
                <div>
                  <div className="secondary-text 2xl:text-[15px] text-[13px]">
                    {item.title1}
                  </div>
                  <div className="font-bold  2xl:text-[20px] text-[16px]">
                    {item.info1}
                  </div>
                </div>
                {/* //*Based in*/}
                <div>
                  <div className="secondary-text  2xl:text-[15px] text-[13px]">
                    {item.title2}
                  </div>
                  <div className="font-bold  2xl:text-[20px] text-[16px]">
                    {item.info2}
                  </div>
                </div>
                {/* //*Socials*/}
                <div className=" flex justify-between">
                  <Button_Socials
                    icon={<Mail />}
                    url={"https://www.carlosbaso.com/"}
                  />
                  <Button_Socials
                    icon={<Github />}
                    url={"https://www.carlosbaso.com/"}
                  />
                  <Button_Socials
                    icon={<LinkedIn />}
                    url={"https://www.carlosbaso.com/"}
                  />
                  <Button_Socials
                    icon={<Instagram />}
                    url={"https://www.carlosbaso.com/"}
                  />
                </div>
              </div>
            ))}
            {/* //*Work button*/}
            <Button text={item.work} />
          </div>
        </section>
      ))}
    </main>
  );
};

export default Profile_Mobile;
