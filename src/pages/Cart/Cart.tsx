import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Quantity } from "../../components/Quantity";
import { shoppingCart } from "../../constants/mockData";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header>
        <h1>Shopping Cart</h1>
        <span>Clear all</span>
      </Header>
      <CartWrapper>
        <CartItems>
          {shoppingCart.map((item) => (
            <Item>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="159"
                height="159"
                viewBox="0 0 159 159"
              >
                <rect
                  id="Rectangle_21"
                  data-name="Rectangle 21"
                  width="159"
                  height="159"
                  rx="10"
                  fill="#f6f7fb"
                />
              </svg>
              <ItemDesc>
                <h5>Product name</h5>
                <Price>$1,499</Price>
                <Quantity />
              </ItemDesc>
              <DeleteIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </DeleteIcon>
            </Item>
          ))}
        </CartItems>
        <CartDetailsWrap>
          <CartDetails>
            <h5>Cart Total</h5>
            <Subtotal>
              <span>Subtotal:</span>
              <span>$1,499</span>
            </Subtotal>
            <Subtotal>
              <span>Shipping:</span>
              <span>$0</span>
            </Subtotal>
            <Total>
              <span>Total:</span>
              <span>$1,499</span>
            </Total>
            <div>
              <Link to="/">Checkout</Link>
            </div>
          </CartDetails>
        </CartDetailsWrap>
      </CartWrapper>
      <Footer />
    </React.Fragment>
  );
};

export default Cart;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 126rem;
  margin: 0 auto;
  padding-top: 30rem;

  span {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
    font-size: 2.4rem;
    font-weight: 600;
    height: 5.4rem;
    border: solid 2px var(--gray);
    border-radius: 4rem;
    padding: 0 2.4rem;

    :hover {
      border: solid 2px var(--gray-mid);
      background: var(--gray-mid);
    }
  }
`;

const CartWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 126rem;
  margin: 0 auto;
  padding-top: 7rem;
`;

const CartItems = styled.div`
  width: 60%;

  a {
    color: #ffffff;
    background: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5.4rem;
    height: 5.4rem;
    width: 100%;
    font-size: 2rem;
    font-weight: 600;
    margin-top: 6rem;
  }
`;

const CartDetailsWrap = styled.div`
  width: 40%;
  margin-left: 2rem;
`;

const CartDetails = styled.div`
  border: solid 2px var(--gray);
  border-radius: 1rem;
  padding: 2rem;

  h5 {
    margin: 0 0 3rem 0;
    line-height: 4.6rem;
    font-size: 2.6rem;
    font-weight: 600;
  }

  a {
    color: #ffffff;
    background: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5.4rem;
    height: 5.4rem;
    width: 100%;
    font-size: 2rem;
    font-weight: 600;
    margin-top: 6rem;
  }
`;

const Item = styled.div`
  position: relative;
  display: flex;
  border: solid 2px var(--gray);
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
`;

const ItemDesc = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;

  h5 {
    margin: 0;
    line-height: 4.6rem;
    font-size: 2.6rem;
    font-weight: 600;
  }
`;

const DeleteIcon = styled.span`
  cursor: pointer;
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: var(--gray);
  height: 4rem;
  width: 4rem;
  border-radius: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: var(--gray-mid);
  }

  svg {
    height: 2rem;
    width: 2rem;
    color: #a1a1a1;
  }
`;

const Price = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  span {
    font-size: 2rem;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  span {
    font-weight: 600;
    font-size: 2rem;
  }
`;
