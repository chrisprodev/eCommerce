import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { showMenu } from "../features/app/appSlice";
import { useAppSelector } from "../store/hooks";

const MobileMenu: React.FC<{}> = () => {
  const menuStatus = useAppSelector(showMenu);

  return (
    <Wrapper menu={menuStatus}>
      <BlockOne>
        <input
          className="navbar__search"
          type="text"
          placeholder="Search items..."
        />
        <Link to="/products">Categories</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/">Account</Link>
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
