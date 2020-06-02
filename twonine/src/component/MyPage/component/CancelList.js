import React, { useState } from 'react';
import './CancelList.css';
import CancelAll from './CancelList/CancelAll';
import OrderCancel from './CancelList/OrderCancel';
import ProductExchange from './CancelList/ProductExchange';
import ProductReturn from './CancelList/ProductReturn';

const CancelList = () => {
    const [ cancelTab , setCancelTab ] = useState(1);

    return (
        <div>
            <div className="mypageTitle">
                <h3>취소/교환/반품 내역</h3>
                <div className="cancelTable">
                    <li className={cancelTab === 1 ? 'cancelTabActive' : ''} onClick={() => setCancelTab(1)}>All</li>
                    <li className={cancelTab === 2 ? 'cancelTabActive' : ''} onClick={() => setCancelTab(2)}>주문취소</li>
                    <li className={cancelTab === 3 ? 'cancelTabActive' : ''} onClick={() => setCancelTab(3)}>상품교환</li>
                    <li className={cancelTab === 4 ? 'cancelTabActive' : ''} onClick={() => setCancelTab(4)}>반품접수</li>
                </div>
            </div>
            <div className="myTable">
                <ul>
                    <li className="light classifi">CS처리구분</li>
                    <li className="bold orderNum">주문번호</li>
                    <li className="bold orderTitle">접수제목</li>
                    <div className="cancelTableSet">
                        <li className="light orderDate">접수일자</li>
                        <li className="light cancelState">진행상태</li>
                        <li className="light cancelConfirm">완료일자</li>
                    </div>
                </ul>
            </div>
           
            <div className="wrapItems">
                { cancelTab === 1 && (
                    <div className="cancelTabBox">
                        <CancelAll/>
                    </div>
                )}
                { cancelTab === 2 && (
                    <div className="cancelTabBox">
                        <OrderCancel/>
                    </div>
                )}
                { cancelTab === 3 && (
                    <div className="cancelTabBox">
                        <ProductExchange/>
                    </div>
                )}
                { cancelTab === 4 && (
                    <div className="cancelTabBox">
                        <ProductReturn/>
                    </div>
                )}
            </div>
        </div>
    )
};

export default CancelList;
