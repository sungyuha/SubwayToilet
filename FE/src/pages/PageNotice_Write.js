import { useState } from 'react';
import './PageNotice.scss';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const PageNotice_Write = () => {
    const SERVER_URL = 'http://localhost:8000/notice/write';
    const navigate = useNavigate();
    const [noticeTitle, setNoticeTitle] = useState('');
    const [addData, setAddData] = useState("");
    
    const onChangeTitle = (e) => {
        setNoticeTitle(e.target.value);
    }
    const handleChange = (e, editor) => {
        const data = editor.getData();
        console.log(data);
        setAddData(data);
    }
    const NoticeSubmitHandler = (e) => {
        e.preventDefault();
        const writer = 'admin'
        const title = noticeTitle;
        const content = addData;
        axios.post(SERVER_URL, {
        writer, 
        title,
        content
        }).then((res) => {
        console.log(res);
        });
    }
    const cancelWrite = () => {
        navigate("/page-notice");
    }
    return(
        <div className="Notice-writeForm">
            <h1>공지사항</h1>
            <br/><br/>
            <h3 className="Notice_title">공지사항 글쓰기</h3>    
            <div className="form_wrap">
                <form onSubmit={NoticeSubmitHandler}>
                    <input type="hidden" name="userid"/>
                    <input type="hidden" name="BoardName"/>
                    <div><span>제목</span><input className="inputTitle" type="text" name="title" id="title" maxLength="50" onChange={onChangeTitle} value={noticeTitle}/></div>
                    <div><span>작성자</span>관리자</div>
                    <div className="textarea-wrap">
                        <span>내용</span>
                        <CKEditor editor={ClassicEditor} data={addData} onChange={handleChange} />
                    </div>
                    <div className='noticeButton-wrap'>
                        <button type='submit'>등록</button>
                        <button type='button' className='cancelButton' onClick={()=>{cancelWrite()}}>취소</button>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default PageNotice_Write;