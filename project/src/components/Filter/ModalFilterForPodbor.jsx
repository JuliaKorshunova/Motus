import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CustomRadioButton from '../Button/RadioButton/CustomRadioButton';
import ButtonTabGreenForFilter from '../Button/ButtonTab/ButtonTabGreenForFilter';
import donetab_for_filter from '/donetabtofilter.png';
import MainButton2 from '../Button/MainButton2';
import './ModalFilterForPodbor.css'; 

const ModalFilterForPodbor = ({ isModalOpen, closeModal }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [sliderValue, setSliderValue] = useState(200);
    const testDeisabled = false;

    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

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
                    <div className="filter-title-podb">Фильтрация</div>

                    <div className="slider-container-podb">
                        <div className="quantity-slider">
                            <div className="quantity-label-podb">Количество выпусков</div>

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
                            <div className="radio-button-container-modal">
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
                            <div className="category-title-modal">Категории</div>
                            <div className="obedForModal-podbor">
                            <div className="tab-wrapper111-a">
                                <ButtonTabGreenForFilter icon={donetab_for_filter}>Криминал</ButtonTabGreenForFilter>
                                <ButtonTabGreenForFilter icon={donetab_for_filter}>Секс</ButtonTabGreenForFilter>
                                <ButtonTabGreenForFilter icon={donetab_for_filter}>Дизайн</ButtonTabGreenForFilter>
                                <ButtonTabGreenForFilter icon={donetab_for_filter}>Образование</ButtonTabGreenForFilter>
                                <ButtonTabGreenForFilter icon={donetab_for_filter}>Криминал</ButtonTabGreenForFilter>
                                <ButtonTabGreenForFilter icon={donetab_for_filter}>Драма</ButtonTabGreenForFilter>
                                <ButtonTabGreenForFilter icon={donetab_for_filter}>Воспитание</ButtonTabGreenForFilter>
                                <ButtonTabGreenForFilter>...</ButtonTabGreenForFilter>
                            </div>
                            <div className="forbtnn2">
                        <div className='btnnsubforResetLibrary'>
                            <MainButton2
                                onMouseEnter={() => setIsHovered1(true)}
                                onMouseLeave={() => setIsHovered1(false)}
                                disabled={testDeisabled}
                                className={isHovered1 ? 'bgforbtnsub' : ''}
                            >
                                Сбросить
                            </MainButton2>
                        </div>
                        
                        <div className='btnnsubforApply'>
                            <MainButton2
                                onMouseEnter={() => setIsHovered2(true)}
                                onMouseLeave={() => setIsHovered2(false)}
                                disabled={testDeisabled}
                                className={isHovered2 ? 'bgforbtnsub' : ''}
                            >
                                Применить
                            </MainButton2>
                        </div>

                        </div>
                        </div>

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