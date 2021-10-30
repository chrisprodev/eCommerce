import styled from "styled-components";

export const Header = styled.header`
  height: 71rem;
  background: var(--gray);
  display: flex;
  align-items: center;
`;

export const Hero = styled.div`
  width: 100%;
  max-width: 126rem;
  margin: 0 auto;
  padding-top: 5rem;

  h1 {
    max-width: 44rem;
    line-height: 5.6rem;
  }

  a {
    color: #ffffff;
    background: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5.4rem;
    height: 5.4rem;
    width: 18rem;
    font-size: 2rem;
    font-weight: 600;
    margin-top: 3.6rem;
    transition: all 150ms cubic-bezier(0.165, 0.84, 0.44, 1);

    :hover {
      background: var(--blue);
    }
  }
`;

export const FeatContainer = styled.section`
  width: 100%;
  max-width: 126rem;
  margin: 0 auto;
  padding-top: 19rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Features = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8rem;
  width: 90%;
`;

export const Feat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    margin-bottom: 0;
    margin-top: 4.5rem;
    font-size: 2.6rem;
    font-weight: 600;
  }

  p {
    margin-bottom: 0;
    margin-top: 2.4rem;
    font-size: 2rem;
    line-height: 3.2rem;
    text-align: center;
    max-width: 27rem;
  }
`;

export const Testimonials = styled.section`
  //width: 100%;
  height: 68rem;
  margin-top: 19rem;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  background: var(--gray);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Testimonial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 9rem;
  h5 {
    margin-bottom: 0;
    margin-top: 4.5rem;
    font-size: 2.6rem;
    font-weight: 600;
  }

  p {
    margin-bottom: 0;
    margin-top: 2.4rem;
    font-size: 2rem;
    line-height: 3.2rem;
    text-align: center;
    max-width: 49rem;
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
      border-color: var(--blue);
      svg {
        path {
          stroke: var(--blue);
        }
      }
    }
  }

  span:last-child {
    margin-left: 1.8rem;
  }
`;
