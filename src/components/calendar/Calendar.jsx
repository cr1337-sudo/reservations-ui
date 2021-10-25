import "./calendar.scss";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import { useState } from "react";

const Calendar = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className="calendar-container">
      <LocalizationProvider dateAdapter={AdapterDateFns} >
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="day"
          minDate={Date.now()}
          maxDate={Date.now() + 5259600000}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
