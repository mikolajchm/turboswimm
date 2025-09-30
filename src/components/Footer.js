import styles from "../styles/Footer.module.scss";
import logo from "../files/logo.jpg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <img src={logo} alt="TurboSwim Logo" className={styles.logo} />
        <p>© 2025 TurboSwim. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};

export default Footer;