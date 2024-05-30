import React from 'react'
import { useState } from 'react';
import Calender from '../newComponent/Calender'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

const TableBooking = () => {
  return (
    <div  className="">
    <div className="absolute inset-0 flex items-center justify-center transform -translate-y-1/2 top-1/2">
      <div className="container mx-auto">
        <div className="row">
          <div className="bg-black bg-opacity-70 p-10 rounded-lg">
            <form>
              <div className="form-group mb-5">
                <div className="form-checkbox flex">
                  <label className="mr-5 text-white">
                    <input type="radio" id="roundtrip" name="flight-type" className="hidden" />
                    <span className="w-5 h-5 bg-white rounded-full inline-block mr-2 relative">
                      <span className="absolute inset-0 m-auto w-2.5 h-2.5 bg-red-600 rounded-full opacity-0 transition-opacity"></span>
                    </span> Roundtrip
                  </label>
                  <label className="mr-5 text-white">
                    <input type="radio" id="one-way" name="flight-type" className="hidden" />
                    <span className="w-5 h-5 bg-white rounded-full inline-block mr-2 relative">
                      <span className="absolute inset-0 m-auto w-2.5 h-2.5 bg-red-600 rounded-full opacity-0 transition-opacity"></span>
                    </span> One way
                  </label>
                  <label className="text-white">
                    <input type="radio" id="multi-city" name="flight-type" className="hidden" />
                    <span className="w-5 h-5 bg-white rounded-full inline-block mr-2 relative">
                      <span className="absolute inset-0 m-auto w-2.5 h-2.5 bg-red-600 rounded-full opacity-0 transition-opacity"></span>
                    </span> Multi-City
                  </label>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-6 mb-5 md:mb-0">
                  <div className="form-group">
                    <span className="form-label text-white block mb-1 ml-5 uppercase">Flying from</span>
                    <input className="form-control bg-white h-12 text-gray-900 rounded-full px-6 py-0 shadow-none" type="text" placeholder="City or airport" />
                  </div>
                </div>.....
                <div>
                <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select></div>..
                <div className="col-md-6">
                  <div className="form-group">
                    <span className="form-label text-white block mb-1 ml-5 uppercase">Flying to</span>
                    <input className="form-control bg-white h-12 text-gray-900 rounded-full px-6 py-0 shadow-none" type="text" placeholder="City or airport" />
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-3 mb-5 md:mb-0">
                  <div className="form-group">
                    <span className="form-label text-white block mb-1 ml-5 uppercase">Departing</span>
                    <input className="form-control bg-white h-12 text-gray-900 rounded-full px-6 py-0 shadow-none" type="date" required />
                  </div>
                </div>
                <div className="col-md-3 mb-5 md:mb-0">
                  <div className="form-group">
                    <span className="form-label text-white block mb-1 ml-5 uppercase">Returning</span>
                    <input className="form-control bg-white h-12 text-gray-900 rounded-full px-6 py-0 shadow-none" type="date" required />
                  </div>
                </div>
                <div className="col-md-2 mb-5 md:mb-0">
                  <div className="form-group">
                    <span className="form-label text-white block mb-1 ml-5 uppercase">Adults (18+)</span>
                    <select className="form-control bg-white h-12 text-gray-900 rounded-full px-6 py-0 shadow-none">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-2 mb-5 md:mb-0">
                  <div className="form-group">
                    <span className="form-label text-white block mb-1 ml-5 uppercase">Children (0-17)</span>
                    <select className="form-control bg-white h-12 text-gray-900 rounded-full px-6 py-0 shadow-none">
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-3 mb-5 md:mb-0">
                  <div className="form-group">
                    <span className="form-label text-white block mb-1 ml-5 uppercase">Travel class</span>
                    <select className="form-control bg-white h-12 text-gray-900 rounded-full px-6 py-0 shadow-none">
                      <option>Economy class</option>
                      <option>Business class</option>
                      <option>First class</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-btn">
                    <button className="submit-btn text-white bg-red-600 font-medium h-12 rounded-full w-full uppercase hover:opacity-90 transition-opacity">Show flights</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-5 md:mb-0">
                  <div className="form-group">
                    <span className="form-label text-white block mb-1 ml-5 uppercase">Flying from</span>
                    <input className="form-control bg-white h-12 text-gray-900 rounded-full px-6 py-0 shadow-none" type="text" placeholder="City or airport" />
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
      
    </div>

   
  )
}

export default TableBooking