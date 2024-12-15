import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../Slices/productsSlice.jsx'
import cartSlice from '../Slices/cartSlice.jsx'
const store = configureStore({
    reducer:{
        cart:cartSlice,
        products:productSlice,  
    }
})

export default store;