import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Product from "../../components/Product";
import { fadeUp } from "../../constants/animations";
import { EmptyCart } from "../Cart/Cart.Styles";
import { useAppSelector } from "../../store/hooks";
import { productInterface } from "../../models/Products";
import { selectResults } from "../../features/app/appSlice";
import { ProductsWrapper } from "./Results.Styles";

const Results: React.FC = () => {
  const products: productInterface[] | undefined =
    useAppSelector(selectResults);

  return (
    <AnimatePresence exitBeforeEnter>
      <ProductsWrapper
        displayGrid={products && products.length > 0 ? true : false}
      >
        {products && products.length > 0 ? (
          products.map((product) => (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={fadeUp}
            >
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                img={product.images[0]}
                price={product.price}
              />
            </motion.div>
          ))
        ) : (
          <EmptyCart>
            <h4>Oops... there is no results!</h4>
            <p>
              There are no items to display in this section, please try another
              category.
            </p>
          </EmptyCart>
        )}
      </ProductsWrapper>
    </AnimatePresence>
  );
};

export default Results;
