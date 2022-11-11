import styles from "./MainNotice.module.scss";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


const MainNotice = () => {
  const [items, setItems] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  
  const SERVER_URL = process.env.REACT_APP_BACK + 'page-notice/get5post';
  useEffect(()=>{
    axios.get(SERVER_URL).then((res) => {
      setItems(res.data);
      setIsLoaded(true);
    });
    
  }, []);
  const dateToString = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  }

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
            {isLoaded && items.length > 0 ? items.map((item, index)=> (
            <li key={index}>
              <p>[공지사항] {item.title}</p>
              <p>{dateToString(item.date)}</p>
            </li>
          
            )) : 
            <li>
              <p>게시물이 없습니다.</p>
              <p>날짜</p>
            </li> } 
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainNotice;
