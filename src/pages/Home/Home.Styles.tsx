import styled from "styled-components";
import { motion } from "framer-motion";

export const Header = styled(motion.header)`
  height: 80rem;
  background-color: #000;
  display: flex;
  align-items: center;
`;

export const Hero = styled(motion.div)`
  width: 100%;
  max-width: 126rem;
  margin: 0 auto;
  padding-top: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeroDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 22rem;
    margin-bottom: 3rem;
  }

  h1 {
    font-size: 3.2rem;
    line-height: 4.4rem;
    font-weight: 600;
    text-align: center;
    color: #ffffff;

    span {
      display: block;
    }
  }

  a {
    color: #ffffff;
    background: var(--purple);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5.4rem;
    font-weight: 500;
    height: 4.4rem;
    width: 14rem;
    font-size: 1.8rem;
    margin-top: 3.6rem;
    transition: all 150ms cubic-bezier(0.165, 0.84, 0.44, 1);

    :hover {
      background: var(--purple-hover);
    }
  }
`;

export const FeatContainer = styled(motion.section)`
  max-width: 126rem;
  margin: 0 auto;
  padding-top: 19rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1280px) {
    padding-top: 10rem;
  }
`;

export const Features = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12rem;
  width: 90%;

  @media screen and (max-width: 1280px) {
    flex-direction: column;
    margin-top: 6rem;
  }
`;

export const Feat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 6rem;
    background: var(--gray-mid);
    border-radius: 6rem;

    svg {
      width: 3rem;
      height: 3rem;
      color: var(--purple);
    }
  }

  h4 {
    margin-bottom: 0;
    margin-top: 4.5rem;
    font-size: 2.4rem;
    font-weight: 600;
  }

  p {
    color: var(--black-mid);
    margin-bottom: 0;
    margin-top: 2.4rem;
    font-size: 2rem;
    line-height: 3.2rem;
    text-align: center;
    max-width: 28rem;
  }

  @media screen and (max-width: 1280px) {
    margin-bottom: 8rem;

    h4 {
      margin-top: 3.6rem;
      font-size: 2.2rem;
    }

    p {
      margin-top: 2rem;
      font-size: 1.8rem;
      line-height: 3rem;
    }
  }
`;

export const Testimonials = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 68rem;
  margin-top: 19rem;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  background: var(--gray);

  @media screen and (max-width: 1280px) {
    margin-top: 0rem;
    height: 57rem;
  }
`;

export const Testimonial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 9rem;

  h5 {
    margin-bottom: 0;
    margin-top: 4.5rem;
    font-size: 2.4rem;
    font-weight: 600;
  }

  p {
    color: var(--black-mid);
    margin-bottom: 0;
    margin-top: 2.4rem;
    font-size: 2rem;
    line-height: 3.2rem;
    text-align: center;
    max-width: 49rem;
  }

  @media screen and (max-width: 1280px) {
    margin-top: 6rem;

    h5 {
      margin-top: 2.4rem;
      font-size: 2rem;
    }

    p {
      font-size: 1.8rem;
      line-height: 2.8rem;
      padding: 0 3rem;
    }
  }
`;

export const NavButtons = styled.div`
  display: flex;
  margin-top: 9rem;

  span {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 2px black;
    width: 4.7rem;
    height: 4.7rem;
    border-radius: 5rem;

    :hover {
      border-color: var(--purple);
      svg {
        path {
          stroke: var(--purple);
        }
      }
    }
  }

  span:last-child {
    margin-left: 1.8rem;
  }
`;
