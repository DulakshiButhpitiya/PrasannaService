import React from 'react'
import Fimage from '../Assets/contacct.jpg'

const Footeerr = () => {
  return (
  
      <footer className="bg-gray-200 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="relative w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <div className="absolute top-0 left-0 h-20 w-20 bg-green-500 rounded-full"></div>
            <div className="absolute bottom-0 right-0 h-14 w-14 bg-green-500 rounded-full"></div>
            <img 
              src={Fimage} 
              alt="Office setup" 
              className="rounded-full object-cover w-80 h-80"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p className="mt-4 text-gray-700">
            Get a professional mechanic for two-wheeler service, doorstep bike repair, engine care, engine repair, EV Bike Repair, and much more.
            </p>
            <div className="mt-6 space-y-2">
              <p className="text-lg"><strong>Phone:</strong> 077 224 5022/ 033 7570277</p>
              <p className="text-lg"><strong>Location:</strong> No 243 Radawana Road, Delovita</p>
              <p className="text-lg"><strong>Mail:</strong> ab_zki@abansgroup.com</p>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Image from <a href="https://freepik.com" className="text-green-500 hover:underline">Freepik</a>
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footeerr