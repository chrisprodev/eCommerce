import React, { useState } from "react";
import styled from "styled-components";

interface props {
  images: string[];
}

const ProductImages: React.FC<props> = ({ images }) => {
  const [mainImg, setMainImg] = useState<number>(0);

  return (
    <ImagesContainer>
      <Thumbnails>
        {images.map((image, i) => (
          <span
            key={image}
            className={
              mainImg === i ? "images-container__thumbnails--active" : ""
            }
            onClick={() => setMainImg(i)}
          >
            <img src={image} alt={image} width="50.4rem" height="auto" />
          </span>
        ))}
      </Thumbnails>
      <img
        className="images-container__main-image"
        src={images[mainImg]}
        alt={images[mainImg]}
        width="100%"
        height="auto"
      />
    </ImagesContainer>
  );
};

export default ProductImages;

const ImagesContainer = styled.div`
  display: flex;

  .images-container__main-image {
    width: 50.4rem;
    height: auto;
    border-radius: 1rem;
    margin-left: 2.4rem;
    background: var(--gray);
  }

  .images-container__thumbnails--active {
    img {
      outline: solid 2px var(--purple);
      border-radius: 1rem;
    }
  }

  @media screen and (max-width: 1280px) {
    flex-direction: column;
    padding: 0 3rem;
    .images-container__main-image {
      order: -1;
      margin-bottom: 2rem;
      margin-left: 0;
    }
  }

  @media screen and (max-width: 640px) {
    .images-container__main-image {
      margin-bottom: 2rem;
      width: 100%;
    }
  }
`;

const Thumbnails = styled.div`
  display: flex;
  flex-direction: column;

  span {
    cursor: pointer;
    width: 15.2rem;
    height: 15.2rem;
    border-radius: 1rem;
    background: var(--gray);
    margin-top: 2.4rem;

    img {
      width: 100%;
      height: auto;
    }
  }

  span:first-child {
    margin-top: 0;
  }

  @media screen and (max-width: 1280px) {
    flex-direction: row;
    gap: 2.4rem;

    span {
      margin-top: 0;
    }
  }

  @media screen and (max-width: 640px) {
    width: 100%;

    span {
      width: 100%;
      height: auto;
    }
  }
`;
