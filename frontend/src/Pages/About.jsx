import React from "react";
import MultiplePizzas from "../component/Assets/aboutfirst.jpg";
import VisionImage from '../component/Assets/Oil and filter change.jpg';
import Image2 from '../component/Assets/bikeblack.jpg';
import AboutUs from '../component/newComponent/AboutUs';
import NewAbout from "../component/newComponent/NewAbout";
import NewVision from "../component/newComponent/NewVision";
import FullBackground from "../component/newComponent/FullBackground";
import DarkLayout from "../component/newComponent/DarkLayout";

const About = () => {
  return (
    <div className="about">
      <div className="aboutTop relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${MultiplePizzas})` }}>
        <h1 className="text-white text-4xl md:text-6xl font-bold absolute top-3/4 left-8 transform -translate-y-1/2 animate-fadeIn shadow-lg text-shadow">Getting to know us...</h1>
      </div>
      <div className="aboutBottom p-8 bg-gray-100">
        <NewAbout />
        <br />
        <NewVision />
      </div>
     
      <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">Our Mission</h1>
          <p className="text-gray-700">
            At our bike service center and spare parts shop, our mission is to provide top-notch service and high-quality parts to keep your bike running smoothly. We are dedicated to ensuring that every rider has a safe, enjoyable, and hassle-free biking experience. With our experienced technicians and extensive range of spare parts, we strive to be your trusted partner in all your biking needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
