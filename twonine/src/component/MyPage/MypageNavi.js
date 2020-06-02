import React from 'react';
import { NavLink} from 'react-router-dom';
import './MypageNavi.css'

const MypageNavi = () =>{

    return(
        <div className="MypageNaviContainer">
            <div className="myInfo">
                <h3 className="userName">권혜주님</h3>
                <div>
                    <li><NavLink to="/mypage/myheart/product/1">나의 하트</NavLink></li>
                    <p>87</p>
                </div>
                <div>
                    <li>팔로잉</li>
                    <p>0</p>
                </div>
            </div>
            <div className="myShop">
                <ul>
                    <p>나의 쇼핑정보</p>
                    <li><NavLink activeClassName="activeBold" exact={true} to="/mypage/orderList">주문배송조회</NavLink></li>
                    <li><NavLink activeClassName="activeBold" to="/mypage/cancelList">취소/교환/반품 내역</NavLink></li>
                    <li><NavLink activeClassName="activeBold" to="/mypage/review">상품 리뷰</NavLink></li>
                    <li><NavLink activeClassName="activeBold" to="/mypage/receipt">증빙서류 발급</NavLink></li>
                </ul>
                <ul>
                    <p>나의 계정설정</p>
                    <li><NavLink activeClassName="activeBold" to="/mypage/infoEdit">회원정보수정</NavLink></li>
                    <li><NavLink activeClassName="activeBold" to="/mypage/grade">회원등급</NavLink></li>
                    <li><NavLink activeClassName="activeBold" to="/mypage/mileage">마일리지현황</NavLink></li>
                    <li><NavLink activeClassName="activeBold" to="/mypage/coupon">쿠폰</NavLink></li>
                </ul>
                <ul>
                    <p>고객센터</p>
                    <li><NavLink activeClassName="activeBold" to="/mypage/qna-mantoman-list">1:1 문의내역</NavLink></li>
                    <li><NavLink activeClassName="activeBold" to="/mypage/qna-product-list">상품 Q&A내역</NavLink></li>
                    <li><NavLink activeClassName="activeBold" to="/mypage/notice">공지사항</NavLink></li>
                    <li><NavLink activeClassName="activeBold" to="/mypage/faq">FAQ</NavLink></li>
                </ul>
            </div>
            <div className="myCall">
                <h3>1644-0560</h3>
                <li>CUSTOMER@29CM.CO.KR</li>
                <li>AM 10:00~ PM 17:00</li>
                <li>(점심시간  12:00~14:00)</li>
                <li>DAY OFF (토/일/공휴일)</li>
                <button>1:1 문의하기</button>
            </div>
        </div>
    )
}

export default MypageNavi;