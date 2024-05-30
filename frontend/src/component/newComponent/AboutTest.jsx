import React from 'react';
import { Link } from 'react-router-dom';

const AboutTest = () => {
  return (
    <div className="about-box bg-gray-100 p-4 rounded-md shadow-md h-full">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">WHO ARE WE</h1>
      </div>
      <div className="text-xl leading-8 text-center">
        <p>
          Established in 2013, our founding principle was to provide the automobile owners of Sri Lanka with the finest total 
          auto care solutions on the market. To this day, over two decades later, this remains our core objective and, as a result, 
          Prasanna bike service center has emerged as the island’s leader in automobile services. 
        </p>
        <p>
          At the heart of each and every one of our employee’s work ethic is a customer-centric approach dedicated to delivering our clients with the best bike care solutions. It is this commitment that has facilitated our growth – resulting in Rio car service being recognized as a leading motorbike care solutions and motorbike maintenance service provider with the largest customer base to date.
        </p>
        <p>Our aim is your satisfaction</p>
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/service">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Our Services</button>
        </Link>
      </div>
    </div>
  );
}

export default AboutTest;
