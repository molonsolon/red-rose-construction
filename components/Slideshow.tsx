import Image, { StaticImageData } from "next/image";
import styles from "../styles/Slideshow.module.css";

import ChevronRight from "../public/chevron-right.svg";
import ChevronLeft from "../public/chevron-left.svg";
import { FunctionComponent, useState } from "react";

interface Props {
  images: Array<string>;
  
}

;

const Slideshow: FunctionComponent<Props> = ({ images=[] }) => {
  const [page, setPage] = useState(0);
  
  const paginate = (direction: number) => {
    if (page === 0 && direction === -1) {
      setPage(images.length - 1)
    } else if (page === images.length - 1 && direction === 1) {
      setPage(0)
    } else {
      setPage(page + direction);
    }
  };

  return (
    <div className={styles.container}>
      <button className={`${styles.button}
            ${styles.prevButton}`} onClick={() => paginate(-1)}>
        <Image src={ChevronLeft} alt="a chevron pointing left" height="50" width="40" />
      </button>
      <figure className={styles.imageContainer}>
        <Image
          src={images[page]}
          alt="A slideshow of images"
          layout="responsive"
          objectFit="contain"
          width="100%"
          height="30%"
        />
      </figure>

      <button className={`${styles.button}
            ${styles.nextButton}`} onClick={() => paginate(1)}>
        
        <Image src={ChevronRight} alt="a chevron pointing right" height="50" width="40" />
      </button>
    </div>
  );
};

export default Slideshow;
