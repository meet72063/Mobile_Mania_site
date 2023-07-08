import { createSlice} from "@reduxjs/toolkit";
import { storeProducts } from "./data";

const initialstate = {
  products: storeProducts,
  detailProduct: "",
  total: 0,
  items: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState: initialstate,
  reducers: {
   
    inform: (state, action) => {
      const productId = action.payload;
      const item = state.products.find((product) => product.id === productId);
      state.detailProduct = item;
    },
    
    AddtoCart: (state, { payload }) => {
      const product = state.products.find((product) => product.id === payload);
      product.inCart = true;
      state.items += 1;
      state.total = state.total + product.price;
      product.count = 1;
      product.total = product.price;

      if (state.detailProduct) {
        state.detailProduct.inCart = true;
      }
    },
    removeFromCart: (state, { payload }) => {
      const product = state.products.find((product) => product.id === payload);
      product.inCart = false;
      state.items -= 1;

      state.total = state.total - product.total;
      product.count = 0;
      product.total = 0;
      if (state.detailProduct) {
        state.detailProduct.inCart = false;
      }
    },
    emptyDetails: (state) => {
      state.detailProduct = "";
    },

    increment: (state, { payload }) => {
      const product = state.products.find((product) => product.id === payload);
      product.count += 1;
      product.total = product.count * product.price;
      state.total = state.total + product.price;
    },

    decrement: (state, { payload }) => {
      const product = state.products.find((product) => product.id === payload);
      product.count -= 1;
      product.total = product.count * product.price;

      if (product.count === 0) {
        product.inCart = false;
        state.items -= 1;
      }
      state.total = state.total - product.price;
    },
  },
});

export const {
  increment,
  decrement,
  inform,
  AddtoCart,
  emptyDetails,
  removeFromCart,
} = productSlice.actions;

export default productSlice.reducer;
