import React, { useState } from "react";

import "./Mypageuser.scss";

const MypageUser = () => {
    const [ name , setName ] = useState("");

    const onChange = (e) => {
        const { value } = e.target;

        setName(value);
    }

    const ClickEvent = () => {
        
    }

    return (
        <div>
            <div className="wrap">

                <div class="form-user">
                    <form>
                        <div>
                            이름<br />
                            <input onChange={onChange} type="text" /><br /><br />
                        </div>

                        <div>
                            아이디<br />
                            <input type="text" /><br /><br />
                        </div>

                        <div>
                            닉네임<br />
                            <input type="text" /><br /><br />
                        </div>
                        
                        <div>
                            비밀번호<br />
                            <input type="password" /><br /><br />
                        </div>

                        <div>
                            이메일주소<br />
                            <input type="email" /><br /><br />
                        </div>

                        <button type="submit" onClick={ClickEvent} className="btn">회원정보수정</button>
                        
                        <span className="delete">회원탈퇴</span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MypageUser;