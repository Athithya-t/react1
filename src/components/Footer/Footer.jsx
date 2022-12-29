import React from 'react';
import { Col, Row } from 'reactstrap'
import '../../styles/footer.css'


const Footer = () => {
  return (
    <div>
    
        <section className='footer__container'>
            <Row>
                <Col>
                  <h3 className='footer__companyName'>ANISH   &nbsp;CASHEWS</h3>
                  <div className='copyright'><span>&copy;</span>  COPYRIGHT RESERVED 2021-2022</div>
                  <div className='footer__address'>647, KUMBAKONAM MAIN ROAD,
                  KADAMPULIYUR, PANRUTI
                  CUDDALORE, TAMILNADU - 607103</div>
                  <p className='footer__privacyPolicy'>Privacy Policy</p>
                  <p className='footer__privacyPolicy'><a href='https://melospiza.in'>From Melospiza</a></p>
                </Col>
            </Row>
        </section>
    
    </div>
  )
}

export default Footer
