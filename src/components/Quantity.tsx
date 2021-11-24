import React from "react";
import styled from "styled-components";

interface Props {
  onIncrement: () => void;
  onDecrement: () => void;
  value: number;
}

export const Quantity: React.FC<Props> = ({
  value,
  onIncrement,
  onDecrement,
}) => {
  return (
    <Wrapper>
      <svg
        onClick={onDecrement}
        xmlns="http://www.w3.org/2000/svg"
        width="8.667"
        height="14.505"
        viewBox="0 0 8.667 14.505"
      >
        <path
          id="Path_6"
          data-name="Path 6"
          d="M2873.674,517.191l5.839,5.839,5.838-5.839"
          transform="translate(524.444 -2872.26) rotate(90)"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
      <p>{value}</p>
      <svg
        onClick={onIncrement}
        xmlns="http://www.w3.org/2000/svg"
        width="8.667"
        height="14.505"
        viewBox="0 0 8.667 14.505"
      >
        <path
          id="Path_7"
          data-name="Path 7"
          d="M2873.674,517.191l5.839,5.839,5.838-5.839"
          transform="translate(-515.777 2886.765) rotate(-90)"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.span`
  svg {
    cursor: pointer;
    :hover {
      color: var(--purple);
    }
  }

  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  font-size: 2.4rem;
  font-weight: 600;
  height: 5.4rem;
  background: var(--gray);
  border-radius: 4rem;
  padding: 0 2.4rem;

  p {
    margin: 0 4rem;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }
`;
