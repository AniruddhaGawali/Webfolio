import "../styles/globals.css";
import Navbar from "../Components/Navbar/Navbar";
import SideNav from "../Components/SideNav";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function MyApp({ Component, pageProps, router }) {
  const [sideNavData, setSideNavData] = useState(null);

  return (
    <>
      <Navbar />
      <SideNav navData={sideNavData} />
      <br />
      <br />
      <br />
      <br />
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          exit={{ backgroundColor: "black" }}
          transition={{ type: "spring", bounce: ".1", delay: 0.5 }}
        >
          <Component {...pageProps} setSideNavData={setSideNavData} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
