// import TitleLogoImg from "../Components/TitleLogoImg";
import LoginRegister from "../Components/LoginRegister";
import "./LoginWrap.scss"

const Login = () => {
  return(
    <div className="login-wrap">
      <div className='login-wrap_card'>
        <div className='login-wrap_card_left'>
          {/* <TitleLogoImg/> */}
        </div>
        <div className='login-wrap_card_right'>
          <LoginRegister/>
        </div>
      </div>
    </div>
  );
};

export default Login;
