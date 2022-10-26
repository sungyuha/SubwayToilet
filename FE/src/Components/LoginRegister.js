import React, {useState} from "react";
import '../Components/Login.scss';
import kakao from '../images/login_kakao.png';
import naver from '../images/login_naver.png';
import google from '../images/login_google.png';

const LoginRegister = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const register = () => {
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
        <li className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(0)}> 로그인 </li>
      ),
      tabCont:(
          <div className="login-form">
            <h1>로그인을 해주세요</h1>
            <form style={{ display: "flex", flexDirection: "column" }}>
                <input type='text' name='email' placeholder='이메일'/>
                <br/>
                <input type='password' name='password' placeholder='비밀번호'/>
                <div>
                    <a>아이디/비밀번호를 잊으셨나요?</a>
                </div>
                <br/>
                <input type='submit' value="로그인"/>
            </form>
            <div>
                <p>----------------Or continue with----------------</p>
                <div>
                <a className="simpleLogin"><img src={naver} width='50px'/></a>
                <a className="simpleLogin"><img src={kakao} width='50px'></img></a>
                <a className="simpleLogin"><img src={google} width='50px'></img></a>
                </div>
            </div>
            
          </div>
      )
    },
    {
      tabTitle:(
          <li className={activeIndex===1 ? "is-active" : ""} onClick={()=>tabClickHandler(1)}> 회원가입 </li>
      ),
      tabCont:(
          <div className="register-form">
            <h1>회원가입을 해주세요</h1>
            <form style={{ display: "flex", flexDirection: "column" }}>
              <input type='text' name='id' placeholder='아이디'/>
              <input type='password' name='password' placeholder='비밀번호'/>
              <input type='email' name='email' placeholder='이메일'/>
              <input type='text' name='name' placeholder='이름'/>
              <button type='button' value="회원가입" onClick={register}/>
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
