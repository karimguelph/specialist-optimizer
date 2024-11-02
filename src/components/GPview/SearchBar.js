import React, { useState } from "react";
import { FaSearch, FaCalendarPlus } from "react-icons/fa";
import specialists from "../../data/specialists";
import "./SearchBar.css";

const SearchBar = ({ onSelectSpecialist }) => {
  const [query, setQuery] = useState("");
  const [filteredSpecialists, setFilteredSpecialists] = useState([]);

  const handleSearch = () => {
    const results = specialists.filter((specialist) =>
      specialist.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSpecialists(results);
  };

  return (
    <section className="search-bar">
      <div className="search-header">
        <h1 className="search-title">Find a Specialist</h1>
        <p className="search-subtitle">Your health, prioritized. Find the best specialist in your area.</p>
      </div>
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search for a specialist by name or specialty..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          <FaSearch />
          <span>Search</span>
        </button>
      </div>

      {filteredSpecialists.length > 0 && (
        <div className="search-results">
          {filteredSpecialists.map((specialist) => (
            <div key={specialist.id} className="specialist-card">
              <div className="specialist-info">
                <h3 className="specialist-name">{specialist.name}</h3>
                <p className="specialist-detail">Specialty: {specialist.specialty}</p>
                <p className="specialist-detail">Location: {specialist.location}</p>
              </div>
              <button
                className="book-button"
                onClick={() => onSelectSpecialist(specialist)}
              >
                <FaCalendarPlus /> Book Appointment
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default SearchBar;
