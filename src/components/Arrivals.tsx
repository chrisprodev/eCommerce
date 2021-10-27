import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Product from "./Product";

const products = ["1", "2", "3", "4", "5", "6", "7", "8"];

const Arrivals: React.FC<{}> = () => {
  return (
    <Container>
      <h2>New arrivals</h2>
      <ProductsWrapper>
        {products.map((product) => (
          <Product key={product} />
        ))}
      </ProductsWrapper>
      <CenterBTN>
        <Link to="/">
          <span>View all</span>
        </Link>
      </CenterBTN>
    </Container>
  );
};

export default Arrivals;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 126rem;
  margin: 0 auto;
  padding-top: 19rem;
`;

const ProductsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 7rem;
`;

const CenterBTN = styled.div`
  display: flex;
  justify-content: center;

  a {
    color: #ffffff;
    background: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5.4rem;
    height: 5.4rem;
    width: 18rem;
    font-size: 2rem;
    font-weight: 600;
    margin-top: 3.6rem;
  }
`;
