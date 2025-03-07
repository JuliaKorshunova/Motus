import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ModalFilterForPodcast.css";
import ButtonTabGreenForFilter from "../Button/ButtonTab/ButtonTabGreenForFilter";
import donetab_for_filter from "/donetabtofilter.png";
import CustomRadioButton from "../Button/RadioButton/CustomRadioButton";
import MainButton2 from "../Button/MainButton2";

const ModalFilterForPodcast = ({ isModalOpen, closeModal }) => {
  const testDeisabled = false;

  const [selectedOption, setSelectedOption] = useState(null);
  const [sliderValue, setSliderValue] = useState(40); // значение ползунка
  const maxSliderWidth = window.innerWidth <= 1439 ? 228 : 260;

  const options = [
    {
      id: 1,
      label: "По дате загрузки",
      hasArrow: true,
      arrowDirection: "down",
    },
    { id: 2, label: "По дате загрузки", hasArrow: true, arrowDirection: "up" },
    {
      id: 3,
      label: "По продолжительности",
      hasArrow: true,
      arrowDirection: "down",
    },
    {
      id: 4,
      label: "По продолжительности",
      hasArrow: true,
      arrowDirection: "up",
    },
    { id: 5, label: "По популярности", hasArrow: false, arrowDirection: "" },
  ];

  const handleSelect = (id) => {
    setSelectedOption(id);
  };

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseEnter1 = () => setIsHovered1(true);
  const handleMouseLeave1 = () => setIsHovered1(false);

  const handleMouseEnter2 = () => setIsHovered2(true);
  const handleMouseLeave2 = () => setIsHovered2(false);

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay active">
      <div className="modal-content-1">
        <div className="filter-wrapper-1">
          <img
            src="/arrow_forward.svg"
            alt="Close Icon"
            className="arrow-icon-before"
            onClick={closeModal}
          />
          <div className="filter-header">Фильтрация</div>

          <div className="slider-wrapper-p">
            {/* Ползунок Продолжительность */}
            <div className="filter-duration">
              <div className="duration-text-label">Продолжительность</div>

              {/* Серый трек */}
              <div className="scrollBar">
                <div
                  className="scrollBarGreen"
                  style={{ width: `${(sliderValue / 180) * 90}%` }}
                ></div>
              </div>

              {/* Невидимый ползунок */}
              <input
                type="range"
                min="15"
                max="180"
                value={sliderValue}
                className="slider"
                onChange={handleSliderChange}
              />

              {/* Фиксированный начальный кружок */}
              <img
                src="/Ellipse197.svg"
                alt="Start Ellipse"
                className="ElipseGreen_1"
              />

              {/* Динамический конечный кружок */}
              <img
                src="/Ellipse197.svg"
                alt="Moving Ellipse"
                className="ElipseGreen_2"
                style={{
                  left: `${15 + (sliderValue / 180) * (maxSliderWidth - 30)}px`,
                }}
              />

              {/* Тексты для отображения количества */}
              <div className="start-time-text">15 мин.</div>

              {/* Перемещающийся текст */}
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
                  <div
                    key={option.id}
                    className="radio-button-item"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <CustomRadioButton
                      id={option.id}
                      isSelected={selectedOption === option.id}
                      onSelect={handleSelect}
                    />
                    <span className="radio-label">{option.label}</span>

                    {/* Условие для отображения стрелки */}
                    {option.hasArrow && (
                      <img
                        src={
                          option.arrowDirection === "up"
                            ? "/ArrowUp.svg"
                            : "/ArrowDown.svg"
                        }
                        alt={
                          option.arrowDirection === "up"
                            ? "Arrow Up"
                            : "Arrow Down"
                        }
                        className="arrow-icon"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="category-wrapper">
              <div className="category-label">Категории</div>
              <div className="obedForModal-podcast">
                <div className="tab-wrapper111-a">
                  <ButtonTabGreenForFilter icon={donetab_for_filter}>
                    Криминал
                  </ButtonTabGreenForFilter>
                  <ButtonTabGreenForFilter icon={donetab_for_filter}>
                    Секс
                  </ButtonTabGreenForFilter>
                  <ButtonTabGreenForFilter icon={donetab_for_filter}>
                    Дизайн
                  </ButtonTabGreenForFilter>
                  <ButtonTabGreenForFilter icon={donetab_for_filter}>
                    Образование
                  </ButtonTabGreenForFilter>
                  <ButtonTabGreenForFilter icon={donetab_for_filter}>
                    Криминал
                  </ButtonTabGreenForFilter>
                  <ButtonTabGreenForFilter icon={donetab_for_filter}>
                    Драма
                  </ButtonTabGreenForFilter>
                  <ButtonTabGreenForFilter icon={donetab_for_filter}>
                    Воспитание
                  </ButtonTabGreenForFilter>
                  <ButtonTabGreenForFilter>...</ButtonTabGreenForFilter>
                </div>

                <div className="forbtnn2">
                  <div className="btnnsubforReset">
                    {testDeisabled === true ? (
                      <div className="pocastdis">
                        <MainButton2 disabled={true}>Сбросить</MainButton2>
                      </div>
                    ) : isHovered2 === true ? (
                      <div className="bgforbtnsub-a">
                        <MainButton2
                          onMouseEnter={handleMouseEnter2}
                          onMouseLeave={handleMouseLeave2}
                          disabled={testDeisabled}
                        >
                          Сбросить
                        </MainButton2>
                      </div>
                    ) : (
                      <MainButton2
                        onMouseEnter={handleMouseEnter2}
                        onMouseLeave={handleMouseLeave2}
                        disabled={testDeisabled}
                      >
                        Сбросить
                      </MainButton2>
                    )}
                  </div>

                  <div className="btnnsubforApply">
                    {testDeisabled === true ? (
                      <div className="pocastdis">
                        <MainButton2 disabled={true}>Применить</MainButton2>
                      </div>
                    ) : isHovered1 === true ? (
                      <div className="bgforbtnsub-a1">
                        <MainButton2
                          onMouseEnter={handleMouseEnter1}
                          onMouseLeave={handleMouseLeave1}
                          disabled={testDeisabled}
                        >
                          Применить
                        </MainButton2>
                      </div>
                    ) : (
                      <MainButton2
                        onMouseEnter={handleMouseEnter1}
                        onMouseLeave={handleMouseLeave1}
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
    </div>
  );
};

ModalFilterForPodcast.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ModalFilterForPodcast;
