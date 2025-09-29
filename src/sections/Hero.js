import { motion } from "framer-motion";
import styles from "../styles/Hero.module.scss";
import logo from "../files/logo.jpg"; 

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <motion.div
        className={styles.logoBox}
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={logo} alt="Logo firmy" className={styles.logo} />
        <p className={styles.subtitle}>Profesjonalizm i pasja</p>
      </motion.div>
    </section>
  );
};

export default Hero;
