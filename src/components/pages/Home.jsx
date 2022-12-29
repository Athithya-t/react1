import React from "react";
import "../../styles/home.css";
import { Col, Row } from "reactstrap";
import "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import Testimonials from "../Testimonials/Testimonials";
import Products from "../Products/products";
import anish from "../../assests/images/anish.png";
import Particles from "../../components/ParticlesJS";
import Fssai from "../../assests/images/FSSAI_logo.png";
import Form from "../forms/Form";
import ReactWhatsapp from 'react-whatsapp'



const Home = () => {
  
  
  return (
    <div className="home">
      <section>
        <Row className="row">
          <Col className="col">
            <div className="background__img">
              <div className="home__content">
                <h2 className="home__text">
                  Consumer is our <br /> First Priority
                </h2>

                <p>
                  We provide quality cashews for over a decade, making our consumers
                  always smile
                </p>

                <ReactWhatsapp number="+91 9940558651">
                  <div className="whatsAppIcon">
                  <i class="ri-whatsapp-line"></i>
                </div>
                </ReactWhatsapp>

              </div>
            </div>
          </Col>

          <h3 className="aboutUs__title" id="aboutUs">
            About Us
          </h3>

          <section>
            <Row className="aboutUs__content">
              <Col lg="6" md="6" sm="6">
                <p className="aboutUs__text" data-aos="fade-up">
                  Our company has been proudly serving customers with
                  high-quality cashews for over 10 years. We source our cashews
                  from only the best farms, carefully selecting each batch to
                  ensure that our customers receive the freshest and most
                  flavourful nuts possible. We take pride in our commitment to
                  sustainability and ethical sourcing. We work closely with our
                  suppliers to ensure that all of our cashews are grown and
                  harvested in a way that is both environmentally responsible
                  and fair to the farmers who grow them.
                </p>
                <div className="quality">
                  <i class="ri-shield-check-fill"></i>100% Quality
                </div>
              </Col>
              <Col lg="6" md="6" sm="6">
                <div className="aboutus__Img">
                  <img src={anish} alt="logo" />
                </div>
              </Col>
            </Row>
          </section>

          <div className="products_div">
            <Particles />
            <h3 className="products__title" id="products">
              Our Products
            </h3>
            <h2>ALL GRADES OF CASHEW NUTS AVAILABLE</h2>
            <section>
              <Row>
                <Col>
                  <Products />
                </Col>
              </Row>
            </section>
          </div>

          <section className="section-services">
            <h3 className="services__title" id="services">
              Services
            </h3>
            <Row>
              <Col lg="4" md="4">
                <div className="services">
                  <div className="services__icon">
                    <i class="ri-headphone-fill"></i>
                  </div>
                  <h5 className="services__head">Support</h5>
                  <p>
                    We deliver promising customer support before and after
                    purchase from us
                  </p>
                </div>
              </Col>

              <Col lg="4" md="4">
                <div className="services">
                  <div className="services__icon">
                    <i class="ri-numbers-line"></i>
                  </div>
                  <h5 className="services__head">Sales</h5>
                  <p>
                    We are an upscaling business which indicates that customers
                    trust in our quality products
                  </p>
                </div>
              </Col>

              <Col lg="4" md="4">
                <div className="services">
                  <div className="services__icon">
                    <i class="ri-truck-line"></i>
                  </div>
                  <h5 className="services__head">Delivery</h5>
                  <p>
                    After purchase, we assure you the best, safest and quickest
                    delivery near your door step
                  </p>
                </div>
              </Col>
            </Row>
          </section>

          <h3 className="testimonial__title" id="testimonials">
            Testimonials
          </h3>
          <section>
            <Testimonials />
          </section>

          <section className="fssai">
            <img src={Fssai} alt="fssaiImg" className="fssai_logo"></img>
            <h4>
              License Number: <span>12422004000653</span>
            </h4>
          </section>

          <h3 className="contactUs__title" id="contactUs">
            Contact Us
          </h3>
          <section>
            <Row>
              <Col lg="6" md="6" className="contact">
                <h5 className="companyname__contactUs">ANISH CASHEWS</h5>
                <p className="contactUs__details">
                  647, Kumbakonam main road, Kadampuliyur, Panruti Cuddalore,
                  Tamilnadu - 607103
                </p>

                <p className="contactUs__details">
                  Phone number:&nbsp;&nbsp; <a class="mobileNo" href="tel:9894676871">9894676871</a>,&nbsp;&nbsp;<a class="mobileNo" href="tel:9940558651">9940558651</a> 
                </p>

                <p className="contactUs__details">
                  GST No: &nbsp;&nbsp; 33GIGPS5304M1ZX
                </p>

                <p className="contactUs__details">
                  <a class='mail' href="mailto: anishcashews.official@gmail.com">anishcashews.official@gmail.com</a>
                </p>
                <h5 className="contactUs__socilaMedia">
                  Our Social Media Pages
                </h5>
                {/* <ReactWhatsapp number="+91 9940558651">
                  <div className="whatsAppIcon">
                  <i class="ri-whatsapp-line"></i>
                </div>
                </ReactWhatsapp> */}

                <div className="contactUs__icons">
                  <a class="icon" href="https://www.instagram.com/anish.cashews/"><i class="ri-instagram-line"></i></a>
                  <a class="icon" href="https://www.facebook.com/profile.php?id=100089137026413"><i class="ri-facebook-line"></i></a>
                </div>
              </Col>

              <Col lg="6" md="6">
                <div className="map">
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1953.5259792142465!2d79.54991450905909!3d11.690730238407658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMTHCsDQxJzI1LjMiTiA3OcKwMzMnMDEuNiJF!5e0!3m2!1sen!2sin!4v1660924359433!5m2!1sen!2sin"
                    width="330"
                    height="200"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Col>
            </Row>
          </section>

          <section>
            
             <Form/>
          </section>
        </Row>
      </section>
    </div>
  );
              
};

export default Home;
