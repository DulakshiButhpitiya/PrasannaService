import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginRegistration.css';
import '../Login&Registration/BackLogin.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginRegistration = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:4000/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.role === 1) {
          navigate('/home');
        }if(data.role!=0) {
          navigate('/admin/Dashboard')
        }else {
          console.log('Login successful:', data);
        }
      } else {
        console.error('Login failed:', data);
      }
    } catch (error) {
      console.error('Error during login:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='body full-page-div'>
      <div className='wrapper'>
        <div className="form-box login">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder='Username'
                required
                value={email}
                onChange={(e) => setUsername(e.target.value)}
              />
              <FaUser className='icon' />
            </div>

            <div className="input-box">
              <input
                type="password"
                placeholder='Password'
                required
                className='mb-3'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className='icon' />
            </div>

            <div className="remember-forgot">
              <label style={{ fontSize: '12px', display: 'flex', alignItems: 'center' }}>
                <input type="checkbox" style={{ marginRight: '5px' }} />
                Remember me
              </label>
              <a href="/ForgotPass" style={{ fontSize: '12px', textDecoration: 'none', color: '#fff', marginLeft: '10px' }} className='mt-3'>Forgot Password?</a>
            </div>

            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </button>

            <div className="register-link">
              <p>Don't have an account? <a href="/register">Register</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegistration;
