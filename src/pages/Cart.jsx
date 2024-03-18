import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Row, Card } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decQuantity, deleteCart, emptyCart, incQuantity } from '../Redux/Slice/cartSlice'
import {ToastContainer, toast } from 'react-toastify'

function Cart() {
  const navigate=useNavigate()
  const dispatch =useDispatch()
  const cartList =useSelector(state=>state.cartReducer)
  const [cartCost,TotalcartCost] =useState(0)
  useEffect(()=>{
if(cartList?.length>0){
TotalcartCost(cartList?.map(item=>item.totalprice).reduce((t1,t2)=>t1+t2))
}else{
  TotalcartCost(0)
}
  },[cartList])

const handledecrement=(product)=>{
if(product.quantity>1){
  dispatch(decQuantity(product.id))
}else{
  dispatch(deleteCart(product.id))
}
}


const handleCheckOut =()=>{
  dispatch(emptyCart())
  toast.success("Order placed successfully... thank you for purc")
  setTimeout(()=>{
    navigate('/')
  },2000)
}



  return (
    <>
    <Header/>
    <div className='container' style={{marginTop:"100px"}}>
    

    {cartList?.length>0?<div className='pt-5'>
      <h1>Cart Summary</h1>
      <div className="row mt-5">
       
        <div className='col-lg-8'>
    <table className='table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Image</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>...</th>
          
        </tr>
      </thead>
      <tbody>
        {cartList?.map((product,index)=>(<tr>
          <td>{index+1}</td>
          <td>{product.title.slice(0,15)}..</td>
          <td><img width={'60px'} height={'60px'} src={product.thumbnail} alt="" /></td>
          <td>
            <div style={{width:"60px"}} className='d-flex justify-content-between align-items-center'>
              <button onClick={()=>handledecrement(product)} className='btn'>-</button>
              <input value={product.quantity} style={{width:"40px"}} placeholder='0' type="text" className='form-control' readOnly />
              <button onClick={()=>dispatch(incQuantity(product.id))} className='btn'>+</button>
            </div>
          </td>
          <td>${product.totalprice}</td>
          <td>
            <button onClick={()=>dispatch(deleteCart(product.id))} className='btn '><i className='fa-solid fa-trash text-primary'></i></button>
          </td>
        </tr>))}
      </tbody>
    </table>
    <div className='float-end mt-3'>
    <button onClick={()=>dispatch(emptyCart())} className='btn btn-primary'>EMPTY CART</button>
    <Link to={'/'} className='btn btn-danger ms-5'>Shop More</Link>
    </div>
          </div>
          <div className='col-lg-4'>

            <div className='shadow border rounded p-4'>
              <h5>Total Product: <b className='text-primary'>{cartList.length}</b> </h5>
              <h4>Total Amount: <b className='text-primary'>{cartCost}</b> </h4>
              <div className='mt-4 d-grid'>
                <button  onClick={handleCheckOut} className='btn btn-success'>Check Out</button>
              </div>
            </div>
          </div>
      </div>
    </div>: <div><div style={{height:"70vh"}} className='d-flex   w-100 justify-content-center align-items-center'>
      <img height={'400px'} src="https://imgs.search.brave.com/hdHQUcGb--pGx_G66MqdAAL8Z7kYUUk4LZzizHbeotQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi93aXNo/bGlzdC1pY29uLWlt/YWdlLXN1aXRhYmxl/LW1vYmlsZS1hcHBs/aWNhdGlvbi0yODEy/MTE2ODYuanBn" alt="" />
     </div><h2 className='text-center'>YOUR WISHLIST IS EMPTY</h2></div>}

    </div>
    <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
    </>
  )
}

export default Cart
