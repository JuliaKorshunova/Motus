import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CustomRadioButton from '../Button/RadioButton/CustomRadioButton';
import ButtonTabGreenForFilter from '../Button/ButtonTab/ButtonTabGreenForFilter';
import donetab_for_filter from '/donetabtofilter.png';
import MainButton2 from '../Button/MainButton2';
import './ModalFilterForAuthors.css'; 

const ModalFilterForAuthors = ({
    isModalOpen,
    closeModal,
    sliderValue,
    handleSliderChange,
    selectedOption,
    handleSelect,
    handleArrowClick,
    maxSliderWidth,
}) => {
    const options = [
        { id: 1, label: 'По дате регистрации', hasArrow: true, arrowDirection: 'down' },
        { id: 2, label: 'По дате регистрации', hasArrow: true, arrowDirection: 'up' },
        { id: 3, label: 'По количеству подписчиков', hasArrow: true, arrowDirection: 'down' },
        { id: 4, label: 'По количеству подписчиков', hasArrow: true, arrowDirection: 'up' },
        { id: 5, label: 'По количеству выпусков', hasArrow: true, arrowDirection: 'down' },
        { id: 6, label: 'По количеству выпусков', hasArrow: true, arrowDirection: 'up' },
    ];

    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    const handleMouseEnter1 = () => setIsHovered1(true);
    const handleMouseLeave1 = () => setIsHovered1(false);

    const handleMouseEnter2 = () => setIsHovered2(true);
    const handleMouseLeave2 = () => setIsHovered2(false);


  
      
      const testDeisabled=false;
    


    if (!isModalOpen) return null;

    return (
        <div className="modal-overlay active">
            <div className="modal-content">
                <div className="filter-wrapper">
                    <img 
                        src="/arrow_forward.svg" 
                        alt="Arrow Icon" 
                        className="arrow-icon-before" 
                        onClick={handleArrowClick} 
                    />
                    <div className="filter-header">Фильтрация</div>
                    <div className="slider-wrapper">
                        <div className="filter-duration">
                            <div className="duration-text-label">Продолжительность</div>
                            <div className="scrollBar">
                                <div 
                                    className="scrollBarGreen" 
                                    style={{ width: `${(sliderValue / 180) * 90}%` }}
                                ></div>
                            </div>
                            <input 
                                type="range" 
                                min="15" 
                                max="180" 
                                value={sliderValue} 
                                className="slider" 
                                onChange={handleSliderChange} 
                            />
                            <img 
                                src="/Ellipse197.svg" 
                                alt="Start Ellipse" 
                                className="ElipseGreen_1" 
                            />
                            <img 
                                src="/Ellipse197.svg" 
                                alt="Moving Ellipse" 
                                className="ElipseGreen_2" 
                                style={{
                                    left: `${15 + (sliderValue / 180) * (maxSliderWidth - 30)}px`,
                                }}
                            />
                            <div className="start-time-text">15 мин.</div>
                            <div 
                                className="end-time-text" 
                                style={{
                                    left: `${15 + (sliderValue / 180) * (maxSliderWidth - 30)}px`,
                                }}
                            >
                                {sliderValue} мин.
                            </div>
                        </div>
                        <div className="frame-small">
                            <div className="sort-label">Упорядочить</div>
                            <div className="radio-buttons-container">
                                {options.map((option) => (
                                    <div key={option.id} className="radio-button-item" style={{ display: 'flex', alignItems: 'center' }}>
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
                        <div className="category-wrapper">
                            <div className="category-label-a">Категории</div>
                            <div className="obedForModal">
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

                            <div className='btnnsubforReset-a'>
                                {testDeisabled ? (
                                    <div className='pocastdis'>
                                        <MainButton2 disabled>Сбросить</MainButton2>
                                    </div>
                                ) : isHovered1 ? (
                                    <div className='bgforbtnsub-a'>
                                        <MainButton2 
                                            onMouseEnter={handleMouseEnter1} 
                                            onMouseLeave={handleMouseLeave1}
                                            disabled={testDeisabled}
                                        >
                                            Сбросить
                                        </MainButton2>
                                    </div>
                                ) : (
                                    <MainButton2 
                                        onMouseEnter={handleMouseEnter1} 
                                        onMouseLeave={handleMouseLeave1} 
                                        disabled={testDeisabled}
                                    >
                                        Сбросить
                                    </MainButton2>
                                )}
                        </div>

                        <div className='btnnsubforApply'>
                            {testDeisabled ? (
                                <div className='pocastdis'>
                                    <MainButton2 disabled>Применить</MainButton2>
                                </div>
                            ) : isHovered2 ? (
                                <div className='bgforbtnsub-a1'>
                                    <MainButton2 
                                        onMouseEnter={handleMouseEnter2} 
                                        onMouseLeave={handleMouseLeave2}
                                        disabled={testDeisabled}
                                    >
                                        Применить
                                    </MainButton2>
                                </div>
                            ) : (
                                <MainButton2 
                                    onMouseEnter={handleMouseEnter2} 
                                    onMouseLeave={handleMouseLeave2} 
                                    disabled={testDeisabled}
                                >
                                    Применить
                                </MainButton2>
                            )}
                        </div>

</div>
                        </div>
                        


                        
                    </div>
                </div>
            </div>
        </div>
    );
};

ModalFilterForAuthors.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    sliderValue: PropTypes.number.isRequired,
    handleSliderChange: PropTypes.func.isRequired,
    selectedOption: PropTypes.number,
    handleSelect: PropTypes.func.isRequired,
    handleArrowClick: PropTypes.func.isRequired,
    maxSliderWidth: PropTypes.number.isRequired,
};

export default ModalFilterForAuthors;