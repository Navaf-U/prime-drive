import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productsSlice.jsx'
import cartSlice from './cartSlice'
const store = configureStore({
    reducer:{
        cart:cartSlice,
        products:productSlice,  
    }
})

export default store;