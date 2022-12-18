import React from "react";
import Intro from "./Intro/Intro";
import Projects from "./Projects";

const IndexPage = (props) => {
  return (
    <>
      <Intro />
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
    </>
  );
};

export default IndexPage;
