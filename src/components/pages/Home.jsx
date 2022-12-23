import React from 'react';
import '../../styles/home.css';
import {  Col, Row } from 'reactstrap';
import 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Testimonials from '../Testimonials/Testimonials';
import Products from '../Products/products';
import logo from '../../assests/images/logo.jpg';
import anishLogo from '../../assests/images/anish 2.jpg'
import anish from '../../assests/images/anish.png'
const Home = () => {

  return (
    <div className='home'>
       <section>
          <Row className='row'>


              <Col className='col'>
                  <div className='background__img'>
                  <div className='home__content'>
                        <h2 className='home__text'>Consumer is our <br/> First Priority</h2>

                        <p>We provide quality cashews for over a, making our consumers always smile</p>

                        <div className='searchBox'>
                            <input type={"text"} name={"Search the product..."} className='search__field' placeholder='Search the product...' list='input'/>
                            <datalist id="input">
                                <option value='W320'/>
                                <option value='W240'/>
                                <option value='JH'/>
                            </datalist>
                            <button className='search_icon'><i class="ri-search-2-line"></i></button>
                        </div>

                        <div className='whatsAppIcon'><i class="ri-whatsapp-line"></i></div>
                    </div>
                  </div>
              </Col>

                 
              
                   <h3 className='aboutUs__title'  id='aboutUs'>About Us</h3>

             <section>
                  <Row className='aboutUs__content'>
                  
                      <Col lg="6" md="6" sm='6'>
                            <p className='aboutUs__text'>Our company has been proudly serving customers with high-quality cashews for over 10 years. We source our cashews from only the best farms, carefully selecting each batch to ensure that our customers receive the freshest and most flavourful nuts possible.
                                We take pride in our commitment to sustainability and ethical sourcing. We work closely with our suppliers to ensure that all of our cashews are grown and harvested in a way that is both environmentally responsible and fair to the farmers who grow them.
                            </p>
                            <div className='quality'><i class='ri-shield-check-fill'></i>100% Quality</div>
                      </Col>
                      <Col lg="6" md="6" sm='6'>
                            <div className='aboutus__Img'>
                                <img src={anish} alt='logo' />
                            </div>
                      </Col>

                  </Row>
              </section>

            <div className='products_div'>
                <h3 className='services__title' id='products'>Our Products</h3>
                <section>
                    <Row>
                        <Col>
                            <Products/>
                        </Col>
                    </Row>
                </section>
            </div>

              <h3 className='services__title'  id='services'>Services</h3>
              <section>
                  <Row>
                  
                      <Col lg='4' md='4'>
                        <div className='services'>
                            <div className='services__icon'><i class='ri-headphone-fill'></i></div>
                            <h5 className='services__head'>Support</h5>
                            <p>We deliver promising customer support before and after purchase from us</p>
                        </div>     
                      </Col>

                      <Col lg='4' md='4'>
                        <div className='services'>
                            <div className='services__icon'><i class='ri-numbers-line'></i></div>
                            <h5 className='services__head'>Sales</h5>
                            <p>We are an upscaling business which indicates that customers trust in our quality products</p>
                        </div>  
                      </Col>

                      <Col lg='4' md='4'>
                        <div className='services'>
                            <div className='services__icon'><i class='ri-truck-line'></i></div>
                            <h5 className='services__head'>Delivery</h5>
                            <p>After purchase, we assure you the best, safest and quickest delivery near your door step</p>
                        </div>
                      </Col>
                    
                  </Row>
              </section>

              <h3 className='testimonial__title' id='testimonials'>Testimonials</h3>
              <section>
                <Testimonials/>
              </section>

              <h3 className='contactUs__title' id='contactUs'>Contact Us</h3>
              <section>
                <Row>
                    <Col lg='6' md='6'>
                        <h5 className='companyname__contactUs'>ANISH CASHEWS</h5>
                        <p className='contactUs__details'>
                             647, Kumbakonam main road, Kadampuliyur, Panruti Cuddalore, Tamilnadu
                        </p>

                        <p className='contactUs__details'>Phone number:&nbsp;&nbsp; 9894676871,&nbsp;&nbsp; 7904258896</p>
                    
                        <p className='contactUs__details'>GST No: &nbsp;&nbsp; 33GIGPS5304M1ZX</p>

                        <h5 className='contactUs__socilaMedia'>Our Social Media Pages</h5>

                        <div className='contactUs__icons'>
                            <i class="ri-instagram-line"></i>
                            <i class="ri-whatsapp-line"></i>
                            <i class="ri-facebook-line"></i>
                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                    <div className='map'>
                    <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1953.5259792142465!2d79.54991450905909!3d11.690730238407658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMTHCsDQxJzI1LjMiTiA3OcKwMzMnMDEuNiJF!5e0!3m2!1sen!2sin!4v1660924359433!5m2!1sen!2sin" width="330" height="200"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
                   </div>
                    </Col>
                </Row>
              </section>
          </Row>
       </section>
      
    </div>
  )
}

export default Home
