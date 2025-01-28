import './Library.css';
import TabsSectionForLibrary from '../TabsSection/TabsSectionForLibrary/TabsSectionForLibrary';
import Authors from '../Authors/AuthorsSection';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import PodborSection from '../PodborSection/PodborSection';
import SubscribesSection from '../SubscribesSection/SubscribesSection';
import FilterForPodcast from '../Filter/FilterForPodcast';
import FilterForPodbor from '../Filter/FilterForPodbor';
import FilterForAuthors from '../Filter/FilterForAuthors';
import ModalFilterForPodbor from '../Filter/ModalFilterForPodbor';
import ModalFilterForAuthors from '../Filter/ModalFilterForAuthors';
import ModalFilterForPodcast from '../Filter/ModalFilterForPodcast';
import SecondImgButton from '../Button/SecondImgButton';
import filterImg from '/filter_alt.svg';


export default function Library() {
    const [tab, setTab] = useState('pod');
    const [selectedOption, setSelectedOption] = useState(null);
    const [sliderValue, setSliderValue] = useState(40); 
    const [searchTerm, setSearchTerm] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1279);
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


    
    // Обработчики
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const handleSelect = (id) => {
            setSelectedOption(id);
    };
    const handleSliderChange = (e) => {
        setSliderValue(e.target.value);
    };
    const handleArrowClick = () => {
        closeModal();
    };


    const maxSliderWidth = window.innerWidth <= 1439 ? 228 : 260;
    
        
    
    // Обновление состояния при изменении ширины окна
    useEffect(() => {
            const handleResize = () => setIsMobile(window.innerWidth <= 1279);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
    }, []);

    
    return (       
        <>
         <Header />
            <div className="library_container">
                <div className="zagolovokForL">Library</div>
                <div className="subtitle1ForL">— [ˈlaɪbrərɪ] (en.) библиотека</div>
            </div>

            <div className='obedinen11l'>
                <TabsSectionForLibrary Active1={tab} onChange={(current) => setTab(current)} />
                <div className="filters">
                    {tab === 'pod' && <FilterForPodcast />}
                    {tab === 'podbor' && <FilterForPodbor />}
                    {tab === 'autor' && <FilterForAuthors />}
                </div>
                <div className='r1'>
                    {tab === 'pod' && (
                        <SubscribesSection filterOption={selectedOption} sliderValue={sliderValue} />
                    )}
                    {tab === 'podbor' && (
                        <PodborSection filterOption={selectedOption} sliderValue={sliderValue} />
                    )}
                    {tab === 'autor' && (
                        <Authors filterOption={selectedOption} sliderValue={sliderValue} />
                    )}
                </div>

                </div>

            {/* Кнопка для открытия модального окна */}
                        <div className="filter_button_for_library">
                            <SecondImgButton
                                isImg={true}
                                isActive={false}
                                onClick={openModal}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <img className="image-class" src={filterImg} alt="Изображение кнопки" />
                            </SecondImgButton>
                        </div>

            

            {/* Модальные окна */}
            {tab === 'podbor' && (
                <ModalFilterForPodbor
                    isModalOpen={isModalOpen}
                    closeModal={closeModal}
                    sliderValue={sliderValue}
                    handleSliderChange={handleSliderChange}
                    selectedOption={selectedOption}
                    handleSelect={handleSelect}
                    handleArrowClick={handleArrowClick}
                    maxSliderWidth={maxSliderWidth}
                />
            )}

            {tab === 'autor' && (
                    <ModalFilterForAuthors
                        isModalOpen={isModalOpen}
                        closeModal={closeModal}
                        sliderValue={sliderValue}
                        handleSliderChange={handleSliderChange}
                        selectedOption={selectedOption}
                        handleSelect={handleSelect}
                        handleArrowClick={handleArrowClick}
                        maxSliderWidth={maxSliderWidth}
                    />
                )}

            {tab === 'pod' && (
                            <ModalFilterForPodcast
                                isModalOpen={isModalOpen}
                                closeModal={closeModal}
                                sliderValue={sliderValue}
                                handleSliderChange={handleSliderChange}
                                selectedOption={selectedOption}
                                handleSelect={handleSelect}
                                handleArrowClick={handleArrowClick}
                                maxSliderWidth={maxSliderWidth}
                            />
            )}



            

            
        </>
    )
} 