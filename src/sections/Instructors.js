import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Instructors.module.scss";

import instructor1 from "../files/images/instructor1.jpg";
import instructor2 from "../files/images/instructor2.jpg";

const instructors = [
  {
    img: instructor1,
    name: "Jan Kowalski",
    desc: "Instruktor fitness z 10-letnim doświadczeniem.",
  },
  {
    img: instructor2,
    name: "Anna Nowak",
    desc: "Specjalistka od treningu siłowego i cardio.",
  },
];

const Instructors = () => {
  return (
    <section id="instructors" className={styles.instructors}>
      <Container>
        <h2 className="text-center mb-4">Nasi Instruktorzy</h2>
        <Carousel interval={5000} indicators={false}>
          {instructors.map((inst, idx) => (
            <Carousel.Item key={idx}>
              <Row className="align-items-center">
                {idx % 2 === 0 ? (
                  <>
                    <Col md={6}>
                      <img
                        className={`d-block w-100 ${styles.instructorImg}`}
                        src={inst.img}
                        alt={inst.name}
                      />
                    </Col>
                    <Col md={6}>
                      <div className={styles.desc}>
                        <h3>{inst.name}</h3>
                        <p>{inst.desc}</p>
                      </div>
                    </Col>
                  </>
                ) : (
                  <>
                    <Col md={6}>
                      <div className={styles.desc}>
                        <h3>{inst.name}</h3>
                        <p>{inst.desc}</p>
                      </div>
                    </Col>
                    <Col md={6}>
                      <img
                        className={`d-block w-100 ${styles.instructorImg}`}
                        src={inst.img}
                        alt={inst.name}
                      />
                    </Col>
                  </>
                )}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Instructors;