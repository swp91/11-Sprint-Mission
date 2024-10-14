import React from "react";
import "./auth.css";

const Login = () => {
  return (
    <div className="auth_wrapper">
      <div className="auth_container">
        <div className="auth_titlegroup">
          <a href="/">
            <img src="/img/auth_logo.png" alt="Auth Logo" />
          </a>
          <a href="/" className="auth_title">
            <h1>판다마켓</h1>
          </a>
        </div>
        <form className="auth_form">
          <div className="form_group">
            <label htmlFor="email">이메일</label>
            <input type="text" id="email" placeholder="이메일을 입력해주세요" />
          </div>
          <div className="form_group">
            <label htmlFor="password">비밀번호</label>
            <div className="password_wrapper">
              <input
                type="password"
                id="password"
                placeholder="비밀번호를 입력해주세요"
              />
              <img
                src="/img/ic_password0.svg"
                className="password_toggle"
                alt="Toggle Password Visibility"
              />
            </div>
          </div>
          <button className="form_btn" disabled>
            로그인
          </button>
          <div className="social_group">
            <p>간편 로그인하기</p>
            <div className="social_icon">
              <a href="#">
                <img src="/img/ic_google.png" alt="Google Login" />
              </a>
              <a href="#">
                <img src="/img/ic_kakao.png" alt="Kakao Login" />
              </a>
            </div>
          </div>
          <div className="auth_options">
            <p>판다마켓이 처음이신가요?</p>
            <a href="/pages/signup.html">회원가입</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
