import React, { useState } from "react";
import Select from "react-select";
import { FaFilter } from "react-icons/fa";
import { motion } from "framer-motion";

const specialties = [
  { value: "Cardiology", label: "Cardiology" },
  { value: "Neurology", label: "Neurology" },
  { value: "Orthopedics", label: "Orthopedics" },
  { value: "Pediatrics", label: "Pediatrics" },
  { value: "Dermatology", label: "Dermatology" },
  { value: "Psychiatry", label: "Psychiatry" },
  { value: "Oncology", label: "Oncology" },
  { value: "Gastroenterology", label: "Gastroenterology" },
  { value: "Endocrinology", label: "Endocrinology" },
  { value: "Rheumatology", label: "Rheumatology" },
  { value: "Allergy & Immunology", label: "Allergy & Immunology" },
  { value: "Ophthalmology", label: "Ophthalmology" },
  { value: "Urology", label: "Urology" },
  { value: "Gynecology", label: "Gynecology" },
  { value: "Pulmonology", label: "Pulmonology" },
  { value: "Plastic Surgery", label: "Plastic Surgery" },
  { value: "Nephrology", label: "Nephrology" },
  { value: "Otolaryngology", label: "Otolaryngology" },
  { value: "Family Medicine", label: "Family Medicine" },
  { value: "General Surgery", label: "General Surgery" },
  { value: "Hematology", label: "Hematology" },
  { value: "Infectious Disease", label: "Infectious Disease" },
  { value: "Obstetrics", label: "Obstetrics" },
  { value: "Anesthesiology", label: "Anesthesiology" },
  { value: "Pathology", label: "Pathology" },
  { value: "Physical Medicine & Rehabilitation", label: "Physical Medicine & Rehabilitation" },
  { value: "Radiology", label: "Radiology" },
  { value: "Thoracic Surgery", label: "Thoracic Surgery" },
  { value: "Vascular Surgery", label: "Vascular Surgery" },
  { value: "Occupational Medicine", label: "Occupational Medicine" },
  { value: "Sports Medicine", label: "Sports Medicine" },
  { value: "Palliative Care", label: "Palliative Care" },
];


const locations = [
  { value: "Toronto", label: "Toronto" },
  { value: "Vancouver", label: "Vancouver" },
  { value: "Montreal", label: "Montreal" },
  { value: "Calgary", label: "Calgary" },
  { value: "Edmonton", label: "Edmonton" },
  { value: "Ottawa", label: "Ottawa" },
  { value: "Winnipeg", label: "Winnipeg" },
  { value: "Quebec City", label: "Quebec City" },
  { value: "Halifax", label: "Halifax" },
  { value: "Saskatoon", label: "Saskatoon" },
  { value: "Victoria", label: "Victoria" },
  { value: "Regina", label: "Regina" },
  { value: "Hamilton", label: "Hamilton" },
  { value: "Kitchener", label: "Kitchener" },
  { value: "London", label: "London" },
  { value: "St. John's", label: "St. John's" },
  { value: "Fredericton", label: "Fredericton" },
  { value: "Charlottetown", label: "Charlottetown" },
  { value: "Whitehorse", label: "Whitehorse" },
  { value: "Yellowknife", label: "Yellowknife" },
  { value: "Iqaluit", label: "Iqaluit" },
  { value: "Guelph", label: "Guelph" },
  { value: "Thunder Bay", label: "Thunder Bay" },
  { value: "Barrie", label: "Barrie" },
  { value: "Sudbury", label: "Sudbury" },
  { value: "Moncton", label: "Moncton" },
  { value: "Saint John", label: "Saint John" },
  { value: "Prince George", label: "Prince George" },
  { value: "Kamloops", label: "Kamloops" },
];

const AnimatedSearchBar = ({ onSearch }) => {
  const [specialty, setSpecialty] = useState(null);
  const [location, setLocation] = useState(null);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSearch = () => {
    onSearch({
      specialty: specialty?.value || null,
      location: location?.value || null,
    });
  };

  return (
    <motion.section
      className="relative -mt-20 bg-white py-8 px-6 shadow-2xl rounded-2xl max-w-6xl mx-auto transform hover:shadow-3xl transition-all duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Specialty Dropdown */}
        <div className="w-full md:w-1/3">
          <Select
            options={specialties}
            value={specialty}
            onChange={(selectedOption) => setSpecialty(selectedOption)}
            placeholder="Select Specialty"
            isSearchable
            className="rounded-lg shadow-sm focus:ring-4 focus:ring-purple-500"
          />
        </div>

        {/* Location Dropdown */}
        <div className="w-full md:w-1/3">
          <Select
            options={locations}
            value={location}
            onChange={(selectedOption) => setLocation(selectedOption)}
            placeholder="Select Location"
            isSearchable
            className="rounded-lg shadow-sm focus:ring-4 focus:ring-green-500"
          />
        </div>

        {/* Advanced Filters Toggle */}
        <div className="w-full md:w-auto">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <FaFilter className="mr-2" />
            {showAdvanced ? "Hide Filters" : "Show Advanced Filters"}
          </button>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-10 py-3 rounded-lg font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full md:w-auto"
        >
          Search
        </button>
      </div>

      {/* Advanced Filters Section */}
      {showAdvanced && (
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            <label className="block text-sm font-medium text-gray-600 mb-1">Insurance</label>
            <select className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500">
              <option disabled selected>Choose Insurance</option>
              <option>Private Insurance</option>
              <option>Medicare</option>
              <option>Medicaid</option>
              <option>Self-Pay</option>
            </select>
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-600 mb-1">Distance</label>
            <input
              type="range"
              min="1"
              max="100"
              className="w-full"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-600 mb-1">Ratings</label>
            <select className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-yellow-500">
              <option disabled selected>Min. Rating</option>
              <option>1 Star & Up</option>
              <option>2 Stars & Up</option>
              <option>3 Stars & Up</option>
              <option>4 Stars & Up</option>
            </select>
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default AnimatedSearchBar;