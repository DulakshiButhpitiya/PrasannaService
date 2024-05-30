import React from 'react';
import { Nav } from 'react-bootstrap';
import Logo from '../Assets/P (2).jpg';

const Headeerr = () => {
  return (
    <div className="bg-gray-800 text-white text-center py-2 h-13 shadow-xl">
      <div className="flex gap-6 text-center mx-auto justify-center items-center">
        
        <div className="shrink-0">
          <img className="h-12 w-12 object-cover rounded-full m-3" src={Logo} alt="Current profile photo" />
        </div>

        <Nav variant="tabs" className='m-1'>
          <Nav.Item>
            <Nav.Link href="/home">
              <span className="font-bold px-3 py-2 text-blue-200 rounded-lg hover:text-stone-700 text-sm">Home</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">
              <span className="font-bold px-3 py-2 text-blue-200 rounded-lg hover:text-stone-700 text-sm">About</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/service">
              <span className="font-bold px-3 py-2 text-blue-200 rounded-lg hover:text-stone-700 text-sm">Services</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/spareparts">
              <span className="font-bold px-3 py-2 text-blue-200 rounded-lg hover:text-stone-700 text-sm">Spareparts</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">
              <span className="font-bold px-3 py-2 text-blue-200 rounded-lg hover:text-stone-700 text-sm">Contact</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/booking">
              <span className="font-bold px-3 py-2 text-blue-200 rounded-lg hover:text-stone-700 text-sm">Booking Online</span>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <div className="ml-auto flex items-center">
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
            <a href="/login" className="text-sm font-medium text-blue-200 hover:text-stone-700">Sign in</a>
            <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
            <a href="/register" className="text-sm font-medium text-blue-200 hover:text-stone-700">Create account</a>
          </div>
          <div className="relative ml-4">
            <svg className="absolute text-slate-400 h-5 w-5 left-2 top-1/2 transform -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <input type="text" placeholder="Search" className="w-32 px-8 py-1 text-black bg-gray-200 rounded-lg"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headeerr;
