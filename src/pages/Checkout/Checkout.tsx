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
  showMenu,
} from "../../features/app/appSlice";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Size } from "../../models/Hooks";
import MobileMenu from "../../components/MobileMenu";

const Checkout: React.FC = () => {
  const items = useAppSelector(selectItems);
  const total = useAppSelector(selectTotalPrice);
  const dispatch = useAppDispatch();
  const menuStatus = useAppSelector(showMenu);
  const size: Size = useWindowSize();

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
          <Styles.Header>
            <h2>Checkout</h2>
          </Styles.Header>
          <Styles.CartWrapper>
            <Styles.CartItems>
              <h5>My cart</h5>
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
                    <Styles.Price>{`$${
                      item.quantity * item.price
                    }`}</Styles.Price>
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
              <h5>Payment info</h5>
              <span className="payment__method-title">Payment method</span>
              <ul>
                <li>Credit card</li>
                <li>Paypal</li>
              </ul>
              <p className="payment__name">Email</p>
              <Styles.PaymentInput
                type="text"
                name="email"
                aria-invalid="false"
                aria-required="true"
                value=""
              />
              <p className="payment__card-number">Card number</p>
              <Styles.PaymentInput
                type="text"
                name="number"
                placeholder="1234 1234 1234 1234"
                aria-invalid="false"
                aria-required="true"
                value=""
              />
              <Styles.Column>
                <Styles.Row>
                  <p className="payment__exp-date">Expiry</p>
                  <Styles.PaymentInput
                    type="text"
                    name="number"
                    placeholder="MM/YY"
                    aria-invalid="false"
                    aria-required="true"
                    value=""
                  />
                </Styles.Row>
                <Styles.Row>
                  <p className="payment__card-number">CVC</p>
                  <Styles.PaymentInput
                    type="text"
                    name="text"
                    placeholder="CVC"
                    aria-invalid="false"
                    aria-required="true"
                    value=""
                  />
                </Styles.Row>
              </Styles.Column>
              <button>{`Pay $${total}`}</button>
            </Styles.PaymentInfo>
          </Styles.CartWrapper>
          <Footer />
        </>
      )}
    </>
  );
};

export default Checkout;
