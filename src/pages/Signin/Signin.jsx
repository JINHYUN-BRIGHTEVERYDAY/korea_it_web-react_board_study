import React from 'react'

function Signin() {
  return (
      <div css={s.Container}>
      <h1>회원가입</h1>
        <div css={s.box}>
          <div css={s.inputBox}>
            <input type="email" placeholder="이메일"/>
            <input type="password" placeholder="비밀번호"/>
          </div>
        </div>
      </div>
    );

}

export default Signin