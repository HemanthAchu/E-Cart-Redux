import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-info' style={{color:"white"}}>
    <hr/>
    <div style={{height:'300px'}} className=' container mt-5 w-100'>
      <div className='footer-content d-flex justify-content-between' >
        <div style={{width:'400px'}} className="media">
          <h5><i className='fa-solid fa-music me-3'></i>Media player</h5>
          <p>media player and x264 are trademarks internationally registered by the VideoLAN non-profit organization.</p>
          <h6>Code Licensed MIT,Doc CC BY 3.0</h6>
          <p>Currentlt V5.3.2</p>
        </div>


        <div className="link d-flex flex-column">
        <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}   >Landing</Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}} >Home Page</Link>
          <Link to={'/watch'} style={{textDecoration:'none',color:'white'}} >Watch History</Link>
        </div>

        <div className="link d-flex flex-column">
        <h5>Guides</h5>
          <a href='https://react.dev/' target='_blank' style={{textDecoration:'none',color:'white'}}   >React</a>
          <a href='https://www.npmjs.com/package/react-router-dom' target='_blank' style={{textDecoration:'none',color:'white'}}   >React Routing</a>
          <a href='https://getbootstrap.com/docs/5.3/components/card/' target='_blank'  style={{textDecoration:'none',color:'white'}}   >React Bootstrap</a>
        </div>
        <div>
        <h5>Links</h5>
        <div className='d-flex'>
        <input type="text" className='form-control' placeholder='Email Id please Enter' />
       <button style={{color:"white",border:"none"}} className='btn-success  ms-2 p-2'><i className='fa-solid  fa-arrow-right'></i></button>
        </div>
        <div className='d-flex justify-content-between align-items-center mt-3'>
        <a href='https://getbootstrap.com/docs/5.3/components/card/' target='_blank'  style={{textDecoration:'none',color:'white'}}><i className='fa-brands fa-twitter fa-1x'></i></a>
        <a href='https://getbootstrap.com/docs/5.3/components/card/' target='_blank'  style={{textDecoration:'none',color:'white'}}><i className='fa-brands fa-instagram fa-1x'></i></a>
        <a href='https://getbootstrap.com/docs/5.3/components/card/' target='_blank'  style={{textDecoration:'none',color:'white'}}><i className='fa-brands fa-facebook fa-1x'></i></a>
        <a href='https://getbootstrap.com/docs/5.3/components/card/' target='_blank'  style={{textDecoration:'none',color:'white'}}><i className='fa-brands fa-github fa-1x'></i></a>
        <a href='https://getbootstrap.com/docs/5.3/components/card/' target='_blank'  style={{textDecoration:'none',color:'white'}}><i className='fa-brands fa-phone fa-1x'></i></a>
        </div>
        </div>
      </div>
     <p className='text-center mt-5'>Copyright &copy: 2024 Media player. Built with react</p>
    </div>

    </div>
  )
}

export default Footer
