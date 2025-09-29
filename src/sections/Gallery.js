import Slider from "react-slick";
import styles from "../styles/Gallery.module.scss";

import g1 from "../files/images/gallery1.jpg";
import g2 from "../files/images/gallery2.jpg";
import g3 from "../files/images/gallery3.jpg";

const images = [g1, g2, g3];

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="galeria" className={styles.galeria}>
      <h2>Galeria</h2>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className={styles.slide}>
            <img src={img} alt={`Galeria ${idx + 1}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Gallery;