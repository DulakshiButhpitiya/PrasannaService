import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import backgroundVideo from '../component/Assets/contactvideo.mp4'; // Ensure you have the correct path to your video file
import ContactFooter from '../component/newComponent/ContactFooter';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [feedbackData, setFeedbackData] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        alert('Feedback submitted successfully!');
      } else {
        alert('Failed to submit feedback.');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('An error occurred while submitting feedback.');
    }
  };

  useEffect(() => {
    const fetchFeedbackData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/feedback');
        const data = await response.json();
        
        setFeedbackData(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchFeedbackData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden" >
      {/* Main Content */}
      <div className="relative z-10">
        {/* Contact Form */}
        <div className="relative flex justify-center items-center w-full min-h-screen bg-blue-500 overflow-hidden"style={{ width: '1350px' }}>
          {/* Video Background */}
          <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          {/* Overlay to darken the video for better text visibility */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          {/* Contact Form Content */}
          <div className="relative w-full max-w-lg p-8 rounded-lg shadow-lg bg-transparent">
            <h1 className="text-3xl font-bold text-center mb-4 text-white">Contact Us</h1>
            <form id="contact-form" method="POST" className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <label htmlFor="name" className="text-gray-200">Full Name</label>
              <input
                name="name"
                placeholder="Enter full name..."
                type="text"
                className="p-2 bg-transparent border-b border-gray-200 focus:outline-none text-white placeholder-white"
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="email" className="text-gray-200">Email</label>
              <input
                name="email"
                placeholder="Enter email..."
                type="email"
                className="p-2 bg-transparent border-b border-gray-200 focus:outline-none text-white placeholder-white"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="message" className="text-gray-200">Message</label>
              <textarea
                rows="6"
                placeholder="Enter message..."
                name="message"
                required
                className="p-2 bg-transparent border-b border-gray-200 focus:outline-none text-white placeholder-white"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="mt-4 py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800">Send Message</button>
            </form>
          </div>
        </div>
   
        {/* Testimonials Section */}
        <div className="testimonials-wrap py-16 bg-white bg-opacity-90 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">What Clients Are Saying</h2>
          </div>

          {/* Slider */}
          <div className="slider-container mx-auto p-4 max-w-2xl">
            <Slider {...settings}>
              {feedbackData.map((feedback, index) => (
                <div key={index} className="testimonial-item p-6 bg-rose-200 rounded-md shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">{feedback.name}</h3>
                  <p className="text-gray-700">{feedback.message}</p>
                </div>
              ))}
            </Slider>
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
        {/* <ContactFooter /> */}
      </div>
    </div>
  );
};

export default Contact;
