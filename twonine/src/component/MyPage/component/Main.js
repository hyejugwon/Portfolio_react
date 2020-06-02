import React from 'react';
import './Main.css';

const Main = () => {
    return(
        <div className="myPageMain">
            <div className="mainCate">
                <div className="mypageTitle">
                    <h3>최근 주문</h3>
                    <a>더보기 ></a>
                </div>
                <div className="myTable">
                    <ul>
                        <li className="orderDate">주문일</li>
                        <li className="orderItem">주문내역</li>
                        <li className="orderNum">주문번호</li>
                        <li className="amount">결제금액</li>
                    </ul>
                </div>
                <div className="recentOrderList">
                    <div className="list">
                        <li className="orderDate">2019.10.21</li>
                        <div className="orderItem">
                            <img src="http://img.29cm.co.kr/next-product/2019/09/06/4b1b606fbad4455ba0af56daa80a8223_20190906182757.jpg?width=300"/>
                            <li className="itemName">[10월 22일 예약 발송] OBG 로고 니트 BLUE</li>
                        </div>
                        <li className="orderNum">ORD20191021-5267614</li>
                        <li className="amount">42,589<span className="unit">원</span></li>
                    </div>
                    <div className="list">
                        <li className="orderDate">2019.04.04</li>
                        <div className="orderItem">
                            <img src="http://img.29cm.co.kr/next-product/2019/01/17/68cd3f28feb44549aee6b2ee3aad4fd8_20190117172627.jpg?width=300"/>
                            <li className="itemName">rough pearl necklace M 외 2건</li>
                        </div>
                        <li className="orderNum">ORD20190404-5052881</li>
                        <li className="amount">96,300<span className="unit">원</span></li>
                    </div>
                    <div className="list">
                        <li className="orderDate">2019.07.07</li>
                        <div className="orderItem">
                            <img src="http://img.29cm.co.kr/contents/itemIcon/201706/20170601142641.jpg?width=300"/>
                            <li className="itemName">quilting weimar laptop pouch</li>
                        </div>
                        <li className="orderNum">2017070722774</li>
                        <li className="amount">43,000<span className="unit">원</span></li>
                    </div>
                </div>
            </div>
            <div className="mainCate">
                <div className="mypageTitle">
                    <h3 className="english">MY HEART</h3>
                    <a>더보기 ></a>
                </div>
                <div className="heartProduct">
                    <h4 className="heartName">Products</h4>
                    <div className="productContainer">
                        <div className="productList">
                            <img src="//img.29cm.co.kr/next-product/2019/08/16/9b4bd1bad368453580d53b2c92ccfacf_20190816102719.jpg?width=900"/>
                            <span>브리츠 블루투스 스피커 BZ-JB5606</span>
                        </div>
                        <div className="productList">
                            <img src="//img.29cm.co.kr/next-product/2019/09/24/42f8df3fb40241dca9558673093f09dc_20190924131628.jpg?width=900"/>
                            <span>[단순리퍼] 정품 ION Superior LP 아이온 슈페리어 엘피/턴테이블</span>
                        </div>
                        <div className="productList">
                            <img src="//img.29cm.co.kr/next-product/2020/02/26/d27a3509694d4541b5e8a1a95e564dbb_20200226164629.jpg?width=900"/>
                            <span>[리퍼브이벤트] RV 루게 1인 소파(샌드그레이)</span>
                        </div>
                        <div className="productList">
                            <img src="//img.29cm.co.kr/next-product/2020/03/31/836494531e6d46b093eebe47b754c83c_20200331100257.jpg?width=900"/>
                            <span>쿠르보 소파 01_3인</span>
                        </div>
                        <div className="productList">
                            <img src="//img.29cm.co.kr/next-product/2020/03/31/2687efb2f7724fa7b952a0496b6e8455_20200331100622.jpg?width=900"/>
                            <span>하나시 소파 03_3인</span>
                        </div>
                        <div className="productList">
                            <img src="//img.29cm.co.kr/next-product/2020/04/07/4c742776d9b34a33a86042f659884368_20200407115930.jpg?width=900"/>
                            <span>[THE GOBO x Root57] DAISYS DROP EARRING_003CB_E01</span>
                        </div>
                        <div className="productList">
                            <img src="//img.29cm.co.kr/next-product/2020/04/16/05c94db58fc24673a78726ca1e2308a3_20200416155416.jpg?width=900"/>
                            <span>2.39 RUFFLE WRAP TOP_WHITE</span>
                        </div>
                        <div className="productList">
                            <img src="//img.29cm.co.kr/next-product/2020/05/13/c6750981b5f94f56a0247cde3e2a2334_20200513110540.jpg?width=900"/>
                            <span>BUTTER MESSENGER_black</span>
                        </div>
                    </div>
                </div>
                <div className="heartProduct">
                    <h4 className="heartName">Brand</h4>
                    <div className="heartBrand">
                        <div className="brandContainer">
                            <div className="brandList">
                                <img src="//img.29cm.co.kr/next-brand/2020/01/21/1072b627a62243dc8f50e14ff5db83f2_20200121191052.jpg?width=900"/>
                                <span className="brand_kr">페인오어플레져</span>
                                <span>painorpleasure</span>
                            </div>
                            <div className="brandList">
                                <img src="//img.29cm.co.kr/next-brand/2018/12/07/b6cba53c6dcb491e85bc7c4905e0192c_20181207172706.jpg?width=900"/>
                                <span className="brand_kr">바이탈싸인</span>
                                <span>VITALSIGN</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="heartPost">
                    <h4 className="heartName">Post</h4>
                    <p>포스트 하트내역이 없습니다.</p>
                </div>
            </div>
        </div>
    )
};

export default Main;