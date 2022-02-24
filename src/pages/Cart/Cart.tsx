import React from "react";
import * as Styles from "./Cart.Styles";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  removeFromCart,
  resetCart,
  selectItems,
  selectTotalPrice,
  showMenu,
} from "../../features/app/appSlice";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Size } from "../../models/Hooks";
import MobileMenu from "../../components/MobileMenu";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "../../constants/animations";

const Cart: React.FC = () => {
  const items = useAppSelector(selectItems);
  const total = useAppSelector(selectTotalPrice);
  const dispatch = useAppDispatch();
  const menuStatus = useAppSelector(showMenu);
  const size: Size = useWindowSize();

  const handleClearCart = () => {
    dispatch(resetCart());
  };

  const handleRemoveItem = (itemID: string) => {
    dispatch(removeFromCart(itemID));
  };

  return (
    <>
      <Navbar />
      {size && size.width && size.width < 1280 && menuStatus ? (
        <MobileMenu />
      ) : (
        <>
          <Styles.Header
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeUp}
          >
            <h2>Shopping Cart</h2>
            <button onClick={handleClearCart}>Clear all</button>
          </Styles.Header>
          <Styles.CartWrapper initial="initial" animate="animate" exit="exit">
            <Styles.CartItems variants={fadeUp}>
              {items &&
                items.map((item) => (
                  <Styles.Item key={item.productID}>
                    <Link to={`/product/${item.productID}`}>
                      <img
                        src={item.image}
                        alt={item.productName}
                        width="144"
                        height="144"
                      />
                    </Link>
                    <Styles.ItemDesc>
                      <h5>{item.productName}</h5>
                      <Styles.Price>{`$${
                        item.quantity * item.price
                      }`}</Styles.Price>
                      <Styles.Quantiy>{`QTY: ${item.quantity}`}</Styles.Quantiy>
                      <Styles.RemoveBtn
                        onClick={() => handleRemoveItem(item.productID)}
                      >
                        Remove
                      </Styles.RemoveBtn>
                    </Styles.ItemDesc>
                    <Styles.DeleteIcon
                      onClick={() => handleRemoveItem(item.productID)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </Styles.DeleteIcon>
                  </Styles.Item>
                ))}
            </Styles.CartItems>
            <Styles.CartDetailsWrap variants={fadeUp}>
              <Styles.CartDetails>
                <h5>Cart Total</h5>
                <Styles.Subtotal>
                  <span>Subtotal:</span>
                  <span>{`$${total}`}</span>
                </Styles.Subtotal>
                <Styles.Subtotal>
                  <span>Shipping:</span>
                  <span>$0</span>
                </Styles.Subtotal>
                <Styles.Total>
                  <span>Total:</span>
                  <span>{`$${total}`}</span>
                </Styles.Total>
                <div>
                  <Link className="cart-details__checkout-btn" to="/checkout">
                    Checkout
                  </Link>
                </div>
              </Styles.CartDetails>
            </Styles.CartDetailsWrap>
          </Styles.CartWrapper>
          <Footer />
        </>
      )}
    </>
  );
};

export default Cart;
