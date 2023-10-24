import React, { useState } from 'react';
import countries from './country'; 

const About = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  

  const [formData, setFormData] = useState({
    Country: '',
    State: '',
    District: '',
    Bike: '',
    Married: '',
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
      <h2>About Page</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="Country">Country</label>
        <select
          className="form-control"
          id="Country"
        //   value={Country}
          onChange={handleInputChange}
        >
          <option value="">Select a country</option>
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
 
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="Bike"
          onChange={handleInputChange}
        />
        <label className="form-check-label" htmlFor="Bike">
          Do you have bike?
        </label>
      </div>

      <div className="form-check">
      <label className="form-check-label" htmlFor="Married">
      Are you married?
     </label>
      </div>
     <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio" name="inlineRadioOptions" id="Married" value="true" onChange={handleInputChange}/>
     <label className="form-check-label" for="inlineRadio1">Yes</label>
    </div>
    <div className="form-check form-check-inline">
    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="Married" value="false"  onChange={handleInputChange}/>
    <label className="form-check-label" for="inlineRadio2">No</label>
    </div>

      <div className="text-center mt-3">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
  </form>
    </div>
  );
};

export default About;


