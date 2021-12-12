import React from 'react';
import './add.css';

const ADD = ({ click }) => {
  return (
    <button onClick={click} className="add_button">
      <i className="addButton fas fa-plus-circle"></i>
    </button>
  );
};

export default ADD;
