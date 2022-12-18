import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCoverflow } from "swiper";

import style from "./style.module.css";

import useWindowDimensions from "../../../hooks/useWindowDimensions";

// import icons
import { IoLogoPython, IoLogoChrome } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineLink } from "react-icons/hi";

// breakpoints={{
//   // when window width is >= 320px
//   320: {
//     slidesPerView: 1,
//     spaceBetween: 20,
//   },
//   // when window width is >= 600px
//   660: {
//     slidesPerView: 2,
//     spaceBetween: 30,
//   },
//   1040: {
//     slidesPerView: 3,
//     spaceBetween: 30,
//   },
//   1253: {
//     slidesPerView: 4,
//     spaceBetween: 30,
//   },
// }}

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
      {console.log(width)}
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
        modules={[EffectCoverflow]}
        loop={true}
        className="mySwiper"
        id="projects"
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
    </>
  );
}
