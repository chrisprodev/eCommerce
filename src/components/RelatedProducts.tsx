import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Product from "./Product";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchProductsList, selectProductList } from "../features/app/appSlice";
interface props {
  categoryID: string;
}

const RelatedProducts: React.FC<props> = ({ categoryID }) => {
  const sliderRef = useRef<Slider>(null);
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProductList);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchParams = { categoryID: parseInt(categoryID), show: 4 };
    dispatch(fetchProductsList(fetchParams));
  }, [dispatch, categoryID]);

  return (
    <Container>
      <Header>
        <h2>Related products</h2>
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
                stroke="#000"
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
                stroke="#000"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          </span>
        </NavButtons>
      </Header>
      <HorizontalScroll>
        <Slider ref={sliderRef} {...settings}>
          {products &&
            products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                img={product.images[0]}
                price={product.price}
              />
            ))}
        </Slider>
      </HorizontalScroll>
      <NavButtonsMobile>
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
              stroke="#000"
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
              stroke="#000"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </svg>
        </span>
      </NavButtonsMobile>
    </Container>
  );
};

export default RelatedProducts;

const Container = styled.section`
  width: 100%;
  max-width: 126rem;
  margin: 0 auto;
  padding-top: 18rem;
  -webkit-user-select: none;
  user-select: none;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1280px) {
    margin: 0 3rem;
  }
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

    :hover {
      background: var(--gray-mid);
    }
  }

  span:last-child {
    margin-left: 1.8rem;
  }

  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

const HorizontalScroll = styled.div`
  margin-top: 1rem;
  margin-bottom: 5rem;

  .slick-list {
    margin: 0 -1rem;
  }
  .slick-slide > div {
    padding: 0 1rem;
  }

  @media screen and (max-width: 1280px) {
    margin: 1rem 3rem 2rem 3rem;
  }
`;

const NavButtonsMobile = styled.div`
  display: none;

  span {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--gray);
    width: 4.7rem;
    height: 4.7rem;
    border-radius: 5rem;

    :hover {
      background: var(--gray-mid);
    }
  }

  span:last-child {
    margin-left: 1.8rem;
  }

  @media screen and (max-width: 1280px) {
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;
  }
`;
