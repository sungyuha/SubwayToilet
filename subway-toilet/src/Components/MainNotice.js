import styles from "./MainNotice.module.scss";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const MainNotice = () => {
  return (
    <>
      <div className={styles.mainNotice__content}>
        <div className={styles.mainNotice__content__top}>
          <div className={styles.mainNotice__content__top__title}>공지사항</div>
          <Link to="/page-notice">
            <FiPlus />
          </Link>
        </div>
        <div className={styles.mainNotice__content__box}>
          <ul>
            <li>
              <p>[공지사항] 공지사항을 공지합니다. </p>
              <p>2022.01.01</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainNotice;
