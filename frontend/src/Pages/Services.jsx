import React from 'react'
import { Menulist } from '../component/Layout/MenuItem/Menulist'; 
import Menuitem from '../component/Layout/MenuItem/Menuitem';
import MultiplePizzas from "../component/Assets/ping.jpg"
import "../Pages/Services.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Servicing from '../component/Assets/servicing.jpg'
import "../component/newComponent/Servicestype"
import Servicestype from '../component/newComponent/Servicestype';
import Paragraph from '../component/newComponent/Paragraph';
import About from '../component/Assets/contacct.jpg'
import ServiceTable from '../component/newComponent/ServiceTable';
import Bike from '../component/Assets/Bike.jpeg'
import Bajaj from '../component/Assets/bajaj.png';
import Hero from '../component/Assets/hero.png';
import Honda from '../component/Assets/honda.png';
import KTM from '../component/Assets/ktm.png';
import TVS from '../component/Assets/tvs.png';
import Yamaha from '../component/Assets/yamaha.png';

  const makers = [
      { name: 'BAJAJ', logo: Bajaj },
      { name: 'HERO', logo: Hero },
      { name: 'HONDA', logo: Honda },
      { name: 'KTM', logo: KTM },
      { name: 'TVS', logo: TVS },
      { name: 'YAMAHA', logo: Yamaha },
    ];
const Services = () => {
  return (
  
  <div className="aboutt">
      <div
        className="aboutTopp "
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div style={{marginTop: "299px"}}>
        <div>
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
            <div className="p-4">
              <div className="flex justify-center mb-3">
                <img src={Bike} alt="Motorbike" className="h-25 w-25 object-cover rounded-full shadow-lg"/>
              </div>
              <h2 className="text-2xl font-semibold text-center mb-2 ">Motorcycle Service</h2>
              <p className="text-gray-700 font-bold mb-2 text-justify">Lubricant service at an affordable price</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 text-justify">
                <li>Oil and filter change</li>
                <li>Advising customer on choosing correct oil &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type</li>
                <li>Cleaning of oil strainer/ centrifugal filter/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;oil filter</li>
                <li>Cleaning air filter element & air filter cover</li>
                <li>Engine idling speed adjustment</li>
                <li>Complete wash and wax free check-up</li>
                <li>Spark plug cleaning and gap adjustment  </li>
                <li>Clutch lever free play adjustment</li>
                <li>Brake cam & pedal pivot pin check</li>
                <li>Steering play adjustment</li>
                <li>Battery electrolyte level check</li>
                <li>Light / horn & switch operation and much &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;more</li>
              </ul>
              <p className="text-gray-700 font-bold mb-2 text-justify">Service related labour free on 5th service. 
*Conditions apply <br/>
Contact us on 0114700630</p>
            </div>
          </div>

          <div className="flex max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
            <div className="p-4 w-2/3">
              <h2 className="text-2xl font-semibold mb-4">Servicing & Repair</h2>
              <p className="text-gray-700 mb-2">
                "Experience top-notch bike services and repairs tailored to meet your every need at our bike service center. From routine maintenance checks to complex repairs, our team of skilled technicians ensures your bike performs at its best. Whether you're looking for a tune-up, brake adjustments, tire replacements, or comprehensive diagnostics, we've got you covered. With a commitment to quality and customer satisfaction, we strive to keep you riding smoothly and safely on the road."
              </p>
            </div>
            <div className="w-1/3">
              <img src={Servicing} alt="About Us" className="object-cover h-full w-full"/>
            </div>
          </div>
          <ServiceTable/>
          {/* brand images */}
          <div className="bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-2">Popular Vehicle Makers</h2>
        <p className="text-gray-600 mb-8">Select vehicles to suit your purse and need from your preferred Brand.</p>
        <div className="flex flex-wrap justify-center gap-4">
          {makers.map((maker) => (
            <div key={maker.name} className="bg-white shadow-lg rounded-lg p-4 w-36 flex flex-col items-center">
              <img src={maker.logo} alt={maker.name} className="h-16 mb-2" />
              <p className="font-semibold">{maker.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
          <section className="caviar-about-us-area section-padding-150" id="about">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-5">
                  <div className="about-us-thumbnail wow fadeInUp" data-wow-delay="0.5s">
                    <img src={About}  alt="About Us"/>
                  </div>
                </div>
                  <div className="col-12 col-md-6 col-lg-5 ml-md-auto">
                  <div className="section-heading">
                    <h2>About Us</h2>
                  </div>
                  <div className="about-us-content">
                    <span>restaurant style</span>
                    <p>
                      Sed commodo augue eu diam tincidunt, sit amet auctor lectus semper. Mauris porttitor diam at fringilla tempor. Integer molestie rhoncus nisi a euismod. Etiam scelerisque eu enim et vestibulum. Mauris finibus, eros a faucibus varius, dui risus mattis massa, sed lobortis ante ante eget justo. Nam eu dolor lorem. Praesent blandit leo sit amet velit accumsan ultrices. Vestibulum nec libero vel sapien dictum euismod eu ac justo.
                    </p>
                  </div>
                </div> 
              </div>
            </div>
          </section>
        </div>
         <div className="d-flex justify-content-around">
          <Servicestype/>
          <Servicestype/>
          <Servicestype/> 
        </div> 
      </div>
    </div>
  )
}

export default Services