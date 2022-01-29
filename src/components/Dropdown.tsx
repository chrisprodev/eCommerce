import React, { useState } from "react";
import styled from "styled-components";

interface props {
  value: string;
  list: { id: number; name: string }[];
  onSetOption: (id: number) => void;
}

const Dropdown: React.FC<props> = ({ value, list, onSetOption }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <MainContainer
      onClick={() => setShowDropdown(!showDropdown)}
      open={showDropdown}
    >
      <p>{value}</p>
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
              <li onClick={() => onSetOption(element.id)} key={element.id}>
                {element.name}
              </li>
            ))}
          </ul>
        </DropdownMenu>
      )}
    </MainContainer>
  );
};

export default Dropdown;

const MainContainer = styled.div<{ open: boolean }>`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 16rem;
  height: 4.5rem;
  padding: 0 1.6rem;
  border-style: solid;
  border-width: 2px;
  border-color: ${(props) =>
    props.open ? " rgba(100, 83, 247, 0.7)" : "var(--gray)"};
  border-radius: 1rem;
  transition: all 150ms ease;

  box-shadow: ${(props) =>
    props.open
      ? " 0px 1px 1px rgba(100, 83, 247, 0.3), 0px 3px 6px rgba(100, 83, 247, 0.05), 0 0 0 3px rgba(100, 83, 247, 0.3)"
      : "none"};

  :hover {
    border-color: rgba(100, 83, 247, 0.7);
  }

  p {
    font-size: 1.6rem;
    font-weight: 600;
    margin: 0;
  }

  svg {
    transition: all 400ms ease;
    transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
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
  width: 19rem;
  white-space: pre-wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;

  box-shadow: 34px 34px 74px 0 rgb(56 50 124 / 8%);
  -webkit-box-shadow: 34px 34px 74px 0 rgb(56 50 124 / 8%);
  -moz-box-shadow: 34px 34px 74px 0 rgb(56 50 124 / 8%);

  ul {
    margin: 0;
    padding: 0rem 0;
    list-style: none;

    li {
      font-size: 1.6rem;
      font-weight: 600;
      padding-left: 1.6rem;
      line-height: 4.6rem;

      :hover {
        color: var(--purple);
        background: var(--gray-mid);
      }
    }
  }
`;
