import Image from "next/image";
import styles from "../styles/Slideshow.module.css";
import Backyard from "../public/Backyard.png";
import Pond from "../public/Pond.png";
import Concrete from "../public/concrete.png";
import useEmblaCarousel from "embla-carousel-react";
import Link from 'next/link'
import { FunctionComponent, useState, useEffect, useCallback } from "react";

const IMAGES = [Backyard, Pond, Concrete];

const Slideshow: FunctionComponent = () => {
  const [page, setPage] = useState(0);
  const paginate = (direction: number) => {
    setPage(page + direction)
  };

  

  return (
    <div className={styles.container}>
      <figure className={styles.imageContainer}>
        <Image 
          src={IMAGES[page]}
          alt='A slideshow of images'
          layout="responsive"
          objectFit="contain"
          width="100%"
          height="100%"
        />
      </figure>
      <button
        onClick={() => paginate(-1)}>
        prev
      </button>
      <button onClick={() => paginate(1)}>
        next
      </button>
    </div>
  )
}

export default Slideshow