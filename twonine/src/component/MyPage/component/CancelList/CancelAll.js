import React, { useState } from 'react';
import './CancelAll.css';



const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = useState('');
    return (
        <div className="accordion-wrapper">
            <div className={`list ${isOpen ? "open" : ""}`} onClick={() => setOpen(!isOpen)}>
                {title}
            </div>
            <div className={`contents ${!isOpen ? "collapsed" : ""}`}>
                <div className="accordion-content">{children}</div>
            </div>
        </div>
    );
};

const CancelAll = () => {
    return(
        <div>
            <Accordion title={
                <div className="cancelContents">
                    <ul>
                        <li className="light classifi">취소</li>
                        <li className="bold orderNum">ORD20190404-5052881</li>
                        <li className="bold orderTitle">[고객취소]휴대폰결제 결제완료 상태 중 취소 접수</li>
                        <div className="cancelTableSet">
                            <li className="light orderDate">2019-04-04</li>
                            <li className="light cancelState">취소완료</li>
                            <li className="light cancelConfirm">2019-04-04</li>
                        </div>
                    </ul>
                </div>
            }>
                {
                    <div className="CDcontainer">
                        <div className="cancelDetail">
                            <div className="CDtitle">서비스코드</div>
                            <p className="CDcontents">AS20190404-0005107</p>
                        </div>
                        <div className="cancelDetail">
                            <div className="CDtitle">주문번호</div>
                            <p className="CDcontents">ORD20190404-5052881</p>
                        </div>
                        <div className="cancelDetail">
                            <div className="CDtitle">접수사유</div>
                            <p className="CDcontents">단순변심</p>
                        </div>
                        <div className="cancelDetail">
                            <div className="CDtitle">접수상품</div>
                            <div className="CDcontents">
                                <ul>
                                    <li>상품코드 : 307619</li>
                                    <li>상품명 : rough pearl necklace M</li>
                                    <li>상품옵션 : [color]white</li>
                                    <li>판매가 : 53,000원</li>
                                    <li>신청수량 : 1</li>
                                </ul>
                                <ul>
                                    <li>상품코드 : 288565</li>
                                    <li>상품명 : U pipe earring L</li>
                                    <li>상품옵션 : [color]white</li>
                                    <li>판매가 : 38,000원</li>
                                    <li>신청수량 : 1</li>
                                </ul>
                                <ul>
                                    <li>상품코드 : 217025</li>
                                    <li>상품명 : BADGE</li>
                                    <li>상품옵션 : [DESIGN]CLOUD</li>
                                    <li>판매가 : 2,800원</li>
                                    <li>신청수량 : 1</li>
                                </ul>
                                <li className="red">실 환불금액 : 96,300원</li>
                            </div>
                        </div>
                    </div>
                }
            </Accordion>
        </div>
    )
};

export default CancelAll;
