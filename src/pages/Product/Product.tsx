import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RelatedProducts from "../../components/RelatedProducts";
import { Quantity } from "../../components/Quantity";
import { productsData } from "../../constants/mockData";

interface productParams {
  id: string;
}

const Product: React.FC = () => {
  const { id } = useParams<productParams>();

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
          <div>
            <Category>{productsData[0].category}</Category>
          </div>
          <h1>{productsData[0].name}</h1>
          <Price>${productsData[0].price}</Price>
          <ul>
            {productsData[0].mainFeatures?.map((feat) => (
              <li key={feat.id}>{feat.description}</li>
            ))}
          </ul>
          <Actions>
            <span>.</span>
            <Quantity />
            <Link to="/cart">
              <button>Add to cart</button>
            </Link>
          </Actions>
        </Details>
      </Header>
      {/* Features */}
      <FeatContainer>
        {productsData[0].featules?.map((feat) => (
          <Feat>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                <circle
                  id="Ellipse_15"
                  data-name="Ellipse 15"
                  cx="30"
                  cy="30"
                  r="30"
                  fill="#f6f7fb"
                />
              </svg>
            </div>
            <FeatDetail>
              <h4>{feat.title}</h4>
              <p>{feat.description}</p>
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
    margin: 3rem 0 0 0;
    padding: 0 0 0 2rem;

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
  margin-bottom: 1rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  height: 3.4rem;
  background: var(--light-blue);
  color: var(--blue);
  border-radius: 6rem;
  padding: 0 2rem;
  text-transform: uppercase;
  font-weight: 700;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  user-select: none;

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
  margin-top: 10rem;
`;

const Feat = styled.div`
  padding-top: 8rem;
  display: flex;

  svg {
    width: 6rem;
    height: 6rem;
  }
`;

const FeatDetail = styled.div`
  margin-left: 3.2rem;
  h4 {
    margin: 0;
    font-size: 2.6rem;
    font-weight: 600;
  }
  p {
    font-size: 2rem;
    line-height: 3.2rem;
  }
`;
