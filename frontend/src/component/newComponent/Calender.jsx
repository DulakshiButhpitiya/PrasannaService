import React from 'react';

function Calender({ onSelectDate }) {
  return (
    <div className="calender">
      <p>Show me slots on or after: May 17, 2024</p>
      <div className="time-slots">
        <button onClick={() => onSelectDate('10:00 AM')}>10:00 AM</button>
        <button onClick={() => onSelectDate('11:00 AM')}>11:00 AM</button>
        <button onClick={() => onSelectDate('12:00 PM')}>12:00 PM</button>
        <button onClick={() => onSelectDate('1:00 PM')}>1:00 PM</button>
        <button onClick={() => onSelectDate('2:00 PM')}>2:00 PM</button>
        <button onClick={() => onSelectDate('3:00 PM')}>3:00 PM</button>
        <button onClick={() => onSelectDate('4:00 PM')}>4:00 PM</button>
        <button onClick={() => onSelectDate('5:00 PM')}>5:00 PM</button>
        <button onClick={() => onSelectDate('6:00 PM')}>6:00 PM</button>
      </div>
    </div>
  );
}

export default Calender;
