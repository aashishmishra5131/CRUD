import React from 'react';

const Home = () => {


  return (
    <>
    <div className="d-flex justify-content-center align-items-center" style={{ height: '40vh' }}>
      <div className="card" style={{ width: '40rem', background:'yellow' }}>
        <div className="card-body">
          <h5 className="card-title">Name : Alex Pop</h5>
          <h6 className="card-subtitle mb-2 text-muted">Email id : abc@gmail.com</h6>
          <h6 className="card-subtitle mb-2 text-muted">Phone Number : 9952243152</h6>
          <h6 className="card-subtitle mb-2 text-muted">Adderss : kolela, HDHC, India</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          
          <a href="/profile" className="card-link">
            Go to profile
          </a>
        </div>
        <div className="dropdown" style={{ position: 'absolute', top: '0', right: '0' }}>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {/* Three dots icon (⋮ or ...) */}
            ⋮
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item">
              Delete
            </a>
            <a className="dropdown-item" href="/about">
              Update
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
