import React from 'react'
import video from '../Assets/'

const Video = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
    <video 
      className="absolute top-0 left-0 w-full h-full object-cover"
      src={videoSource}
      autoPlay
      loop
      muted
    />
    <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Our Mission</h1>
        <p className="text-gray-700">
          At our bike service center and spare parts shop, our mission is to provide top-notch service and high-quality parts to keep your bike running smoothly. We are dedicated to ensuring that every rider has a safe, enjoyable, and hassle-free biking experience. With our experienced technicians and extensive range of spare parts, we strive to be your trusted partner in all your biking needs.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Video