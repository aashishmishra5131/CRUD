import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import countries from '../utils/country';

const About = () => {
  const navigate=useNavigate();
  const [Error, setError] = useState(false);
 

  const [formData, setFormData] = useState({
    Country: '',
    State: '',
    District: '',
    Textarea: '',
    Bike: false, 
    Married: false,
    Photo: null, 
  });

  const handleInputChange = (e) => {
    const { id, value, type, checked, files } = e.target;

    if (type === 'file') {
      setFormData({
        ...formData,
        Photo: files[0], 
      });
    } else if (type === 'checkbox') {
      setFormData({
        ...formData,
        [id]: checked, 
      });
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.Country || !formData.State || !formData.District) {
      setError(true);
      return;
    }
   console.log(formData);
   navigate('./');
  };


  return (
    <div className="container">
      <h2>About Page</h2>
      {Error && <p>Invalid</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Country">Country</label>
          <select
            className="form-control"
            id="Country"
            onChange={handleInputChange}
          >
            <option value="">Select a Country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="State">State</label>
          <input
            type="text"
            className="form-control"
            id="State"
            placeholder="Write State"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="District">District</label>
          <input
            type="text"
            className="form-control"
            id="District"
            placeholder="Write District"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
            <label htmlFor="Textarea">About Yourself</label>
            <textarea className="form-control" id="Textarea" rows="3" placeholder="Write Your Journey" onChange={handleInputChange}></textarea>
          </div>


        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="Bike"
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="Bike">
            Do you have a bike?
          </label>
        </div>

        <div className="form-check">
          <label className="form-check-label" htmlFor="Married">
            Are you married?
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="Married"
            value="true"
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            Yes
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="Married"
            value="false"
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            No
          </label>
        </div>

        <div className="form-check">
          <label htmlFor="photo">Upload Photo</label>
          <input
            type="file"
            className="form-control-file"
            id="photo"
            accept="image/*"
            onChange={handleInputChange}
          />
        </div>

        <div className="text-center mt-3">
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default About;



