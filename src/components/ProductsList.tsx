import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchProductsList, selectProductList } from "../features/app/appSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Product from "./Product";

interface props {
  name?: string;
  categoryID: number;
}

const ProductsList: React.FC<props> = ({ name, categoryID }) => {
  const [isHome, setIsHome] = useState(true);
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProductList);

  useEffect(() => {
    if (window.document.location.pathname !== "/") {
      setIsHome(false);
    }
    dispatch(fetchProductsList(categoryID));
  }, [dispatch, categoryID]);

  return (
    <Container padding={isHome}>
      {name && <h2>{name}</h2>}
      <ProductsWrapper>
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
      </ProductsWrapper>
      {isHome && (
        <CenterBTN>
          <Link to="/category/new-arrivals">
            <span>View all</span>
          </Link>
        </CenterBTN>
      )}
    </Container>
  );
};

export default ProductsList;

const Container = styled.section<{ padding: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 126rem;
  margin: 0 auto;
  padding-top: ${(props) => props.padding && "12rem"};
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
    background: var(--purple);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5.4rem;
    font-weight: 600;
    height: 4.4rem;
    width: 14rem;
    font-size: 1.8rem;
    margin-top: 3.6rem;
    transition: all 150ms cubic-bezier(0.165, 0.84, 0.44, 1);

    :hover {
      background: var(--purple-hover);
    }
  }
`;
