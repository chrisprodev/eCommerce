import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { navBarContProps } from "../models/NavBar";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  selectTotalItems,
  showMobileMenu,
  showMenu,
} from "../features/app/appSlice";
import Search from "./Search";

const Navbar: React.FC<{}> = () => {
  const [show, setShow] = useState(false);
  const [animation, setAnimation] = useState(false);
  const dispatch = useAppDispatch();

  const items = useAppSelector(selectTotalItems);
  const menuStatus = useAppSelector(showMenu);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.document.location.pathname === "/") {
      setAnimation(true);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setShow(true);
    }
  }, []);

  const handleScroll = () => {
    setShow(window.pageYOffset > 80);
  };

  return (
    <MainContainer sticky={show} animation={animation}>
      <Container sticky={show} animation={animation}>
        <Link to="/" onClick={() => menuStatus && dispatch(showMobileMenu())}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114 35">
            <text
              id="T-Market"
              transform="translate(0 28)"
              fill="currentColor"
              fontSize="26"
              fontFamily="SegoeUI-Bold, Segoe UI"
              fontWeight="700"
            >
              <tspan y="0" fill="currentColor">
                Market
              </tspan>
            </text>
          </svg>
        </Link>
        <Search sticky={show} animation={animation} />
        <Icons>
          <Link to="/cart">
            <CartContainer>
              {items > 0 && <CartItems>{items}</CartItems>}
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </CartContainer>
          </Link>
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
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Icons>
        <Hamburger
          sticky={show}
          animation={animation}
          menu={menuStatus}
          onClick={() => dispatch(showMobileMenu())}
        >
          <span />
          <span />
        </Hamburger>
      </Container>
    </MainContainer>
  );
};

export default Navbar;

const MainContainer = styled.nav<navBarContProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  transition: all 450ms ease;
  background-color: ${({ sticky }) => (sticky ? "#ffffff" : "transparent")};
  border-bottom: ${({ animation, sticky }) =>
    animation
      ? sticky
        ? "solid 2px var(--gray)"
        : "none"
      : "solid 2px var(--gray)"};
`;

const Container = styled.div<navBarContProps>`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 126rem;
  margin: 0 auto;
  padding: 0 2rem;
  transition: all 450ms ease;
  height: ${({ animation, sticky }) =>
    animation ? (sticky ? "8rem" : "10rem") : "8rem"};

  a {
    display: flex;
    align-items: center;
  }

  h1 {
    font-size: 3rem;
    margin: 0;
    padding-left: 1rem;
  }

  .navbar__search {
    flex-grow: 1;
    height: 4.4rem;
    padding: 0rem 2rem;
    border-radius: 5rem;
    border: none;
    background: ${({ animation, sticky }) =>
      animation ? (sticky ? "var(--gray)" : "#ffffff") : "var(--gray)"};
    transition: background 0.15s ease, border 0.15s ease, box-shadow 0.15s ease,
      color 0.15s ease;

    :focus {
      outline: rgba(100, 83, 247, 1);
      background: #fff;
      box-shadow: 0px 1px 1px rgba(100, 83, 247, 0.3),
        0px 3px 6px rgba(100, 83, 247, 0.05), 0 0 0 3px rgba(100, 83, 247, 0.3);
    }
  }

  svg {
    width: 114px;
    cursor: pointer;
    color: ${({ animation, sticky }) => animation && !sticky && "#ffffff"};
    transition: all 450ms ease;
  }

  @media screen and (max-width: 640px) {
    .navbar__search {
      display: none;
    }
  }

  @media screen and (max-width: 1280px) {
    transition: all 200ms ease;
  }
`;

const Icons = styled.div`
  display: flex;
  svg {
    margin-left: 2rem;
    width: 2.6rem;
    height: 2.6rem;
  }

  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

const CartContainer = styled.div`
  position: relative;
`;

const CartItems = styled.span`
  position: absolute;
  top: -0.5rem;
  right: -1rem;

  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--purple);
  border-radius: 2rem;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
`;

const Hamburger = styled.div<{
  sticky: boolean;
  animation: boolean;
  menu: boolean;
}>`
  cursor: pointer;
  height: 1.6rem;
  display: none;

  span {
    width: 2.8rem;
    height: 0.36rem;
    background: ${({ menu, animation, sticky }) =>
      menu
        ? "var(--black)"
        : animation && !sticky
        ? "#ffffff"
        : "var(--black)"};
    border-radius: 0.2rem;
    transition: all 200ms ease;
    transform-origin: 17.5% center;
  }

  span:first-child {
    transform: ${({ menu }) => (menu ? "rotate(45deg)" : "rotate(0)")};
  }

  span:last-child {
    transform: ${({ menu }) => (menu ? "rotate(-45deg)" : "rotate(0)")};
  }

  @media screen and (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 2rem;
  }

  @media screen and (max-width: 640px) {
    margin-left: 0;
  }
`;
