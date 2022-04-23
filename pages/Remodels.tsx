import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import styles from "../styles/Remodels.module.css";
import Footer from "../components/Footer"
import Slideshow from '../components/Slideshow'

export const Remodels: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Remodels</title>
        <meta name="description" content="Remodels at Red Rose Construction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <div className={styles.slideshowContainer}>
          <Slideshow/>
        </div>
        
      </main>
      <Footer />
    </div>
  )
}

export default Remodels