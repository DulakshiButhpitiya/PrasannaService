import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaAddressCard, FaEye, FaEyeSlash } from "react-icons/fa";
import './Reg.css'; // Ensure this CSS file doesn't conflict with Tailwind CSS
import axios from 'axios';

const Reg = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    number: '',
    address: '',
    password: '',
    confirmPassword: ''
  });
  

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  // const { login } = useAuth();
  // const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhoneNumber = (number) => {
    const re = /^\d{10}$/;
    return re.test(number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Invalid email format');
      return;
    }

    if (!validatePhoneNumber(formData.number)) {
      setError('Invalid phone number format');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/user/register', {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        number: formData.number,
        address: formData.address,
        password: formData.password
      });
      setSuccess('Registration successful!');
    } catch (error) {
      setError(error.response ? error.response.data.message : 'Registration failed');
    }
  };

  return (
    <div className='body full-page-div'>
      <div className={'wrapper'}>
        <div className="form-box register">
          <form onSubmit={handleSubmit}>
            <h1>Registration</h1>

            <div className="flex flex-wrap -mx-3 mb-1">
              <div className="w-full md:w-1/2 px-3 mb-1">
                <div className="input-box">
                  <input
                    type="text"
                    name="firstname"
                    placeholder='First Name'
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                  <FaUser className='icon' />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-1">
                <div className="input-box">
                  <input
                    type="text"
                    name="lastname"
                    placeholder='Last Name'
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                  />
                  <FaUser className='icon' />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-1">
                <div className="input-box">
                  <input
                    type="email"
                    name="email"
                    placeholder='Email Address'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <FaEnvelope className='icon' />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-1">
                <div className="input-box">
                  <input
                    type="text"
                    name="number"
                    placeholder='Contact Number'
                    value={formData.number}
                    onChange={handleChange}
                    required
                  />
                  <FaPhone className='icon' />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-1">
                <div className="input-box">
                  <input
                    type="text"
                    name="address"
                    placeholder='Address'
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                  <FaAddressCard className='icon' />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-1">
                <div className="input-box relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-1">
                <div className="input-box relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder='Confirm Password'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                 
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>

            <div className="remember-forgot">
              <div className="checkbox-container flex justify-between">
                <label>
                  <input type="checkbox" />Remember me
                </label>
                <a href="/ForgotPass" className="forgot-password">Forgot Password?</a>
              </div>
            </div>

            <button type="submit" >Register</button>

            <div className="register-link">
              <p>Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
            </div>

            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reg;
