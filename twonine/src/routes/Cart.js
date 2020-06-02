import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import { IoIosCheckboxOutline } from "react-icons/io";
import CartItem from '../component/CartItem';
import AppContext from '../contexts/AppContext';

const Cart = () => {
    const { state, dispatch } = useContext(AppContext);
	const [totalAmount, setTotalAmount] = useState(0);

	useEffect(() => {
		const _totalAmount = state.cart.reduce((acc, cur, idx) => {
			acc = acc + cur.price * cur.count;
			return acc;
		}, 0);
		setTotalAmount(_totalAmount);
	}, [state.cart]);

    return (
        <div className="CartContainer">
            <ul className="orderSequence">
                <li className="margin">01 shopping bag</li>
                <li className="margin">02 order</li>
                <li>03 order confirmed</li>
            </ul>
            <div className="orderListsArea">
                <div className="listSection">
                    <div className="checkBox">
                        <span>
                            <IoIosCheckboxOutline size="30"/>
                        </span>
                    </div>
                    <li className="productInfo">상품정보</li>
                    <li className="quantity">수량</li>
                    <li className="price">주문금액</li>
                    <li className="shipping">배송비</li>
                </div>
                <div className="lists">
                    {/* {state.cart.map(sample => (
                        <CartItem key={`CARTITEM${sample.id}`} sample={sample}/>
                    ))} */}
                </div>
                <div className="deleteArea">
                    <div className="deleteBtns">
                        <button>선택상품 삭제</button>
                        <button>품절상품 삭제</button>
                    </div>
                    <p>장바구니는 접속 종료 후 60일 동안 보관됩니다.</p>
                </div>
                <div className="totalPriceArea">
                    <ul className="priceMenu">
                        <li>총 주문금액</li>
                        <li>총 배송비</li>
                        <li>총 결제금액</li>
                    </ul>
                    <ul className="prices">
                        <li className="totalOrderArea">
                            <li className="strong">{totalAmount}<span>원</span></li>
                            <li className="totalNum">총 3개</li>
                        </li>
                        <p>+</p>
                        <li className="strong">2,500<span>원</span></li>
                        <p>=</p>
                        <li className="strong">428,000<span>원</span></li>
                    </ul>
                </div>
                <div className="calculationBtns">
                    <button className="continue">continue shopping</button>
                    <button className="checkOut">check out</button>
                </div>
            </div>
        </div>
    )
};

export default Cart;
