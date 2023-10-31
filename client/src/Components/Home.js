import React,{useState} from 'react';
import {useLocation} from 'react-router-dom';
const Home = () => {
  const location=useLocation();
  const receivedData=location.state ? location.state.formData : null;
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Function to show the delete modal
  const showDeleteConfirmation = () => {
    setShowDeleteModal(true);
  };
  const hideDeleteConfirmation = () => {
    setShowDeleteModal(false);
  };
  const handleDelete = () => {
    setShowDeleteModal(false);
  };


  return (
    <>
    <div className="d-flex justify-content-center align-items-center" style={{ height: '40vh' }}>
      <div className="card" style={{ width: '40rem', background:'yellow' }}>
        <div className="card-body">
          <h5 className="card-title">Name :{receivedData ? receivedData.FirstName : ''}</h5>
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
            <a className="dropdown-item"onClick={showDeleteConfirmation}>
              Delete
            </a>
            <a className="dropdown-item" href="/about">
              Update
            </a>
          </div>
          <div className={`modal ${showDeleteModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showDeleteModal ? 'block' : 'none' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete Confirmation</h5>
                <button type="button" className="close" onClick={hideDeleteConfirmation}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete this item?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={hideDeleteConfirmation}>
                  Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
