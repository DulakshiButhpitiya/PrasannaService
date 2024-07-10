import React from 'react'

const TemplateCard = ({ title, description, blur, textColor }) => {
  return (
    <div className={`w-1/3 relative ${blur}`}>
     {/* <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${backgroundImage})` }} /> */}
    <div className="absolute inset-0 bg-black opacity-25 z-10" />
    <div className={`relative z-20 ${textColor}`}>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p>{description}</p>
    </div>
  </div>
  )
}

export default TemplateCard

