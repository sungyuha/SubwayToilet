import styles from "./Footer.module.scss";
import github from "../images/github.png";
import notion from "../images/notion.png";
import logo from "../images/Logo.png";

import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <div className={styles.footer__content}>
        <div className={styles.footer__content__logo}>
          <img src={logo} style={{width : "50px", height : "50px"}}></img>
        </div>
        <address className={styles.footer__content__team}>
          팀원 이동근 장근영 성유하 박자연 | 서울시 영등포구 선유로 9길 30
          106동, 2층
        </address>
        <div className={styles.footer__content__copyright}>
          <BiCopyright />
            Copyright 2022. JiHwaTeam. All Rights Reserved.
        </div>
        <div className={styles.footer__content__site}>
          <ul>
            <li>
              <img
                src={github}
                onClick={() =>
                  window.open(
                    "https://github.com/JiHwaTeam/SubwayToilet",
                    "_blank"
                  )
                }
              />
            </li>
            <li>
              <img
                src={notion}
                onClick={() =>
                  window.open(
                    "https://www.notion.so/4-9b9c565c489f497ebe88d72a91a95ac1",
                    "_blank"
                  )
                }
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
