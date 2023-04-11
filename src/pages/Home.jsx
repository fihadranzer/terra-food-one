import React from "react";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import Helmet from "../components/Helmet/Helmet";

import { Link } from "react-router-dom";
import "../styles/hero-section.css";
const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an Order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span>Just wait <br /> food at
                  <span> your door</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magnam, labore.
                </p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i class="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all__foods-btn">
                    <Link to="/foods">See more foods</Link>
                  </button>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
