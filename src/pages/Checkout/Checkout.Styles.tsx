import styled from "styled-components";
import { motion } from "framer-motion";

export const Header = styled(motion.header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 126rem;
  margin: 0 auto;
  padding-top: 16rem;

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
    font-size: 1.6rem;
    font-weight: 600;
    height: 4.4rem;
    background: var(--gray);
    color: #808588;
    border-radius: 4rem;
    padding: 0 1.6rem;
    transition: all 100ms ease;
    border: none;

    :hover {
      background: #ffdfdf;
      color: #f15c5c;
    }
  }

  @media screen and (max-width: 1280px) {
    flex-direction: column;
    padding: 12rem 3rem 0 3rem;
    button {
      margin-top: 2rem;
    }
  }
`;

export const CartWrapper = styled(motion.section)`
  display: flex;

  max-width: 126rem;
  margin: 0 auto;
  padding-top: 4rem;

  @media screen and (max-width: 1280px) {
    padding: 4rem 3rem 0 3rem;
    flex-direction: column;
  }
`;

export const CartItems = styled(motion.div)`
  margin-bottom: 5rem;
  flex-grow: 4;

  h5 {
    font-size: 2.4rem;
    margin: 0 0 2rem 0;
  }

  @media screen and (max-width: 1280px) {
    flex-grow: unset;
    h5 {
      font-size: 2.2rem;
    }
  }
`;

export const CartDetailsWrap = styled.div`
  width: 40%;
  margin-left: 2rem;
  @media screen and (max-width: 1280px) {
    width: auto;
    margin-left: 0;
  }
`;

export const CartDetails = styled.div`
  border: solid 2px var(--gray);
  border-radius: 1rem;
  padding: 2rem 3rem;

  display: flex;
  flex-direction: column;

  h5 {
    /* margin: 0 0 3rem 0; */
    margin: 0;
    line-height: 4.6rem;
    font-size: 2.4rem;
    font-weight: 600;
  }

  label {
    margin-top: 3rem;
    font-size: 2rem;
  }

  input {
    background: var(--gray);
    border: none;
    height: 4.4rem;
    border-radius: 4.4rem;
    margin-top: 1rem;
    padding: 0 2rem;

    :focus {
      outline: none;
    }
  }

  .cart-details__continue-btn {
    color: #ffffff;
    background: var(--purple);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5.4rem;
    height: 4.4rem;
    width: 100%;
    font-size: 1.8rem;
    font-weight: 600;
    margin-top: 6rem;
  }

  .cart-details__guest-btn {
    border: solid 2px var(--gray);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5.4rem;
    height: 4.4rem;
    width: 100%;
    font-size: 1.8rem;
    font-weight: 600;
    margin-top: 1rem;
  }
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  border: solid 2px var(--gray);
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;

  a {
    img {
      background: var(--gray);
      border-radius: 1rem;
      width: 14.4rem;
      height: 14.4rem;
    }
  }

  @media screen and (max-width: 1280px) {
    padding: 1rem;

    a {
      img {
        width: 12.6rem;
        height: 12.6rem;
      }
    }
  }
`;

export const ItemDesc = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;

  h5 {
    margin: 0;
    line-height: 4.6rem;
    font-size: 2.4rem;
    font-weight: 600;
  }

  @media screen and (max-width: 1280px) {
    h5 {
      line-height: 3.2rem;
      font-size: 2rem;
    }
  }
`;

export const DeleteIcon = styled.span`
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
  transition: all 100ms ease;

  svg {
    height: 2rem;
    width: 2rem;
    color: #808588;
    transition: all 100ms ease;
  }

  :hover {
    background: #ffdfdf;
    svg {
      color: #f15c5c;
    }
  }

  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

export const RemoveBtn = styled.button`
  display: none;
  border: none;
  padding: 1rem 0rem;
  cursor: pointer;
  border-radius: 4rem;
  transition: all 100ms ease;
  font-size: 1.4rem;
  font-weight: 500;
  background: #ffdfdf;
  color: #f15c5c;

  :hover {
    background: #f15c5c;
    color: #fff;
  }

  @media screen and (max-width: 1280px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
  }
`;

export const Price = styled.div`
  font-size: 2rem;
  color: var(--black-mid);

  @media screen and (max-width: 1280px) {
    font-size: 1.8rem;
  }
`;

export const Quantiy = styled.div`
  font-size: 1.8rem;
  color: var(--black-mid);
  font-weight: 500;
  margin-top: 1rem;

  @media screen and (max-width: 1280px) {
    font-size: 1.6rem;
  }
`;

export const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  color: var(--black-mid);

  span {
    font-size: 2rem;
  }
  @media screen and (max-width: 1280px) {
    span {
      font-size: 1.8rem;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  span {
    font-weight: 600;
    font-size: 2rem;
  }
  @media screen and (max-width: 1280px) {
    span {
      font-size: 1.8rem;
    }
  }
`;
