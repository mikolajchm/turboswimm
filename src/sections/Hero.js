import { motion } from "framer-motion";
import styles from "../styles/Hero.module.scss";
import logo from "../files/logo.jpg";
import bgPhoto from "../files/bb.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className={styles.hero}
      style={{ backgroundImage: `url(${bgPhoto})` }}
    >
      <div className={styles.overlay}></div>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.logoBox}>
          <img src={logo} alt="Logo firmy" className={styles.logo} />
        </div>
        <div className={styles.textBox}>
          <h1 className={styles.title}>Turbo Swim</h1>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;