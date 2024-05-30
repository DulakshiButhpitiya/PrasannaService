import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css/animate.min.css';
import Image from '../Assets/Naboutback.jpg'
import Image2 from '../Assets/contacct.jpg'


const NewAbout = () => {
  return (
    <div>
    
    
        <div className="relative bg-cover bg-center mx-auto bg-gray-100" style={{ backgroundImage: `url(${Image})`, height: '85vh',width: '180%', maxWidth: '1200px', borderRadius: '20px', overflow: 'hidden' }}>
        <div className="absolute inset-0 bg-black opacity-50" style={{ filter: 'blur(8px)' }}></div>
          <Container className="relative z-10 flex items-center justify-center h-full">
            <Row className="w-full">
              <Col className="flex justify-center items-center">
                <div className="text-white animate__animated animate__fadeInLeft">
                  <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
                  <div className="bg-white h-1 mx-auto mb-6 text-center" style={{ width: '220px' }}></div>
                  <p className="text-lg">
                    We are the best motorbike care specialists in Kirindiwela. Our best technicians provide good customer experience. Our staff representatives are well qualified and experienced to provide you with accurate estimates of both time and cost. We do vehicle servicing, detailing, running repairs, electrical repairs, and engine tune-ups for all brands of vehicles.
                    <br />
                    At Prasanna service center, we only use genuine spares for all our vehicles. Our dedicated staff is always aiming to ensure every customer is satisfied by Prasanna service center. We are dedicated to providing high-quality repairs to keep you safe and happy. Honest quality service is our top priority.
                  </p>
                </div>
              </Col>
              <Col className="flex justify-center items-center w-10 ">
                <img src={Image2} alt="Motorbike Care" className="rounded-lg shadow-lg max-w-full h-auto animate__animated animate__fadeInRight"  style={{ maxWidth: '70%', height: 'auto' }}/>
              </Col>
            </Row>
          </Container>
          
        </div></div>
  )
}

export default NewAbout