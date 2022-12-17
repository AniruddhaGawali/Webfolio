import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import style from "./style.module.css";

// import icons
import { IoLogoPython, IoLogoChrome } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineLink } from "react-icons/hi";

export default function Projects(props) {
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
        <a href={link} className={style.link} target="_blank">
          <HiOutlineLink />
        </a>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      {/* {setProjectFlip(ProjectFlipTemp)} */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
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
