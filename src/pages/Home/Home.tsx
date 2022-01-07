import React from "react";
import * as Styles from "./Home.Styles";
import { Link } from "react-router-dom";
import ProductsList from "../../components/ProductsList";
import Categories from "../../components/Categories";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { features } from "../../constants/mockData";
import MobileMenu from "../../components/MobileMenu";
import { useAppSelector } from "../../store/hooks";
import { showMenu } from "../../features/app/appSlice";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Size } from "../../models/Hooks";

const Home: React.FC = () => {
  const menuStatus = useAppSelector(showMenu);
  const size: Size = useWindowSize();

  return (
    <>
      <Navbar />
      {size && size.width && size.width < 1280 && menuStatus ? (
        <MobileMenu />
      ) : (
        <>
          <Styles.Header>
            <Styles.Hero>
              <h1>Create your perfect sound system</h1>
              <Link to="/category/audio">
                <span>Shop Now</span>
              </Link>
            </Styles.Hero>
          </Styles.Header>
          <Categories />
          <ProductsList name="New Arrivals" categoryID={1} />
          <Styles.FeatContainer>
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
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
