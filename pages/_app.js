import "../styles/globals.css";
import Navbar from "../Components/Navbar/Navbar";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Navbar />
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
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
