import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCoverflow } from "swiper";
import { Navigation } from "swiper";

import style from "./style.module.css";

import { motion } from "framer-motion";

import useWindowDimensions from "../../../hooks/useWindowDimensions";

// import icons
import { IoLogoPython, IoLogoChrome } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { HiOutlineLink, HiFastForward } from "react-icons/hi";

export default function Projects(props) {
  const { width } = useWindowDimensions();
  const getIcon = (type) => {
    if (type === "python") {
      return <IoLogoPython />;
    } else if (type === "web") {
      return <IoLogoChrome />;
    } else if (type === "react") {
      return <FaReact />;
    }
  };

  const addLink = (type, link) => {
    if (type === "web" || type === "react") {
      return (
        <a href={link} className={style.link} target="_blank" rel="noreferrer">
          <HiOutlineLink />
        </a>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <div className={style.title}>
        <h2 id="projects">Projects</h2>
      </div>
      <motion.div
        initial={{ y: "5vw", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          bounce: 0.3,
          delay: 0.2,
        }}
      >
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={
            width > 1253 ? 4 : width > 1040 ? 3 : width > 660 ? 2 : 1
          }
          spaceBetween={
            width > 1253 ? 30 : width > 1040 ? 30 : width > 660 ? 30 : 20
          }
          // Responsive breakpoints

          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={width < 660 ? true : false}
          modules={[EffectCoverflow, Navigation]}
          loop={true}
          className="mySwiper"
        >
          {props.projectsData.map((project, key) => {
            return (
              <SwiperSlide key={key}>
                <div className={`${style.thecard} thecard`}>
                  <div className={style.thefront}>
                    <div className={style.projectCardIcon}>
                      {getIcon(project.type)}

                      <h5>{project.title}</h5>
                    </div>
                    <HiFastForward className={style.nextPage} />
                  </div>

                  <div className={style.theback}>
                    <p>{project.desc}</p>
                    <br />
                    <br />
                    <div className={style.projectCardLinks}>
                      <a
                        href={project.github}
                        className={style.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub />
                      </a>

                      {addLink(project.type, project.link)}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </>
  );
}
