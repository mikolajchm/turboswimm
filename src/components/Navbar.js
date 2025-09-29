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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.logoBox}>
        <img src={logo} alt="Logo firmy" className={styles.logo} />
      </div>

      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </div>

      <ul className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
        {menuItems.map((item, idx) => (
          <li key={idx}>
            <Link
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80} // odliczamy wysokość navbaru
              onClick={() => setIsOpen(false)} // zamyka menu po kliknięciu
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;