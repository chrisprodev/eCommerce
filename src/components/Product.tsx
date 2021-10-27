import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Product: React.FC<{}> = () => {
  return (
    <Container>
      <ProductWrapper></ProductWrapper>
      <Details>
        <h4>Sun Cream</h4>
        <span>$20</span>
      </Details>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7rem;

  a {
    display: inline-flex;
    align-items: center;
    background: var(--light-blue);
    color: var(--blue);
    border-radius: 2rem;
    height: 3.4rem;
    padding: 0 2rem;
    font-size: 1.4rem;
    font-weight: 700;
  }
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
    padding-top: 1rem;
  }
`;
