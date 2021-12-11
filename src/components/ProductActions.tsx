import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { addToCart } from "../features/app/appSlice";
import { useAppDispatch } from "../store/hooks";
import { Quantity } from "./Quantity";
interface Props {
  id: string;
  name: string;
  price: number;
}

export const ProductActions: React.FC<Props> = ({ id, name, price }) => {
  const [count, setCount] = useState(1);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((count) => count - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productID: id,
        productName: name,
        quantity: count,
        price: price,
      })
    );
    history.push("/cart");
  };

  const handleLike = () => {
    //Redux action "Like"
    console.log("like");
  };

  return (
    <Actions>
      {/* <Like>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      </Like> */}
      <Quantity
        value={count}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      <button onClick={handleAddToCart}>Add to cart</button>
    </Actions>
  );
};

const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  user-select: none;

  button {
    cursor: pointer;
    border-radius: 4rem;
    font-size: 1.8rem;
    font-weight: 600;
    height: 5.4rem;
    background: var(--purple);
    color: #ffffff;
    padding: 0 4rem;
    white-space: nowrap;
    border: none;

    :hover {
      background: var(--purple-hover);
    }
  }
`;

const Like = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  height: 5.4rem;
  width: 5.4rem;
  background: var(--gray);
  border-radius: 5.4rem;

  svg {
    height: 2.4rem;
    color: var(--black);
  }

  :hover {
    background: var(--gray-mid);
    svg {
      color: var(--purple);
    }
  }
`;
