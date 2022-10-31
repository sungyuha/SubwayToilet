import { useState, useEffect } from 'react';
import './PageSuggest.scss';
import MyCkeditor from '../Components/MyCkeditor';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const PageSuggest_Write = () => {
    const params = useParams();
    const SERVER_URL = 'http://localhost:8000/page-Suggest/write';
    const GETPOST_URL = 'http://localhost:8000/page-Suggest/view';
    const navigate = useNavigate();
    const [noticeTitle, setNoticeTitle] = useState('');
    const [addData, setAddData] = useState("");
    const [mode, setMode] = useState("write");

    useEffect(() => {
        
        if(Object.keys(params).length){
            setMode("modify");
            axios.get(GETPOST_URL, {
                params: {
                    postId: params.postId
                } 
            }).then((res) => {
                setNoticeTitle(res.data.title);
                setAddData(res.data.content);
            });
        }
    }, [])

    
    const onChangeTitle = (e) => {
        setNoticeTitle(e.target.value);
    }
    
    const SuggestSubmitHandler = async (e) => {
        e.preventDefault();
        const writer = 'admin'
        const title = noticeTitle;
        const content = addData;
        await axios.post(SERVER_URL, {
            writer, 
            title,
            content
        }).then((res) => {
            navigate("/page-suggest");
        });
    }
    const modifyPost = async () => {
        const writer = 'admin'
        const title = noticeTitle;
        const content = addData;
        const _id = params.postId;
        await axios.put(SERVER_URL, {
            writer, 
            title,
            content,
            _id
        }).then((res) => {
            navigate("/page-suggest/view/" + params.postId);
        });
    }
    const cancelWrite = () => {
        if(mode === "write") {
            navigate("/page-suggest");
        }else{
            navigate("/page-suggest/view/" + params.postId);
        }
        
    }
    return(
        <div className="SuggestList-writeForm">
            <h1>공지사항</h1>
            <br/><br/>
            <h3 className="SuggestList_title">공지사항 글쓰기</h3>    
            <div className="form_wrap">
                <form onSubmit={SuggestSubmitHandler}>
                    <input type="hidden" name="userid"/>
                    <input type="hidden" name="BoardName"/>
                    <div><span>제목</span><input className="inputTitle" type="text" name="title" id="title" maxLength="50" onChange={onChangeTitle} value={noticeTitle}/></div>
                    <div><span>작성자</span>관리자</div>
                    <div className="textarea-wrap">
                        <span>내용</span>
                        <MyCkeditor addData={addData} setAddData={setAddData} writer='admin'/>
                    </div>
                    <div className='suggestListButton-wrap'>
                        {mode === "write" ? <button type='submit'>등록</button> : <button type='button' onClick={()=>{modifyPost()}}>수정</button>}
                        <button type='button' className='cancelButton' onClick={()=>{cancelWrite()}}>취소</button>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default PageSuggest_Write;