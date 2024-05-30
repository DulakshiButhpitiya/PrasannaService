
import React from 'react';
import './Home.css';
import BannerImage from "../component/Assets/home.jpg";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Prasanna Service Center & Spareparts </h1>
        <Link to="/booking">
          <button> Booking Online </button>
        </Link>
      </div> 
      <div className="top-right">
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <button style={{ padding: '10px', backgroundColor: 'transparent', border: '1px solid #fff', color: '#fff', cursor: 'pointer' }}>Login</button>
        </Link>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 offset-md-1">
            <div class="about_img">
              <div class="about_box">
                <h3> </h3>
                <p>Established in 2013, our founding principle was to provide the automobile owners of Sri Lanka with the finest total auto care solutions on the market. To this day, over two decades later, this remains our core objective and, as a result, Prasanna bike service center has emerged as the island’s leader in automobile services. At the heart of each and every one of our employee’s work ethic is a customer-centric approach dedicated to delivering our clients with the best bike care solutions. It is this commitment that has facilitated our growth – resulting in Rio car service being recognized as a leading motorbike care solutions and motorbike maintenance service provider with the largest customer base to date. </p>
                <a class="read_more">Our aim is your satisfaction</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
