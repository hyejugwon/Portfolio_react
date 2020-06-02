import React from 'react';
import './OrderList.css';

const OrderList = () => {
    return (
        <div>
            <div className="mypageTitle">
                <h3>주문배송조회</h3>
            </div>
            <div className="myTable">
                <ul>
                    <li className="productInfo">상품정보</li>
                    <li className="shipping">배송비</li>
                    <li className="process">진행상태</li>
                </ul>
            </div>
            <div className="orderLists">
                <div className="orderInfo">
                    <div className="orderDate">
                        <p className="order_kr">주문일자</p>
                        <p className="order_num">2019.10.21</p>
                    </div>
                    <div className="orderNum">
                        <p className="order_kr">주문번호</p>
                        <p className="order_num">ORD20191021-5267614 ></p>
                    </div>
                </div>
                <div className="orderItemInfo">
                    <div className="itemInfos">
                        <img src="//img.29cm.co.kr/next-product/2019/09/06/4b1b606fbad4455ba0af56daa80a8223_20190906182757.jpg?width=300"/>
                        <div className="brandInfos">
                            <div className="brand">obg</div>
                            <div className="name">[2019-10-08 부터 순차출고][10월 22일 예약 발송] OBG 로고 니트 BLUE</div>
                            <div className="options">
                                <span>[SIZE]L</span>
                            </div>
                            <div className="priceContainer">
                                <div className="price">48,300<span className="unit">원</span></div>
                                <div className="quantity">/ 수량 1<span className="unit">개</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="shippingFee">2,500<span className="unit">원</span></div>
                    <div className="process">
                        <div className="processInfo">
                            <h3>배송 완료</h3>
                            <span>2019.10.08부터 순차출고</span>
                            <span className="textunderline">CJ대한통운 <p className="textunderline blue">626077207426</p></span>
                            
                        </div>
                        <div className="buttonArea">
                            <button>1:1문의</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="orderLists">
                <div className="orderInfo">
                    <div className="orderDate">
                        <p className="order_kr">주문일자</p>
                        <p className="order_num">2019.04.04</p>
                    </div>
                    <div className="orderNum">
                        <p className="order_kr">주문번호</p>
                        <p className="order_num">ORD20190404-5052881 ></p>
                    </div>
                </div>
                <div className="orderItemInfo">
                    <div className="itemInfos">
                        <img src="//img.29cm.co.kr/next-product/2019/01/17/68cd3f28feb44549aee6b2ee3aad4fd8_20190117172627.jpg?width=300"/>
                        <div className="brandInfos">
                            <div className="brand">alainn</div>
                            <div className="name">rough pearl necklace M</div>
                            <div className="options">
                                <span>[COLOR]white</span>
                            </div>
                            <div className="priceContainer">
                                <div className="price">53,000<span className="unit">원</span></div>
                                <div className="quantity">/ 수량 1<span className="unit">개</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="shippingFee">무료배송</div>
                    <div className="process">
                        <div className="processInfo">
                            <h3>취소완료</h3>
                        </div>
                        <div className="buttonArea">
                            <button>1:1문의</button>
                        </div>
                    </div>
                </div>
                <div className="orderItemInfo">
                    <div className="itemInfos">
                        <img src="//img.29cm.co.kr/next-product/2018/11/15/117dfde1de94452a8b7e49e78279e626_20181115152010.jpg?width=300"/>
                        <div className="brandInfos">
                            <div className="brand">alainn</div>
                            <div className="name">U pipe earring L</div>
                            <div className="options">
                                <span>[COLOR]white</span>
                            </div>
                            <div className="priceContainer">
                                <div className="price">38,000<span className="unit">원</span></div>
                                <div className="quantity">/ 수량 1<span className="unit">개</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="shippingFee">무료배송</div>
                    <div className="process">
                        <div className="processInfo">
                            <h3>취소 완료</h3>
                        </div>
                        <div className="buttonArea">
                            <button>1:1문의</button>
                        </div>
                    </div>
                </div>
                <div className="orderItemInfo">
                    <div className="itemInfos">
                        <img src="//img.29cm.co.kr/next-product/2018/04/18/2b5fb1e4511741e69bb9e885d3888f54_20180418194039.jpg?width=300"/>
                        <div className="brandInfos">
                            <div className="brand">obg</div>
                            <div className="name">[2019-10-08 부터 순차출고][10월 22일 예약 발송] OBG 로고 니트 BLUE</div>
                            <div className="options">
                                <span>[DESIGN]CLOUD</span>
                            </div>
                            <div className="priceContainer">
                                <div className="price">2,800<span className="unit">원</span></div>
                                <div className="quantity">/ 수량 1<span className="unit">개</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="shippingFee">2,500<span className="unit">원</span></div>
                    <div className="process">
                        <div className="processInfo">
                            <h3>취소 완료</h3>
                        </div>
                        <div className="buttonArea">
                            <button>1:1문의</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
};

export default OrderList;
