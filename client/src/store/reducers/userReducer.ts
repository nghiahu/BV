import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from '../../interface';
import { addUser, changeStatusUser, getUser } from "../../services/user.service";
export const getAllUser:any = createAsyncThunk("users/getAllUser", getUser)
export const addNewUser:any = createAsyncThunk("users/addNewUser", addUser)
export const changeStatus:any = createAsyncThunk("users/changeStatus", changeStatusUser)
const userReducer = createSlice({
    name:"users",
    initialState:{
        users: [] ,
        status:true
    },
    reducers:{  
        open:(state,action)=>{
            {state.status?state.status=false : state.status=true} 
        },
    },
    extraReducers : (builder) => {
        builder 
        .addCase(getAllUser.fulfilled,(state,action)=>{
            state.users = action.payload;
        })
        .addCase(addNewUser.fulfilled,(state:any,action)=>{
            state.users.push(action.payload)
        })
        .addCase(changeStatus.fulfilled, (state: any, action) => {
            const userIndex = state.users.findIndex((item: User) => item.id === action.payload.id);
            if (userIndex !== -1) {
                state.users[userIndex] = { ...state.users[userIndex], ...action.payload };
            }
        })
    }
})
export const {open } = userReducer.actions;
export default userReducer.reducer;

