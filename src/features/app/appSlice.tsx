import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

interface CartInterface {
  productID: number;
  productName: string;
  quantity: number;
  price: number;
}

// Initial State Interface
interface AppState {
  likes: number[];
  cart: CartInterface[];
}

// Initial state
const initialState: AppState = {
  likes: [1],
  cart: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    resetCart: (state) => {
      state.cart = [];
    },
    addToCart: (state, action: PayloadAction<CartInterface>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(
        (item) => item.productID !== action.payload
      );
    },
  },
});

export const { addToCart, resetCart, removeFromCart } = appSlice.actions;

export const selectItems = (state: RootState) => state.app.cart;
export const selectTotalItems = (state: RootState) =>
  state.app.cart.reduce(
    (accum: number, item: CartInterface) => accum + item.quantity,
    0
  );

export const selectTotalPrice = (state: RootState) =>
  state.app.cart.reduce(
    (accum: number, item: CartInterface) => accum + item.price,
    0
  );

export default appSlice.reducer;
