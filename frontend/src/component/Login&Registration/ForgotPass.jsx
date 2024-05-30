import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import '../Login&Registration/ForgotPass.css';

const ForgotPass = () => {
  return (
    <div>  <div className='body full-page-div forgot-password-body'> {/* Add the new CSS class here */}
    <div className={'wrapper'}>
      <div className="form-box forgot-password">
        <form action="">
          <h1>Forgot Password</h1>
          <div className="input-box">
            <input type="email" placeholder='Email Address' required />
            <FaEnvelope className='icon' />
          </div>
          <button type="submit">Reset Password</button>
          <div className="register-link">
            <p>Remember your password? <a href="/login">Login</a></p>
          </div>
        </form>
      </div>
    </div>
  </div></div>
  )
}

export default ForgotPass