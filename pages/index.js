import Head from "next/head";
import { useEffect, useState } from "react";
import IndexPage from "../Components/IndexPage";

import styles from "../styles/Home.module.css";

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
      tag: "#",
      icon: <AiOutlineBulb />,
    },
    {
      title: "Timeline",
      tag: "#",
      icon: <MdOutlineTimeline />,
    },
  ];

  const [projectsData, setProjectsData] = useState(props.projectsData.data);

  useEffect(() => {
    props.setSideNavData(sideNav);
  }, []);

  return (
    <>
      <Head>
        <title>Aniruddha Gawali | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main class Name={styles.main}>
        <IndexPage projectsData={projectsData} />
        {/* <IndexPage /> */}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://webfolio-backend.vercel.app/api/projects");
  const projectsData = await res.json();
  return {
    props: { projectsData }, // will be passed to the page component as props
  };
}
