import styled from "styled-components";
import { motion } from "framer-motion";

export const Header = styled(motion.header)`
  display: flex;
  align-items: center;
  max-width: 126rem;
  margin: 0 auto;
  padding-top: 16rem;

  .header-wrapper {
    display: flex;

    @media screen and (max-width: 1280px) {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 1280px) {
    max-width: 58rem;
  }

  @media screen and (max-width: 640px) {
    padding-top: 12rem;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7.4rem;

  h1 {
    font-size: 3.2rem;
  }

  ul {
    margin: 3rem 0 0 0;
    padding: 0 0 0 0rem;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      color: var(--black-mid);
      font-size: 2rem;
      line-height: 3.6rem;

      svg {
        height: 1rem;
        margin-right: 1rem;
      }
    }
  }

  @media screen and (max-width: 1280px) {
    margin-left: 0;
    margin-top: 5rem;
    padding: 0 3rem;

    h1 {
      font-size: 2.4rem;
    }

    ul {
      li {
        font-size: 1.6rem;
        line-height: 2.8rem;

        svg {
          height: 0.8rem;
        }
      }
    }
  }
`;

export const Note = styled.p`
  font-size: 1.6rem;
  line-height: 2.8rem;
  color: var(--purple);

  @media screen and (max-width: 1280px) {
    font-size: 1.4rem;
    line-height: 2.6rem;
  }
`;

export const Price = styled.p`
  margin: 0;
  padding-top: 2rem;
  font-size: 2.4rem;
  font-weight: 600;

  @media screen and (max-width: 1280px) {
    font-size: 2.2rem;
  }
`;

export const Category = styled.span`
  margin-bottom: 2rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  height: 3.4rem;
  background: var(--gray-mid);
  color: var(--purple);
  border-radius: 0.5rem;
  padding: 0 2rem;
  text-transform: uppercase;
  font-weight: 700;
`;

export const FeatContainer = styled.section`
  max-width: 126rem;
  margin: 0 auto;
  margin-top: 10rem;
  margin-bottom: 10rem;
  padding: 0 3rem;

  @media screen and (max-width: 1280px) {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;

export const Feat = styled.div`
  display: flex;
  padding-top: 8rem;

  svg {
    width: 6rem;
    height: 6rem;
  }

  @media screen and (max-width: 1280px) {
    padding-top: 6rem;
  }
`;

export const FeatDetail = styled.div`
  h4 {
    margin: 0;
    font-size: 2.4rem;
    font-weight: 600;
  }
  p {
    color: var(--black-mid);
    font-size: 2rem;
    line-height: 3.2rem;
  }

  @media screen and (max-width: 1280px) {
    max-width: 54rem;
    margin: 0 auto;

    h4 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1.8rem;
      line-height: 3rem;
    }
  }
`;
