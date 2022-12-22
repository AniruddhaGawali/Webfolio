import React from "react";
import style from "./style.module.css";
import { motion } from "framer-motion";

const MySkiLL = (props) => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.title} id="myskill">
          <h2 id="projects">My Skills</h2>
        </div>
        <div className={style.gridContainer}>
          {props.skillData.map((skill, index) => {
            return (
              <motion.div
                initial={{ y: "5vw", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  bounce: ".3",
                  delay: 0.5 + index * 0.1,
                }}
                className={style.gridItem}
                key={index}
              >
                <img src={skill.link} alt={skill.title} width="80px" />
                <h4>{skill.title}</h4>
                <span>{<StarRating noOfStars={parseInt(skill.star)} />}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MySkiLL;

const StarRating = (props) => {
  return (
    <>
      <div className={style.starRating}>
        {[...Array(props.noOfStars)].map(() => {
          return <span className={style.star}>&#9733;</span>;
        })}
      </div>
    </>
  );
};
