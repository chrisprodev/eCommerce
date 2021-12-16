import { productInterface } from "./Products";

export interface CartInterface {
  productID: string;
  image: string;
  productName: string;
  quantity: number;
  price: number;
}

// Initial State Interface
export interface AppState {
  status: string;
  category: number;
  cart: CartInterface[];
  productList: productInterface[] | undefined;
  product: productInterface | undefined;
}
