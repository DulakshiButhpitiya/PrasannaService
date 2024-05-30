

import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Toggle Dark Mode
    </button>
  );
};

export default Button;
