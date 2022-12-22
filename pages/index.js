import Head from "next/head";
import { useEffect, useState } from "react";
import IndexPage from "../Components/IndexPage";

import styles from "../styles/Home.module.css";

import "react-vertical-timeline-component/style.min.css";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importing custom hooks

// Importing icons
import { AiOutlineInfoCircle } from "react-icons/ai";
import { SiNounproject } from "react-icons/si";
import { AiOutlineBulb } from "react-icons/ai";
import { MdOutlineTimeline } from "react-icons/md";

export default function Home(props) {
  const sideNav = [
    {
      title: "Intro",
      tag: "#intro",
      icon: <AiOutlineInfoCircle />,
    },
    {
      title: "Projects",
      tag: "#projects",
      icon: <SiNounproject />,
    },
    {
      title: "Skills",
      tag: "#myskill",
      icon: <AiOutlineBulb />,
    },
    {
      title: "Timeline",
      tag: "#",
      icon: <MdOutlineTimeline />,
    },
  ];

  useEffect(() => {
    props.setSideNavData(sideNav);
  }, []);

  return (
    <>
      <Head>
        <title>Aniruddha Gawali | Home</title>
        <meta
          name="description"
          content="Aniruddha Gawali's personal website is a one-stop destination for information about his professional background, skills, and expertise. From software development to data analysis, this website highlights Aniruddha's diverse experience and knowledge. Explore his portfolio of projects, read his blog to stay up-to-date on the latest tech trends, and get in touch to learn more about his services or to collaborate on a project."
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main class Name={styles.main}>
        <IndexPage
          projectsData={props.projectsData.data}
          skillData={props.skillData.data}
          introData={props.introData.data[0]}
          timelineData={props.timelineData.data}
        />
      </main>
    </>
  );
}

export async function getStaticProps() {
  var res = await fetch("https://webfolio-backend.vercel.app/api/projects");
  const projectsData = await res.json();

  const skill = await fetch("https://webfolio-backend.vercel.app/api/skill");
  const skillData = await skill.json();

  const intro = await fetch("https://webfolio-backend.vercel.app/api/intro");
  const introData = await intro.json();

  const timeline = await fetch(
    "https://webfolio-backend.vercel.app/api/timeline"
  );
  const timelineData = await timeline.json();

  return {
    props: { projectsData, skillData, introData, timelineData }, // will be passed to the page component as props
  };
}

// Not Working
