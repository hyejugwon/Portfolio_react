import React, { useContext } from 'react';
import Navigation from '../component/Navigation';
import './ProductDetail.css';
import { BsHeart } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import AppContext from '../Contexts/AppContext';

const ProductDetail = ({ match: {params: { id } } }) => {
    const { state, dispatch } = useContext(AppContext);
	
	const onCart = sample => {
		dispatch({ type: 'ADD_CART', data: sample});
	};


    
    return (
        <div className="productDetailContainer">
            <Navigation/>
            <div className="productArea">
                <div className="categoryShowArea">
                    <div className="detailCategory">Women</div>
                    <div className="detailCategory korean">상의</div>
                    <div className="detailCategory korean">반팔 티셔츠</div>
                </div>
                <div className="brandArea">
                    <img src="http://img.29cm.co.kr/next-brand/2019/11/13/621599b8985b480caa3b6d79bdf8ba1a_20191113095158.jpg"/>
                    <div className="brandInfoArea">
                        <div className="brandName">플루크</div>
                        <div className="brandDescription">FLUKE는 매시즌 참신한 스타일로 다양한 일상에 스며들 수 있는 옷을 만듭니다.</div>
                        <div className="goBrandHome">Brand Home</div>
                    </div>
                </div>
                <div className="productImportantArea">
                    <img src="http://img.29cm.co.kr/next-product/2020/03/05/a16e2a4490d947a6b98e15b8a621a15d_20200305150404.jpg"/>
                    <div className="importantInfo">
                        <div className="infoTop">
                            <div className="namePrice">
                                <div className="productName">상품이름</div>
                                <div className="reviewArea">
                                    <ul>
                                        <AiFillStar size="12"/>
                                        <AiFillStar size="12"/>
                                        <AiFillStar size="12"/>
                                        <AiFillStar size="12"/>
                                        <AiOutlineStar size="12"/>
                                    </ul>
                                    <div className="goReview">1,181 리뷰 보기</div>
                                </div>
                                <div className="productPrice">71,000</div>
                                <div className="productSalePrice red">60% 28,700원</div>
                            </div>
                            <div className="userHeartArea">
                                <div className="heart">
                                    <BsHeart size={30}/>
                                </div>
                                <span>0</span>
                            </div>
                        </div>
                        <div className="benefit">
                            <div>
                                <span>상품할인</span>
                                <ul>
                                    <li className="red">60% 28,700</li>
                                </ul>
                            </div>
                            <div>
                                <span>추가혜택</span>
                                <ul>
                                    <li>현대카드 31.360원 (2% 청구할인)</li>
                                    <li>적립금 320p</li>
                                    <li>할부금 월 5,333원 (6개월 할부시)</li>
                                    <li className="free">무이자 카드보기</li>
                                </ul>
                            </div>
                        </div>
                        <div className="options">
                            <li>size</li>
                            <li>color</li>
                            <li>구성</li>
                        </div>
                        <div className="buyArea">
                            <button className="buyBtn shoppingBag" onClick={() => onCart(sample)}>Shopping Bag</button>
                            <button className="buyBtn buyNow">Buy Now</button>
                        </div>
                        <div className="moreBenefit">전고객 <span className="red">10%</span> 할인 그리고 다양한 추가 할인 혜택들</div>
                    </div>
                </div>
                <div className="productEtcArea">
                    <div className="etc">
                        <div className="etcInfoTitle">상품정보</div>
                        <div className="productCode">
                            <div>상품코드 : </div>
                            <span>337169</span>
                        </div>
                        <div className="etcInfo shippingInfo">
                            <div>배송정보 : </div>
                            <span>해당 브랜드 제품은 무료배송 됩니다. <br/> 제주도를 포함한 도서/산간지역은 추가 배송비 <span className="blue">3,000</span>원</span>
                        </div>
                    </div>
                    <div className="etc">
                        <div className="etcInfoTitle">브랜드 알림</div>
                        <div className="etcInfo shippingInfo">
                            <div>※</div>
                            <span>주문 취소/배송 전 변경을 원하실 경우 브랜드게시판에 문의 부탁드리며, <br/> 오전 9시 이후에는 취소 및 변경이 어려울 수 있습니다.</span>
                        </div>
                    </div>
                </div>
                <div className="productDetailImageArea">
                    <div className="banner">
                        <img src="http://img.29cm.co.kr/next-contents/2020/05/13/70ee3a0efdd2462484ba0447eb7e2bf3_20200513095954.jpg"/>
                    </div>
                    <div className="detailInfo">
                        <div className="title">상품설명</div>
                        <img src="http://img.29cm.co.kr/next-product/2020/03/05/b48b6f323cef46a491d13cca3b4c1b33_20200305150406.jpg"/>
                        <div className="showInfoShow">
                            <div className="title">상품정보 보기</div>
                            <div className="list">
                                <ul className="cartBold">
                                    <li>제품소재</li>
                                    <li>색상</li>
                                    <li>치수</li>
                                    <li>제조자</li>
                                    <li>제조국</li>
                                    <li>세탁방법 및 취급시 주의사항</li>
                                    <li>제조연월</li>
                                    <li>품질보증기준</li>
                                    <li>A/S 책임자와 전화번호</li>
                                </ul>
                                <ul className="flexGrow">
                                    <li>상세페이지 참고</li>
                                    <li>상세페이지 참고</li>
                                    <li>상세페이지 참고</li>
                                    <li>와이에이치컴퍼니</li>
                                    <li>대한민국</li>
                                    <li>손세탁가능</li>
                                    <li>202002</li>
                                    <li>소비자분쟁해결기준에 따름</li>
                                    <li>070-4006-3671</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="brandBigArea">
                <img className="brandImage" src="http://img.29cm.co.kr/next-brand/2019/02/08/58c343692c7f4cea9fe51c11e36d14c0_20190208120934.jpg"/>
            </div>
        </div>
    )
};

export default ProductDetail;

