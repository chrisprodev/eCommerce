import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
interface props {
  id: string;
  name: string;
  img: string;
  price: number;
}

const Product: React.FC<props> = ({ id, name, img, price }) => {
  return (
    <ProductContainer>
      <Link to={`/product/${id}`}>
        <img className="product-container__img" src={img} alt={name} />
      </Link>
      <Details>
        <h4>{name}</h4>
        <span>${price}</span>
      </Details>
    </ProductContainer>
  );
};

export default Product;

const ProductContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  a {
    background: var(--gray);
    border-radius: 2rem;
  }

  .product-container__img {
    height: auto;
    width: 100%;
    border-radius: 1rem;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 2.4rem;
    font-weight: 600;
    margin: 0;
    padding-top: 2rem;
  }

  span {
    font-size: 2rem;
    padding-top: 1rem;
    color: var(--black-mid);
  }

  @media screen and (max-width: 640px) {
    h4 {
      font-size: 2rem;
    }

    span {
      font-size: 1.6rem;
    }
  }
`;
