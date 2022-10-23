import React from "react";
import style from "./Intro.module.css";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <>
      <div className={style.wrapper}>
        <motion.div
          className={style.intro}
          initial={{
            x: "-100vw",
          }}
          whileInView={{ x: 0 }}
          transition={{ delay: 0.15, type: "spring" }}
        >
          <div className={style.wish}>
            <span>Hello</span>
            <span>I am</span>
          </div>
          <h1 className={style.name}>Aniruddha</h1>
          <h1 className={style.surname}>Gawali</h1>
          <h3>Student | Web Developer</h3>
        </motion.div>
      </div>
    </>
  );
};

export default Intro;
