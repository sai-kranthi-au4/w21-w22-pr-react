import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function TodoDate({ handleDueState }) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      selected={startDate}
      onChange={date => {
        setStartDate(date);
        handleDueState(date);
      }}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={30}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
}
