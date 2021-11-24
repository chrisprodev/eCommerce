import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RelatedProducts from "../../components/RelatedProducts";
import { productsData } from "../../constants/mockData";
import { ProductActions } from "../../components/ProductActions";

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
              <li key={feat.id}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                >
                  <circle
                    id="Ellipse_30"
                    data-name="Ellipse 30"
                    cx="7"
                    cy="7"
                    r="7"
                    fill="currentColor"
                  />
                </svg>

                {feat.description}
              </li>
            ))}
          </ul>
          <Note>
            All of out products go through very stric inspection before we
            dispatch them.
          </Note>
          <ProductActions
            id={id}
            name={productsData[0].name}
            price={productsData[0].price}
          />
        </Details>
      </Header>
      {/* Features */}
      <FeatContainer>
        {productsData[0].featules?.map((feat) => (
          <Feat>
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
  padding-top: 16rem;
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
`;

const Note = styled.p`
  font-size: 1.6rem;
  line-height: 2.8rem;
  color: var(--purple);
`;

const Price = styled.p`
  margin: 0;
  padding-top: 2rem;
  font-size: 2.4rem;
  font-weight: 600;
`;

const Category = styled.span`
  margin-bottom: 1rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  height: 3.4rem;
  background: var(--gray-mid);
  color: var(--purple);
  border-radius: 6rem;
  padding: 0 2rem;
  text-transform: uppercase;
  font-weight: 700;
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
`;
