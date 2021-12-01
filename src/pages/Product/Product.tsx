import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RelatedProducts from "../../components/RelatedProducts";
import { ProductActions } from "../../components/ProductActions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchProduct, selectProduct } from "../../features/app/appSlice";
import ProductImages from "../../components/ProductImages";

interface productParams {
  id: string;
}

const Product: React.FC = () => {
  const { id } = useParams<productParams>();
  const dispatch = useAppDispatch();
  const productData = useAppSelector(selectProduct);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id, dispatch]);

  return (
    <React.Fragment>
      <Navbar />
      <Header>
        {productData && (
          <>
            <ProductImages images={productData.images} />
            <Details>
              <div>
                <Category>{productData.category}</Category>
              </div>
              <h1>{productData.name}</h1>
              <Price>${productData.price}</Price>
              <ul>
                {productData.mainFeatures.map((feat, i) => (
                  <li key={i}>
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
                    {feat}
                  </li>
                ))}
              </ul>
              <Note>
                All of out products go through very stric inspection before we
                dispatch them.
              </Note>
              <ProductActions
                id={id}
                name={productData.name}
                price={productData.price}
              />
            </Details>
          </>
        )}
      </Header>
      {/* Features */}
      <FeatContainer>
        {productData &&
          productData.features?.map((feat) => (
            <Feat key={feat.title}>
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
