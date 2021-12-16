import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import db from "../../firebase/firebaseConfig";
import { productInterface } from "../../models/Products";
import { AppState, CartInterface } from "../../models/State";
import { categories } from "../../constants/mockData";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";

// Fecth Product List
export const fetchProductsList = createAsyncThunk(
  "products/fetchProductsList",
  async (categoryID: number) => {
    try {
      if (categoryID === 1) {
        const q = query(
          collection(db, "products"),
          orderBy("created"),
          limit(12)
        );

        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as productInterface[];
      } else {
        const q = query(
          collection(db, "products"),
          where("category", "==", categoryID)
        );

        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as productInterface[];
      }
    } catch (error) {
      console.log(error);
    }
  }
);

// Fecth Product
export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (productID: string) => {
    try {
      const docSnap = await getDoc(doc(db, "products", productID));
      if (docSnap.exists()) {
        const product = docSnap.data();
        const cateName = categories.filter(
          (cat) => cat.id === product.category
        );

        product.category = cateName[0].name;
        return product as productInterface;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
  }
);

// Initial state
const initialState: AppState = {
  status: "",
  category: 2,
  cart: [],
  productList: [],
  product: undefined,
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
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(
        (item) => item.productID !== action.payload
      );
    },
    setCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload;
    },
    resetProduct: (state) => {
      state.product = undefined;
    },
  },
  extraReducers: (builder) => {
    //* fetchProducts Status
    builder.addCase(fetchProductsList.fulfilled, (state, action) => {
      state.productList = action.payload;
    });
    //* fetchProduct Status
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export const {
  addToCart,
  resetCart,
  resetProduct,
  removeFromCart,
  setCategory,
} = appSlice.actions;

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

export const selectCategory = (state: RootState) => state.app.category;
export const selectProductList = (state: RootState) => state.app.productList;
export const selectProduct = (state: RootState) => state.app.product;

export default appSlice.reducer;
