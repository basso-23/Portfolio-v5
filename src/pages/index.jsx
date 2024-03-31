import React, { useState, useEffect } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import Loader from "@/lib/Loader";
import Profile from "@/components/Profile";
import Profile_Mobile from "@/components/Profile_Mobile";
import Content from "@/components/Content";

const App = () => {
  const [loading, setLoading] = useState(true);

  // FUNCTION: Tiempo de cargad de la pagina
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <main>
      {/* //* Loader*/}
      <AnimatePresence>
        {false ? (
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

      {/* //* Contenido*/}
      {true ? (
        <section className="lg:flex lg:flex-row flex flex-col pageSize lg:gap-5 gap-0">
          <Profile />
          <Content />
        </section>
      ) : null}
    </main>
  );
};

export default App;
