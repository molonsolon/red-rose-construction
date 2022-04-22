import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import styles from "../styles/About.module.css";
import Footer from "../components/Footer";
import Family from "../public/family.png";
import Fish from "../public/fish.png";

export const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="All about Red Rose Construction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <section className={styles.aboutGrid}>
          <figure className={styles.headerPic}>
            <Image src={Family} alt="Shawn and his son building a deck." />
          </figure>
          <figure className={styles.aboutPortrait}>
            <Image src={Fish} alt="Shawn holding a rainbow trout." />
          </figure>
          <p className={styles.aboutText}>
            Hello, my name is Shawn Coulter. Here at Red Rose Construction
            specializes in residential remodels. We have experience building
            backyard kitchens... Incididunt pariatur elit in labore commodo. Eu
            et mollit irure ipsum laboris voluptate consectetur. Incididunt in
            do magna officia ut fugiat proident sit magna sunt. Non duis commodo
            nulla quis ut excepteur irure quis qui veniam velit amet.
            <br />
            <br /> Anim deserunt eu et qui eiusmod esse exercitation commodo
            anim ex reprehenderit veniam. Mollit est Lorem tempor tempor eiusmod
            ut esse magna do ullamco amet elit Lorem. Consectetur id consequat
            cillum magna pariatur laborum Lorem duis mollit. Et tempor excepteur
            dolore culpa ad excepteur irure sunt.
          </p>
          </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
