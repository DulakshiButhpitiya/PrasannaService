import React from 'react';
import Image from '../Assets/bikeblack.jpg';
import Image2 from '../Assets/contacct.jpg';
import Image4 from '../Assets/expensive.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactFooter = () => {
    return (
        <div>
            <section className="relative bg-cover bg-center" style={{ backgroundImage: `url(${Image2})` }}>
                <div className="bg-black bg-opacity-50 py-20">
                    <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
                        <div className="w-full md:w-1/2 mb-8 md:mb-0">
                            <img 
                                src={Image2}
                                alt="Musician with guitar" 
                                className="w-full h-auto rounded shadow-lg"
                            />
                        </div>
                        <div className="w-full md:w-1/2 text-white text-center md:text-left">
                            <h2 className="text-3xl font-bold mb-4">ABOUT US</h2>
                            <h3 className="text-xl font-bold text-blue-500 mb-4">WE ARE MADASS RECORDING STUDIOS, WE BRING OUR MUSICIAN TO HIGH LEVEL</h3>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet, libero turpis non cras ligula, id commodo, aenean est in volutpat amet sodales, porttitor bibendum facilisi suspendisse, aliquam ipsum ante morbi sed ipsum mollis. Sollicitudin viverra, vel varius eget sit mollis.
                            </p>
                            <p>
                                Commodo enim aliquam suspendisse tortor cum diam, commodo facilisis, rutrum et duis nisl porttitor, vel eleifend odio ultricies ut, orci in adipiscing felis velit nibh. Consectetuer porttitor feugiat vestibulum sit feugiat, voluptates dui eros libero. Etiam vestibulum at lectus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        
    
            <footer className="bg-gray-200 py-12">
              <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                <div className="relative w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                  <div className="absolute top-0 left-0 h-20 w-20 bg-orange-500 rounded-full"></div>
                  <div className="absolute bottom-0 right-0 h-14 w-14 bg-orange-500 rounded-full"></div>
                  <img 
                    src="https://via.placeholder.com/300" 
                    alt="Office setup" 
                    className="rounded-full object-cover w-80 h-80"
                  />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h2 className="text-2xl font-bold">Contact Us</h2>
                  <p className="mt-4 text-gray-700">
                    We are here to meet any business need and to promote your company online!
                  </p>
                  <div className="mt-6 space-y-2">
                    <p className="text-lg"><strong>Phone:</strong> 1 (232) 252 55 22</p>
                    <p className="text-lg"><strong>Location:</strong> 75 Street Sample, WI 63025</p>
                    <p className="text-lg"><strong>Mail:</strong> template@sample.com</p>
                  </div>
                  <p className="mt-4 text-sm text-gray-500">
                    Image from <a href="https://freepik.com" className="text-orange-500 hover:underline">Freepik</a>
                  </p>
                </div>
              </div>
            </footer></div>
  )
}

export default ContactFooter