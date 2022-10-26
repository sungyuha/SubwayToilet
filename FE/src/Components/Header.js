import React, { useState } from "react";

import { BiMenu } from "react-icons/bi";
import { BiArrowBack } from "react-icons/bi";

import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          Logo
        </Link>
        <Link to="/login">
          <button className={styles.header__content__button}>로그인</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
