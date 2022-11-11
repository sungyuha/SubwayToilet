import { useState, useEffect } from 'react';
import './PageSuggest.scss';
import MyCkeditor from '../Components/MyCkeditor';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";


const PageSuggest_Write = () => {
    const params = useParams();
    const SERVER_URL = process.env.REACT_APP_BACK + 'page-Suggest/write';
    const GETPOST_URL = process.env.REACT_APP_BACK + 'page-Suggest/view';
    const navigate = useNavigate();
    const [noticeTitle, setNoticeTitle] = useState('');
    const [addData, setAddData] = useState("");
    const [mode, setMode] = useState("write");
    const [writer, setWriter] = useState("");

    useEffect(() => {
        
        if(Object.keys(params).length){
            setMode("modify");
            axios.get(GETPOST_URL, {
                params: {
                    postId: params.postId
                },
                headers: {
                    'Authorization': localStorage.getItem('access_token'),
                }  
            }).then((res) => {
                setNoticeTitle(res.data.post.title);
                setAddData(res.data.post.content);
                setWriter(res.data.post.writer);
            });
        }else{
            axios.get(SERVER_URL, {
                headers: {
                    'Authorization': localStorage.getItem('access_token'),
                }  
            }).then((res) => {
                setWriter(res.data);
            });
        }
    }, [])

    
    const onChangeTitle = (e) => {
        setNoticeTitle(e.target.value);
    }
    
    const SuggestSubmitHandler = async (e) => {
        e.preventDefault();
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
        <div className="SuggestView-wrap">
            <h1>건의사항/정보수정요청</h1>
            <br/><br/>
            <h3 className="SuggestList_title">건의사항/정보수정요청 글쓰기</h3>    
            <div className="form_wrap">
                <form onSubmit={SuggestSubmitHandler}>
                    <input type="hidden" name="userid"/>
                    <input type="hidden" name="BoardName"/>
                    <div><span>제목</span><input className="inputTitle" type="text" name="title" id="title" maxLength="50" onChange={onChangeTitle} value={noticeTitle}/></div>
                    <div><span>작성자</span>{writer}</div>
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