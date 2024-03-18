import React from 'react'
import Header from '../Components/Header'
import { Col, Row, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWishlist } from '../Redux/Slice/WishlistSlice'
import { addToCart } from '../Redux/Slice/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Wishlist() {

  const wishlist =useSelector(state=>state.wishlistReducer)
  const cartss =useSelector(state=>state.cartReducer)
  const dispatch =useDispatch()

  const handlecartlist=(product)=>{
    const existProduct = cartss?.find(items=>items.id==product.id)
    if(existProduct){
      dispatch(addToCart(product))
      dispatch(deleteWishlist(product.id))
      toast.success('products added to your cart!!')
    }else{
      dispatch(addToCart(product))
      dispatch(deleteWishlist(product.id))
      
    }

  }

  return (
    <>
    <Header/>
    <div className='container' style={{marginTop:"100px"}}>
     {wishlist?.length>0?
     <Row>
  { wishlist?.map((product)=>(
 <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
 <Card className='shadow rounded' style={{ width: '18rem' }}>
   <Card.Img style={{height:"180px"}} variant="top" src={product.thumbnail} />
   <Card.Body>
     <Card.Title>{product.title.slice(0,15)}...</Card.Title>
    
    <div style={{height:'50px'}}  className='d-flex justify-content-between w-100 align-items-center'>
<button onClick={()=>dispatch(deleteWishlist(product?.id))} className='btn'><i className='fa-solid fa-heart-circle-xmark text-danger '></i> </button>
<button onClick={()=>handlecartlist(product)} className='btn'><i className='fa-solid fa-cart-plus text-success'></i> </button>
    </div>
   </Card.Body>
 </Card>
 </Col>
  )) }
    
  </Row>:<div><div style={{height:"70vh"}} className='d-flex   w-100 justify-content-center align-items-center'>
      <img height={'400px'} src="https://imgs.search.brave.com/hdHQUcGb--pGx_G66MqdAAL8Z7kYUUk4LZzizHbeotQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi93aXNo/bGlzdC1pY29uLWlt/YWdlLXN1aXRhYmxl/LW1vYmlsZS1hcHBs/aWNhdGlvbi0yODEy/MTE2ODYuanBn" alt="" />
      
     </div><h2 className='text-center'>YOUR WISHLIST IS EMPTY</h2></div>
}
  <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
    </div>

    </>
  )
  
}

export default Wishlist
