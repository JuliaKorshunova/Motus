import './MySubscriptions.css';
import TabsSectionForSubscriptions from '../TabsSection/TabsSectionForSubscriptions/TabsSectionForSubscriptions';
import SubscribesSection from '../SubscribesSection/SubscribesSection';
import PodborSection from '../PodborSection/PodborSection';
import AuthorsSection from '../Authors/AuthorsSection';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import FilterForAuthors from '../Filter/FilterForAuthors';
import FilterForPodbor from '../Filter/FilterForPodbor';
import FilterForPodcast from '../Filter/FilterForPodcast';
import SecondImgButton from '../Button/SecondImgButton';
import filterImg from '/filter_alt.svg';

import ModalFilterForPodbor from '../Filter/ModalFilterForPodbor';

import ModalFilterForAuthors from '../Filter/ModalFilterForAuthors';

import ModalFilterForPodcast from '../Filter/ModalFilterForPodcast';
export default function MySubscriptions() {
    const [tab, setTab] = useState('pod');
    const [searchTerm, setSearchTerm] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1279);
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [sliderValue, setSliderValue] = useState(40);
    const maxSliderWidth = window.innerWidth <= 1439 ? 228 : 260;

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

    // Обновление состояния при изменении ширины окна
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1279);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Header />
            <div className="sub_container">
                <div className="zagolovok1">Subscriptions</div>
                <div className="subtitle11"> — [səbˈskrɪpʃ(ə)ns] (en.) подписки</div>
            </div>
            <div className="tab"></div>
            <div className="obedinen11">
                <TabsSectionForSubscriptions Active1={tab} onChange={(current) => setTab(current)} />

                {tab === 'pod' && (
                    <>
                        <SubscribesSection />
                        {!isMobile && <FilterForPodcast />}
                    </>
                )}
                {tab === 'podbor' && (
                    <>
                        <PodborSection />
                        {!isMobile && <FilterForPodbor />}
                    </>
                )}
                {tab === 'autor' && (
                    <>
                        <AuthorsSection />
                        {!isMobile && <FilterForAuthors />}
                    </>
                )}
            </div>

            {/* Кнопка для открытия модального окна */}
            <div className="filter_button">
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
    );
}


