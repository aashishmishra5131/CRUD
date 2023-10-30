// src/components/Profile.js
import React from 'react';

const Profile = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <img
            src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
            alt="Profile Picture"
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-md-9">
          <h2>Name : Alex Pop</h2>
          <p>Email : user@example.com</p>
          <p>Phone Number : 9525531535</p>
          <p>Address : District, City, Country</p>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
