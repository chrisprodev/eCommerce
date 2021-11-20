import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface props {
  id: string;
  name: string;
  price: number;
}

const Product: React.FC<props> = ({ id, name, price }) => {
  return (
    <Container>
      <Link to={`/product/${id}`}>
        <ProductWrapper></ProductWrapper>
      </Link>
      <Details>
        <h4>{name}</h4>
        <span>${price}</span>
      </Details>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
`;

const ProductWrapper = styled.div`
  height: 28rem;
  width: 28rem;
  background: var(--gray);
  border-radius: 1rem;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  h4 {
    font-size: 2.4rem;
    font-weight: 600;
    margin: 0;
    padding-top: 2rem;
  }
  span {
    color: var(--black-mid);
    padding-top: 1rem;
  }
`;
