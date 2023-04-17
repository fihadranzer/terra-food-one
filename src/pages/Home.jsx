import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";
import Helmet from "../components/Helmet/Helmet";
import Category from "../components/Ui/category/Category";
import "../styles/hero-section.css";
import "../styles/home.css";

import products from "../assets/fake-data/products.js";
import foodCategoryImg03 from "../assets/images/bread.png";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import whyImg from "../assets/images/location.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import ProductCard from "../components/Ui/product-card/ProductCard";
const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, hic?",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, hic?",
  },
  {
    title: "Easy pickup",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, hic?",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

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
                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>
                    No shipping charge
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i class="ri-shield-line"></i>
                    </span>
                    100% Secure checkout
                  </p>
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

      <section className="py-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center ">
              <h5 className="feature__subtitle">What we serve</h5>
              <h2 className="featur__title">Just sit back at home</h2>
              <h2 className="featur__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, omnis.
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, animi.
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="4" key={index} className="mt-5">
                <div className="feature_item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="category-img" />
                  Burger
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="category-img" />
                  Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="category-img" />
                  Bread
                </button>
              </div>
            </Col>

            {allProducts.map((items) => (
              <Col lg="3" md="4" key={items.id} className="mt-5">
                <ProductCard item={items} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-terra-food" className="w-100"/>
            </Col>
            <Col lg="6" md="6">
              <div className="why__tasty_treat">
                <h2 className="tasty__treat-title mb-4">Why <span>Terra Food ?</span>  </h2>
                <p className="tasty__treat-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  ad vitae facilis quisquam iusto hic in, perspiciatis amet,
                  consectetur temporibus quaerat harum deserunt blanditiis non,
                  impedit aut. Ut, voluptatum eos.
                </p>
                <ListGroup className="mt-5">
                  <ListGroupItem className="border-0 ps-0" >
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i> Fresh and Tasty
                      Foods
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem, ex.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0" >
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i> Quality Support
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto, ex?
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0" >
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i>Order from any location
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto, ex?
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
