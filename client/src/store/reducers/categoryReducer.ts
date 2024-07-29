import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addCategory, getCategory } from "../../services/category.service";
import { Category } from "../../interface";

export const getAllCategory:any = createAsyncThunk("categorys/getAllCategory", getCategory);
export const addNewCategory:any = createAsyncThunk("categorys/addNewCategory", addCategory);
const categoryReducer = createSlice({
    name: "categorys",
    initialState:{
        categorys: [],
        status: true,
    },
    reducers: {
        open: (state) => {
            state.status = !state.status;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCategory.fulfilled, (state, action) => {
                state.categorys = action.payload;
            })
            .addCase(addNewCategory.fulfilled, (state:any, action) => {
                state.categorys.push(action.payload);
            });
    },
});

export const { open } = categoryReducer.actions;
export default categoryReducer.reducer;
