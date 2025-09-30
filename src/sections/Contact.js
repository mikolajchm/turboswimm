import { useState } from "react";
import styles from "../styles/Contact.module.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formularz wysłany! (Tutaj podłącz backend)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2>Skontaktuj się z nami</h2>
          <p>Masz pytanie? Chcesz zarezerwować termin zajęć? Napisz do nas!</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Imię i nazwisko"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Twój email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Twoja wiadomość (np. proszę o termin zajęć)"
              required
            ></textarea>
            <button type="submit">Wyślij</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;