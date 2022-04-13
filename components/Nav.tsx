import Link from 'next/link';
import type { NextPage } from 'next'
import styles from '../styles/Nav.module.css'

export const Nav: NextPage = () => {
  return (
    <nav className={styles.navMain}>
      <section className={styles.logo}>
        <Link href="/">Red Rose Construction</Link>
      </section>
      <section className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Remodels">Remodels</Link>
        <Link href="/Contact">Contact</Link>
      </section>
    </nav>
    
  )
}

export default Nav