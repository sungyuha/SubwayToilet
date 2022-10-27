import React, {useState} from "react";
import '../Components/Login.scss';
import kakao from '../images/login_kakao.png';
import naver from '../images/login_naver.png';
import google from '../images/login_google.png';
import axios from 'axios';

const LoginRegister = () => {
  const SERVER_URL = 'http://localhost:8000/user/login';
  const [activeIndex, setActiveIndex] = useState(0);

  const loginHandler = (e) => {
    console.log(e.target);
    e.preventDefault();
    const id = e.target.userid.value;
    const password = e.target.password.value;
    axios.post(SERVER_URL, {
      id, 
      password
    }).then((res) => {
      console.log(res);
    });

  }

  const registerHandler = (e) => {
    // axios
    // .then(res)
    // res.data
    // if(code === ){
    //   alert(회원가입성공)
    // }
  }


  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  const tabContArr = [
    {
      tabTitle:(
        <li className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(0)} key='0'> 로그인 </li>
      ),
      tabCont:(
          <div className="login-form">
            <h1>로그인</h1>
            <form onSubmit={loginHandler}>
                <input type='text' name='userid' placeholder='아이디'/>
                <input type='password' name='password' placeholder='비밀번호'/>
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
            <form style={{ display: "flex", flexDirection: "column" }}>
              <input type='text' name='name' placeholder='이름'/>
              <input type='text' name='id' placeholder='아이디'/>
              <input type='password' name='password' placeholder='비밀번호'/>
              <input type='email' name='email' placeholder='이메일'/>
              <input style={{background:"rebeccapurple", color:"white", cursor:"pointer", marginTop: "0.95rem"}} type='submit' value="회원가입" onClick={registerHandler}/>
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
