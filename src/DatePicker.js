import React from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TableDatePicker(props) {
    
    return (
        <div>
            <DatePicker
                selected={props.startDate}
                onChange={props.onChange}
                startDate={props.startDate}
                endDate={props.endDate}
                selectsRange
                inline
            />
           
            {/*<DatePicker
                dateFormat="dd-MM-yyyy"
                selected={startDate}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                onChange={date => setStartDate(date)} //props.onChangeStartDate(date)
            />
            <DatePicker
                dateFormat="dd-MM-yyyy"
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                onChange={date => setEndDate(date)} //props.onChangeEndDate(date)
            />*/}
        </div>
    );
}