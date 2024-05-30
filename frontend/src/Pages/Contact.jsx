import React from 'react';
import backgroundVideo from '../component/Assets/contactvideo.mp4'; // Ensure you have the correct path to your video file
import Carousel from 'react-bootstrap/Carousel';
import homeImage from '../component/Assets/home.jpg';
import ContactFooter from '../component/newComponent/ContactFooter';

const Contact = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden" style={{width:'full'}}>
      {/* Main Content */}
      <div className="relative z-10">
        {/* Contact Form */}
        <div className="relative flex justify-center items-center w-full min-h-screen bg-blue-500 overflow-hidden">
          {/* Video Background */}
          <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          {/* Overlay to darken the video for better text visibility */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          {/* Contact Form Content */}
          <div className="relative w-full max-w-lg p-8 rounded-lg shadow-lg bg-transparent">
            <h1 className="text-3xl font-bold text-center mb-4 text-white">Contact Us</h1>
            <form id="contact-form" method="POST" className="flex flex-col space-y-4">
              <label htmlFor="name" className="text-gray-200">Full Name</label>
              <input name="name" placeholder="Enter full name..." type="text" className="p-2 bg-transparent border-b border-gray-200 focus:outline-none text-white placeholder-white" />
              <label htmlFor="email" className="text-gray-200">Email</label>
              <input name="email" placeholder="Enter email..." type="email" className="p-2 bg-transparent border-b border-gray-200 focus:outline-none text-white placeholder-white" />
              <label htmlFor="message" className="text-gray-200">Message</label>
              <textarea rows="6" placeholder="Enter message..." name="message" required className="p-2 bg-transparent border-b border-gray-200 focus:outline-none text-white placeholder-white"></textarea>
              <button type="submit" className="mt-4 py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800">Send Message</button>
            </form>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials-wrap py-16 bg-white bg-opacity-90 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">What Clients Are Saying</h2>
          </div>

          {/* Carousel */}
          <div className="carousel-container mx-auto p-4 max-w-2xl">
            <Carousel fade>
              <Carousel.Item>
                <img src={homeImage} alt="First slide" className="d-block w-100" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={homeImage} alt="Second slide" className="d-block w-100" />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={homeImage} alt="Third slide" className="d-block w-100" />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-gray-50 py-10 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-2">Team</h2>
            <p className="text-gray-600 mb-8">
              Our business hours are 9AM-6PM ET Monday-Friday and 9AM-5PM ET on weekends.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Chat support</h3>
                <p className="text-gray-600 mb-4">Our support team is just a click away.</p>
                <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Chat now &rarr;</a>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Email support</h3>
                <p className="text-gray-600 mb-4">
                  Prefer to email? Send us an email and we'll get back to you soon.
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Send email &rarr;</a>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Help center</h3>
                <p className="text-gray-600 mb-4">
                  Our self-serve help center is open 24/7 with 150+ articles to help.
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Visit Help Center &rarr;</a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Footer */}
        <ContactFooter />
      </div>
    </div>
  );
};

export default Contact;
