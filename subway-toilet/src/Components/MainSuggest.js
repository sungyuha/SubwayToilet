import styles from "./MainNotice.module.scss";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const MainSuggest = () => {
  return (
    <>
      <div className={styles.mainNotice__content}>
        <div className={styles.mainNotice__content__top}>
          <div className={styles.mainNotice__content__top__title}>건의사항</div>
          <Link to="/page-suggest">
            <FiPlus />
          </Link>
        </div>
        <div className={styles.mainNotice__content__box}>
          <ul>
            <li>
              <p>[건의사항] 건의사항을 건의합니다. </p>
              <p>2022.01.01</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainSuggest;
