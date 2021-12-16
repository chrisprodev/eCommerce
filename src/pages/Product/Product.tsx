import React, { useEffect } from "react";
import * as Styles from "./Product.Styles";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RelatedProducts from "../../components/RelatedProducts";
import { ProductActions } from "../../components/ProductActions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchProduct,
  resetProduct,
  selectProduct,
} from "../../features/app/appSlice";
import ProductImages from "../../components/ProductImages";
interface productParams {
  id: string;
}

const Product: React.FC = () => {
  const { id } = useParams<productParams>();
  const dispatch = useAppDispatch();
  const productData = useAppSelector(selectProduct);

  useEffect(() => {
    dispatch(resetProduct());
    dispatch(fetchProduct(id));
  }, [id, dispatch]);

  return (
    <React.Fragment>
      <Navbar />
      <Styles.Header>
        {productData && (
          <>
            <ProductImages images={productData.images} />
            <Styles.Details>
              <div>
                <Styles.Category>{productData.category}</Styles.Category>
              </div>
              <h1>{productData.name}</h1>
              <Styles.Price>${productData.price}</Styles.Price>
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
              <Styles.Note>
                All of out products go through very stric inspection before we
                dispatch them.
              </Styles.Note>
              <ProductActions
                id={id}
                image={productData.images[0]}
                name={productData.name}
                price={productData.price}
              />
            </Styles.Details>
          </>
        )}
      </Styles.Header>
      {/* Features */}
      <Styles.FeatContainer>
        {productData &&
          productData.features?.map((feat) => (
            <Styles.Feat key={feat.title}>
              <Styles.FeatDetail>
                <h4>{feat.title}</h4>
                <p>{feat.description}</p>
              </Styles.FeatDetail>
            </Styles.Feat>
          ))}
      </Styles.FeatContainer>
      {/* Related Products Carousel */}
      <RelatedProducts />
      <Footer />
    </React.Fragment>
  );
};

export default Product;
