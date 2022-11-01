import React, { useState, useEffect } from "react";

import { BiMenu } from "react-icons/bi";
import { BiArrowBack } from "react-icons/bi";
import axios from 'axios';
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import logo from "../images/Logo.png"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const SERVER_URL = 'http://localhost:8000/user/login';
  const [login1, setlogin1] = useState(false);

  /*const onPressText = (e) => {
    console.dir(e.target.value);
    const { value, name } = e.target; // e.target에서 value와 name 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사(불변성을 위해)
      [name]: value, // name 키를 가진 값을 value 로 변경
    });
    LoginHandler();
    // console.log(inputs.password,"vs", inputs.pwd);
  }*/

  /*const IdModifyHandler = (e) => {
    console.log(e.target);
    e.preventDefault();
    const id = e.target.id.value;
    axios.post(SERVER_URL, {
        password,
        pwd,
    })
    .then((res) => {
        navigate("/user/login");
    });
}*/

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      setlogin1(true);
    }
  }, [token]);

  const handleLogOut = () => {
    setlogin1(false);
    localStorage.removeItem('token');
  };

  //if(true면 로그아웃 버튼 구현
  // flase면 로그인 버튼 보여주기)

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <nav
          className={`${styles.header__content__nav} ${
            menuOpen ? styles.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/page-notice" onClick={menuToggleHandler}>
                공지사항
              </Link>
            </li>
            <li>
              <Link to="/page-suggest" onClick={menuToggleHandler}>
                건의사항/정보수정요청
              </Link>
            </li>
            <li>
              <Link to="/mypage" onClick={menuToggleHandler}>
                마이페이지
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.header__content__toggle}>
          {!menuOpen ? (
            <BiMenu onClick={menuToggleHandler} />
          ) : (
            <BiArrowBack onClick={menuToggleHandler} />
          )}
        </div>
        <Link to="/" className={styles.header__content__logo}>
          <img src={logo} style={{width:"100px", height:"100px"}}/>
        </Link>
        <Link to="/login">
          <button className={styles.header__content__button} onClick={()=> handleLogOut }>로그인</button>
          {/* 삼항 연산자로 false일때는 로그인 버튼으로 / 밎으면 로그아웃으로*/}
        </Link>
      </div>
    </header>
  );
};

export default Header;
