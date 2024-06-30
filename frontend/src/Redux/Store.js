import { configureStore } from "@reduxjs/toolkit";
import branchReducer from "../Redux/Slices/branchSlice";
import storesReducer from '../Redux/Slices/storesSlice'
import  authSlice from '../Redux/Slices/authSlice'
import { apiSlice } from "./Slices/apiSlice";
import brandsReducer from '../Redux/Slices/brandSlice'
import menuReducer from '../Redux/Slices/menuSlice'
import shopsReducer from '../Redux/Slices/shopsSlice'



const Store = configureStore({
  reducer: {
    branch: branchReducer,
    menu: menuReducer,
    stores: storesReducer,
    auth: authSlice,
    shops: shopsReducer,
    brands: brandsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export default Store;
