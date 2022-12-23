import React from "react";
import Intro from "./Intro/Intro";
import MySkiLL from "./MySkills";
import Projects from "./Projects";
import TimeLine from "./TimeLine";
import Footer from "../Footer";


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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />

    </>
  );
};

export default IndexPage;
