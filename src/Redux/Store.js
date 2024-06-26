import { configureStore } from "@reduxjs/toolkit";
import branchReducer from "../Redux/Slices/branchSlice";
import storesReducer from '../Redux/Slices/storesSlice'
import  authSlice from '../Redux/Slices/authSlice'
import todoSlice from '../Redux/Slices/todoSlice'
import { apiSlice } from "./Slices/apiSlice";
// import authSlice from "./Slices/authSlice";
// import todoSlice from "./Slices/todoSlice";
// import { apiSlice } from "./slices/apiSlice";


const Store = configureStore({
  reducer: {
    branch: branchReducer,
    stores: storesReducer,
    auth: authSlice,
    todos: todoSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export default Store;
