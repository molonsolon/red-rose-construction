import type { NextPage } from 'next'
import styles from '../styles/Footer.module.css'

export const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
            <p>
              RedRoseConstruction@gmail.com
            </p>
            <p>
              (530) 351-4441
            </p>
            <p>
              ©2022 All Rights Reserved
            </p>
        </footer>
    
  )
}

export default Footer