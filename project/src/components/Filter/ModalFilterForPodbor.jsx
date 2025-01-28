import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CustomRadioButton from '../Button/RadioButton/CustomRadioButton';
import ButtonTabGreenForFilter from '../Button/ButtonTab/ButtonTabGreenForFilter';
import donetab_for_filter from '/donetabtofilter.png';
import MainButton2 from '../Button/MainButton2';
import './ModalFilterForPodbor.css'; 

const ModalFilterForPodbor = ({isModalOpen,closeModal,}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [sliderValue, setSliderValue] = useState(200); // Значение ползунка
    const testDeisabled=false;

    const [isHovered, setIsHovered] = useState(false);

    const maxSliderWidth = window.innerWidth <= 1439 ? 228 : 260;

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

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

    if (!isModalOpen) return null;

    return (
        <div className="modal-overlay active">
            <div className="modal-content">
                <div className="filter-wrapper">
                    <img 
                        src="/arrow_forward.svg" 
                        alt="Close Icon" 
                        className="arrow-icon-before" 
                        onClick={closeModal} 
                    />
                    <div className="filter-title">Фильтрация</div>

                    <div className="slider-container">
                        <div className="quantity-slider">
                            <div className="quantity-label">Количество выпусков</div>

                            <div className="slider-track">
                                <div 
                                    className="slider-progress" 
                                    style={{ width: `${(sliderValue / 400) * 90}%` }}
                                ></div>
                            </div>
                            <input 
                                type="range" 
                                min="1" 
                                max="400" 
                                value={sliderValue} 
                                className="hidden-slider" 
                                onChange={handleSliderChange} 
                            />
                            <img 
                                src="/Ellipse197.svg" 
                                alt="Start Ellipse" 
                                className="start-circle" 
                            />
                            <img 
                                src="/Ellipse197.svg" 
                                alt="Moving Ellipse" 
                                className="end-circle" 
                                style={{ left: `${15 + (sliderValue / 400) * 230}px` }} 
                            />
                            <div className="start-text">1</div>
                            <div 
                                className="end-text" 
                                style={{ left: `${15 + (sliderValue / 400) * 230}px` }} 
                            >
                                {sliderValue}
                            </div>
                        </div>

                        <div className="sort-section">
                            <div className="sort-title">Упорядочить</div>
                            <div className="radio-button-container">
                                {options.map((option) => (
                                    <div key={option.id} className="radio-button-wrapper" style={{ display: 'flex', alignItems: 'center' }}>
                                        <CustomRadioButton
                                            id={option.id}
                                            isSelected={selectedOption === option.id}
                                            onSelect={handleSelect}
                                        />
                                        <span className="radio-label">{option.label}</span>
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
                            <div className="category-title">Категории</div>
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


                        <div className='btnnsubforResetLibrary '>
                                         {testDeisabled === true ? (
                                            <div className='pocastdis'>
                                              <MainButton2 
                                              disabled={true}>Сбросить</MainButton2>
                                             
                                            </div>
                                          )
                                            : isHovered === true ? (
                                              <div className='bgforbtnsub'>
                                                <MainButton2 
                                                onMouseEnter={handleMouseEnter} 
                                                onMouseLeave={handleMouseLeave} 
                                                disabled={testDeisabled}>
                                                  Сбросить
                                                </MainButton2>
                                              </div>) : (
                                              <MainButton2 
                                              onMouseEnter={handleMouseEnter} 
                                              onMouseLeave={handleMouseLeave} 
                                              disabled={testDeisabled}>
                                                Сбросить
                                              </MainButton2>)}
                                      </div>
                        
                                      <div className='btnnsubforApply'>
                                         {testDeisabled === true ? (
                                            <div className='pocastdis'>
                                              <MainButton2 
                                              disabled={true}>Применить</MainButton2>
                                             
                                            </div>
                                          )
                                            : isHovered === true ? (
                                              <div className='bgforbtnsub'>
                                                <MainButton2 
                                                onMouseEnter={handleMouseEnter} 
                                                onMouseLeave={handleMouseLeave} 
                                                disabled={testDeisabled}>
                                                  Применить
                                                </MainButton2>
                                              </div>) : (
                                              <MainButton2 
                                              onMouseEnter={handleMouseEnter} 
                                              onMouseLeave={handleMouseLeave} 
                                              disabled={testDeisabled}>
                                                Применить
                                              </MainButton2>)}
                                      </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

ModalFilterForPodbor.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
};

export default ModalFilterForPodbor;