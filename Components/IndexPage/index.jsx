import React from "react";
import Intro from "./Intro/Intro";
import MySkiLL from "./MySkills";
import Projects from "./Projects";
import TimeLine from "./TimeLine";

const IndexPage = (props) => {
  return (
    <>
      <Intro introData={props.introData} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Projects projectsData={props.projectsData} width={props.width} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <MySkiLL skillData={props.skillData} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <TimeLine timelineData={props.timelineData} />
    </>
  );
};

export default IndexPage;
