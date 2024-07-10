import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import '../Pages/Spareparts.css';
import axios from 'axios';

const SparepartsReg = () => {
  const [formData, setFormData] = useState({
    itemNo: '',
    itemCode: '',
    description: '',
    quantity: '',
    prices: '',
    brand: '',
    bikeModel: '',
    file: null
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'file') {
      setFormData({
        ...formData,
        [name]: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.itemNo || isNaN(parseInt(formData.itemNo))) newErrors.itemNo = 'Please enter a valid item number (e.g., 001).';
    if (!formData.itemCode) newErrors.itemCode = 'Item Code is required (e.g., LPCALOIL007).';
    if (!formData.description) newErrors.description = 'Description is required (e.g., Oil filter for 2022 model).';
    if (!formData.quantity || isNaN(parseInt(formData.quantity))) newErrors.quantity = 'Please enter a valid quantity (e.g., 1).';
    if (!formData.prices || !/^\d+(\.\d{1,2})?$/.test(formData.prices)) newErrors.prices = 'Please enter a valid price (e.g., RS.2333.00).';
    if (!formData.brand) newErrors.brand = 'Brand is required (e.g., Honda).';
    if (!formData.bikeModel) newErrors.bikeModel = 'Bike Model is required (e.g., CB500).';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', formData); // Check if formData is correct
    setErrors({});
    setSuccess('');
  
    // Rest of your handleSubmit function...
  
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      const formDataToSubmit = new FormData();
      for (const key in formData) {
        formDataToSubmit.append(key, formData[key]);
      }
      try {
        const response = await axios.post('http://localhost:4000/api/spareparts', formDataToSubmit, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        setSuccess('Spare part registered successfully!');
        // Clear form after successful submission if needed
        setFormData({
          itemNo: '',
          itemCode: '',
          description: '',
          quantity: '',
          prices: '',
          brand: '',
          bikeModel: '',
          file: null,
        });
      } catch (error) {
        console.error('Submission error:', error.response ? error.response.data : error.message);
        setErrors({ submit: error.response ? error.response.data : 'An error occurred during submission.' });
        // Handle error
      }
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border border-gray-300 shadow-lg rounded-md bg-white" style={{ width: '750px' }}>
      <h2 className="text-2xl font-bold mb-6">Spare Parts Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Item No</label>
          <input
            type="text"
            name="itemNo"
            placeholder="001"
            value={formData.itemNo}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
          />
          {errors.itemNo && <p className="text-red-500 text-sm">{errors.itemNo}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Item Code</label>
          <input
            type="text"
            name="itemCode"
            placeholder="e.g., LPCALOIL007"
            value={formData.itemCode}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
          />
          {errors.itemCode && <p className="text-red-500 text-sm">{errors.itemCode}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <input
            type="text"
            name="description"
            placeholder="e.g., Oil filter for 2022 model"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Quantity</label>
          <input
            type="text"
            name="quantity"
            placeholder="e.g., 1"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
          />
          {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Prices</label>
          <input
            type="text"
            name="prices"
            placeholder="e.g., RS.2333.00"
            value={formData.prices}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
          />
          {errors.prices && <p className="text-red-500 text-sm">{errors.prices}</p>}
        </div>
        <div><label className='block text-sm font-medium mb-1'>
          Name</label>
          <input
          type="text"
          name="Name"
          className="w-full border border-gray-300 px-3 py-2 rounded-md"
          />
          </div>
        <div>
          <label className="block text-sm font-medium mb-1">Brand</label>
          <input
            type="text"
            name="brand"
            placeholder="e.g., Honda"
            value={formData.brand}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
          />
          {errors.brand && <p className="text-red-500 text-sm">{errors.brand}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Bike Model</label>
          <input
            type="text"
            name="bikeModel"
            placeholder="e.g., CB500"
            value={formData.bikeModel}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
          />
          {errors.bikeModel && <p className="text-red-500 text-sm">{errors.bikeModel}</p>}
        </div>
        <Form.Group className="position-relative mb-3">
          <Form.Label>File</Form.Label>
          <Form.Control
            type="file"
            name="file"
            onChange={handleChange}
            className="border-2 border-blue-500"
          />
          {errors.file && <p className="text-red-500 text-sm">{errors.file}</p>}
        </Form.Group>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button> {Object.keys(errors).length > 0 && (
          <div className="text-red-500">
            {Object.values(errors).map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        {success && <p className="text-green-500">{success}</p>}
      </form>
    </div>
  );
};

export default SparepartsReg