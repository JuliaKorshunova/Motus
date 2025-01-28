import React, { useState } from 'react';


function CustomRadioButton({ id, isSelected, onSelect }) {
  const handleClick = () => {
    onSelect(id);
  };

  return (
    <button 
      onClick={handleClick} 
      style={{
        width: 10,
        height: 10,
        borderRadius: '50%',
        border: '1px solid #6D6D6D', // Серый цвет
        background: 'none',
        padding: 0,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }}
    >
      {isSelected && (
        <div 
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: '#FF0074', // Розовый цвет
            position: 'absolute'
          }}
        ></div>
      )}
    </button>
  );
}

export default CustomRadioButton;