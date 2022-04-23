import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Rafters from "../public/rafters.png";
import Nav from "../components/Nav";
import Beam from "../public/beam.png";
import Framing from "../public/framing.png";
import Backyard from "../public/backyard.png";
import ADU from "../public/adu.png";
import Nest from "../public/theNest.png"
import Footer from "../components/Footer"


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Red Rose Construction</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <div className={styles.headerContainer}>
          <figure className={styles.raftersContainer}>
            <Image src={Rafters} alt="A picture of rafters in a home" />
          </figure>
          <div className={styles.textContainer}>
            <p>
              SIMPLE 
            </p>
            <p>
              ELEGANT 
            </p>
            <p>
              LONG-LASTING
            </p>
            
          </div>
        </div>

        <section className={styles.introBlurb}>
          <div className={styles.upperLine}>
          </div>
          <p>
            At Red Rose, we prioritize precision builds and long-lasting client
            relationships. Our mission is to make your house feel like a home
            again.
          </p>
          <div className={styles.lowerLine}>
          </div>
        </section>

        <section className={styles.miniGallery}>
          <figure className={styles.backyardContainer}>
            <Image 
              src={Backyard}
              alt="A picture of a remodeled back porch."
            />
          </figure>
          <figure className={styles.framingContainer}>
            <Image 
              src={Framing}
              alt="An ADU in the framing stage of construction."
            />
          </figure>
          {/* <figure className={styles.aduContainer}>
            <Image 
              src={ADU}
              alt="An ADU in the final stages of construction. "
            />
          </figure> */}
          <div className={styles.testimonial}>
            {/* <p>
              Red Rose is Great!
            </p> */}
          </div>
          <figure className={styles.beamContainer}>
            <Image 
              src={Beam}
              alt="A beam being clamped while in the process of gluing."
            />
          </figure>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
