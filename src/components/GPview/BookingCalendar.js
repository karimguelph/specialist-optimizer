import React, { useState } from "react";
import Calendar from "react-calendar";
import { FaCalendarAlt } from "react-icons/fa";
import "react-calendar/dist/Calendar.css";
import "./BookingCalendar.css";

const BookingCalendar = ({ availableDates, onSelectDate }) => {
  const [date, setDate] = useState(null);

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    onSelectDate(selectedDate);
  };

  const tileClassName = ({ date }) => {
    const dateString = date.toISOString().split("T")[0];
    return availableDates.includes(dateString) ? "available" : "unavailable";
  };

  const tileContent = ({ date }) => {
    const dateString = date.toISOString().split("T")[0];
    if (!availableDates.includes(dateString)) {
      return <div className="tooltip">Unavailable</div>;
    }
  };

  return (
    <div className="booking-calendar-container">
      <div className="calendar-header">
        <h3 className="calendar-title">
          <FaCalendarAlt className="calendar-icon" /> Select an Available Date
        </h3>
        <p className="calendar-subtitle">
          Choose a date from the available slots below.
        </p>
      </div>

      <Calendar
        onChange={handleDateChange}
        value={date}
        tileDisabled={({ date }) =>
          !availableDates.includes(date.toISOString().split("T")[0])
        }
        tileClassName={tileClassName}
        tileContent={tileContent}
      />

      {date && (
        <div className="selected-date-info">
          <p>
            Selected Date: <strong>{date.toDateString()}</strong>
          </p>
          <button
            className="confirm-date-btn"
            onClick={() => alert("Date confirmed!")}
          >
            Confirm Date
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingCalendar;
