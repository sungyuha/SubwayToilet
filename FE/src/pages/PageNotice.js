import React, {useEffect} from "react";
import Paging from "../Components/Paging";
import axios from "axios";
import './PageNotice.scss';

const Notice = () => {
  const SERVER_URL = 'http://localhost:8000/page-notice';

  const [items, setItems] = React.useState([]) //리스트에 나타낼 아이템
  const [count, setCount] = React.useState(0); //아이템 총 개수
  const [currentpage, setCurrentpage] = React.useState(1); //현재페이지
  const [postPerPage] = React.useState(5); //페이지당 아이템 개수
  
  const [indexOfLastPost, setIndexOfLastPost] = React.useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = React.useState(0);
  const [currentPosts, setCurrentPosts] = React.useState(0);

  useEffect(() => {

    axios.get(SERVER_URL).then((res) => {
      setItems(res.data);
    });

    setCount(items.length);
    setIndexOfLastPost(currentpage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(items.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentpage, indexOfFirstPost, indexOfLastPost, items, postPerPage]);
  
  
  const setPage = (e) => {
    setCurrentpage(e);
  };



  return (
    <div className="noticeList-wrap">
      <h1>공지사항</h1>
      <div className="listInfo-wrap">
        <span>총 <b>{count}</b>개</span>
        <button>🖉글쓰기</button>
      </div>
      <div class="top">
          <div class="num">카테고리</div>
          <div class="title">제목</div>
          <div class="writer">작성자</div>
          <div class="date">작성일</div>
      </div>
      {currentPosts && items.length > 0 ? currentPosts.reverse().map((item, index)=> (
      <div>
        <span>{items.length-((currentpage-1) * postPerPage)-index}</span>
        <span>{item.title}</span>
        <span>{item.writer}</span>
        <span>{item.date}</span>
      </div>
      
      
      
      )) : <div>게시물이 없습니다.</div> } 
      <Paging page={currentpage} count={count} setPage={setPage} /> 
    </div>
      
  );
}

export default Notice;
