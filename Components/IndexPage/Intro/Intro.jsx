import React, { useEffect } from "react";
import style from "./Intro.module.css";
import { motion } from "framer-motion";
import { MdCancel } from "react-icons/md";

const Intro = () => {
  const [introDesc, setIntroDesc] = React.useState(true);

  useEffect(() => {}, []);

  return (
    <>
      <div className={style.wrapper}>
        <motion.div
          className={style.intro}
          initial={{
            x: "-00vw",
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
          <MdCancel
            className={style.close}
            size="2.5rem"
            style={{ transform: introDesc ? "rotate(-45deg)" : "" }}
            onClick={() => setIntroDesc(!introDesc)}
            title="Know More"
          />
          <motion.div
            className={style.introdesc}
            style={{
              transform: introDesc ? "translateY(100%)" : "translateY(0%)",
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              magni pariatur eveniet harum ut, architecto voluptate, provident
              officiis quaerat magnam voluptas, cum saepe enim ab accusantium
              dolorum ratione? Deleniti, quaerat?
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Intro;
