import React, { useState,useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import ReactInnerHTML from "../Components/ReactInnerHTML";
import PageSuggest_Write from "./PageSuggest_Write";

const PageSuggest_View = () => {
    const [items, setItems] = useState([]);
    const [islogin, setIslogin] = useState(false);
    const [isOwner, setIsOwner] = useState(false);
    const [isModify, setIsModify] = useState(0);
    const navigate = useNavigate();
    
    const SERVER_URL = 'http://localhost:8000/page-suggest/view';
    const moveList = () => {
        navigate("/page-suggest");
    }

    const params = useParams();

    const deletePost = () => {
        console.log(items);
        axios.delete(SERVER_URL,{
            data: {
                postId: items._id
            }
        }).then((res) =>{
            navigate("/page-suggest");
        });
    }

    useEffect(()=>{
        axios.get(SERVER_URL, {
            params: {
                postId: params.postId
            },
            headers: {
                'Authorization': localStorage.getItem('access_token'),
            }  
        }).then((res) => {
            console.log(res.data);
            setItems(res.data.post);
            setIslogin(res.data.msg.islogin);
            setIsOwner(res.data.msg.owner);
        });

    }, [])

    return (
        <div>
            <div className="SuggestList-wrap">
                <h1>건의사항/정보수정요청</h1>
                
                <div className="viewContent-wrap">
                    
                    <h3 className="SuggestView_tag">건의사항/정보수정요청 보기</h3>
                    
                    <div className="viewContent-innerWrap">
                        <div className="viewContent-title">{items.title}</div>
                        <div className="viewContent-writer">
                            <div>{items.writer}</div>
                            <div>{new Date(items.date).toLocaleString()}</div>
                        </div>
                        <div className="viewContent-content">
                            <ReactInnerHTML data={items.content}/>
                        </div>
                    </div>
                    
                    
                    <div className='SuggestButton-wrap'>
                        <button type='button' className='cancelButton' onClick={()=>{moveList()}}>목록</button>
                        {isOwner && <>
                            <button type='button'><Link to={'/page-suggest/view/modify/' + items._id}  style={{ textDecoration: "none", color:'inherit'}}>수정</Link></button>
                        <button type='button' onClick={()=>{deletePost()}}>삭제</button>
                        </>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageSuggest_View;