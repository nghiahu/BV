import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import categoryReducer from "./reducers/categoryReducer";

const store = configureStore({
    reducer:{
    userReducer,
    productReducer,
    categoryReducer
    }
})
export default store;