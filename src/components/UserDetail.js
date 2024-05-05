import React, { useState, useEffect } from "react";
import "../App.css";
import {Link} from 'react-router-dom'

const UserDetail = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    NotesSummary: ""
  });

  // Load data from local storage on initial render
  useEffect(() => {
    const storedImage = localStorage.getItem("selectedImage");
    const storedFormData = JSON.parse(localStorage.getItem("formData"));

    if (storedImage) {
      setSelectedImage(storedImage);
    }

    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);

  // Save form data and image URL to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("selectedImage", selectedImage);
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [selectedImage, formData]);

  const handleHover = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  const handleGalleryOpen = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleProfileClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowForm(false);
    // You can perform any additional actions here
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="mainContainer">
      <h2 style={{ marginBottom: "30px", textAlign:"center" }}>User Details</h2>
      <div className="innerContainer">
        <div className="left">
          <div
            className="userImage"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            onClick={handleGalleryOpen}
            style={{ backgroundImage: `url(${selectedImage})`,marginBottom:'13px' }}
          >
            {showOptions && (
              <div className="imageOptions">
                <i className="far fa-edit mx-2"></i>
              </div>
            )}
          </div>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            style={{ display: "none"}}
            onChange={handleFileSelect}
          />
          <div className="mb-3">
            <Link to="/" className="imageClicks" onClick={handleProfileClick}>Profile</Link>
          </div>
        </div>
      {/* <div className="middle"></div> */}
        {showForm && (
          <div className={`center-form ${showForm ? "show" : ""}`}>
            <div className="formContainer fillbox">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <input type="number" placeholder="Phone No." name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder="Education" name="education" value={formData.education} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <textarea type="text" placeholder="Project Summary" name="projectSummary" value={formData.projectSummary} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="right">
          <div>
            <h3>User Data</h3>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Phone: {formData.phone}</p>
            <p>Education: {formData.education}</p>
            <p>Project Summary: {formData.projectSummary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;