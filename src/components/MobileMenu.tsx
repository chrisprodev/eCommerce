import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { showMenu, showMobileMenu } from "../features/app/appSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { categories as categoriesData } from "../constants/mockData";

const MobileMenu: React.FC<{}> = () => {
  const menuStatus = useAppSelector(showMenu);
  const dispatch = useAppDispatch();
  const [categories, openCategories] = useState(false);

  return (
    <Wrapper menu={menuStatus}>
      <BlockOne>
        <input
          className="navbar__search"
          type="text"
          placeholder="Search items..."
        />
        <CategoryMenu
          onClick={() => openCategories(!categories)}
          open={categories}
        >
          <span>Categories</span>
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </CategoryMenu>
        <CategoryList open={categories}>
          {categoriesData.map((cat) => (
            <Link to="/products" onClick={() => dispatch(showMobileMenu())}>
              {cat.name}
            </Link>
          ))}
        </CategoryList>
        <Link to="/cart" onClick={() => dispatch(showMobileMenu())}>
          Cart
        </Link>
      </BlockOne>
      <BlockTwo>
        <span>Facebook</span>
        <span>Instagram</span>
        <span>Twitter</span>
      </BlockTwo>
    </Wrapper>
  );
};

export default MobileMenu;

const Wrapper = styled.div<{ menu: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  padding-top: 80px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;

  .navbar__search {
    height: 7rem;
    padding: 0rem 3rem;
    border: none;
    background: var(--gray);
    border-top: solid 2px var(--gray-mid);
    border-bottom: solid 2px var(--gray-mid);
    font-size: 1.8rem;

    :focus {
      outline: none;
    }
  }

  a {
    font-size: 2.4rem;
    margin: 3rem 3rem 0rem 3rem;
    font-weight: 500;
    :hover {
      color: var(--blue);
    }
  }

  a:last-child {
    margin-bottom: 3rem;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

const BlockOne = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryList = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  padding-left: 2rem;
`;

const CategoryMenu = styled.div<{ open: boolean }>`
  display: flex;
  justify-content: space-between;
  margin: 3rem 3rem 0rem 3rem;
  user-select: none;
  cursor: pointer;

  span {
    font-size: 2.4rem;
    font-weight: 500;
  }

  svg {
    width: 2rem;
    height: auto;
    transition: all 200ms ease;
    transform: ${({ open }) => (open ? "rotate(0)" : "rotate(-90deg)")};
  }
  :hover {
    color: var(--blue);
  }
`;

const BlockTwo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4rem 2rem 3rem;

  span {
    font-size: 1.8rem;
    font-weight: 500;
    color: #c7c7c7;
  }
`;
