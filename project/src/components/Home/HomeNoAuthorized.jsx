import "./HomeNoAuthorized.css";
import Header from "../Header/Header";
import image from "/Gradient.png";
import fractall from "/fractall.svg";
import image2 from "/Gradientbig.png";
import image3 from "/Gradientformobile.png";
import imageGradient from "/GradientForReg.png";
import rec from "/Rectangle 21.png";
import newbie from "/newbie.png";
import flashed from "/flashed.png";
import star from "/star.png";
import donetab from "/donetab.png";
import donewhite from "/donewhite.png";
import stargrey from "/stargrey.png";
import stargreen from "/stargreen.png";
import arrow_forward from "/arrow_forward.png";
import arrow_forward2 from "/arrow_forward2.png";
import OnePodbor from "../PodborSection copy/OnePodbor/OnePodbor";
import picture from "/mi.png";
import OneSubcribe from "../SubscribesSection copy/OneSubscribe/OneSubcribe";
import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import Marquee from "react-fast-marquee";
import fractal from "/Group11.png";
import fractal2 from "/Group26.png";
import fractal3 from "/Group 9.png";
import fractal4 from "/Group8830.png";
import SecondButton from "../Button/SecondButton";
// import Marquee from '../Marquee/Marquee';
import MainButtonBig from "../Button/MainButtonBig/MainButtonBig";
import ButtonTabGreen from "../Button/ButtonTab/ButtonTabGreen";
import ButtonTabOrange from "../Button/ButtonTab/ButtonTabOrange";
import ButtonTabPink from "../Button/ButtonTab/ButtonTabPink";
import { useNavigate } from "react-router-dom";
export default function HomeNoAuthorized() {
  const [numberOfCards, setNumberOfCards] = useState(calculateNumberOfCards());
  const [numberOfCards1, setNumberOfCards1] = useState(
    calculateNumberOfCards1(),
  );

  useEffect(() => {
    const handleResize = () => {
      setNumberOfCards(calculateNumberOfCards());
      setNumberOfCards1(calculateNumberOfCards1());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function calculateNumberOfCards() {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 1280 && windowWidth < 1440) {
      return 2;
    } else if (windowWidth < 1280) {
      return 3;
    }
  }
  function calculateNumberOfCards1() {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 1280 && windowWidth < 1440) {
      return 2;
    }
  }
  const navigate = useNavigate();

  const handleRegisterClick = () => navigate("/register");
  const handleLoginClick = () => navigate("/login");

  const [isAnimating, setIsAnimating] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const [position, setPosition] = useState(0); // Состояние для фиксированной позиции
  const [marqueePosition, setMarqueePosition] = useState(0); // Добавлено для отслеживания позиции
  const handleMouseEnterP = () => {
    setIsAnimating(true);
  };

  const handleMouseLeaveP = () => {
    // Устанавливаем текущую позицию при уходе курсора
    if (isAnimating) {
      setPosition((prevPosition) => prevPosition + 10); // Здесь 10 — это шаг, который ты хочешь использовать
    }
    setIsAnimating(false);
  };

  const handleMouseEnter2 = () => {
    setIsAnimating(true);
  };

  const handleMouseLeave2 = () => {
    setIsAnimating(false);
  };

  const authorData = {
    fullName: "Александра Митрошина",
  };

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [isHoveredE, setIsHoveredE] = useState(false);
  const handleMouseEnterE = () => {
    setIsHoveredE(true);
  };

  const handleMouseLeaveE = () => {
    setIsHoveredE(false);
  };
  const [isHoveredR, setIsHoveredR] = useState(false);
  const handleMouseEnterR = () => {
    setIsHoveredR(true);
  };

  const handleMouseLeaveR = () => {
    setIsHoveredR(false);
  };
  const [isHovered1, setIsHovered1] = useState(false);
  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const [firstName, lastName] = authorData.fullName.split(" "); // Извлекаем имя и фамилию
  const [subscribeData, setSubscribeData] = useState([]);

  useEffect(() => {
    // Замените 'data.json' на путь к вашему JSON-файлу
    fetch("/datasub.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setSubscribeData(data.cards))
      .catch((error) => console.error("Ошибка при загрузке данных:", error));
  }, []);
  const [podborData, setPodborData] = useState([]);

  useEffect(() => {
    fetch("/dataplay.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setPodborData(data))
      .catch((error) => console.error("Ошибка при загрузке данных:", error));
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Функция для обновления ширины окна
  const handleResize = () => {
    console.log("Ширина окна изменена:", window.innerWidth);
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Устанавливаем обработчик события resize
    window.addEventListener("resize", handleResize);

    // Удаляем обработчик при размонтировании
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // let numberOfCards;
  // window.addEventListener('resize', () => {
  //     const windowWidth = window.innerWidth;

  //      if (windowWidth >= 1280 && windowWidth < 1440) {
  //       numberOfCards = 2;
  //     } else if (windowWidth < 1280) {
  //       numberOfCards = 3;
  //     }
  //   console.log('r='+numberOfCards)
  // //  Вывод для проверки (или обновите интерфейс)
  //     // Здесь необходимо обновить интерфейс, чтобы отобразить правильное количество карт.
  //   });

  const username = "";
  const emaill = "";

  // Если модальное окно не открыто, ничего не рендерим
  const [podcasterData, setPodcasterData] = useState([]);
  const [isButtonDisabled1, setIsButtonDisabled1] = useState(true); // Начальное состояние кнопки - отключена

  const [email, setEmail] = useState(emaill);
  const [error, setError] = useState("");

  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const [isEmailNotEmpty, setIsEmailNotEmpty] = useState(false);

  const [isNameNotEmpty, setIsNameNotEmpty] = useState(false);
  const [isNickNameNotEmpty, setIsNickNameNotEmpty] = useState(false);
  const [isDesNotEmpty, setIsDesNotEmpty] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailNotEmpty(value.trim() !== "");
    // Простая регулярная проверка email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      setError("Введите корректный адрес электронной почты");
    } else {
      setError("");
    }
  };

  const [isPassNotEmpty, setIsPassNotEmpty] = useState(false);
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsPassNotEmpty(value.trim() !== "");
    const passwordPattern = /(?=.*[a-z])(?=.*[A-Z])/;
    // Проверяем валидность пароля
    if (!passwordPattern.test(value)) {
      setErrorPassword("Пароль должен содержать строчную и заглавную буквы");
    } else {
      setErrorPassword(""); // Сбрасываем ошибку, если пароль валиден
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверка на валидность
    let hasError = false; // Флаг для отслеживания ошибки

    if (password.trim() === "" || errorPassword) {
      setErrorPassword("Пароль должен быть действительным");
      hasError = true;
    }
    if (email.trim() === "" || error) {
      setError("Пароль должен быть действительным");
      hasError = true;
    }

    // Обработка успешной валидации, если все поля заполнены
    if (!hasError) {
      setNickname("");
      setPassword("");
      setErrorPassword("");
      setEmail("");
    }
  };
  const [focusedState, setFocusedState] = useState({
    input1: false,

    input6: false,
  });
  const createFocusHandler = (inputName) => {
    return {
      onFocus: () => {
        setFocusedState((prevState) => ({
          ...prevState,
          [inputName]: true,
        }));
      },
      onBlur: () => {
        setFocusedState((prevState) => ({
          ...prevState,
          [inputName]: false,
        }));
      },
    };
  };
  const input1FocusHandlers = createFocusHandler("input1");

  const input6FocusHandlers = createFocusHandler("input6");

  useEffect(() => {
    // Проверка наличия ошибок
    const hasError = error == "" && errorPassword == "";
    console.log("isChecked inside useEffect:", isChecked); // Добавим консоль для отслеживания

    // Если хотя бы одно поле имеет ошибку — отключаем кнопку
    // setIsButtonDisabled1(!hasError);
  }, [error, errorPassword, isChecked]);

  function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = (e) => {
          if (e.deltaY == 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "smooth",
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
    return elRef;
  }
  const scrollRef = useHorizontalScroll();

  function useHorizontalScroll1() {
    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = (e) => {
          if (e.deltaY == 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "smooth",
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
    return elRef;
  }
  const scrollRef1 = useHorizontalScroll1();

  return (
    <div className="withoutscroll">
      <Header />

      <img src={image} alt="Описание изображения" className="gradient"></img>

      <div className="group11">
        <img src={fractal} alt="Описание изображения" className="group11"></img>
      </div>

      <div className="group26">
        <img
          src={fractal2}
          alt="Описание изображения"
          className="group11"
        ></img>
      </div>

      <div className="group9">
        <img
          src={fractal3}
          alt="Описание изображения"
          className="group11"
        ></img>
      </div>

      <div className="group8830_picture">
        <img
          src={fractal4}
          alt="Описание изображения"
          className="group11"
        ></img>
      </div>

      <div className="container1">
        <div className="conteinerforotstup">
          <div className="obedinenieforhome">
            <section className="sforhome">
              <div className="pinkblockforhome1">
                <div className="whiteblockforhome1">
                  <div className="text_to_place">Место для логотипа</div>
                  <div className="text_to_motus">
                    * motus — [mɔtys] (lat.) движение
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="obedinenieforhome2">
            <section className="sforhome">
              <div className="pinkblockforhome">
                <div className="whiteblockforhome">
                  <div className="text_to_second">
                    Современная площадка для саморазвития, где вы найдете
                    обучающие подкасты, бесплатные образовательные курсы, а
                    также сможете делиться своими успехами, начав записывать
                    короткие подкасты для своей аудитории.
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="forfractal">
            <img
              src={fractall}
              alt="Описание изображения"
              className="fractall"
            ></img>
          </div>

          <div className="formainpodcasts">
            <div className="text_to_toppodcasts">Топ подкастов</div>

            <div className="card-container-stroka">
              {/* <div ref={scrollRef1} style={{ width: "100vw", overflow: "auto" }} > */}
              <div ref={scrollRef1} className="srollhori12">
                <div className="srollhori1">
                  {subscribeData.slice(0, numberOfCards).map((sub, index) => (
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
                    />
                  ))}
                  <div className="viewmore">
                    <img
                      src={image2}
                      className="orangeGradient2"
                      alt="Описание изображения"
                    />

                    <div className="more2">Смотреть больше</div>
                    <img
                      className="morearrow2"
                      src={arrow_forward2}
                      alt="Описание изображения"
                    />
                  </div>
                  <img
                    src={image3}
                    className="orangeGradient3"
                    alt="Описание изображения"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="podborkiglav">
            <div className="text_to_podborka">Подборки слушателей</div>

            <div className="forpodborka">
              {podborData.slice(0, 1).map((play, index) => (
                <OnePodbor
                  key={index}
                  name={play.name}
                  descriptionn={play.descriptionn}
                  view={play.view}
                  release={play.release}
                  image1={play.image1}
                  image2={play.image2}
                  image3={play.image3}
                  image4={play.image4}
                  className={index === 1 ? "secondc" : ""}
                  className2={"obedinenie3forpod"}
                />
              ))}
              {podborData.slice(1, 2).map((play, index) => (
                <OnePodbor
                  key={index}
                  name={play.name}
                  descriptionn={play.descriptionn}
                  view={play.view}
                  release={play.release}
                  image1={play.image1}
                  image2={play.image2}
                  image3={play.image3}
                  image4={play.image4}
                  className={"secondc"}
                  className2={"obedinenie2forpod"}
                />
              ))}
              <div className="podborvsroku">
                {podborData.slice(2, 3).map((play, index) => (
                  <OnePodbor
                    key={index}
                    name={play.name}
                    descriptionn={play.descriptionn}
                    view={play.view}
                    release={play.release}
                    image1={play.image1}
                    image2={play.image2}
                    image3={play.image3}
                    image4={play.image4}
                    className={index === 1 ? "secondc" : ""}
                    className2={"obedinenie3forpod"}
                  />
                ))}

                <img
                  src={image2}
                  className="orangeGradient1"
                  alt="Описание изображения"
                />
                <div className="more1">Смотреть больше</div>
                <img
                  className="morearrow1"
                  src={arrow_forward2}
                  alt="Описание изображения"
                />
              </div>

              <div className="viewmore3">
                <div className="more2">Смотреть больше</div>
                <img
                  className="morearrow2"
                  src={arrow_forward2}
                  alt="Описание изображения"
                />
              </div>
              <img
                src={image3}
                className="orangeGradient4"
                alt="Описание изображения"
              />
            </div>
          </div>
          <div>
            <div className="toptegvsroku">
              <div className="text_to_topteg">Топовый тег</div>

              <img
                className="arrblack"
                src={arrow_forward}
                alt="Описание изображения"
              ></img>
              <div className="text_to_topteg2">#образование</div>
            </div>
            <div className="hashlocation">
              <div className="hashmain">
                <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
                  <Marquee speed={10} direction="right">
                    <p
                      className="hashtaggreen"
                      style={{ display: "inline-block", margin: 0 }}
                    >
                      #спорт #маньяки #веселье #секс #феминизм #блогерство #дети
                      #образование #книги #сериалы #фото&nbsp; #спорт #маньяки
                      #веселье #секс #фото #блогерство #дети #образование #книги
                      #сериалы #феминизм&nbsp; #спорт #маньяки #образование
                      #секс #фото #блогерство #дети #веселье #книги #сериалы
                      #феминизм&nbsp; #блогерство #дети #образование #книги
                      #сериалы #феминизм #спорт #маньяки #веселье #секс #фото
                      #блогерство #спорт #образование #книги #сериалы
                      #феминизм&nbsp; #спорт #маньяки #веселье #секс #фото
                      #блогерство #спорт #образование #книги #сериалы
                      #феминизм&nbsp; #спорт #маньяки #веселье #секс #фото
                      #блогерство #дети #образование #книги #сериалы
                      #феминизм&nbsp; #спорт #маньяки #веселье #секс #фото
                      &nbsp;
                    </p>
                  </Marquee>
                </div>
                <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
                  <Marquee speed={10} direction="right">
                    <p
                      className="hashtagpink"
                      style={{ display: "inline-block", margin: 0 }}
                    >
                      #спорт #маньяки #веселье #секс #фото #блогерство #дети
                      #образование #книги #сериалы #феминизм&nbsp; #спорт
                      #маньяки #образование #секс #фото #блогерство #дети
                      #веселье #книги #сериалы #феминизм&nbsp; #спорт #маньяки
                      #веселье #секс #фото #блогерство #спорт #образование
                      #книги #сериалы #феминизм&nbsp; #спорт #маньяки #веселье
                      #секс #феминизм #блогерство #дети #образование #книги
                      #сериалы #фото&nbsp; #спорт #маньяки #веселье #секс #фото
                      #блогерство #дети #образование #книги #сериалы
                      #феминизм&nbsp; #спорт #маньяки #образование #секс #фото
                      #блогерство #дети #веселье #книги #сериалы #феминизм&nbsp;
                      #сериалы #фото&nbsp; #спорт #маньяки #веселье #секс #фото
                      &nbsp;
                    </p>
                  </Marquee>
                </div>
              </div>
            </div>
            <div className="card-container-stroka2">
              <div
                onMouseEnter={handleMouseEnterP}
                onMouseLeave={handleMouseLeaveP}
              >
                <div ref={scrollRef} className="srollhori122">
                  <div className="srollhori">
                    {subscribeData
                      .slice(0, numberOfCards1)
                      .map((sub, index) => (
                        <OneSubcribe
                          key={index}
                          name={sub.name}
                          descriptionn={sub.descriptionn}
                          time={sub.time}
                          author={sub.author}
                          sub={sub.sub}
                          image1={sub.image1}
                          image2={sub.image2}
                          image3={sub.image3}
                          hashtags={sub.hashtags}
                        />
                      ))}
                    <div className="viewmoreS">
                      <img
                        src={image2}
                        className="orangeGradient2"
                        alt="Описание изображения"
                      />
                      <div className="more2">Смотреть больше</div>
                      <img
                        className="morearrow2"
                        src={arrow_forward2}
                        alt="Описание изображения"
                      />
                    </div>
                  </div>
                </div>
                {/* <Marquee
                    speed={isAnimating ? 50 : 0} 
                    direction='right'
                    style={{ whiteSpace: 'nowrap', transform: `translateX(-${position}px)` }}
                    pauseOnHover={false}
                > */}
                {/* <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: '10px', display: 'flex', flexDirection:'row', marginRight: '10px' }}>
                  
                </div> */}
                {/* </Marquee> */}
              </div>
            </div>
            <div className="hashmain2">
              <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
                <Marquee speed={10} direction="right">
                  <p
                    className="hashtaggreen"
                    style={{ display: "inline-block", margin: 0 }}
                  >
                    #спорт #маньяки #веселье #секс #фото #блогерство #спорт
                    #образование #книги #сериалы #феминизм&nbsp; #спорт #маньяки
                    #веселье #секс #фото #блогерство #дети #образование #книги
                    #сериалы #феминизм&nbsp; #спорт #маньяки #веселье #секс
                    #фото #блогерство #дети #образование #книги #сериалы
                    #феминизм&nbsp; #спорт #маньяки #веселье #секс #фото
                    #блогерство #дети #образование #книги #сериалы
                    #феминизм&nbsp; #образование #книги #сериалы #феминизм&nbsp;
                    #блогерство #спорт #образование #книги #сериалы
                    #феминизм&nbsp; #секс #фото #блогерство #дети #образование
                    #книги #сериалы #феминизм&nbsp;
                  </p>
                </Marquee>
              </div>
              <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
                <Marquee speed={10} direction="right">
                  <p
                    className="hashtagorange"
                    style={{ display: "inline-block", margin: 0 }}
                  >
                    #образование #книги #сериалы #феминизм #спорт #маньяки
                    #веселье #секс #фото #блогерство #спорт #образование #книги
                    #сериалы #феминизм&nbsp; #спорт #образование #веселье #секс
                    #фото #блогерство #дети #маньяки #книги #сериалы
                    #феминизм&nbsp; #спорт #маньяки #веселье #секс #фото
                    #блогерство #дети #образование #книги #сериалы
                    #феминизм&nbsp; #спорт #маньяки #веселье #секс #фото
                    #блогерство #дети &nbsp; #дети #образование #книги #сериалы
                    #феминизм&nbsp; #маньяки #веселье #секс #фото #блогерство
                    #спорт #образование #книги #сериалы #феминизм&nbsp; #дети
                    #образование #книги #сериалы #феминизм&nbsp;
                  </p>
                </Marquee>
              </div>
              <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
                <Marquee speed={10} direction="right">
                  <p
                    className="hashtagpink"
                    style={{ display: "inline-block", margin: 0 }}
                  >
                    #спорт #образование #книги #секс #феминизм&nbsp; #спорт
                    #маньяки #веселье #секс #фото #блогерство #дети #образование
                    #книги #сериалы #феминизм #спорт #маньяки #веселье #сериалы
                    #фото #блогерство&nbsp; #спорт #маньяки #веселье #секс #фото
                    #блогерство #дети #образование #книги #сериалы
                    #феминизм&nbsp; #спорт #маньяки #блогерство #дети #веселье
                    #секс #фото#образование #книги #сериалы #феминизм&nbsp;
                    #маньяки #веселье #сериалы #фото #блогерство&nbsp; #книги
                    #сериалы #феминизм&nbsp; #секс #фото #блогерство #дети
                    #образование #книги #сериалы #феминизм&nbsp; #образование
                    #книги #сериалы #феминизм #спорт #маньяки #веселье #сериалы
                    #фото #блогерство&nbsp;
                  </p>
                </Marquee>
              </div>
              <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
                <Marquee speed={10} direction="right">
                  <p
                    className="hashtaggreen"
                    style={{ display: "inline-block", margin: 0 }}
                  >
                    #веселье #секс #фото #блогерство #спорт #образование #книги
                    #сериалы #феминизм&nbsp; #спорт #маньяки #веселье #секс
                    #фото #блогерство #спорт #образование #книги #сериалы
                    #феминизм #спорт #маньяки&nbsp; #спорт #маньяки #веселье
                    #секс #фото #блогерство #дети #образование #книги #сериалы
                    #феминизм&nbsp; #спорт #маньяки #веселье #секс #фото
                    #блогерство #дети #образование #книги #сериалы
                    #феминизм&nbsp; #веселье #секс #фото #блогерство #спорт
                    #образование #книги #сериалы #феминизм&nbsp; #спорт #маньяки
                    #веселье #секс #фото #блогерство #спорт #образование #книги
                    #сериалы #феминизм #спорт #маньяки&nbsp; #сериалы
                    #феминизм&nbsp;
                  </p>
                </Marquee>
              </div>
            </div>
          </div>
          <div className="group4_home">
            <img
              src={image2}
              alt="Описание изображения"
              className="gradientSmall"
            ></img>
            <div className="obedinenieforhome3">
              <section className="cards_for_home">
                <div className="pinkblockforhome1">
                  <div className="whiteblockforhome1">
                    <div className="text_to_reg">Хочешь с нами?</div>
                    <div className="text_to_reg1">Регистрируйся!</div>
                  </div>
                </div>
              </section>
            </div>

            <div className="inputforemail">
              <div className="inputplustext11">
                <div
                  className={` ${focusedState.input1 && error.trim() === "" ? "_pink1" : "_blacknewpod45"}  ${error ? "_red1" : "_blacknewpod45"}   ${isEmailNotEmpty && error.trim() === "" && focusedState.input1 == false ? "_green1" : "_blacknewpod45"}`}
                >
                  <input
                    type="email"
                    className={`_rectangle16 ${error ? "rectangle-error1" : ""}`}
                    placeholder="Почта"
                    // value=''
                    onChange={handleEmailChange}
                    required
                    {...input1FocusHandlers}
                  />
                </div>
                {error && <div className="text_for_mistake">{error}</div>}
              </div>
            </div>

            <div className="input2">
              <div className="inputplustext11">
                {/* <div className={`_rectangle15_3green ${errorPassword ? 'rectangle-container-error' : ''} ${focusedState.input6 ? '_rectangle15_3pink' : ''}`} > */}
                <div
                  className={`  ${errorPassword ? "_red1" : "_blacknewpod44"}  ${focusedState.input6 && errorPassword.trim() === "" ? "_pink1" : "_blacknewpod44"} ${isPassNotEmpty && errorPassword.trim() === "" && focusedState.input4 == false ? "_green1" : "_blacknewpod44"}`}
                >
                  <input
                    type="password"
                    className={`_rectangle16 ${errorPassword ? "rectangle-error1" : ""}`}
                    placeholder="Пароль"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    {...input6FocusHandlers}
                  />{" "}
                </div>
                {errorPassword && (
                  <div className="text_for_mistake">{errorPassword}</div>
                )}
              </div>
            </div>

            <div className="forcheckboxlocation">
              <div className="checkbox-container">
                <div className="blockforcheckbox"> </div>
                <input
                  type="checkbox"
                  className="checkbox-input"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  id="custom-checkbox"
                />

                <label
                  htmlFor="custom-checkbox"
                  className="custom-checkbox"
                ></label>
                <span className="text_for_checkbox">
                  Согласен на обработку персональных данных
                </span>
              </div>
            </div>

            <div className="forBtnReg">
              {isHoveredR === true ? (
                <div className="bgforbtnoformlenie">
                  <MainButtonBig
                    onMouseEnter={handleMouseEnterR}
                    onMouseLeave={handleMouseLeaveR}
                    onClick={handleRegisterClick}
                  >
                    Зарегистрироваться
                  </MainButtonBig>
                </div>
              ) : (
                <MainButtonBig
                  onMouseEnter={handleMouseEnterR}
                  onMouseLeave={handleMouseLeaveR}
                  onClick={handleRegisterClick}
                >
                  Зарегистрироваться
                </MainButtonBig>
              )}
            </div>

            <div className="forBtnExit">
              {isHoveredE === false ? (
                <div className="bgforbtnoformlenie">
                  <SecondButton
                    onMouseEnter={handleMouseEnterE}
                    onMouseLeave={handleMouseLeaveE}
                    onClick={handleLoginClick}
                  >
                    Войти
                  </SecondButton>
                </div>
              ) : (
                <SecondButton
                  onMouseEnter={handleMouseEnterE}
                  onMouseLeave={handleMouseLeaveE}
                  onClick={handleLoginClick}
                >
                  Войти
                </SecondButton>
              )}
            </div>
          </div>

          <div className="aauthoors">
            <div className="text_to_authors">Начинающие авторы</div>

            <div className="manycards">
              <div className="divforcard">
                <img
                  className="sizeofpict"
                  src={picture}
                  alt="Описание изображения"
                ></img>
                <div className="nameofauthor">
                  {firstName}
                  <br />
                  {lastName}
                </div>
              </div>
              <div className="divforcard">
                <img
                  className="sizeofpict"
                  src={picture}
                  alt="Описание изображения"
                ></img>
                <div className="nameofauthor">
                  {firstName}
                  <br />
                  {lastName}
                </div>
              </div>

              <div className="divforcard">
                <img
                  className="sizeofpict"
                  src={picture}
                  alt="Описание изображения"
                ></img>
                <div className="nameofauthor">
                  {firstName}
                  <br />
                  {lastName}
                </div>
              </div>

              <div className="divforcard">
                <img
                  className="sizeofpict"
                  src={picture}
                  alt="Описание изображения"
                ></img>
                <div className="nameofauthor">
                  {firstName}
                  <br />
                  {lastName}
                </div>
              </div>
              <img
                src={image2}
                className="orangeGradient"
                alt="Описание изображения"
              ></img>
              <div className="more">Смотреть больше</div>
              <img
                className="morearrow"
                src={arrow_forward2}
                alt="Описание изображения"
              ></img>
            </div>
          </div>

          <div className="podpiskaa">
            <div className="obedinenieforpodpiska">
              <section className="sforhome">
                <div className="pinkblockforhome">
                  <div className="whiteblockforhome">
                    <div className="podpiska">Подписка</div>
                  </div>
                </div>
              </section>
            </div>

            <img
              src={newbie}
              className="podpiskaImg1"
              alt="Описание изображения"
            ></img>
            <div className="podpiskaImg1Name">Newbie</div>
            <div className="podpiskaImg1Des">— новичок</div>
            <div className="podpiskaImg1Price">Бесплатно</div>
            <div className="obedinenieforpodpiska2">
              <section className="sforhome">
                <div className="pinkblockforhome">
                  <div className="whiteblockforhome4">
                    <div className="vstolbstar">
                      <div className="vstrokustar">
                        <img
                          src={star}
                          className="stars"
                          alt="Описание изображения"
                        ></img>
                        <div className="textforpodpiska">
                          Доступ к подкастам без рекламы
                        </div>
                      </div>

                      <div className="vstrokustar">
                        <img
                          src={star}
                          className="stars"
                          alt="Описание изображения"
                        ></img>
                        <div className="textforpodpiska">
                          Доступ к курсам без рекламы
                        </div>
                      </div>

                      <div className="vstrokustar">
                        <img
                          src={stargrey}
                          className="stars"
                          alt="Описание изображения"
                        ></img>
                        <div className="textforpodpiskagrey">
                          Доступ к вводным занятиям всех курсов
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <img
              src={flashed}
              className="podpiskaImg2"
              alt="Описание изображения"
            ></img>
            <div className="podpiskaImg2Name">Flashes</div>
            <div className="podpiskaImg2Des">— прошаренный</div>
            <div className="priceVStolb">
              <div className="podpiskaImg2Price1">
                {" "}
                <span className="bold-text">499</span> ₽/мес.
              </div>
              <div className="podpiskaImg2Price2">
                <span className="bold-text">2499</span> ₽ на полгода
              </div>
              <div className="podpiskaImg2Price3">
                <span className="bold-text">4999</span> ₽ на год
              </div>
            </div>
            <div className="obedinenieforpodpiska3">
              <section className="sforhome">
                <div className="pinkblockforhome">
                  <div className="whiteblockforhome4">
                    <div className="vstolbstar">
                      <div className="vstrokustar">
                        <img
                          src={stargreen}
                          className="stars"
                          alt="Описание изображения"
                        ></img>
                        <div className="textforpodpiska">
                          Доступ к подкастам без рекламы
                        </div>
                      </div>

                      <div className="vstrokustar">
                        <img
                          src={stargreen}
                          className="stars"
                          alt="Описание изображения"
                        ></img>
                        <div className="textforpodpiska">
                          Доступ к курсам без рекламы
                        </div>
                      </div>

                      <div className="vstrokustar">
                        <img
                          src={stargreen}
                          className="stars"
                          alt="Описание изображения"
                        ></img>
                        <div className="textforpodpiska">
                          Доступ к вводным занятиям всех курсов
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="forBtnBuy">
              {isHovered1 === true ? (
                <div className="bgforbtnoformlenie">
                  <MainButtonBig
                    onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}
                  >
                    Оформить
                  </MainButtonBig>
                </div>
              ) : (
                <MainButtonBig
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave1}
                >
                  Оформить
                </MainButtonBig>
              )}
            </div>
          </div>

          <div className="parentcont">
            <div className="text_to_tags">Поиск по тегам</div>
            <div className="formaintabs">
              <div className="tabstroka">
                <ButtonTabGreen icon={donetab}>Криминал</ButtonTabGreen>
                <ButtonTabOrange icon={donewhite}>Секс</ButtonTabOrange>
                <ButtonTabPink icon={donewhite}>Дизайн</ButtonTabPink>
                <ButtonTabOrange icon={donewhite}>Образование</ButtonTabOrange>
                <ButtonTabGreen icon={donetab}>Криминал</ButtonTabGreen>
                <ButtonTabOrange icon={donewhite}>Драма</ButtonTabOrange>
                <ButtonTabOrange icon={donewhite}>Секс</ButtonTabOrange>
                <ButtonTabGreen icon={donetab}>Криминал</ButtonTabGreen>
                <ButtonTabPink icon={donewhite}>Воспитание</ButtonTabPink>
                <ButtonTabPink icon={donewhite}>Дизайн</ButtonTabPink>
                <ButtonTabGreen icon={donetab}>Криминал</ButtonTabGreen>
                <ButtonTabOrange icon={donewhite}>Образование</ButtonTabOrange>
                <ButtonTabOrange icon={donewhite}>Драма</ButtonTabOrange>
                <ButtonTabPink icon={donewhite}>Музыка</ButtonTabPink>
                <ButtonTabGreen icon={donetab}>Кино</ButtonTabGreen>
              </div>

              <div className="forBtnSearch">
                {isHovered === true ? (
                  <div className="bgforbtnoformlenie">
                    <MainButtonBig
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      Найти
                    </MainButtonBig>
                  </div>
                ) : (
                  <MainButtonBig
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Найти
                  </MainButtonBig>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="end">
          <img src={rec} className="rec" alt="Описание изображения"></img>
          <div className="logotip">Логотип</div>
        </div>
      </div>
    </div>
  );
}
