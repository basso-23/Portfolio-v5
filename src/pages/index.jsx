import React, { useState, useEffect } from "react";
import Content from "./components/Content";
import Profile from "./components/Profile";
import Profile_Mobile from "./components/Profile_Mobile";
import { motion as m, AnimatePresence } from "framer-motion";
import Loader from "@/lib/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <main>
      <AnimatePresence>
        {loading ? (
          <m.div
            initial={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0,
            }}
            exit={{ opacity: 0 }}
            className="w-[100lvw] h-[100lvh] flex bg-[#161616] z-[70] fixed"
          >
            <div className="m-auto">
              <Loader />
            </div>
          </m.div>
        ) : null}
      </AnimatePresence>
      <section className="lg:flex lg:flex-row flex flex-col pageSize lg:gap-5 gap-0">
        <Profile />
        <Profile_Mobile />
        <Content />
      </section>
    </main>
  );
};

export default App;
