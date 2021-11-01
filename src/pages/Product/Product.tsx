import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RelatedProducts from "../../components/RelatedProducts";

interface productParams {
  id: string;
}

const Product: React.FC = () => {
  const { id } = useParams<productParams>();

  const features = [1, 2, 3, 4];

  return (
    <React.Fragment>
      <Navbar />
      <Header>
        <Images>
          <Thumbnails>
            <span></span>
            <span></span>
            <span></span>
          </Thumbnails>
          <MainImage></MainImage>
        </Images>
        <Details>
          <h1>Product Name</h1>
          <div>
            <Category>Category</Category>
          </div>
          <Price>$499</Price>
          <ul>
            <li>Feature #1</li>
            <li>Feature #2</li>
            <li>Feature #3</li>
          </ul>
          <Actions>
            <span>.</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8.667"
                height="14.505"
                viewBox="0 0 8.667 14.505"
              >
                <path
                  id="Path_6"
                  data-name="Path 6"
                  d="M2873.674,517.191l5.839,5.839,5.838-5.839"
                  transform="translate(524.444 -2872.26) rotate(90)"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </svg>
              <p>12</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8.667"
                height="14.505"
                viewBox="0 0 8.667 14.505"
              >
                <path
                  id="Path_7"
                  data-name="Path 7"
                  d="M2873.674,517.191l5.839,5.839,5.838-5.839"
                  transform="translate(-515.777 2886.765) rotate(-90)"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <button>Add to cart</button>
          </Actions>
        </Details>
      </Header>
      {/* Features */}
      <FeatContainer>
        {features.map((feat) => (
          <Feat>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
            >
              <circle
                id="Ellipse_15"
                data-name="Ellipse 15"
                cx="30"
                cy="30"
                r="30"
                fill="#f6f7fb"
              />
            </svg>
            <FeatDetail>
              <h4>Natural</h4>
              <p>
                All of out products go through very strict inspection before we
                dispatch them.
              </p>
            </FeatDetail>
          </Feat>
        ))}
      </FeatContainer>
      {/* Related Products Carousel */}
      <RelatedProducts />
      <Footer />
    </React.Fragment>
  );
};

export default Product;

const Header = styled.header`
  display: flex;
  align-items: center;
  max-width: 126rem;
  margin: 0 auto;
  padding-top: 30rem;
`;

const Images = styled.div`
  display: flex;
`;

const Thumbnails = styled.div`
  display: flex;
  flex-direction: column;

  span {
    width: 15.2rem;
    height: 15.2rem;
    border-radius: 1rem;
    background: var(--gray);
    margin-top: 2.4rem;
  }
  span:first-child {
    margin-top: 0;
  }
`;

const MainImage = styled.div`
  width: 50.4rem;
  height: 50.4rem;
  border-radius: 1rem;
  background: var(--gray);
  margin-left: 2.4rem;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7.4rem;
  h1 {
    font-size: 4rem;
  }

  ul {
    margin: 2rem 0 0 0;
    padding: 0;
    list-style: none;

    li {
      font-size: 2.2rem;
      line-height: 3.6rem;
    }
  }
`;

const Price = styled.p`
  margin: 0;
  padding-top: 2rem;
  font-size: 3.4rem;
  font-weight: 600;
`;

const Category = styled.span`
  margin-top: 2rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  height: 5rem;
  background: var(--light-blue);
  color: var(--blue);
  border-radius: 6rem;
  padding: 0 4rem;
  text-transform: uppercase;
  font-weight: 700;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  user-select: none;

  svg {
    cursor: pointer;
    :hover {
      color: var(--blue);
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
    font-size: 2.4rem;
    font-weight: 600;
    height: 5.4rem;
    border: solid 2px var(--gray);
    border-radius: 4rem;
    padding: 0 2.4rem;

    p {
      margin: 0 4rem;
      font-size: 2rem;
      font-weight: 700;
      text-align: center;
    }
  }

  button {
    cursor: pointer;
    border-radius: 4rem;
    font-size: 2rem;
    font-weight: 600;
    height: 5.4rem;
    background: var(--black);
    color: #ffffff;
    padding: 0 4rem;
    white-space: nowrap;
    border: none;
  }
`;

const FeatContainer = styled.section`
  max-width: 126rem;
  margin: 0 auto;
  columns: 2 auto;
  margin-top: 10rem;
`;

const Feat = styled.div`
  padding-top: 8rem;
  display: flex;
  svg {
    margin-right: 3.2rem;
  }
`;

const FeatDetail = styled.div`
  h4 {
    margin: 0;
    font-size: 2.6rem;
    font-weight: 600;
  }
  p {
    font-size: 2rem;
    line-height: 3.2rem;
    max-width: 50rem;
  }
`;
