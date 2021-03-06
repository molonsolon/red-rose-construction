import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import styles from "../styles/Contact.module.css";
import Footer from "../components/Footer";
import Pond from "../public/pond.png";
import ContactForm from "../components/ContactForm";

export const Contact: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact Red Rose Construction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
      <div className={styles.contactContainer}>
        <ContactForm />
      </div>
      </main>
      <Footer />
    </div>
  )
}

export default Contact