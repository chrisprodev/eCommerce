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
            className={
              mainImg === i ? "images-container__thumbnails--active" : ""
            }
            onClick={() => setMainImg(i)}
          >
            <img src={image} alt={image} />
          </span>
        ))}
      </Thumbnails>
      <img
        className="images-container__main-image"
        src={images[mainImg]}
        alt={images[mainImg]}
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
      border: solid 2px var(--purple);
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
      border-radius: 1rem;
      background: var(--gray);
      transform: scale(0.9744);
      border: solid 2px transparent;
    }
  }

  span:first-child {
    margin-top: 0;
  }
`;
