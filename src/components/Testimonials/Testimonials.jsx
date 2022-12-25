import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap'
import '../../styles/testimonials.css';
import 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const head_style = {
    display: "grid",
    justifyContent: "center",
    fontSize: "35px",
    letterSpacing: "1.2px",
    color: "#b0923a",
    fontWeight: "600",
}

const p_style = {
    textAlign: "center",
    color: "#9eb9cc",
}


const Testimonials = () => {
  return (
    <div>
      <div>
        <p style={head_style}>What Clients Say</p>
        <p style={p_style} className="p_style">
          We place huge value on strong relationships and have seen the benefit
          they bring to our business. Customer feedback is vital in helping us
          to get it right.
        </p>
      </div>

      {/* <section>
            <Row>

                <Col lg='6' md='6' className='testimonials__div'>
                    <h5 className='customer__name'>Venkatesan, Coimbatore
                        <i class='ri-star-fill'></i>
                        <i class='ri-star-fill'></i>
                        <i class='ri-star-fill'></i>
                        <i class='ri-star-fill'></i>
                        <i class='ri-star-half-fill'></i>
                    </h5>
                    <p className='comments'>I've been a loyal customer of this cashew business for years, and I can honestly say that their products are the best I've ever had. </p>
                </Col>

                <Col lg='6' md='6' className='testimonials__div'>
                    <h5 className='customer__name'>Saaiganesh, Trichy
                        <i class='ri-star-fill'></i>
                        <i class='ri-star-fill'></i>
                        <i class='ri-star-fill'></i>
                        <i class='ri-star-fill'></i>
                        <i class='ri-star-line'></i>
                    </h5>
                    <p className='comments'>Promising the quality products from them for a decade !</p>
                </Col>

                <Col lg='6' md='6' className='testimonials__div'>
                    <h5 className='customer__name'>Ram, Madurai
                        <i class='ri-star-fill'></i>
                        <i class='ri-star-fill'></i>
                        <i class='ri-star-fill'></i>
                        <i class='ri-star-fill'></i>
                        <i class='ri-star-fill'></i>
                    </h5>
                    <p className='comments'>Packaging and after sales support was excellent, kudos to Anish cashews for making your customers happy !</p>
                </Col>

                <Col lg='6' md='6' className='testimonials__div'>
                    <h5 className='customer__name'>Sanjay, Chennai
                        <i class='ri-star-fill'></i>
                        <i class='ri-star-fill'></i>
                        <i class='ri-star-fill'></i>
                        <i class='ri-star-fill'></i>
                        <i class='ri-star-half-fill'></i>
                    </h5>
                    <p className='comments'>I am a loyal customer for Anish cashews, and they have been maintaining the same quality, standards and support for a decade. Once and always Anish cashews !</p>
                </Col>

            </Row>


        </section> */}

      <Carousel className="carousel">
        <Carousel.Item>
          <div className='user'>
          <h4 className='userName'><i class="ri-user-3-line"></i>Natarajan</h4>
          <h3 className='place'>Coimbatore</h3>
          </div>
          <p className="comments">
            "I've been a loyal customer of this cashew business for years, and I
            can honestly say that their products are the best I've ever had.
            Highly recommend!
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <div className='user'>
            <h4 className='userName'><i class="ri-user-3-line"></i>Sarojini</h4>
            <h3 className='place'>Vijayawada</h3>
          </div>
          <p className="comments">
            I was hesitant to try a new brand of cashews, but I'm so glad I took
            the chance on this company. Their customer service is top-notch, and
            the product itself exceeded my expectations. The cashews are fresh,
            flavorful, and a great value for the price.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <div className='user'>
            <h4 className='userName'><i class="ri-user-3-line"></i>Nagendra</h4>
            <h3 className='place'>Bangalore</h3>
          </div>
          <p className="comments">
            I'm a big fan of this cashew business! Not only are their products
            delicious, but they also have a great selection of other nuts and
            snacks. Their website is easy to use and the delivery is always
            prompt.
          </p>
        </Carousel.Item>

        <Carousel.Item>
          <div className='user'>
            <h4 className='userName'><i class="ri-user-3-line"></i>Ramkumar</h4>
            <h3 className='place'>Chennai</h3>
          </div>
          <p className="comments">
            I recently purchased a bag of cashews from this company as a gift,
            and the recipient was thrilled with the quality. They said the
            cashews were some of the best they've ever tasted, and I was
            impressed with the packaging and presentation
          </p>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Testimonials
