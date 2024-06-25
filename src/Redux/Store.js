import { configureStore } from "@reduxjs/toolkit";
import branchReducer from '../Redux/Slices/branchSlice'
const Store = configureStore({
  reducer: {
    branch: branchReducer,
    //[apiSlice.reducerPath]: apiSlice.reducer
  },
 // middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(apiSlice.middleware)
});
export default Store