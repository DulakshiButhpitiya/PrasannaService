import React from 'react'
import SparepartsList from '../component/newComponent/SparepartsList'
import MultiplePizzas from "../component/Assets/Sparecover.jpg";

const Spareparts = () => {
  return (
    <div className='' style={{ width: '1350px' }}> <div className="aboutTop relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${MultiplePizzas})` }}>
    <h1 className="text-white text-4xl md:text-6xl font-bold absolute top-3/4 left-8 transform -translate-y-1/2 animate-fadeIn shadow-lg text-shadow">Spare parts...</h1>
  </div>
      <SparepartsList/>
    </div>
  )
}

export default Spareparts