import React, { useState, useEffect } from "react";
//import { useLocation } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import { BiArrowBack } from "react-icons/bi";
//import axios from 'axios';
import styles from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/Logo.png"

const Header = () => {
  const [isLogined, setIsLogined] = useState(false);
  const navigate = useNavigate('');
  const [menuOpen, setMenuOpen] = useState(false);


  const getToken = () => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsLogined(true);
    }else{
      setIsLogined(false);
    }
  }
  
  useEffect(() => {
    if(!isLogined)getToken(); 
  });

  const handleLogOut = () => {
    setIsLogined(false);
    localStorage.removeItem('access_token');
    navigate('/');
  }

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
            {isLogined && <li>
              <Link to="/mypage" onClick={menuToggleHandler}>
                마이페이지
              </Link> 
            </li>}
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
        {isLogined && <button className={styles.header__content__button} onClick={handleLogOut}>로그아웃</button> }
        {!isLogined && <Link to="/login"><button className={styles.header__content__button}>로그인</button></Link>}
      </div>
    </header>
  );
};

export default Header;
