import * as style1 from './Release.css'
import player from '/player.png'
import releasephoto from '/image 293.png'
import ellipse from '/Ellipse 196.png'
import like1 from '/favorite_border.png'
import repost1 from '/autorenew.png'
import visibility from '/visibility.png'
import c1 from '/chat_bubble_outline.png'
import c22 from '/chat_bubble_outline1.png'
import c2 from '/chat_bubble.png'
import MainButton from '../Button/MainButton'
import SecondButton from '../Button/SecondButton'
import React, { useState, useRef, useEffect } from 'react';
import tochka from '/Vector.png'
import tochka2 from '/more_vert.png'
import save from '/playlist_add.png'
import error from '/error_outline.png'
import copy from '/content_copy.png'
import mini from '/mini.png'
import SecondButtonBlack from '../Button/SecondButtonBlack.jsx'
import VideoPlayer from '../VideoPlayer/VideoPlayer.jsx'
import OneSubcribe from '../SubscribesSection/OneSubscribe/OneSubcribe.jsx'
import Header from '../Header/Header.jsx'




export default function Podcaster() {

    const [checkZafruzki, setCheckZafruzki] = useState(false);

    const [visibleCount, setVisibleCount] = useState(5); // Количество текущих видимых комментариев

    const loadMoreComments = () => {
        setVisibleCount((prevCount) => prevCount + 5); // Увеличиваем количество видимых комментариев на 5
    };
    const [visibleCount1, setVisibleCount1] = useState(5); // Количество текущих видимых комментариев

    const loadMoreComments1 = () => {
        setVisibleCount1((prevCount) => prevCount + 5); // Увеличиваем количество видимых комментариев на 5
        // setCheckZafruzki((prevCount) => !prevCount);
        // console.log(checkZafruzki);
    };

    
    const [recommendData, setRecommendData] = useState([]);
    const [dataRelGroup, setDataRelGroup] = useState([]);
  const [dataRelAbout, setDataRelAbout] = useState([]);
  useEffect(() => {
    fetch('/datarelgroup.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            setDataRelGroup(data.information); // Загружаем информацию
            setRecommendData(data.recommend.map(item => item.cards).flat()); // Загружаем все карты из recommend
            setDataRelAbout(data.desc); // Загружаем весь массив desc
        })
        .catch((error) => console.error('Ошибка при загрузке данных:', error));
}, []);


  

 
    const [readCommData, setReadCommData] = useState([]);
    const [currentImages, setCurrentImages] = useState([]);
    const [currentImages2, setCurrentImages2] = useState([]);
    const [currentImages3, setCurrentImages3] = useState([]);
    const [currentImages4, setCurrentImages4] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeIndexSub, setActiveIndexSub] = useState(null);
    const [blockVisibility2, setBlockVisibility2] = useState([]);
    const [blockVisibility3, setBlockVisibility3] = useState([]);
    const [comment1, setComment1] = useState('');
    const [comment3, setComment3] = useState('');
    const [activeComments, setActiveComments] = useState([]);
    const [showSubComments, setShowSubComments] = useState([]); // Массив видимости подкомментариев


    useEffect(() => {
        fetch('/datarelgroup.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data); // Логируем данные для проверки

                // Проверяем, есть ли comments и является ли он массивом
                if (!data.comments || !Array.isArray(data.comments) || data.comments.length === 0) {
                    console.error('Не удалось загрузить комментарии или комментарии пусты');
                    return;
                }
    
                // Извлекаем все комментарии
                const allComments = data.comments.flatMap(item => item.comments);
    
                // Проверяем, есть ли комментарии для сортировки
                if (allComments.length === 0) {
                    console.error('Нет доступных комментариев');
                    return;
                }
                // Сортируем данные по дате
                const sortedData = allComments.sort((a, b) => {
                    // Проверяем, существуют ли даты
                    if (!a.data || !b.data) {
                        console.error('Недоступная дата', a, b); // Логируем, если дата отсутствует
                        return 0; // Игнорируем сортировку для элементов без даты
                    }
    
                    const dateA = new Date(a.data.split('.').reverse().join('-')); // 'YYYY-MM-DD'
                    const dateB = new Date(b.data.split('.').reverse().join('-')); // 'YYYY-MM-DD'
    
                    if (isNaN(dateA) || isNaN(dateB)) {
                        console.error('Неверная дата', a.data, b.data);
                        return 0; // Игнорируем сортировку для этих элементов
                    }
    
                    return dateB - dateA; // Более новые даты будут первыми
                });
                sortedData.forEach(comment => {
                    console.log('Комментарий перед сортировкой:', sortedData); // Проверка комментария
    
                    // Проверяем наличие subComments
                    if (Array.isArray(comment.subComments)) {
                        console.log('Подкомментарии перед сортировкой:', comment.subComments); // Лог подкомментариев
                        comment.subComments.sort((a, b) => {
                            const dateA = new Date(a.data.split('.').reverse().join('-'));
                            const dateB = new Date(b.data.split('.').reverse().join('-'));
                            return dateA - dateB; // Сортируем по убыванию
                        });
                        console.log('Подкомментарии после сортировки:', comment.subComments); // Лог после сортировки
                    } else {
                        console.error('subComments не является массивом или отсутствует в комментарии:', comment);
                    }
                });
                console.log(sortedData);
                setReadCommData(sortedData); // Устанавливаем отсортированные данные
    
                // Инициализируем изображения после загрузки данных
                setCurrentImages(Array(sortedData.length).fill(c1));
                setCurrentImages2(Array(sortedData.length).fill(tochka));
    
                const maxSubCommentsLength = sortedData.reduce((max, comment) => {
                    return Math.max(max, comment.subComments.length);
                }, 0);
    
                setBlockVisibility2(Array(sortedData.length).fill(false));
                setBlockVisibility3(Array(maxSubCommentsLength).fill(false));
                setCurrentImages4(Array(maxSubCommentsLength).fill(c1));
                setCurrentImages3(Array(maxSubCommentsLength).fill(tochka));
                setShowSubComments(Array(sortedData.length).fill(false)); // Инициализируйте видимость подкомментариев
            })
            .catch((error) => console.error('Ошибка при загрузке данных:', error));
    }, []);
    
    const handleImageClick1 = (index) => {
        // Изменяем текущее изображение
        setCurrentImages(prevImages => {
            const newImages = [...prevImages];
            if (newImages[index] === c1) {
                newImages.fill(c1);
                newImages[index] = c2;
            } else {
                newImages[index] = c1;
            }
            return newImages;
        });

        // Получаем подкомментарии и устанавливаем активные подкомментарии
        const selectedComments = readCommData[index].subComments; 
        setActiveComments(selectedComments);
        
        // Переключаем видимость подкомментариев только для выбранного индекса
       
        setCurrentImages4(currentImages4.map(() => c1)); 
        // Устанавливаем активный индекс
        setActiveIndexSub(null);
      
        setActiveIndex(activeIndex === index ? null : index);
        setComment1(readCommData[index].name + ',');
        setCheckZafruzki((prevCount) => !prevCount);
        console.log(checkZafruzki)
        setVisibleCount1(5);
    };
    const handleImageClick4 = (index, idx) => {
        // Изменяем текущее изображение
        setCurrentImages4(prevImages => {
            const newImages = [...prevImages];
            if (newImages[idx] === c1) {
                newImages.fill(c1);
                newImages[idx] = c22;
            } else {
                newImages[idx] = c1;
            }
            return newImages;
        });

      
        // Устанавливаем активный индекс
        setActiveIndexSub(activeIndexSub === idx ? null : idx);
        setComment1(readCommData[index].subComments[idx].name + ',');
    
    
    };
   

   const handleImageClick2 = (index) => {
       
        setCurrentImages2(prevImages => {
            const newImages = [...prevImages];

            if (newImages[index] === tochka) {
                newImages.fill(tochka); 
                newImages[index] = tochka2; 
            } else {
                newImages[index] = tochka; 
            }

            return newImages;
            
        })
        // setActiveIndex1(activeIndex1 === index ? null : index);
        setBlockVisibility2(prevVis => {
            const newVis = [...prevVis];

            if (newVis[index] === false) {
                newVis.fill(false); 
                newVis[index] = true; 
            } else {
                newVis[index] = false; 
            }

            return newVis;
            
        })
    };

    const handleImageClick3 = (index) => {
       
        setCurrentImages3(prevImages => {
            const newImages = [...prevImages];

            if (newImages[index] === tochka) {
                newImages.fill(tochka); 
                newImages[index] = tochka2; 
            } else {
                newImages[index] = tochka; 
            }

            return newImages;
            
        })
        // setActiveIndex1(activeIndex1 === index ? null : index);
        setBlockVisibility3(prevVis => {
            const newVis = [...prevVis];

            if (newVis[index] === false) {
                newVis.fill(false); 
                newVis[index] = true; 
            } else {
                newVis[index] = false; 
            }

            return newVis;
            
        })
    };


    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            
            // Если прокрутка вниз, фиксируем элемент
            if (scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false); // Вернуть блок обратно
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


