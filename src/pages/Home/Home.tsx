import React from "react";
import * as Styles from "./Home.Styles";
import { Link } from "react-router-dom";
import ProductsList from "../../components/ProductsList";
import Categories from "../../components/Categories";
import { features } from "../../constants/mockData";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../constants/animations";

const Home: React.FC = () => {
  return (
    <>
      <motion.div initial="initial" animate="animate" exit="exit">
        <Styles.Header exit={{ opacity: 0 }}>
          <Styles.Hero variants={stagger}>
            <img src="./images/banner.png" alt="Ipad Air M1" />
            <Styles.HeroDesc>
              <motion.h1 variants={fadeUp}>
                <img src="./images/logo_ipadair.png" alt="logo Ipad Air" />
                <span>Supercharged by the Apple M1 chip.</span>
                <span>12MP Ultra Wide front camera</span>
                <span>with Center Stage. Blazing‑fast 5G.</span>
                <span>Five gorgeous colors.</span>
              </motion.h1>
              <motion.div variants={fadeUp}>
                <Link to="/product/2QDxXauG13xYX1Ry52q2">
                  <span>Shop Now</span>
                </Link>
              </motion.div>
            </Styles.HeroDesc>
          </Styles.Hero>
        </Styles.Header>
        <Categories />
        <ProductsList name="New Arrivals" categoryID={1} />
        <Styles.FeatContainer variants={fadeUp}>
          <h2>Why people choose us</h2>
          <Styles.Features>
            {features.map((feat) => (
              <Styles.Feat key={feat.title}>
                <span>{feat.icon}</span>
                <h4>{feat.title}</h4>
                <p>{feat.description}</p>
              </Styles.Feat>
            ))}
          </Styles.Features>
        </Styles.FeatContainer>
        <Styles.Testimonials>
          <h2>What our customers say</h2>
          <Styles.Testimonial>
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
          </Styles.Testimonial>
          <Styles.NavButtons>
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
          </Styles.NavButtons>
        </Styles.Testimonials>
      </motion.div>
    </>
  );
};

export default Home;
