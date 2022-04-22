import styles from '../styles/Footer.module.css'
import { FunctionComponent } from 'react';

export const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
            <p>
              RedRoseConstruction@gmail.com
            </p>
            
            <p>
              ©2022 All Rights Reserved
            </p>
        </footer>
    
  )
}

export default Footer