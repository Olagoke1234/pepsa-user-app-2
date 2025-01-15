import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { FaUserCircle } from "react-icons/fa"; // Using FontAwesome for the icon
import "../componentsCSS/UserIdentification.css";

const UserIdentification = () => {
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate(); // Initialize the navigation hook

  useEffect(() => {
    // Redirect after 10 seconds
    const timer = setTimeout(() => {
      navigate("/privacy-terms"); // Replace "/next-page" with your desired route
    }, 10000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigate]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result); // Set the preview
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <div className="user-identification-heading">
        <h1>User Identification</h1>
        <p>Take a selfie for identification</p>
      </div>
      <div className="upload-container">
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleFileChange}
          className="fileInput"
        />
        <label htmlFor="fileInput" className="uploadBox">
          {preview ? (
            <img src={preview} alt="Preview" className="imagePreview" />
          ) : (
            <>
              <FaUserCircle className="icon" />
              <p className="text">Picture selfie</p>
            </>
          )}
        </label>
      </div>
    </div>
  );
};

export default UserIdentification;
