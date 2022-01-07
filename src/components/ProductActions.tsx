import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { addToCart } from "../features/app/appSlice";
import { useAppDispatch } from "../store/hooks";
import { Quantity } from "./Quantity";
interface Props {
  id: string;
  image: string;
  name: string;
  price: number;
}

export const ProductActions: React.FC<Props> = ({ id, image, name, price }) => {
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
        image: image,
        productName: name,
        quantity: count,
        price: price,
      })
    );
    history.push("/cart");
  };

  return (
    <Actions>
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
