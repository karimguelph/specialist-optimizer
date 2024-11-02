import React, { useState } from "react";
import SearchBar from "../components/GPview/SearchBar";
import BookingCalendar from "../components/GPview/BookingCalendar";
import FileUpload from "../components/GPview/FileUpload";
import PatientForm from "../components/GPview/PatientForm";
import "../styles/FamilyMedicineView.css";

console.log("FamilyMedicineView Loaded");


const FamilyMedicineView = () => {
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [patientInfo, setPatientInfo] = useState(null);

  const handleSpecialistSelect = (specialist) => {
    setSelectedSpecialist(specialist);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleFileUpload = (file) => {
    setUploadedFile(file);
  };

  const handleFormSubmit = (info) => {
    setPatientInfo(info);
    console.log("Booking Request:", {
      specialist: selectedSpecialist,
      date: selectedDate,
      file: uploadedFile,
      patientInfo: info,
    });
  };

  return (
    <div className="family-medicine-view">
      <header className="view-header">
        <h1 className="view-title">Family Medicine Booking</h1>
        <p className="view-subtitle">Easily book appointments with our specialists.</p>
      </header>

      <section className="search-section">
        <SearchBar onSelectSpecialist={handleSpecialistSelect} />
      </section>

      {selectedSpecialist && (
        <section className="booking-details">
          <div className="specialist-info">
            <h3 className="booking-title">Booking with Dr. {selectedSpecialist.name}</h3>
            <p className="specialty">{selectedSpecialist.specialty}</p>
          </div>

          <div className="calendar-upload-container">
            <BookingCalendar availableDates={selectedSpecialist.availability} onSelectDate={handleDateSelect} />
            <FileUpload onFileUpload={handleFileUpload} />
          </div>

          <div className="patient-form-section">
            <PatientForm onFormSubmit={handleFormSubmit} />
          </div>
        </section>
      )}
    </div>
  );
};

export default FamilyMedicineView;
