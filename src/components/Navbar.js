import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import styles from "../styles/Navbar.module.scss";
import logo from "../files/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Start", to: "hero" },
    { name: "Oferta", to: "oferta" },
    { name: "Instruktorzy", to: "instruktorzy" },
    { name: "Regulamin", to: "regulamin" },
    { name: "Galeria", to: "galeria" },
    { name: "Lokalizacja", to: "lokalizacja" },
    { name: "Cennik", to: "cennik" },
  ];

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={styles.navContent}>
        <div className={styles.logoBox}>
          <img src={logo} alt="Logo firmy" className={styles.logo} />
        </div>

        <ul className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.to}
                smooth={true}
                duration={600}
                offset={-80}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div
          className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;