const [overlappingHashtags, setOverlappingHashtags] = useState([]); 

const [isGradient, setIsGradient] = useState(false);  
  const hashtagsRef = useRef(null);  
  const imageRef = useRef(null);

const checkCollision = () => { 
  if (hashtagsRef.current && imageRef.current) { 
      const hashtags = hashtagsRef.current.children; 
      const imageRect = imageRef.current.getBoundingClientRect(); 
      const overlaps = []; 

      for (let i = 0; i < hashtags.length; i++) { 
          const hashtagRect = hashtags[i].getBoundingClientRect(); 
          const isOverlapping = !(hashtagRect.bottom < imageRect.top || 
                                  hashtagRect.top > imageRect.bottom || 
                                  hashtagRect.right < imageRect.left || 
                                  hashtagRect.left > imageRect.right); 
          if (isOverlapping) overlaps.push(i); 
      } 

      console.log('Перекрывающиеся хэштеги:', overlaps); // Вывод в консоль 
      setOverlappingHashtags(overlaps); 
  } 
}; 

useEffect(() => { 
checkCollision(); // Проверяем наложение при монтировании 
window.addEventListener('resize', checkCollision); // Проверяем при изменении размера окна 
return () => { 
    window.removeEventListener('resize', checkCollision); // Очищаем обработчики 
}; 
}, []);

    const[isHovered1, setIsHovered1]=useState(false)
  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };
  const[isHovered2, setIsHovered2]=useState(false)
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  
  const[isHovered3, setIsHovered3]=useState(false)
  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };
  
  
  
   
    const [isImageVisible, setIsImageVisible] = useState(true);
    const [isBlockVisible, setIsBlockVisible] = useState(false);

    const toggleImage = () => {
        setIsImageVisible(prev => !prev);
        setIsBlockVisible(prev => !prev); // Показать или скрыть блок
    };
   
     


    
  


    const [pressed, setPressed]=useState(false)
  function ispressed(){
    return(
      setPressed(prevPressed => !prevPressed)),
      setIsHoveredb(false)
    
  }

    const[isHoveredb2, setIsHoveredb2]=useState(false)
    const handleMouseEnterb2 = () => {
      setIsHoveredb2(true);
    };
  
    const handleMouseLeaveb2 = () => {
      setIsHoveredb2(false);
    };
    const[isHoveredb, setIsHoveredb]=useState(false)
    const handleMouseEnterb = () => {
      setIsHoveredb(true);
    };
  
    const handleMouseLeaveb = () => {
      setIsHoveredb(false);
    };

  


 
        const [currentImage, setCurrentImage] = useState(c1); // Первое изображение по умолчанию
        const [showBlock, setShowBlock] = useState(false);
    
    
        const [comm, setComm] = useState(readCommData); // Состояние для массива комментариев
        const [comment, setComment] = useState(''); // Состояние для введенного комментария
        
    const [podcomm, setPodComm] = useState(Array(readCommData.length).fill('')); // инициализация со значением comm1

        const handleCommentSubmit2 = (e) => {
            e.preventDefault(); // Предотвратить перезагрузку страницы
    
            if (comment.trim() !== '') {
                const newComment = {
                    name: 'Новое имя', // Замените на нужное имя
                    data: new Date().toLocaleDateString(), // Используйте текущую дату
                    des: comment.trim(), // Используем введенный комментарий
                    like: "0", // Начальное значение лайков
                    comm: "0", // Начальное значение комментариев
                };
    
                // Обновляем массив комментариев
                setComm([...comm, newComment]);
                setComment(''); // Очистить поле ввода
            }
        };

       
    
        // Обработчик изменения ввода
        const handleInputChange = (e) => {
            setComment(e.target.value);
        };
   

    const handleInputChange1 = (e) => {
        // Обновляем только комментарий
        setComment1(e.target.value);
        // При необходимости обновляем полный комментарий
       
    };
    const handleInputChange3 = (e) => {
        // Обновляем только комментарий
        setComment3(e.target.value);
        // При необходимости обновляем полный комментарий
       
    };
  
    const [isExpanded, setIsExpanded] = useState(false); // Состояние для контроля отображения текста

    const toggleText = () => {
        setIsExpanded(!isExpanded); // Переключаем состояние
    };
    return(
        <><Header /><div className='obedinpl1'>
            
            {dataRelGroup.map((h, index) => (

                <div className='releasephotoanddes1' key={index}>
                    <div className={`fix1 ${isSticky ? 'fixed1' : ''}`}>
                        <div><img className='releasephoto1' src={releasephoto} alt="Release" /></div>

                        <div className='t1'>
                            <h6 className='nazv'>{h.name}</h6>
                            <div className='t2'>
                                <img className='' src={ellipse} alt="Release" />
                                <div>
                                    <h6 className='nazv1'>{h.author}</h6>
                                    <h6 className='nazv1'>{h.countofsubscribseswehave} подписчика</h6>
                                </div>

                            </div>


                        </div>
                        <div className='kn'>
                            {pressed ? (
                                <div className={isHoveredb ? '' : 'bgg2'} id='1'>
                                    <SecondButtonBlack
                                        children='Отменить подписку'
                                        onClick={ispressed}
                                        onMouseEnter={handleMouseEnterb}
                                        onMouseLeave={handleMouseLeaveb} />
                                </div>
                            ) : (
                                <div className={isHoveredb2 ? '' : 'bgg'}>
                                    <SecondButton
                                        onMouseEnter={handleMouseEnterb2}
                                        onClick={ispressed}
                                        onMouseLeave={handleMouseLeaveb2}
                                    >
                                        Подписаться
                                    </SecondButton>
                                </div>
                            )}</div>
                        <div className="gray-line" />
                        <div className='nazv2'>

                            {h.hashtags.map((hashtag, hIndex) => (
                                <h6 className="nazv3" key={hIndex}>{hashtag.name}</h6>
                            ))}
                        </div>
                    </div>
                </div>

            ))}
            <div className='niz'>
                <div className="player">
                    <h5 className='kroshka'>Мои подписки Семейный бюджет Супер - выпуск!</h5>
                    <VideoPlayer></VideoPlayer>
                </div>
                {dataRelAbout.map((r, index) => (
                    <div key={index} className='obedineniep1'>
                        <section className='sp'>


                            <div className="blackblockp">
                                <div className="whiteblockp">
                                    <div className='nazv4'>


                                    <div className='seroep'>
                                            <h2 className='thefp'>{r.name}</h2>
                                            <a className='ssylkap'>{r.data}</a> </div>

                                        <div className='obidenssettings2'>
                                        <div className='obidenstochka'>
                                            <div className='countofsubp'>


                                                <div className='like'>
                                                    <img className='podn' src={like1} />
                                                    <p className='kolvo'>{r.likes}</p> </div>
                                                <div className='comm'>
                                                    <img className='podn' src={repost1} />
                                                    <p className='kolvo'>{r.reps}</p> </div>
                                                <div className='repost'>
                                                    <img className='podn' src={visibility} />
                                                    <p className='kolvo'>{r.views}</p></div>



                                            </div>
                                            {isImageVisible ? (
                                                <img className='podn' src={tochka} alt="Изображение 1" onClick={toggleImage} style={{ cursor: 'pointer' }} />
                                            ) : (
                                                <img className='podn' src={tochka2} alt="Изображение 2" onClick={toggleImage} style={{ cursor: 'pointer' }} />
                                            )}
                                        </div>
                                        {isBlockVisible && (
                                            <div className='your-block'>
                                                <div className='your-block1'> <img className='podn' src={save} /> <p>Сохранить</p>  </div>
                                                <div className='your-block1'> <img className='podn' src={error} /> <p>Пожаловаться</p>  </div>
                                                <div className='your-block1'> <img className='podn' src={copy} /> <p>Копировать</p>  </div>
                                            </div>
                                        )}
                                    </div>

                                 
                                        <div className='nazv5'>

                                            <div className={`text-container ${isExpanded ? 'expanded' : ''}`}>
                                                {r.des}
                                            </div>
                                            <h6 className='thethp' onClick={toggleText} style={{ cursor: 'pointer' }}>
                                                {isExpanded ? "Скрыть" : "Показать полностью"}
                                            </h6>

                                        </div>



                                        <div className='foradaptiv'>

                                 {dataRelGroup.map((h, index) => (

                                        <div className='releasephotoanddes1' key={index}>
                                          
                                              <div className='rowforbtn'>

                                                <div className='t1foradaptiv'>
                                                    <h6 className='nazv'>{h.name}</h6>
                                                    <div className='t2'>
                                                        <img className='ell' src={ellipse} alt="Release" />
                                                        <div>
                                                            <h6 className='nazvforv'>{h.author}</h6>
                                                            <h6 className='nazvsub'>{h.countofsubscribseswehave} подписчика</h6>
                                                        </div>

                                                    </div>


                                                </div>
                                                <div className='knforadapriv'>
                                                    {pressed ? (
                                                        <div className={isHoveredb ? '' : 'bgg2forstop'} id='1'>
                                                            <SecondButtonBlack
                                                                children='Отменить подписку'
                                                                onClick={ispressed}
                                                                onMouseEnter={handleMouseEnterb}
                                                                onMouseLeave={handleMouseLeaveb} />
                                                        </div>
                                                    ) : (
                                                        <div className={isHoveredb2 ? '' : 'bgg2forsub'}>
                                                            <SecondButton
                                                                onMouseEnter={handleMouseEnterb2}
                                                                onClick={ispressed}
                                                                onMouseLeave={handleMouseLeaveb2}
                                                            >
                                                                Подписаться
                                                            </SecondButton>
                                                        </div>
                                                    )}</div>


                                                    </div>
                                              
                                                <div className='nazv2forhashtaf'>

                                                    {h.hashtags.map((hashtag, hIndex) => (
                                                        <h6 className="nazv3forhashtag" key={hIndex}>{hashtag.name}</h6>
                                                    ))}
                                                </div>
                                                <div>         </div>
                                                <div>         </div>
                                         
                                        </div>

                                        ))}

                                        </div>

                                    </div>
                                    <div className='obidenssettings'>
                                        <div className='obidenstochka'>
                                            <div className='countofsubp'>


                                                <div className='like'>
                                                    <img className='podn' src={like1} />
                                                    <p className='kolvo'>{r.likes}</p> </div>
                                                <div className='comm'>
                                                    <img className='podn' src={repost1} />
                                                    <p className='kolvo'>{r.reps}</p> </div>
                                                <div className='repost'>
                                                    <img className='podn' src={visibility} />
                                                    <p className='kolvo'>{r.views}</p></div>



                                            </div>
                                            {isImageVisible ? (
                                                <img className='podn' src={tochka} alt="Изображение 1" onClick={toggleImage} style={{ cursor: 'pointer' }} />
                                            ) : (
                                                <img className='podn' src={tochka2} alt="Изображение 2" onClick={toggleImage} style={{ cursor: 'pointer' }} />
                                            )}
                                        </div>
                                        {isBlockVisible && (
                                            <div className='your-block'>
                                                <div className='your-block1'> <img className='podn' src={save} /> <p>Сохранить</p>  </div>
                                                <div className='your-block1'> <img className='podn' src={error} /> <p>Пожаловаться</p>  </div>
                                                <div className='your-block1'> <img className='podn' src={copy} /> <p>Копировать</p>  </div>
                                            </div>
                                        )}
                                    </div>


                                </div>


                            </div>

                        </section></div>
                ))}

                <div className='rasst'>
                    <div className='comments2'>
                        <img className='mini' src={mini} alt="mini" />
                        <form onSubmit={handleCommentSubmit2} className='inandbut'>

                            <input

                                placeholder='Введите комментарий...'
                                type='text'
                                name='name'

                                value={comment}

                                className='vvodforrelease'

                                onChange={handleInputChange} />
                            {comment.trim() !== '' && (
                                isHovered1 === true ? (
                                    <div className='bgg3'>
                                        <MainButton onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} onClick={handleCommentSubmit2}>Отправить</MainButton>
                                    </div>) : (
                                    <div>   <MainButton onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} onClick={handleCommentSubmit2}>Отправить</MainButton></div>
                                )

                            )}

                        </form>
                    </div>
                    <div className='rasst2'>

                        <div className='comments-count'>
                            {/* Условие для вывода корректного окончания */}
                            {readCommData.length === 1
                                ? <p className='comments-countp'>1 комментарий</p>
                                : readCommData.length > 1
                                    ? <p className='comments-countp'>{readCommData.length} комментария</p>
                                    : <p className='comments-countp'>Нет комментариев</p>}
                        </div>

                        <div className='comments-list'>
                            {readCommData

                                .slice(0, visibleCount)
                                // .sort((a, b) => {
                                //     const dateA = a.data.split('.').reverse().join('-'); // Преобразуем 'DD.MM.YYYY' в 'YYYY-MM-DD'
                                //     const dateB = b.data.split('.').reverse().join('-'); // То же для b
                                //     return new Date(dateB) - new Date(dateA); // Сортировка по убыванию
                                // })
                                .map((c, index) => (
                                    <div key={index} className='comment'>
                                        <div className='vmeste1r'>
                                            <div className='contentr'>
                                                <img className='minir' src={mini} />

                                            </div>

                                            <div className='vmester'>
                                                <div className='tochkar'>

                                                    <div className='podn2'>
                                                        <img className='podnr' src={currentImages2[index]} alt="Точка" onClick={() => handleImageClick2(index)} />
                                                    </div>
                                                    {blockVisibility2[index] && (
                                                        <div className='your-blockk'>

                                                            <div className='your-block1'> <img className='podn' src={error} /> <p>Пожаловаться</p>  </div>

                                                        </div>
                                                    )}

                                                </div>
                                                <div className='blockoftextr'>

                                                    <h3 className="namepostr">{c.name} </h3>
                                                    <p className='datar'>{c.data} </p>
                                                    <p className='ter'>{c.des} </p>

                                                </div>
                                                <div className='commvstolb'>
                                                    <div className='ocenkar'>

                                                        <div className='liker'>
                                                            <img className='podnr' src={like1} />
                                                            <p className='kolvor'>{c.like} </p>
                                                        </div>

                                                        <div className='commr'>
                                                            <img className='podnr' src={currentImages[index]} alt="Коммент" onClick={() => handleImageClick1(index)} />
                                                            <p className='kolvor'>{c.comm} </p>
                                                            {/* Блок, который отображается при нажатии на изображение */}

                                                        </div>
                                                    </div>

                                                    {activeComments.length > 0 && activeIndex === index && (

                                                        <div className='comments-list1'>
                                                            {readCommData[index].subComments.length > visibleCount1 && checkZafruzki && ( // Проверка, превышает ли количество комментариев видимое количество
                                                                <p className='zagr' style={{ cursor: 'pointer' }} onClick={loadMoreComments1}>
                                                                    Загрузить ещё
                                                                </p>
                                                            )}
                                                            <div className="sub-comments">
                                                                {activeComments
                                                                    .slice(0, visibleCount1)
                                                                    .map((subc, idx) => (
                                                                        <div key={idx} className='comment'>
                                                                            <div className='vmeste1r1'>
                                                                                <div className='contentr'>
                                                                                    <img className='minir' src={mini} alt="Мини" />
                                                                                </div>
                                                                                <div className='vmester'>
                                                                                    <div className='tochkar'>
                                                                                        <div className='podn2'>
                                                                                            <img
                                                                                                className='podnr'
                                                                                                src={currentImages3[idx]}
                                                                                                alt="Точка"
                                                                                                onClick={() => handleImageClick3(idx)} />
                                                                                        </div>
                                                                                        {blockVisibility3[idx] && (
                                                                                            <div className='your-blockk'>
                                                                                                <div className='your-block1'>
                                                                                                    <img className='podn' src={error} alt="Ошибка" />
                                                                                                    <p>Пожаловаться</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        )}
                                                                                    </div>
                                                                                    <div className='blockoftextr'>
                                                                                        <h3 className="namepostr">{subc.name}</h3>
                                                                                        <p className='datar'>{subc.data}</p>
                                                                                        <p className='ter'>{subc.des}</p>
                                                                                    </div>
                                                                                    <div className='commvstolb'>
                                                                                        <div className='ocenkar'>
                                                                                            <div className='liker'>
                                                                                                <img className='podnr' src={like1} alt="Лайк" />
                                                                                                <p className='kolvor'>{subc.like}</p>
                                                                                            </div>
                                                                                            <div className='commr'>
                                                                                                <img
                                                                                                    className='podnr'
                                                                                                    src={currentImages4[idx]}
                                                                                                    alt="Коммент"
                                                                                                    onClick={() => handleImageClick4(index, idx)} />
                                                                                                <p className='kolvor'></p>  </div> </div>



                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}


                                                                {activeIndex === index && (
                                                                    <div className='additional-block1'>

                                                                        <div className='comments'>
                                                                            <img className='mini' src={mini} alt="mini" />
                                                                            <form onSubmit={handleCommentSubmit2} className='inandbut'>

                                                                                <input

                                                                                    placeholder='Введите комментарий...'
                                                                                    type='text'
                                                                                    name='name'

                                                                                    value={comment1}

                                                                                    className='vvodforrelease'

                                                                                    onChange={handleInputChange1} />
                                                                                {comment1.trim() !== '' && (
                                                                                    isHovered2 === true ? (
                                                                                        <div className='bgg3'>
                                                                                            <MainButton onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} onClick={handleCommentSubmit2}>Отправить</MainButton>
                                                                                        </div>) : (
                                                                                        <div>   <MainButton onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} onClick={handleCommentSubmit2}>Отправить</MainButton></div>
                                                                                    )

                                                                                )}

                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                )}


                                                            </div>
                                                        </div>
                                                    )}


                                                </div>
                                            </div>



                                        </div><div className="gray-line1" />
                                    </div>
                                ))}
                        </div>


                    </div>


                </div>
                {readCommData.length > visibleCount && ( // Проверка, превышает ли количество комментариев видимое количество
                    <p className='zagr' style={{ cursor: 'pointer' }} onClick={loadMoreComments}>
                        Загрузить ещё
                    </p>
                )}



                <div className='rec1'>
                    <p className='nazv6'>Может быть интересно</p>
                    <div className='card-container1'>
                        {recommendData.map((sub, index) => (
                            <OneSubcribe
                                key={index} // Не забудьте добавить ключ для каждого элемента списка
                                name={sub.name}
                                descriptionn={sub.descriptionn}
                                time={sub.time}
                                author={sub.author}
                                sub={sub.sub}
                                image1={sub.image1} // Передаем первое изображение
                                image2={sub.image2} // Передаем второе изображение
                                image3={sub.image3} // Передаем третье изображение
                                hashtags={sub.hashtags}
                                className="sectionsubForSubs1"
                            />
                        ))}
                    </div>
                </div>
            </div>






        </div></>

    ) 


}