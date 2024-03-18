
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import './App.css'

import Footer from './Components/Footer'
import Home from './pages/Home'
import View from './pages/View'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'

function App() {
 

  return (
    <>
  
     <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/wishlist' element={<Wishlist/>}/>
      <Route  path='/cart' element={<Cart/>}/>
      <Route  path='/view/:id' element={<View/>}/>
      <Route  path='/*' element={<Navigate to={'/'}/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
