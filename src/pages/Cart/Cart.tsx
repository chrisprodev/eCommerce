import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  removeFromCart,
  resetCart,
  selectItems,
  selectTotalPrice,
} from "../../features/app/appSlice";
import {
  CartDetails,
  CartDetailsWrap,
  CartItems,
  CartWrapper,
  DeleteIcon,
  Header,
  Item,
  ItemDesc,
  Total,
  Subtotal,
  Price,
} from "./Cart.Styles";

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
    <React.Fragment>
      <Navbar />
      <Header>
        <h2>Shopping Cart</h2>
        <span onClick={handleClearCart}>Clear all</span>
      </Header>
      <CartWrapper>
        <CartItems>
          {items.map((item) => (
            <Item>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="144"
                height="144"
                viewBox="0 0 144 144"
              >
                <rect
                  id="Rectangle_21"
                  data-name="Rectangle 21"
                  width="144"
                  height="144"
                  rx="10"
                  fill="#f6f7fb"
                />
              </svg>
              <ItemDesc>
                <h5>{item.productName}</h5>
                <Price>{`$${item.price}`}</Price>
                {/* <Quantity /> */}
              </ItemDesc>
              <DeleteIcon onClick={() => handleRemoveItem(item.productID)}>
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
              </DeleteIcon>
            </Item>
          ))}
        </CartItems>
        <CartDetailsWrap>
          <CartDetails>
            <h5>Cart Total</h5>
            <Subtotal>
              <span>Subtotal:</span>
              <span>{`$${total}`}</span>
            </Subtotal>
            <Subtotal>
              <span>Shipping:</span>
              <span>$0</span>
            </Subtotal>
            <Total>
              <span>Total:</span>
              <span>{`$${total}`}</span>
            </Total>
            <div>
              <Link to="/">Checkout</Link>
            </div>
          </CartDetails>
        </CartDetailsWrap>
      </CartWrapper>
      <Footer />
    </React.Fragment>
  );
};

export default Cart;
