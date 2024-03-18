import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addWishlistItem } from '../Redux/Slice/WishlistSlice'
import { addToCart } from '../Redux/Slice/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function View() {
  const wishlist =useSelector(state=>state.wishlistReducer)
  const cartss=useSelector(state=>state.cartReducer)
  const dispatch =useDispatch()
  const [product,setproduct]=useState({})
  const {id} = useParams()
 
  useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){
      const allproduct =JSON.parse(sessionStorage.getItem("allProducts"))
      // console.log(allproduct);
      setproduct(allproduct?.find((item)=>item.id==id))
    }
  },[])



 
  const handleWishlist =(product)=>{
if(wishlist.includes(product)){
  toast.info("product all ready exited")
}else{
  dispatch(addWishlistItem(product))
}
  }



  const handlecartlist=(product)=>{
    const existProduct = cartss?.find(items=>items.id==product.id)
    if(existProduct){
      dispatch(addToCart(product))
      toast.success('products added to your cart!!')
    }else{
      dispatch(addToCart(product))
     
    }

  }
  
  return (
    <>
    <Header/>
    <div  className='container'>
      <Row  style={{height:"300px",marginTop:"100px"}} >
        <Col className=' border d-flex justify-content-center align-items-center ' sm={12} lg={6} style={{height:"300px"}}>
          <img style={{height:"250px"}} src={product?.thumbnail
} />
        </Col>
        <Col className='border' sm={12} lg={6}>
<h5>PID: {product?.id}</h5>
<h1>{product?.title}</h1>
<h3 className='text-info' >$ {product?.price}</h3>
<p><span className=' fw-bold'>Description</span>:{product?.description}</p>
<div style={{height:'100px'}} className='d-flex align-items-center justify-content-between border'>
  <button className='btn shadow rounded' onClick={()=>handleWishlist(product)}  >  <i className='fa-solid fa-heart text-primary'></i>ADD TO WISHLIST</button>
  <button className='btn shadow rounded' onClick={()=>handlecartlist(product)}> <i className='fa-solid fa-cart-plus text-success'></i>ADD TO CART</button>
</div>
      </Col>
      </Row>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </div>
    </>
  )
}

export default View
