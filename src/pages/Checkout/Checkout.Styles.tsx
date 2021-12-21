import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 126rem;
  margin: 0 auto;
  padding-top: 16rem;

  span {
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

    :hover {
      background: #ffdfdf;
      color: #f15c5c;
    }
  }
`;

export const CartWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-content: start;
  max-width: 126rem;
  margin: 0 auto;
  padding-top: 4rem;
`;

export const CartItems = styled.div`
  width: 60%;
  border: solid 2px var(--gray);
  border-radius: 1rem;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;

  h5 {
    margin: 0 0 3rem 0;
    line-height: 4.6rem;
    font-size: 2.4rem;
    font-weight: 600;
  }
`;

export const CartDetailsWrap = styled.div`
  width: 40%;
  margin-left: 2rem;
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
  margin-bottom: 1rem;

  a {
    img {
      background: var(--gray);
      border-radius: 1rem;
      width: 8rem;
      height: 8rem;
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
`;

export const DeleteIcon = styled.span`
  cursor: pointer;
  position: absolute;
  top: 2rem;
  right: 0;
  background: var(--gray);
  height: 4rem;
  width: 4rem;
  border-radius: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 100ms ease;

  :hover {
    background: #ffdfdf;
    svg {
      color: #f15c5c;
    }
  }

  svg {
    height: 2rem;
    width: 2rem;
    color: #808588;
    transition: all 100ms ease;
  }
`;

export const Price = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--black-mid);
`;

export const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  color: var(--black-mid);

  span {
    font-size: 2rem;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  margin-top: 2.6rem;

  span {
    font-weight: 600;
    font-size: 2rem;
  }
`;
