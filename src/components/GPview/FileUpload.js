import React, { useState } from "react";
import { FaFileUpload } from "react-icons/fa";
import "./FileUpload.css";

const FileUpload = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    onFileUpload(uploadedFile);
  };

  return (
    <div className="file-upload-container">
      <div className="file-upload-header">
        <FaFileUpload className="file-icon" />
        <h4 className="file-upload-title">Attach Patient File</h4>
      </div>
      <input type="file" id="fileInput" onChange={handleFileChange} className="file-input" />
      <label htmlFor="fileInput" className="file-input-label">
        Choose File
      </label>
      {file && <p className="file-preview">Selected File: <strong>{file.name}</strong></p>}
    </div>
  );
};

export default FileUpload;
