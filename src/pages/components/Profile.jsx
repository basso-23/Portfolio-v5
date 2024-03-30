import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { languageAtom } from "@/lib/atom";
import Instagram from "@/icons/Instagram";
import Mail from "@/icons/Mail";
import Github from "@/icons/Github";
import LinkedIn from "@/icons/LinkedIn";

const Profile = () => {
  const [languageJSON, setLanguageJSON] = useAtom(languageAtom);

  return (
    <main>
      {languageJSON.map((item, index) => (
        <section
          key={index}
          className="2xl:w-[400px] w-[340px] h-[100vh] min-h-[700px]  max-h-[900px] p-4 fixed lg:flex hidden"
        >
          {/* //* CONTENT */}
          <div className="relative w-full h-full px-8 py-12 profile flex items-center ">
            {item.profile.map((item, index) => (
              <div key={index}>
                <div className="secondary-text 2xl:text-[15px] text-[13px]">
                  {item.title1}
                </div>
                <div className="font-bold  2xl:text-[20px] text-[16px]">
                  {item.info1}
                </div>
                <div className="secondary-text  2xl:text-[15px] text-[13px]">
                  {item.title2}
                </div>
                <div className="font-bold  2xl:text-[20px] text-[16px]">
                  {item.info2}
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
          </div>
        </section>
      ))}
    </main>
  );
};

export default Profile;
