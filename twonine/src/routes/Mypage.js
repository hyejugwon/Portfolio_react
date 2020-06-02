import React, { useState, useEffect } from 'react';
import { NavLink} from 'react-router-dom';
import './MyPage.css';
import MypageNavi from '../component/MyPage/MypageNavi';
import Myheart from './Myheart';
import OrderList from '../component/MyPage/component/OrderList';
import Review from '../component/MyPage/component/Review';
import CancelList from '../component/MyPage/component/CancelList';
import Receipt from '../component/MyPage/component/Receipt';
import InfoEdit from '../component/MyPage/component/InfoEdit';
import Grade from '../component/MyPage/component/Grade';
import Mileage from '../component/MyPage/component/Mileage';
import QnaMantomanList from '../component/MyPage/component/QnaMantomanList';
import QnaProductList from '../component/MyPage/component/QnaProductList';
import Notice from '../component/MyPage/component/Notice';
import Faq from '../component/MyPage/component/Faq';
import Coupon from '../component/MyPage/component/Coupon';
import Main from '../component/MyPage/component/Main';

const Mypage = ({ history, match : { params: {myMid} } }) => {

    useEffect(() => {
    }, [myMid]);

    return (
        <div className="Mypage">
            <div className="mypageNavi">
                <MypageNavi/>
            </div>
            <div className="mypageRight">
                <div className="myGrade">
                    <ul className="mgrade">
                        <NavLink to="/mypage/grade">
                            <ul className="pageNaviList">
                                <p>회원등급 ></p>
                                <div className="mypageInfo">
                                    <li>yellow</li>
                                    <button>할인혜택 보기</button>
                                </div>
                            </ul>
                        </NavLink>
                    </ul>
                    <ul className="mcoupon">
                        <NavLink to="/mypage/coupon">
                            <ul className="pageNaviList">
                                <p>사용가능쿠폰 ></p>
                                <div className="mypageInfo">
                                    <li>2</li>
                                </div>
                            </ul>
                        </NavLink>
                    </ul>
                    <ul className="mmileage">
                        <NavLink to="/mypage/mileage">
                            <ul className="pageNaviList">
                                <p>마일리지 ></p>
                                <div className="mypageInfo">
                                    <li>851</li>
                                </div>
                            </ul>
                        </NavLink>
                    </ul>
                </div>
                <div className="myPageMenuArea">
                    {myMid === 'main' && (
                        <div>
                            <Main history={history} category={myMid}/>
                        </div>
                    )}
                    {myMid === 'orderList' && (
                        <div>
                            <OrderList history={history} category={myMid}/>
                        </div>
                    )}
                    {myMid === 'myheart' && (
                        <div>
                            <Myheart history={history} category={myMid}/>
                        </div>
                    )}
                    {myMid === 'review' && (
                        <div>
                            <Review history={history} category={myMid}/>
                        </div>
                    )}
                    {myMid === 'cancelList' && (
                        <div>
                            <CancelList history={history} category={myMid}/>
                        </div>
                    )}
                    {myMid === 'receipt' && (
                        <div>
                            <Receipt history={history} category={myMid}/>
                        </div>
                    )}
                    {myMid === 'infoEdit' && (
                        <div>
                            <InfoEdit history={history} category={myMid}/>
                        </div>
                    )}
                    {myMid === 'grade' && (
                        <div>
                            <Grade history={history} category={myMid}/>
                        </div>
                    )}
                    {myMid === 'mileage' && (
                        <div>
                            <Mileage history={history} category={myMid}/>
                        </div>
                    )}
                    {myMid === 'qna-mantoman-list' && (
                        <div>
                            <QnaMantomanList history={history} category={myMid}/>
                        </div>
                    )}
                    {myMid === 'qna-product-list' && (
                        <div>
                            <QnaProductList history={history} category={myMid}/>
                        </div>
                    )}
                    {myMid === 'notice' && (
                        <div>
                            <Notice history={history} category={myMid}/>
                        </div>
                    )}
                    {myMid === 'faq' && (
                        <div>
                            <Faq history={history} category={myMid}/>
                        </div>
                    )}
                    {myMid === 'coupon' && (
                        <div>
                            <Coupon history={history} category={myMid}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};

export default Mypage;
