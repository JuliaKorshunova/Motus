import React, { useState } from 'react';  
import './FilterForPodbor.css';  
import ButtonTabGreenForFilter from '../Button/ButtonTab/ButtonTabGreenForFilter';
import donetab_for_filter from '/donetabtofilter.png';
import CustomRadioButton from '../Button/RadioButton/CustomRadioButton';

export default function FilterForPodbor() {    
  const [selectedOption, setSelectedOption] = useState(null);
  const [sliderValue, setSliderValue] = useState(200); // значение ползунка

  const options = [
    { id: 1, label: 'По количеству выпусков', hasArrow: true, arrowDirection: 'down' },
    { id: 2, label: 'По количеству выпусков', hasArrow: true, arrowDirection: 'up' },
    { id: 3, label: 'По дате создания', hasArrow: true, arrowDirection: 'down' },
    { id: 4, label: 'По дате создания', hasArrow: true, arrowDirection: 'up' },
    { id: 5, label: 'По количеству просмотров', hasArrow: true, arrowDirection: 'down' },
    { id: 6, label: 'По количеству просмотров', hasArrow: true, arrowDirection: 'up' },
  ];

  const handleSelect = (id) => {
    setSelectedOption(id);
  };

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (     
    <>
      <div className="filter-container">
        <div className="filter-title">
          Фильтрация
        </div>

        <div className="slider-container">
          {/* Ползунок Количество выпусков */}
          <div className="quantity-slider">
            <div className="quantity-label">Количество выпусков</div>

            {/* Серый трек */}
            <div className="slider-track">
              <div 
                className="slider-progress" 
                style={{ width: `${(sliderValue / 400) * 90}%` }} // Динамическая ширина для зеленой полосы
              ></div>
            </div>

            {/* Невидимый ползунок */}
            <input 
              type="range" 
              min="1" 
              max="400" 
              value={sliderValue} 
              className="hidden-slider" 
              onChange={handleSliderChange} 
            />

            {/* Фиксированный начальный кружок */}
            <img 
              src="/Ellipse197.svg" 
              alt="Start Ellipse" 
              className="start-circle" 
            />

            {/* Динамический конечный кружок */}
            <img 
              src="/Ellipse197.svg" 
              alt="Moving Ellipse" 
              className="end-circle" 
              style={{ left: `${15 + (sliderValue / 400) * 230}px` }} // Позиция второго кружка
            />

            {/* Тексты для отображения количества */}
            <div className="start-text">1</div>

            {/* Перемещающийся текст */}
            <div 
              className="end-text" 
              style={{ left: `${15 + (sliderValue / 400) * 230}px` }} // Позиция текста изменяется как у второго кружка
            >
              {sliderValue}
            </div>
          </div>

          <div className="sort-section">

          <div className="sort-title">
            Упорядочить
          </div>

          <div className="radio-button-container">
            {options.map((option) => (
              <div key={option.id} className="radio-button-wrapper" style={{ display: 'flex', alignItems: 'center' }}>
                <CustomRadioButton
                  id={option.id}
                  isSelected={selectedOption === option.id}
                  onSelect={handleSelect}
                />
                <span className="radio-label">{option.label}</span>

                {/* Условие для отображения стрелки */}
                {option.hasArrow && (
                  <img 
                    src={option.arrowDirection === 'up' ? '/ArrowUp.svg' : '/ArrowDown.svg'}
                    alt={option.arrowDirection === 'up' ? 'Arrow Up' : 'Arrow Down'}
                    className="arrow-icon"
                  />
                )}
              </div>
            ))}
          </div>
          </div>

          <div className="category-section">

          <div className="category-title">
            Категории
          </div>

          <div className="tab-container">
            <ButtonTabGreenForFilter icon={donetab_for_filter}>Криминал</ButtonTabGreenForFilter>
            <ButtonTabGreenForFilter icon={donetab_for_filter}>Секс</ButtonTabGreenForFilter>
            <ButtonTabGreenForFilter icon={donetab_for_filter}>Дизайн</ButtonTabGreenForFilter>
            <ButtonTabGreenForFilter icon={donetab_for_filter}>Образование</ButtonTabGreenForFilter>
            <ButtonTabGreenForFilter icon={donetab_for_filter}>Криминал</ButtonTabGreenForFilter>
            <ButtonTabGreenForFilter icon={donetab_for_filter}>Драма</ButtonTabGreenForFilter>
            <ButtonTabGreenForFilter icon={donetab_for_filter}>Воспитание</ButtonTabGreenForFilter>
            <ButtonTabGreenForFilter>...</ButtonTabGreenForFilter>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};