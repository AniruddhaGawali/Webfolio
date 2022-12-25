import "../styles/globals.css";
import Navbar from "../Components/Navbar/Navbar";
import SideNav from "../Components/SideNav";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { BarLoader } from "react-spinners";

// function Loading() {
//   const router = useRouter();

//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const handleStart = (url) => url !== router.asPath && setLoading(true);
//     const handleComplete = (url) => url === router.asPath && setLoading(false);

//     router.events.on("routeChangeStart", handleStart);
//     router.events.on("routeChangeComplete", handleComplete);
//     router.events.on("routeChangeError", handleComplete);

//     return () => {
//       router.events.off("routeChangeStart", handleStart);
//       router.events.off("routeChangeComplete", handleComplete);
//       router.events.off("routeChangeError", handleComplete);
//     };
//   });

//   return (
//     loading &&
//     (console.log("loading", loading),
//     (
//       <div className="spinner-wrapper">
//         <BarLoader
//           cssOverride={{
//             background: "linear-gradient(var(--gradient))",
//             color: "#fff",
//           }}
//         />
//       </div>
//     ))
//   );
// }

function MyApp({
  Component,
  pageProps,
  projectsData,
  skillData,
  introData,
  timelineData,
}) {
  const [sideNavData, setSideNavData] = useState(null);

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 500);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    <>
      <Navbar />
      <SideNav navData={sideNavData} />
      <br />
      <br />
      <br />
      <br />

      {console.log("loading", loading)}
      <AnimatePresence>
        {loading ? (
          <div className="spinner-wrapper">
            <BarLoader
              height={5}
              width={200}
              color="#fff"
              cssOverride={{
                background: "linear-gradient(var(--gradient))",
                borderRadius: "10px",
              }}
            />
          </div>
        ) : (
          <motion.div
            key={router.route}
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ backgroundColor: "black" }}
            transition={{ type: "spring", bounce: ".1", delay: 0.5 }}
          >
            <Component {...pageProps} setSideNavData={setSideNavData} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MyApp;
