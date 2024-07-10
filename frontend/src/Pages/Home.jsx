import React from 'react';
import './Home.css';
import BannerImage from "../component/Assets/pexels-punttim-240222.jpg";
import { Link } from 'react-router-dom';


import AboutTest from '../component/newComponent/AboutTest';
import DetailsCon from '../component/newComponent/DetailsCon';
import DarkModeToggle from '../component/newComponent/DarkMode';
import UserProfile from '../component/newComponent/UserProfile';

const Home = () => {
  return (
    <div>
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1 className="text-pink-100 text-shadow" style={{ color: '#0e7490 !important' }}>Prasanna Service Center & Spareparts</h1>
          <Link to="/register">
            <button>Book Now</button>
          </Link>
        </div>
      </div>
      <div className="content-container mx-auto px-4 py-16 bg-gray-100">
        <div className="flex-container">
          <div className="about-container drop-shadow-lg">
            <AboutTest />
          </div>
          <div className="details-container">
            <DetailsCon />
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Home;
