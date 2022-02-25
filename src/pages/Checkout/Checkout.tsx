import React, { useEffect } from "react";
import * as Styles from "./Checkout.Styles";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link, useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Size } from "../../models/Hooks";
import MobileMenu from "../../components/MobileMenu";
import PaymentForm from "../../components/PaymentForm";
import {
  removeFromCart,
  selectItems,
  selectTotalPrice,
  showMenu,
} from "../../features/app/appSlice";

const Checkout: React.FC = () => {
  const items = useAppSelector(selectItems);
  const total = useAppSelector(selectTotalPrice);
  const dispatch = useAppDispatch();
  const menuStatus = useAppSelector(showMenu);
  const size: Size = useWindowSize();
  let history = useHistory();

  useEffect(() => {
    items.length === 0 && history.push("/cart");
  });

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
            <PaymentForm total={total} />
          </Styles.CartWrapper>
          <Footer />
        </>
      )}
    </>
  );
};

export default Checkout;
