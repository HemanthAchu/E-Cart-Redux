import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slice/productSlice";
import WishlistSlice from "./Slice/WishlistSlice";
import cartSlice from "./Slice/cartSlice";

 const cartStore = configureStore({
    reducer:{
    productReducer:productSlice,
    wishlistReducer: WishlistSlice,
    cartReducer:cartSlice
    }
})
export default cartStore