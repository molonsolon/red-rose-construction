import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import styles from "../styles/Remodels.module.css";
import Footer from "../components/Footer"
import Slideshow from '../components/Slideshow'
import Backyard from "../public/backyard.png";
import Pond from "../public/Pond.png";
import Concrete from "../public/concrete.png";
const IMAGES = [Backyard, Pond, Concrete]
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
          <h3>
            Backyard Kitchen
          </h3>
          <Slideshow images={['/../public/backyard-1.JPG', '/../public/backyard-2.JPG', '/../public/backyard-3.JPG']}/>
          <h3>
            Backyard Kitchen
          </h3>
          <Slideshow images={['/../public/backyard2-1.JPG', '/../public/backyard2-2.JPG']} />
          <h3>
            Floor Restoration
          </h3>
          <Slideshow images={['/../public/floor-1.JPG', '/../public/floor-2.JPG','/../public/floor-3.JPG']} />
          <h3>
            The Nest
          </h3>
          <Slideshow images={['/../public/nest-1.jpeg', '/../public/nest-2.jpeg', '/../public/nest-3.JPG']} />
        
        </div>
        
      </main>
      <Footer />
    </div>
  )
}

export default Remodels