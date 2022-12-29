import React from 'react'
import "../../styles/products.css";
import {Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import w320 from '../../assests/images/w320.png';
import w240 from '../../assests/images/w240.png';
import jh from '../../assests/images/jh.png'
import w210 from '../../assests/images/w210.png'
import lwp from '../../assests/images/lwp.png'
const products = () => {

    const products=[
        {
            img:w210,
            name: 'W 210'
        },
        {
            img:w240,
            name: 'W 240'
        },
        {
            img:w320,
            name: 'W 320'
        },
        {
            img:jh,
            name: 'JH'
        },
        {
            img:lwp,
            name: 'LWP'
        },
    ]
  return (
    <div>
      <Row>
            <Col lg='12' md='4' sm='12' className='product'>
                {
                    products.map((item,index)=>(
                        <div lg='6' md='6' sm='12' key={index} className='product-img'>
                            <img src={item.img} alt='product-img'/>
                            <p>{item.name}</p>
                        </div>
                    ))
                }
            </Col>
      </Row>
    </div>
  )
}

export default products
