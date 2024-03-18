import React from 'react'
import { Container, Navbar,Nav, Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProducts } from '../Redux/Slice/productSlice'

function Header({insideHome}) {
  const dispatch=useDispatch()
  const wishlist=useSelector((state)=>state.wishlistReducer).length
  const cartList =useSelector((state)=>state.cartReducer).length
  return (
    <div>
       <Navbar style={{zIndex:"10"}} expand="lg" className="bg-info position-fixed top-0 w-100">
      <Container>
        <Navbar.Brand href="#home" ><Link to={'/'} style={{textDecoration:'none',color:"white"}}><i className="fa-solid fa-truck-fast me-2"></i>Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           { insideHome && <Nav.Link> 
              <input onChange={(e)=>dispatch(searchProducts(e.target.value.toLowerCase()))} style={{width:'400px'}} placeholder='search product here !!!' type='text' className='form-control'/>
            </Nav.Link>}
            <Nav.Link ><Link style={{textDecoration:'none',color:"white"}} to={'/wishlist'} >
              <i className='fa-solid fa-heart text-primary'></i>
              Wishlist <Badge bg='secondary'>{wishlist}</Badge> </Link></Nav.Link>
              <Nav.Link ><Link style={{textDecoration:'none',color:"white"}} to={'/cart'} >
              <i className='fa-solid fa-cart-plus text-success'></i>
              Cart <Badge bg='secondary'>{cartList}</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
