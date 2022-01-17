import React from "react";
import * as Styles from "./Checkout.Styles";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  removeFromCart,
  selectItems,
  selectTotalPrice,
} from "../../features/app/appSlice";

const Checkout: React.FC = () => {
  const items = useAppSelector(selectItems);
  const total = useAppSelector(selectTotalPrice);
  const dispatch = useAppDispatch();

  const handleRemoveItem = (itemID: string) => {
    dispatch(removeFromCart(itemID));
  };

  return (
    <React.Fragment>
      <Navbar />
      <Styles.Header>
        <h2>Checkout</h2>
      </Styles.Header>
      <Styles.CartWrapper>
        <Styles.CartItems>
          <h5>My Cart</h5>
          {items.map((item) => (
            <Styles.Item>
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
                <Styles.Price>{`$${item.quantity * item.price}`}</Styles.Price>
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
        </Styles.CartItems>
        <Styles.PaymentInfo>
          <h5>Payment Info</h5>
          <span className="payment__method-title">Payment Method</span>
          <ul>
            <li>Credit Card</li>
            <li>Paypal</li>
          </ul>
          <p className="payment__name">Full Name</p>
          <p className="payment__card-number">Card Number</p>
          <p className="payment__exp-date">Expiration Date</p>
          <button>{`Pay $${total}`}</button>
        </Styles.PaymentInfo>
        {/* <Styles.CartDetailsWrap>
          <Styles.CartDetails>
            <h5>Details</h5>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
            <div>
              <Link className="cart-details__continue-btn" to="/">
                Continue
              </Link>
              <Link className="cart-details__guest-btn" to="/">
                Guest Checkout
              </Link>
            </div>
          </Styles.CartDetails>
        </Styles.CartDetailsWrap> */}
      </Styles.CartWrapper>
      <Footer />
    </React.Fragment>
  );
};

export default Checkout;
