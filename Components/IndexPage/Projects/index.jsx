import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import style from "./style.module.css";

// import icons
import { GrProjects } from "react-icons/gr";

export default function Projects(props) {
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
        pagination={true}
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
                    <GrProjects />

                    <h5>{project.title}</h5>
                  </div>
                </div>

                <div className={style.theback}>{project.desc}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* <div className={style.thefront}>
        <h1>Front of Card</h1>
        <p>
          This is the front of the card. It contains important information.
          Please see overleaf for more details.
        </p>
      </div>

      <div className={style.theback}>
        <h1>Back of Card</h1>
        <p>
          Your use of this site is subject to the terms and conditions governing
          this and all transactions.
        </p>
        <button>Submit</button>
      </div> */}
    </>
  );
}
