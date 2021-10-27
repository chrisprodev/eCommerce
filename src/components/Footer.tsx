import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <ContentWrapper>
        <p>Copyright 2021. Developed by Christian Lopez.</p>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <circle
              id="Ellipse_17"
              data-name="Ellipse 17"
              cx="12"
              cy="12"
              r="12"
              fill="#f6f7fb"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <circle
              id="Ellipse_17"
              data-name="Ellipse 17"
              cx="12"
              cy="12"
              r="12"
              fill="#f6f7fb"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <circle
              id="Ellipse_17"
              data-name="Ellipse 17"
              cx="12"
              cy="12"
              r="12"
              fill="#f6f7fb"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <circle
              id="Ellipse_17"
              data-name="Ellipse 17"
              cx="12"
              cy="12"
              r="12"
              fill="#f6f7fb"
            />
          </svg>
        </div>
      </ContentWrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  margin-top: 19rem;
  border-top: solid 2px var(--gray);
`;

const ContentWrapper = styled.div`
  height: 9rem;
  max-width: 126rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 1.6rem;
  }

  svg {
    margin-left: 2rem;
  }
`;
