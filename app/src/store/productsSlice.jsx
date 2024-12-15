import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products:[],
    premiumProducts:[],
    loading:false,
    error:null,
};

export const fetchProducts = createAsyncThunk("products/fetch",async()=>{
    const response = await axios.get("http://localhost:4000/products");
    return response.data
})

export const fetchPremiumProducts = createAsyncThunk("premiumProducts/fetch",async()=>{
    const response = await axios.get("http://localhost:4000/premiumCars");
    return response.data
})

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading = false
            state.products = action.payload
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
        .addCase(fetchProducts.pending,(state)=>{
            state.loading = true
            state.error=null
        })
        .addCase(fetchPremiumProducts.fulfilled,(state,action)=>{
            state.loading = false
            state.premiumProducts = action.payload
        })
        .addCase(fetchPremiumProducts.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
        .addCase(fetchPremiumProducts.pending,(state)=>{
            state.loading = true
            state.error=null
        })
    }
})

export default productSlice.reducer;