import React from "react";
import { Link } from "react-router-dom";
import Products from "../../components/ProductsList";
import Categories from "../../components/Categories";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { features } from "../../constants/mockData";
import {
  Header,
  Hero,
  FeatContainer,
  Features,
  Feat,
  Testimonials,
  Testimonial,
  NavButtons,
} from "./Home.Styles";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Header>
        <Hero>
          <h1>We offer the best Tech Products</h1>
          <Link to="/">
            <span>Shop Now</span>
          </Link>
        </Hero>
      </Header>
      <Categories />
      <Products name="New Arrivals" category="arrivals" />
      <FeatContainer>
        <h2>Why people choose us</h2>
        <Features>
          {features.map((feat) => (
            <Feat key={feat.title}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                viewBox="0 0 62 62"
              >
                <circle
                  id="Ellipse_7"
                  data-name="Ellipse 7"
                  cx="31"
                  cy="31"
                  r="31"
                  fill="#f6f7fb"
                />
              </svg>
              <h4>{feat.title}</h4>
              <p>{feat.description}</p>
            </Feat>
          ))}
        </Features>
      </FeatContainer>
      <Testimonials>
        <h2>What our customers say</h2>
        <Testimonial>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="83"
            height="83"
            viewBox="0 0 83 83"
          >
            <circle
              id="Ellipse_12"
              data-name="Ellipse 12"
              cx="41.5"
              cy="41.5"
              r="41.5"
              fill="#d9d9d9"
            />
          </svg>
          <h5>Amy Smith</h5>
          <p>
            This is the best website I have ordered something from. I highly
            recommend.
          </p>
        </Testimonial>
        <NavButtons>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8.815"
              height="14.801"
              viewBox="0 0 8.815 14.801"
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M1500.608,988.613l-5.986,5.987,5.986,5.986"
                transform="translate(-1493.208 -987.199)"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8.815"
              height="14.801"
              viewBox="0 0 8.815 14.801"
            >
              <path
                id="Path_2"
                data-name="Path 2"
                d="M1500.608,988.613l-5.986,5.987,5.986,5.986"
                transform="translate(1502.022 1002) rotate(180)"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          </span>
        </NavButtons>
      </Testimonials>
      <Footer />
    </>
  );
};

export default Home;
