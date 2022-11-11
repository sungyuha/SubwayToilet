import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import "./Find.scss";


const Find = () => {
    const navigate = useNavigate();
    const SERVER_URL3 = process.env.REACT_APP_BACK + 'user/id/find';
    const SERVER_URL4 = process.env.REACT_APP_BACK + 'user/pw/check';
    const [findIndex, setfindIndex] = useState(0);
    const [findinputs, setfindinputs ] = useState({
        id_username: '',
        id_email: '',
        pw_userid: '',
        pw_username: '',
        pw_email: '',
    });

    const {id_username, id_email, pw_userid, pw_username, pw_email} = findinputs;
    const onFindText = (e) => {
        const { value, name } = e.target; // e.target에서 value와 name 추출
        setfindinputs({
          ...findinputs, // 기존의 input 객체를 복사(불변성을 위해)
          [name]: value, // name 키를 가진 값을 value 로 변경
        });
    }

    // 아이디 유무 검사
    const IdFindHandler = (e) => {
        console.log(e.target);
        e.preventDefault();
        const name = e.target.id_username.value;
        const email = e.target.id_email.value;
        axios.post(SERVER_URL3, {
            name,
            email
        })
        .then((res) => {
            console.log(res);
            
            if(res.data.code == 422) {
                alert("존재하지 않는 아이디 입니다.")
              }
              
            }).catch(function(error){
              console.log(error);
            })
        }

    // 비밀번호 찾기
    const PassWordFindHandler = (e) => {
        console.log(e.target);
        e.preventDefault();
        const username = e.target.pw_username.value;
        const userid = e.target.pw_userid.value;
        const email = e.target.pw_email.value;
    
        axios.post(SERVER_URL4, {
            username,
            userid,
            email
            }).then((res) => {
            console.log(res);
            navigate("/user/pw/reset");
        });
    }

    const tabClickHand=(findIndex)=>{
        setfindIndex(findIndex);
        setfindinputs({
            id_username: '',
            id_email: '',
            pw_userid: '',
            pw_username: '',
            pw_email: '',
            });
        };

    // hooks으로 Tab기능 구현
    const tabContArr=[
        {
            tabTitle:(
                <li className={findIndex===0 ? "is-active" : ""} onClick={()=>tabClickHand(0)}>아이디 찾기</li>
            ),
            tabCont:(
                <div>
                    <div className="find" style={{ display: "flex", flexDirection: "column" }}>
                    <h1 className="id-txt">아이디 찾기</h1>
                    <form onSubmit={IdFindHandler} className="find-form">
                        <input type="text" name="id_username" placeholder='이름' value={id_username} onChange={onFindText}/>
                        <br />
                        <input type="text" name="id_email" placeholder='이메일' value={id_email} onChange={onFindText}/>
                        <br />
                        <div>
                            <a className="login-link">로그인하러 가기</a>
                        </div>
                        <button type="Submit" className="id-btn">아이디 찾기</button>
                    </form>
                    </div>
                </div>
            )
        },
        {
            tabTitle:(
                <li className={findIndex===1 ? "is-active2" : ""} onClick={()=>tabClickHand(1)}>비밀번호 찾기</li>
            ),
            tabCont:(
                <div>
                    <div className="find" style={{ display: "flex", flexDirection: "column" }}>
                        <h1 className="id-txt">비밀번호 찾기</h1>
                        <form onSubmit={PassWordFindHandler} className="find-form">
                            <input type="text" name="pw_username" placeholder='이름' value={pw_username} onChange={onFindText}/>
                            <br />
                            <input type="text" name="pw_userid" placeholder='아이디' vlaue={pw_userid} onChange={onFindText}/>
                            <br />
                            <input type="text" name="pw_email" placeholder='이메일' vlaue={pw_email} onChange={onFindText}/>
                            <br />
                            <div>
                                <a className="login-link">로그인하러 가기</a>
                            </div>
                            <button type="Submit" vlaue="비밀번호찾기" className="id-btn">비밀번호 찾기</button>
                        </form>
                    </div>
                </div>
            )
        },
    ];

    return (
        <div className="find-wrap">
            <div className="find-txt">
                <ul className="find-tab">
                    {tabContArr.map((section, findindex)=>{
                        return section.tabTitle
                    })}
                </ul>
            </div>

            <div>
                {tabContArr[findIndex].tabCont}
            </div>
        </div>
    )
};      

export default Find;