import Head from "next/head";
import Intro from "../Components/IndexPage/Intro/Intro";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aniruddha Gawali | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className={styles.main}>
        <Intro />
      </main>
    </>
  );
}