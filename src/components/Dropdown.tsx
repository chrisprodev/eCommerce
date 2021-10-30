import React, { useState } from "react";
import styled from "styled-components";

interface props {
  title: string;
  list: { id: number; name: string }[];
}

const Dropdown: React.FC<props> = ({ title, list }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <MainContainer onClick={() => setShowDropdown(!showDropdown)}>
      <p>{title}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14.505"
        height="8.667"
        viewBox="0 0 14.505 8.667"
      >
        <path
          id="Path_5"
          data-name="Path 5"
          d="M2873.674,517.191l5.839,5.839,5.838-5.839"
          transform="translate(-2872.26 -515.777)"
          fill="none"
          stroke="#010101"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
      {showDropdown && (
        <DropdownMenu>
          <ul>
            {list.map((element) => (
              <li key={element.id}>{element.name}</li>
            ))}
          </ul>
        </DropdownMenu>
      )}
    </MainContainer>
  );
};

export default Dropdown;

const MainContainer = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 16rem;
  height: 6.4rem;
  padding: 0 3rem;
  border: solid 2px var(--gray);
  border-radius: 5rem;

  p {
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
  }

  svg {
    margin-top: 0.5rem;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 7.5rem;
  left: 0;
  background: white;
  border: solid 2px var(--gray);
  border-radius: 1rem;
  width: 22.4rem;
  white-space: pre-wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;

  box-shadow: 34px 34px 74px 0 rgb(56 50 124 / 8%);
  -webkit-box-shadow: 34px 34px 74px 0 rgb(56 50 124 / 8%);
  -moz-box-shadow: 34px 34px 74px 0 rgb(56 50 124 / 8%);

  ul {
    margin: 0;
    padding: 1rem 0;
    list-style: none;

    li {
      font-size: 2rem;
      font-weight: 600;
      padding-left: 3rem;
      line-height: 4rem;
      :hover {
        color: var(--blue);
      }
    }
  }
`;
