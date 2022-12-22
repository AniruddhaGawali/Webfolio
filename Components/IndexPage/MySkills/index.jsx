import React from "react";
import style from "./style.module.css";

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
              <div className={style.gridItem} key={index}>
                <img src={skill.link} alt={skill.title} width="80px" />
                <h4>{skill.title}</h4>
                <span>{<StarRating noOfStars={parseInt(skill.star)} />}</span>
              </div>
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
