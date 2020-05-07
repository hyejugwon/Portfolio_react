import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container_footer">
            <div className="footer_1">
                <div className="line1"></div>
                <div className="contact_num">1644-0560</div>
                <div className="contact_time">AM 10:00 ~ PM 05:00 Off-time PM 12:00 ~ PM 02:00 <br></br> DAY OFF (SATURDAY. SUNDAY, HOLIDAY)</div>
                <div className="footer_icons">
                    <div className="faq_icon">FAQ</div>
                    <div className="sns_icons">
                        <div className="facebook"></div>
                        <div className="instagram"></div>
                        <div className="blog"></div>
                    </div>
                </div>
            </div>
            <div className="footer_2">
                <div className="notice">
                    <div className="name">notice</div>
                    <a>[당첨자 공지] 오삭핸드겔 스페셜 오더 포토 후기 이벤트 담청자 발표</a>
                    <a>[당첨자 공지][써보니 어때요?] #라네즈 워터 뱅크 당첨자 발표</a>
                    <a>[당첨자 공지] 레이드백 댓글 이벤트 당첨자 발표</a>
                    <a>[당첨자 공지] 메종마레 쇼케이스 이벤트 당첨자 발표</a>
                    <a>[당첨자 공지][써보니 어때요?] #20SS 봄네일 당첨자 발표</a>
                </div>
                <div className="about">
                    <div className="name">about us</div>
                    <a>회사소개</a>
                    <a>인재채용</a>
                    <a>상시 할인 혜택</a>
                </div>
                <div className="myorder">
                    <div className="name">my order</div>
                    <a>주문배송</a>
                    <a>취소/교환/반품 내역</a>
                    <a>상품리뷰 내역</a>
                    <a>증빙서류발급</a>
                </div>
                <div className="account">
                    <div className="name">my account</div>
                    <a>회원정보수정</a>
                    <a>회원등급</a>
                    <a>마일리지현황</a>
                    <a>쿠폰</a>
                </div>
                <div className="help">
                    <div className="name">help</div>
                    <a>1:1 상담내역</a>
                    <a>상품 Q&A내역</a>
                    <a>공지사항</a>
                    <a>FAQ</a>
                </div>
            </div>
            <div className="footer_3">
                <div className="link">
                    <a className="bold">개인정보처리방침</a>
                    <a className="medium">이용약관</a>
                </div>
                <div className="footer_info">
                    <div className="info_right">
                        <div className="info">
                            <span>상호명:(주)에이플러스비</span>
                            <span>사업장소재지:서울특별시 강남구 선릉로93길 35 나라키움 역삼B빌딩 4층</span>
                            <span>팩스:070-8622-7737</span>
                            <span>사업자등록번호:101-86-64617</span>
                            <span>통신판매업신고:2019-서울강남-02774</span>
                            <div className="business_icon">사업자정보확인</div>
                        </div>
                        <div className="info">
                            <span>고객센터:1644-0560</span>
                            <span>평일 10:00 - 17:00 / Off-time 12:00 ~ 14:00 (토/일/공휴일 휴무)</span>
                            <span>이메일:customer@29cm.co.kr</span>
                            <span>대표이사:윤자영</span>
                            <span>개인정보책임자:김평수</span>
                            <span>호스팅서비스:(주)에이플러스비</span>
                        </div>
                    </div>
                    <div className="info_left">
                        <div className="lucy"></div>
                        <div className="ios"></div>
                        <div className="android"></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;
