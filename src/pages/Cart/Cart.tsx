import React from "react";
import * as Styles from "./Cart.Styles";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fadeUp } from "../../constants/animations";
import { AnimatePresence } from "framer-motion";
import {
  removeFromCart,
  resetCart,
  selectItems,
  selectTotalPrice,
} from "../../features/app/appSlice";

const Cart: React.FC = () => {
  const items = useAppSelector(selectItems);
  const total = useAppSelector(selectTotalPrice);
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(resetCart());
  };

  const handleRemoveItem = (itemID: string) => {
    dispatch(removeFromCart(itemID));
  };

  return (
    <>
      <Styles.Header
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeUp}
      >
        <h2>Shopping Cart</h2>
        {items.length > 0 && (
          <button onClick={handleClearCart}>Clear all</button>
        )}
      </Styles.Header>
      <Styles.CartWrapper initial="initial" animate="animate" exit="exit">
        <AnimatePresence>
          {items.length > 0 ? (
            <>
              <Styles.CartItems variants={fadeUp}>
                {items.map((item) => (
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
            </>
          ) : (
            <Styles.EmptyCart variants={fadeUp}>
              <svg
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 202.61 180.98"
              >
                <ellipse
                  cx="101.31"
                  cy="170.6"
                  rx="101.31"
                  ry="10.37"
                  style={{ fill: "#f6f7fb" }}
                />
                <path
                  d="M173.71,44.41H51a10,10,0,0,0-10,9.64L33.73,170a10,10,0,0,0,10,10.38H181A10,10,0,0,0,191,170L183.71,54.05A10,10,0,0,0,173.71,44.41Z"
                  transform="translate(-11.55 -9.76)"
                  style={{ fill: "#6453f7" }}
                />
                <path
                  d="M148.74,49.41C144,28.8,129.37,13.76,112,13.76s-32,15-36.75,35.65Z"
                  transform="translate(-11.55 -9.76)"
                  style={{
                    fill: "none",
                    stroke: "#6453f7",
                    strokeWidth: "8px",
                  }}
                />
                <circle
                  cx="73.68"
                  cy="90.55"
                  r="5.41"
                  style={{ fill: "#fff" }}
                />
                <circle
                  cx="126.68"
                  cy="90.55"
                  r="5.41"
                  style={{ fill: "#fff" }}
                />
                <path
                  d="M96.09,130.91c2-6.07,7.83-10.6,16.26-10.6s15.91,4.64,17.27,10.6"
                  transform="translate(-11.55 -9.76)"
                  style={{
                    fill: "none",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "5px",
                  }}
                />
              </svg>
              <h4>Oops! Your cart is empty!</h4>
              <p>Looks like you haven't added anything to your cart yet</p>
              <Link to="/products">Shop Now</Link>
            </Styles.EmptyCart>
          )}
        </AnimatePresence>
      </Styles.CartWrapper>
    </>
  );
};

export default Cart;
