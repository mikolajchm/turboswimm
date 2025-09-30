import { Carousel } from "react-bootstrap";
import styles from "../styles/Gallery.module.scss";

import g1 from "../files/images/gallery1.jpg";
import g2 from "../files/images/gallery2.jpg";
import g3 from "../files/images/gallery3.jpg";

const images = [g1, g2, g3];

const Gallery = () => {
  return (
    <section id="galeria" className={styles.galeria}>
      <h2 className={styles.title}>Galeria</h2>
      <div className={styles.carouselWrapper}>
        <Carousel fade interval={3000} indicators={true} controls={true}>
          {images.map((img, idx) => (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100"
                src={img}
                alt={`Galeria ${idx + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;