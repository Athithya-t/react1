import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer.jsx';
import Home from '../pages/Home.jsx';
const Layout = () => {
  return (
    <div>
        <div>
          <Header/>
        </div>

        <div>
          <Home/>
        </div>
        
        <div>
         <Footer/>
        </div>    
    </div>
    
  )
}

export default Layout
