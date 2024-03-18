import { createSlice } from "@reduxjs/toolkit";

const cartSlice =createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart :(state,action)=>{
            const existingProduct =state.find(item=>item.id==action.payload.id)
            if(existingProduct){
            const remainingProduct =state.filter(item=>item.id!==existingProduct.id)

            existingProduct.quantity++
            existingProduct.totalprice = existingProduct.quantity*existingProduct.price
            
            state =[...remainingProduct,existingProduct]
            }else{
            state.push({...action.payload,quantity:1,totalprice:action.payload.price})
            }
        },
        deleteCart :(state,action)=>{
            return state.filter(item=>item.id!==action.payload)
        },
        incQuantity :(state,action)=>{
            const existingProduct=state.find(item=>item.id==action.payload)
            existingProduct.quantity++
            existingProduct.totalprice =existingProduct.quantity*existingProduct.price
            const remainingProduct =state.filter(items=>items.id!=existingProduct.id)
            state =[...remainingProduct,existingProduct]
        },
        decQuantity :(state,action)=>{
            const existingProduct=state.find(item=>item.id==action.payload)
            existingProduct.quantity--
            existingProduct.totalprice =existingProduct.quantity*existingProduct.price
            const remainingProduct =state.filter(items=>items.id!=existingProduct.id)
            state =[...remainingProduct,existingProduct]
        },
        emptyCart:(state,action)=>{
            return state =[]
        }
    }
})
export const {addToCart,deleteCart,incQuantity,decQuantity,emptyCart}=cartSlice.actions
export default cartSlice.reducer