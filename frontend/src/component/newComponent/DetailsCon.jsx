import React from 'react';

const DetailsCon = () => {
  return (
    <div className="details-box bg-gray-100 p-4 rounded-md shadow-md h-full">
      <h3 className="text-lg font-medium mb-2">Opening Hours</h3>
      <p className="text-gray-700">
        Mon - Weds & Fri: 8am to 6pm<br />
        Sat/Sun: 8am to 5pm<br />
        Closed Satursdays
      </p>
      <h3 className="text-lg font-medium mb-2">Where We Are</h3>
      <p className="text-gray-700">
        Prasanna Service Center & Spare Parts<br />
        No 243 ,<br />
        Radawana Road,<br />
        Delovita,<br />
        Kirindwela
      </p>
      <h3 className="text-lg font-medium mb-2">Contact Us</h3>
      <p className="text-gray-700">
      077 224 5022<br />
        ab_zki@abansgroup.com
      </p>
    </div>
  );
}

export default DetailsCon;
