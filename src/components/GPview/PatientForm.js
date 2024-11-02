import React, { useState } from "react";
import { FaUser, FaPhone, FaPaperPlane, FaCalendarAlt, FaEnvelope, FaIdCard } from "react-icons/fa";
import "./PatientForm.css";

const PatientForm = ({ onFormSubmit }) => {
  const [patientInfo, setPatientInfo] = useState({
    name: "",
    phone: "",
    dob: "",
    sin: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(patientInfo);
  };

  return (
    <form onSubmit={handleSubmit} className="patient-form">
      <h2 className="form-title">Patient Registration</h2>
      <p className="form-subtitle">
        Please provide accurate details for appointment scheduling.
      </p>

      {/* Full Name */}
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          <FaUser className="icon" /> Full Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={patientInfo.name}
          onChange={handleChange}
          className="form-input"
          placeholder="Enter full name"
          required
        />
      </div>

      {/* Phone Number */}
      <div className="form-group">
        <label htmlFor="phone" className="form-label">
          <FaPhone className="icon" /> Phone Number:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={patientInfo.phone}
          onChange={handleChange}
          className="form-input"
          placeholder="Enter phone number"
          required
        />
      </div>

      {/* Date of Birth */}
      <div className="form-group">
        <label htmlFor="dob" className="form-label">
          <FaCalendarAlt className="icon" /> Date of Birth:
        </label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={patientInfo.dob}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>

      {/* Social Insurance Number (SIN) */}
      <div className="form-group">
        <label htmlFor="sin" className="form-label">
          <FaIdCard className="icon" /> SIN:
        </label>
        <input
          type="text"
          id="sin"
          name="sin"
          value={patientInfo.sin}
          onChange={handleChange}
          className="form-input"
          placeholder="Enter SIN (Social Insurance Number)"
          required
        />
      </div>

      {/* Email */}
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          <FaEnvelope className="icon" /> Email Address:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={patientInfo.email}
          onChange={handleChange}
          className="form-input"
          placeholder="Enter email address"
          required
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="submit-btn">
        <FaPaperPlane className="submit-icon" /> Submit Information
      </button>
    </form>
  );
};

export default PatientForm;
