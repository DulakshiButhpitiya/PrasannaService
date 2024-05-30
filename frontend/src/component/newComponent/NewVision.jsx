import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css/animate.min.css';
import Image from '../Assets/blackvision.jpg';
import Image2 from '../Assets/visioncenter.jpg';

const NewVision = () => {
  return (
    <div className="relative bg-cover bg-center mx-auto bg-gray-100" style={{ backgroundImage: `url(${Image})`, height: '70vh', width: '180%', maxWidth: '1200px', borderRadius: '20px', overflow: 'hidden' }}>
      <div className="absolute inset-0 bg-black opacity-50" style={{ filter: 'blur(8px)' }}></div>
       
      <Container className="relative z-10 flex items-center justify-center h-full">
        <Row className="w-full">
          <Col md={6} className="flex justify-center items-center">
            {/* Modified the div with Tailwind CSS classes for shadow */}
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img src={Image2} alt="Motorbike Care" className="max-w-full h-auto animate__animated animate__fadeInLeft" style={{ maxWidth: '80%', height: 'auto' }} />
            </div>
          </Col>
          <Col md={6} className="flex justify-center items-center">
            <div className="text-white animate__animated animate__fadeInRight text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">Our Vision</h1>
              <div className="bg-white h-1 mx-auto md:mx-0 mb-6" style={{ width: '210px' }}></div>
              <p className="text-lg">
                TO ACHIEVE UNPARALLELED RECOGNITION AS THE PREMIUM AUTO CARE SERVICE PROVIDER BY OBJECTIFYING TRUST, CONVENIENCE, AND UNIQUENESS; GUIDING OUR WORK FORCE AS A TEAM STRIVING "TO BECOME THE OBVIOUS CHOICE".
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewVision;
