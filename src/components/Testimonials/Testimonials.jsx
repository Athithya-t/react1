import React from 'react';
import { Row, Col } from 'reactstrap'
import '../../styles/testimonials.css';
import 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


const Testimonials = () => {
  return (
    <div>
        <section>
            <Row>

                <Col lg='6' md='6' className='testimonials__div'>
                    <h5 className='customer__name'>Venkatesan, Coimbatore
                        <i class='ri-star-fill'></i>
                        <i class='ri-star-fill'></i>
                        <i class='ri-star-fill'></i>
                        <i class='ri-star-fill'></i>
                        <i class='ri-star-half-fill'></i>
                    </h5>
                    <p className='comments'>The quality of the cashews that've delivered was at top of the line. I was bit worried about the delivery,but they changed my mind. It was a super fast and super safe. Cheers to Anish cashews !</p>
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
        </section>
    </div>
  )
}

export default Testimonials
