import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUp } from "../constants/animations";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Product from "./Product";
import { productInterface } from "../models/Products";
import {
  fetchProductsList,
  selectProductList,
  setCategory,
} from "../features/app/appSlice";

interface props {
  name?: string;
  categoryID: number;
  show: number;
}

const ProductsList: React.FC<props> = ({ name, categoryID, show }) => {
  const [isHome, setIsHome] = useState(true);
  const dispatch = useAppDispatch();
  const products: productInterface[] | undefined =
    useAppSelector(selectProductList);

  useEffect(() => {
    if (window.document.location.pathname !== "/") {
      setIsHome(false);
    }

    dispatch(fetchProductsList({ categoryID, show }));
  }, [dispatch, categoryID, show]);

  const handleSetCategory = () => {
    dispatch(setCategory(1));
  };

  return (
    <Container padding={isHome}>
      {name && <h2>{name}</h2>}
      <AnimatePresence exitBeforeEnter>
        <ProductsWrapper
          displayGrid={products && products.length > 0 ? true : false}
        >
          {products && products.length > 0 ? (
            products.map((product) => (
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={fadeUp}
              >
                <Product
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  img={product.images[0]}
                  price={product.price}
                />
              </motion.div>
            ))
          ) : (
            <EmptyCat>
              <h4>Ouch... it's empty here!</h4>
              <p>
                There are no items to display in this section, please try
                another category.
              </p>
            </EmptyCat>
          )}
        </ProductsWrapper>
        {isHome && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeUp}
          >
            <CenterBTN>
              <Link
                to="/products/new-arrivals"
                onClick={() => handleSetCategory()}
              >
                <span>View all</span>
              </Link>
            </CenterBTN>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default ProductsList;

const Container = styled.section<{ padding: boolean }>`
  display: flex;
  flex-direction: column;
  max-width: 126rem;
  margin: 0 auto;
  padding: 0 2rem;
  padding-top: ${(props) => props.padding && "12rem"};

  @media screen and (max-width: 1280px) {
    padding-top: ${(props) => props.padding && "6rem"};
  }
`;

const ProductsWrapper = styled(motion.div)<{ displayGrid: boolean }>`
  padding-bottom: 7rem;
  display: ${({ displayGrid }) => (displayGrid ? "grid" : "flex")};
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ displayGrid }) => (displayGrid ? "2rem" : "0")};

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
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
    font-weight: 500;
    height: 4.4rem;
    width: 14rem;
    font-size: 1.8rem;
    margin-top: 3.6rem;
    transition: all 150ms cubic-bezier(0.165, 0.84, 0.44, 1);

    :hover {
      background: var(--purple-hover);
    }
  }

  @media screen and (max-width: 1280px) {
    a {
      margin-top: 0rem;
    }
  }
`;

const EmptyCat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 10rem 0;

  h4 {
    font-size: 2.4rem;
    margin: 4rem 0 0 0;
  }

  p {
    color: var(--black-mid);
    text-align: center;
    font-size: 1.8rem;
    line-height: 3rem;
    max-width: 40rem;
  }

  @media screen and (max-width: 1280px) {
    margin: 8rem 0;
  }
`;
