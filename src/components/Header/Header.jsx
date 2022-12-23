import React,{useRef} from 'react';
import '../../styles/header.css';

const Header = () => {
    const  menuRef = useRef(null)
    const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu')

    

  return <header className='header'>
    <section>
    <div className='nav__wrapper'>
        <div className='logo'>
            <h3 className='company__name'>ANISH CASHEWS</h3>
        </div>


        <div className='navigation' ref={menuRef}>
            <div className='menu'>
                <span className='navbar__details' onClick={toggleMenu}>
                    
                    <div className='navbar'>
                        <div><a href='#aboutUs' >About Us</a></div>
                        <div><a href='#products' >Products</a></div>
                        <div><a href='#services'>Services</a></div>
                        <div><a href='#testimonials'>Testimonials</a></div>
                        <div><a href='#contactUs'>Contact Us</a></div>
                    </div>
                    
                </span>
            </div>    
        </div>
        <div className='nav__right '>
            <span className='mobile__menu' onClick={toggleMenu}><i class='ri-menu-3-line nav__icon'></i></span>
        </div>

     </div>
    </section>
  </header>
}
export default Header
