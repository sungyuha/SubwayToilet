import React, { useState } from "react";
import axios from "axios";
import "./Mypageuser.scss";

const MypageUser = () => {
    const SERVER_URL = 'http://localhost:8000/user/mypage/reset'; // 임의작성
    const [ inputs , setInputs ] = useState({
        name: '',
        id: '',
        password: '',
        email: '',
    });

    const { name, id, password, email } = inputs;
    const onChangeText = (e) => {
        console.dir(e.target.value);
        const { value, name } = e.target; // e.target에서 value와 name 추출
        setInputs({
          ...inputs, // 기존의 input 객체를 복사(불변성을 위해)
          [name]: value, // name 키를 가진 값을 value 로 변경
        });
        MypageUserHandler();
    }

    const MypageUserHandler = (e) => {
        console.log(e.target);
        e.preventDefault();
        const id = e.target.id.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        const email = e.target.email.value;
        axios.update(SERVER_URL, {
            id,
            name,
            password,
            email,
        })
        .then((res) => {
            console.log(res);
        });
    }
    
    // 회원탈퇴
    //const [delete, setDelete] = useState('');


    return (
        <div className="wrap">
            <h1 className="user">회원정보</h1>
            <div className="form-wrap">
                <form onSubmit={MypageUserHandler}>
                    <input type="text" placeholder='이름' value={name}onChange={onChangeText} /><br />
                    <input type="text" placeholder='아이디' value={id} onChange={onChangeText} /><br />
                    <input type="password" placeholder='비밀번호' value={password} onChange={onChangeText} /><br />
                    <input type="email" placeholder='이메일' value={email} onChange={onChangeText} /><br />
                    <button type="submit" className="btn">회원정보수정</button>
                    <div>
                        <span className="delete">
                            회원탈퇴
                        </span>
                    </div>    
                </form>
            </div>
        </div>
    );
};

export default MypageUser;