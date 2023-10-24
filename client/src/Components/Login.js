import React, { useState } from 'react';
import { Link} from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    Email_id: '',
    phone: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="email_id">Email Id</label>
              <input
                type="text"
                className="form-control"
                id="Email_id"
                placeholder="Enter your Email"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                onChange={handleInputChange}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="text-center">Do not have account? <Link to={'/register'}><span className="text-blue">Register</span></Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

