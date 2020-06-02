import React from 'react';
import './Receipt.css';

const Receipt = () => {
    return (
        <div className="ReceiptContainer">
            <div className="myPageTitleArea">
                <h3 className="myPageTitle">증빙서류발급</h3>
                <p>각종 결제관련 증빙서류의 신청 및 출력이 가능합니다.</p>
                <p>발행 및 출력을 원하는 주문건의 해당 버튼을 클릭하세요.</p>
            </div>
            <div className="ReceiptTable">
                <ul>
                    <li className="orderNum">주문번호</li>
                    <li className="orderDate">주문일</li>
                    <li className="product">상품명</li>
                    <div className="receiptTableSet">
                        <li className="totalPrice">총 주문금액</li>
                        <li className="shippingState">배송상태</li>
                        <li className="issuance">발급</li>
                    </div>
                </ul>
            </div>
            <div className="issuanceList">
                <ul>
                    <li className="orderNum">ORD20191021-5267614</li>
                    <li className="orderDate">2019-10-21</li>
                    <li className="product">[10월 22일 예약 발송] OBG 로고 니트 BLUE</li>
                    <div className="receiptTableSet">
                        <li className="totalPrice">42,589원</li>
                        <li className="shippingState">배송완료</li>
                        <div className="buttonArea">
                            <button className="issuance">증빙서류출력</button>
                        </div>
                    </div>
                </ul>
            </div>
            <div className="issuanceList">
                <ul>
                    <li className="orderNum">ORD20190404-5052881</li>
                    <li className="orderDate">2019-04-04</li>
                    <li className="product">rough pearl necklace M 외 2건</li>
                    <div className="receiptTableSet">
                        <li className="totalPrice">0원</li>
                        <li className="shippingState">전체취소</li>
                        <div className="buttonArea">
                            <button className="issuance">증빙서류출력</button>
                        </div>
                    </div>
                </ul>
            </div>
            <div className="issuanceList">
                <ul>
                    <li className="orderNum">2017070722774</li>
                    <li className="orderDate">2017-07-21</li>
                    <li className="product">quilting weimar laptop pouch</li>
                    <div className="receiptTableSet">
                        <li className="totalPrice">43,000원</li>
                        <li className="shippingState">배송완료</li>
                        <div className="buttonArea">
                            <button className="issuance">증빙서류출력</button>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )
};

export default Receipt;
