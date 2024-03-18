import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Row, Card,Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../Redux/Slice/productSlice'

function Home() {
 
  const dispatch =useDispatch()
  const {allproducts,error,loading}=useSelector(state=>state.productReducer)
  console.log(allproducts,error,loading);

  const [currentPage,setCurrentPage] =useState(1)
  const productsPerPage =8
  const totalPages =Math.ceil(allproducts?.length/productsPerPage)
  const lastProductIndex =currentPage * productsPerPage
  const firstProductIndex =lastProductIndex - productsPerPage
 const visibleCards =allproducts?.slice(firstProductIndex,lastProductIndex)
  useEffect(()=>{
dispatch(fetchProducts())
  },[])

  const navigateToNext =()=>{
    if(currentPage!=totalPages){
      setCurrentPage(currentPage+1)
    }
  }
  const navigateToPrev = () =>{
  if(currentPage!=1){
    setCurrentPage(currentPage-1)
  }
  }


  return (
  <>
  <Header insideHome />
  <div className='container' style={{marginTop:"100px"}}>
  {loading?<div className='mt-5 text-center fw-bolder'> <Spinner animation="border" variant="danger" /> loading.....</div>:<Row>
    {allproducts?.length>0? visibleCards?.map((products)=>(
      <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
      <Card className='shadow rounded' style={{ width: '18rem' }}>
        <Card.Img style={{height:"180px"}} variant="top" src={products?.thumbnail} />
        <Card.Body>
          <Card.Title>{products.title.slice(0,15)}...</Card.Title>
         
         <div  className='text-center' > <Link to={`/view/${products?.id}`} variant="primary">view More</Link></div>
        </Card.Body>
      </Card>
      </Col>
    )):<div className='text-center my-5 fw-bolder'>Product Not Found :(</div>}
    
  </Row>}
  <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>
    <span onClick={navigateToPrev} style={{cursor:'pointer'}}><i className='fa-solid fa-backward me-2'></i></span>
    <span className='fw-bolder me-2'>{currentPage}</span>
    <span style={{cursor:'pointer'}}><i className='fa-solid fa-forward me-2'></i></span>
  </div>
  </div>
  </>
  )
}

export default Home
