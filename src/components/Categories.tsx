import React, { useRef } from "react";
import styled from "styled-components";
import { categories } from "../constants/mockData";
import CategoryIcon from "./CategoryIcon";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import { fadeUp, stagger } from "../constants/animations";

const Categories: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Container variants={stagger}>
      <Header variants={fadeUp}>
        <h2>Browse by category</h2>
        <NavButtons>
          <span
            onClick={() =>
              sliderRef && sliderRef.current && sliderRef.current.slickPrev()
            }
          >
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
          <span
            onClick={() =>
              sliderRef && sliderRef.current && sliderRef.current.slickNext()
            }
          >
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
      </Header>
      <HorizontalScroll variants={fadeUp}>
        <Slider ref={sliderRef} {...settings}>
          {categories.map((category) => (
            <CategoryIcon
              key={category.id}
              id={category.id}
              name={category.name}
              icon={category.icon}
            />
          ))}
        </Slider>
      </HorizontalScroll>
    </Container>
  );
};

export default Categories;

const Container = styled(motion.section)`
  width: 100%;
  max-width: 126rem;
  margin: 0 auto;
  padding-top: 8rem;
  -webkit-user-select: none;
  user-select: none;

  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

const Header = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavButtons = styled.div`
  display: flex;

  span {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--gray);
    width: 4.7rem;
    height: 4.7rem;
    border-radius: 5rem;
    transition: all 150ms ease;

    :hover {
      background: var(--gray-mid);
      color: var(--purple);
    }
  }

  span:last-child {
    margin-left: 1.8rem;
  }
`;

const HorizontalScroll = styled(motion.div)`
  margin-top: 4rem;
`;
