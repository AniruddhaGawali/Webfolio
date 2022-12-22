import React, { useEffect } from "react";
import style from "./Intro.module.css";
import { motion } from "framer-motion";
import { MdCancel } from "react-icons/md";

import { BsTwitter } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Intro = (props) => {
  const [introDesc, setIntroDesc] = React.useState(true);

  useEffect(() => {}, []);

  return (
    <>
      <div className={style.wrapper} id="intro">
        <motion.div
          className={style.intro}
          initial={{
            x: "-00vw",
          }}
          whileInView={{ x: 0 }}
          transition={{ delay: 0.15, type: "spring" }}
          onHoverStart={() => setIntroDesc(false)}
          onHoverEnd={() => setIntroDesc(true)}
          œ
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
            <p>{props.introData.intro}</p>
            <ul>
              <li title="GitHub">
                <a
                  href="https://github.com/AniruddhaGawali"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li title="Twitter">
                <a
                  href="https://twitter.com/AniruddhaAKG"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsTwitter />
                </a>
              </li>
              <li title="LinkedIn">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/aniruddha-gawali-617804230/"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li title="LinkedIn">
                <a
                  target="_blank"
                  href="mailto:aniruddhagawali03@gmail.com"
                  rel="noreferrer"
                >
                  <SiGmail />
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Intro;
