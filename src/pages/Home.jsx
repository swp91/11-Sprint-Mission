import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="layout">
      {/* 상단 */}
      <header className="nav_wrapper">
        <nav className="nav_bar">
          <div className="nav_logobox">
            <Link to="/">
              <img src="/img/pandalogo.jpg" alt="판다로고" />
            </Link>
            <Link to="/">
              <h1 className="nav_title">판다마켓</h1>
            </Link>
          </div>
          <div className="nav_btnbox">
            <Link to="/login">
              <button className="nav_loginbtn">로그인</button>
            </Link>
          </div>
        </nav>
      </header>
      <main className="main_wrapper">
        {/* 배너 */}
        <div className="main_banner">
          <div className="banner_box">
            <div className="banner_title_box">
              <h2 className="banner_title">
                일상의 모든 물건을
                <br /> 거래해 보세요
              </h2>
              <Link to="/items">
                <button className="banner_btn">구경하러 가기</button>
              </Link>
            </div>
            <div>
              <img src="/img/Img_home_top.png" alt="배너이미지" />
            </div>
          </div>
        </div>
        {/* 가운데 */}
        <section className="main_section">
          <div className="hotitem_section">
            <div className="hotitem_box">
              <div>
                <img src="/img/main_1.jpg" alt="" />
              </div>
              <div className="hotitem_textbox">
                <span>Hot item</span>
                <h2>
                  인기 상품을
                  <br /> 확인해 보세요
                </h2>
                <p>
                  가장 HOT한 중고거래 물품을
                  <br />
                  판다 마켓에서 확인해 보세요
                </p>
              </div>
            </div>
          </div>
          <div className="search_section">
            <div className="search_box">
              <div className="search_textbox">
                <span>Search</span>
                <h2 className="search_h2">
                  구매를 원하는
                  <br />
                  상품을 검색하세요
                </h2>
                <p>
                  구매하고 싶은 물품은 검색해서
                  <br />
                  쉽게 찾아보세요
                </p>
              </div>
              <div>
                <img src="/img/main_2.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="register_section">
            <div className="register_box">
              <div>
                <img src="/img/main_3.jpg" alt="" />
              </div>
              <div className="register_textbox">
                <span>Register</span>
                <h2>
                  판매를 원하는
                  <br />
                  상품을 등록하세요
                </h2>
                <p>
                  어떤 물건이든 판매하고 싶은 상품을
                  <br />
                  쉽게 등록하세요
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bottom_section">
          <div className="bottom_box">
            <div className="bottom_textbox">
              <h2>
                믿을 수 있는
                <br />
                판다마켓 중고 거래
              </h2>
            </div>
            <div>
              <img src="/img/Img_home_bottom.png" alt="" />
            </div>
          </div>
        </section>
      </main>
      {/* 푸터 */}
      <footer>
        <div className="main_footer">
          <div className="footer_copy">
            <p>&copy; codeit - 2024</p>
          </div>
          <div className="footer_links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/faq">FAQ</Link>
          </div>
          <div className="footer_social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/img/ic_facebook.png" alt="페이스북" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/img/ic_twitter.png" alt="트위터" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/img/ic_youtube.png" alt="유튜브" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/img/ic_instagram.png" alt="인스타그램" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
