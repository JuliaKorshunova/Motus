import React, { useState, useEffect } from "react";
import "./Login.css";
import MainButton2 from "../Button/MainButton2";
import { Link } from "react-router-dom";
import HeaderForLR from "../Header/HeaderForLog";
import { useDispatch } from "react-redux";
// import { loginSuccess } from './authSlice';

export default function Login(props) {
  const username = "";
  const emaill = "";

  // Если модальное окно не открыто, ничего не рендерим
  const [podcasterData, setPodcasterData] = useState([]);
  const [isButtonDisabled1, setIsButtonDisabled1] = useState(true); // Начальное состояние кнопки - отключена

  const [email, setEmail] = useState(emaill);
  const [error, setError] = useState("");

  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [isEmailNotEmpty, setIsEmailNotEmpty] = useState(false);

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
  // const dispatch = useDispatch();
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
      console.log("Пароль:", password);

      setEmail("");
      setPassword("");
    }

    const userData = {
      id: 123,
      username: "example",
      email: "example@email.com",
    }; // Пример данных пользователя
    dispatch(loginSuccess(userData));
  };
  const [focusedState, setFocusedState] = useState({
    input1: false,
    input2: false,
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
  const input2FocusHandlers = createFocusHandler("input2");

  useEffect(() => {
    // Проверка наличия ошибок
    const hasError = error == "" && errorPassword == "";

    // Если хотя бы одно поле имеет ошибку — отключаем кнопку
    setIsButtonDisabled1(!hasError);
  }, [error, errorPassword]); // Зависимости для проверки валидации Мы добавили зависимости в массив, чтобы useEffect вызывался каждый раз, когда изменяются состояния ошибок.

  return (
    <>
      <HeaderForLR />
      <div className="parent1"></div>

      <div className="centerforreg2">
        <div className="text_for_login-zag">Вход /</div>
        <Link to="/register">
          {" "}
          {/* Используем Link вместо div */}
          <div className="text_for_register">Регистрация</div>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="parent"></div>

        <div className="_frame_882012">
          <div className="inputplustext1">
            <div
              className={` ${focusedState.input1 && error.trim() === "" ? "_pink1" : "_blacknewpod3"}  ${error ? "_red1" : "_blacknewpod3"}   ${isEmailNotEmpty && error.trim() === "" && focusedState.input1 == false ? "_green1" : "_blacknewpod3"}`}
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

          <div className="inputplustext1">
            {/* <div className={`_rectangle15_3green ${errorPassword ? 'rectangle-container-error' : ''} ${focusedState.input6 ? '_rectangle15_3pink' : ''}`} > */}
            <div
              className={`  ${errorPassword ? "_red1" : "_blacknewpod3"}  ${focusedState.input2 && errorPassword.trim() === "" ? "_pink1" : "_blacknewpod3"} ${isPassNotEmpty && errorPassword.trim() === "" && focusedState.input4 == false ? "_green1" : "_blacknewpod3"}`}
            >
              <input
                type="password"
                className={`_rectangle16 ${errorPassword ? "rectangle-error1" : ""}`}
                placeholder="Пароль"
                value={password}
                onChange={handlePasswordChange}
                required
                {...input2FocusHandlers}
              />{" "}
            </div>
            {errorPassword && (
              <div className="text_for_mistake">{errorPassword}</div>
            )}
          </div>

          <div className="frame8821">
            <div className="text_for_forget_password">
              Забыли пароль?{" "}
              <Link to="/reset-password" className="orange-text">
                Восстановить
              </Link>
            </div>
          </div>

          <div className="btnnForReg-user">
            {/* <div className='test1'> */}
            <div className="btnnForRegPodcaster1">
              {isButtonDisabled1 === true ? (
                <MainButton2 disabled={isButtonDisabled1}>Войти</MainButton2>
              ) : isHovered ? (
                <div className="bgforbtnsave">
                  <MainButton2
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    disabled={isButtonDisabled1}
                  >
                    Войти
                  </MainButton2>
                </div>
              ) : (
                <MainButton2
                  // onClick={props.ispressed}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  disabled={isButtonDisabled1}
                >
                  Войти
                </MainButton2>
              )}
            </div>

            {/* </div> */}
          </div>
        </div>
      </form>
    </>
  );
}
