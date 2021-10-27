import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Navbar: React.FC<{}> = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setShow(window.pageYOffset > 80);
  };

  return (
    <MainContainer sticky={show}>
      <Container sticky={show}>
        <img src="./logo512.png" alt="" width="44px" />
        <h1>Logo</h1>
        <input type="text" placeholder="Search items..." />
        <Icons>
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
      </Container>
    </MainContainer>
  );
};

export default Navbar;

const MainContainer = styled.nav<{ sticky: Boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  transition: all 450ms ease;
  box-shadow: ${(props) =>
    props.sticky ? "34px 34px 74px 0 rgb(56 50 124 / 8%)" : "none"};
  -webkit-box-shadow: ${(props) =>
    props.sticky ? "34px 34px 74px 0 rgb(56 50 124 / 8%)" : "none"};
  -moz-box-shadow: ${(props) =>
    props.sticky ? "34px 34px 74px 0 rgb(56 50 124 / 8%)" : "none"};
  background-color: ${(props) => (props.sticky ? "#ffffff" : "transparent")};
`;

const Container = styled.div<{ sticky: Boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 126rem;
  margin: 0 auto;
  height: 10rem;

  h1 {
    font-size: 3rem;
    margin: 0;
    padding-left: 1rem;
  }

  input {
    flex-grow: 1;
    height: 4.4rem;
    padding: 0rem 2rem;
    border-radius: 5rem;
    border: none;
    margin-left: 2rem;
    background: ${(props) => (props.sticky ? "var(--gray)" : "#ffffff")};
    transition: all 450ms ease;

    :focus {
      outline: none;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  svg {
    margin-left: 2rem;
    width: 2.4rem;
    height: 2.4rem;
  }
`;
