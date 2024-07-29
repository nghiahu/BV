import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addProduct, deletePro, getProduct } from "../../services/product.service";
import { Product } from "../../interface";
export const getAllProduct:any = createAsyncThunk("product/getAllProduct",getProduct)
export const addNewProduct:any = createAsyncThunk("product/addNewProduct",addProduct)
export const deleteProduct:any = createAsyncThunk("product/deleteProduct",deletePro)
const productReducer = createSlice({
    name:"product",
    initialState:{
        products:[],
        status:true,
    },
    reducers:{
        open:(state,action)=>{
            {state.status? state.status=false:state.status=true}
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAllProduct.fulfilled,(state,action)=>{
            state.products = action.payload
        })
        .addCase(addNewProduct.fulfilled,(state:any,action)=>{
            state.products.push(action.payload)
        })
        .addCase(deleteProduct.fulfilled,(state,action)=>{
            state.products = state.products.filter((item:Product)=>item.id !== action.payload.id)
        })
    }
})
export const {open} = productReducer.actions
export default productReducer.reducer;