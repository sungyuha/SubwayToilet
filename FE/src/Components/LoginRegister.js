import React, {useState} from "react";
import '../Components/Login.scss';
import kakao from '../images/login_kakao.png';
import naver from '../images/login_naver.png';
import google from '../images/login_google.png';
import axios from 'axios';

const LoginRegister = () => {
  const SERVER_URL = 'http://localhost:8000/user/login';
  const SERVER_URL2 = 'http://localhost:8000/user/signup';
  const [activeIndex, setActiveIndex] = useState(0);
  const [inputs, setInputs] = useState({
    L_userid: '',
    L_password: '',
    R_userid: '',
    R_password: '',
    username: '',
    email: '',
  });
  
  const {L_userid, L_password, R_userid, R_password, username, email} = inputs;

  const onChangeText = (e) => {
    const { value, name } = e.target; // e.target에서 value와 name 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사(불변성을 위해)
      [name]: value, // name 키를 가진 값을 value 로 변경
    });
  }
  const loginHandler = (e) => {
    e.preventDefault();
    const id = e.target.L_userid.value;
    const password = e.target.L_password.value;
    axios.post(SERVER_URL, {
      id, 
      password
    }).then((res) => {
      console.log(res);
    });

  }

  const registerHandler = (e) => {
    console.log(e.target);
    e.preventDefault();
    const id = e.target.R_userid.value;
    const password = e.target.R_password.value;
    const name = e.target.username.value;
    const email = e.target.email.value;
  
    axios.post(SERVER_URL2, {
      id,
      password,
      name,
      email 
    }).then((res) => {
      console.log(res);

      if(res.data.code == 422) {
        alert("이미 존재하는 회원입니다.")
      }
      
    }).catch(function(error){
      console.log(error);
    })
  }


  const tabClickHandler = (index) => {
    setActiveIndex(index);
    setInputs({
      L_userid: '',
      L_password: '',
      R_userid: '',
      R_password: '',
      username: '',
      email: '',
    });
  };

  const tabContArr = [
    {
      tabTitle:(
        <li className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(0)} key='0'> 로그인 </li>
      ),
      tabCont:(
          <div className="login-form">
            <h1>로그인</h1>
            <form id="loginForm" onSubmit={loginHandler} style={{ display: "flex", flexDirection: "column" }}>
                <input type='text' name='L_userid' placeholder='아이디' onChange={onChangeText} value={L_userid}/>
                <input type='password' name='L_password' placeholder='비밀번호' onChange={onChangeText} value={L_password}/>
                <div>
                    <a>아이디/비밀번호를 잊으셨나요?</a>
                </div>
                <input style={{background:"rebeccapurple", color:"white", cursor:"pointer"}} type='submit' value="로그인" />
            </form>
            <div className='other-login-form'>
                <p>OR</p>
                <div>
                <a className="simpleLogin"><img src={naver}/></a>
                <a className="simpleLogin"><img src={kakao}></img></a>
                <a className="simpleLogin"><img src={google}></img></a>
                </div>
            </div>
          </div>
      )
    },
    {
      tabTitle:(
          <li className={activeIndex===1 ? "is-active" : ""} onClick={()=>tabClickHandler(1)} key='1'> 회원가입 </li>
      ),
      tabCont:(
          <div className="login-form">
            <h1>회원가입</h1>
            <form id="registerForm" style={{ display: "flex", flexDirection: "column" }} onSubmit={registerHandler}>
              <input type='text' name='R_userid' placeholder='아이디'  onChange={onChangeText} value={R_userid}/>
              <input type='password' name='R_password' placeholder='비밀번호'  onChange={onChangeText} value={R_password}/>
              <input type='text' name='username' placeholder='이름'  onChange={onChangeText} value={username}/>
              <input type='email' name='email' placeholder='이메일'  onChange={onChangeText} value={email}/>
              <input style={{background:"rebeccapurple", color:"white", cursor:"pointer", marginTop: "0.95rem"}} type='submit' value="회원가입"/>
            </form>
          </div>
      )
    }
  ]

  return(
    <div className="form-wrap">
        <div className="tab-control">
            <ul className="tabs is-boxed">
                {tabContArr.map((section, index)=>{
                    return section.tabTitle
                })}
            </ul>
        </div>
        
        <div>
        {tabContArr[activeIndex].tabCont}
        </div>
        
      
      
    </div>
  );
};

export default LoginRegister;
