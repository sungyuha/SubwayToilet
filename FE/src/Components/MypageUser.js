import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Mypageuser.scss";
import { useNavigate } from "react-router-dom";


const MypageUser = () => {
    const navigate = useNavigate('');
    const [index, setIndex] = useState('');
    const [ info, setInfo] = useState({
        name: '',
        id: '',
        password: '',
        email: '',
    });
    const [ inputs , setInputs ] = useState({
        name: '',
        id: '',
        password: '',
        email: '',
    });

    const { name, id, password, email } = inputs;
    const onChangeMypage = (e) => {
        console.dir(e.target.value);
        const { value, name } = e.target; // e.target에서 value와 name 추출
        setInputs({
          ...inputs, // 기존의 input 객체를 복사(불변성을 위해)
          [name]: value, // name 키를 가진 값을 value 로 변경
        });
    }
    //회원정보 수정
    const SERVER_URL7 = process.env.REACT_APP_BACK + 'user/userinfo/edit';
    const MypageUserHandler = (e) => {
        e.preventDefault();
        // const id = e.target.id.value;
        // const name = e.target.name.value;
        // const password = e.target.password.value;
        // const email = e.target.email.value;
        axios.put(SERVER_URL7, {
            id : info.id,
            name : inputs.name,
            password : info.password,
            email : inputs.email
        })
        .then((res) => {
            alert(res.data.msg);
            
        });
    }
    
    // 회원탈퇴
    //const [delete, setDelete] = useState('');

    const SERVER_URL8 = process.env.REACT_APP_BACK + 'user/userinfo/delete';
    const MypageDelete = async () => {
        const id = info.id;
        await axios.delete(SERVER_URL8, {
            data:{
                id,
                _id : index
            } 
        })
        .then((res) => {
            alert(res.data.deleted.id + "님 " + res.data.message);
            localStorage.removeItem('access_token');
            window.location.replace('/');
        });
    }

    const SERVER_URL9 = process.env.REACT_APP_BACK + 'user/userinfo';
    useEffect(() => {
        axios.get(SERVER_URL9, {
            headers: {
              'Authorization': localStorage.getItem('access_token'),
            }  
          }).then((res) => {
            setInputs({
                name: res.data.User.name,
                id: res.data.User.id,
                password: res.data.User.password,
                email: res.data.User.email,
            });
            setInfo({
                name: res.data.User.name,
                id: res.data.User.id,
                password: res.data.User.password,
                email: res.data.User.email,
            });
            setIndex(res.data.User._id);
          });
    }, [])

    return (
        <div className="userwrap">
            <h1 className="user">회원정보</h1>
            <div className="form-wrap">
                <form onSubmit={MypageUserHandler}>
                    <input type="text" placeholder='이름' name="name" value={name} onChange={onChangeMypage} /><br />
                    <input type="text" placeholder='아이디' name="id" value={id} onChange={onChangeMypage} readOnly /><br />
                    <input type="password" placeholder='비밀번호' name="password" value={password} onChange={onChangeMypage} readOnly /><br />
                    <input type="email" placeholder='이메일' name="email" value={email} onChange={onChangeMypage} /><br />
                    <button type="submit" className="mypage-btn">회원정보수정</button>
                    <div>
                        <span className="delete" onClick={()=>{MypageDelete()}}>
                            회원탈퇴
                        </span>
                    </div>    
                </form>
            </div>
        </div>
    );
};

export default MypageUser;