import { configureStore } from "@reduxjs/toolkit";

import ordersSlice from "../slices/ordersSlice";
import productsSlice from "../slices/productsSlice";
import modalSlice from "../slices/modalSlice";
import selectedOrderSlice from "../slices/selectedOrderSlice";
export const store = configureStore({
   reducer: {
      orders: ordersSlice,
      products: productsSlice,
      modal: modalSlice,
      selectedOrder: selectedOrderSlice
   },
});


