import React from 'react'
import  { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const SparepartsList = () => {
    const [spareParts, setSpareParts] = useState([]);

  useEffect(() => {
    const fetchSpareParts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/spareparts');
        setSpareParts(response.data);
      } catch (error) {
        console.error('Error fetching spare parts:', error);
      }
    };

    fetchSpareParts();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {spareParts.map((part) => (
          <div key={part._id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={`http://localhost:4000/${part.image}`} className="card-img-top" alt={part.description} />
              <div className="card-body">
                <h5 className="card-title">{part.itemNo}</h5>
                <p className="card-text">{part.description}</p>
                <p className="card-text"><strong>Price:</strong> {part.prices}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SparepartsList