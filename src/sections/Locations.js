import styles from "../styles/Locations.module.scss";

const Locations = () => {
  return (
    <section id="lokalizacja" className={styles.locations}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2>Lokalizacja</h2>
          <p>Znajdziesz nas w centrum Warszawy</p>
        </div>
        <div className={styles.mapContainer}>
          <iframe
            title="Mapa lokalizacji"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.9515594391637!2d21.039366512429265!3d52.25259997187552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc47c2a4fd73%3A0x6275ddc03f715a49!2sBrzeska%2C%20Warszawa!5e1!3m2!1spl!2spl!4v1759168388601!5m2!1spl!2spl"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Locations;