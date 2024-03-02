
import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-10 h-10 custom-loader"></div>
    </div>
  );
};

export default Spinner;


