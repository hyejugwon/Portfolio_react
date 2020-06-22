import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../Contexts/AppContext';
import { IoIosCheckboxOutline } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { TiMinus } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";
import './CartItem.css';
const nf = new Intl.NumberFormat();

const CartItem = ({ sample, index }) => {
    const { state, dispatch } = useContext(AppContext);
    const [ list, setList ] = useState([]);
    
    const onCheck = idx => {
        const after = state.cart.map((sample, index) => 
            idx === index ? ({ ...sample, check: !sample.check }) : sample
        );
        setList(after);
    }

    const remove = () => {
        dispatch({ type: 'REMOVE_ITEM', data: { id: sample.id } });
    };

    const plus = () => {
        dispatch({ type: 'SET_COUNT', data: {...sample, count: sample.count + 1}});
    };
    
    const minus = () => {
        if (sample.count === 1) {
            return;
        }
        dispatch({ type: 'SET_COUNT', data: {...sample, count: sample.count - 1}});
    };

    
    
    return(
        <div className="listform" key={`CARTITEM${sample.id}`}>
            <div className="checkBoxArea">
                <span className={ sample.check ? 'checkActive' : '' } onClick={() => onCheck(index)}>
                    <IoIosCheckboxOutline size="30"/>
                </span>
            </div>
            <div className="productInfoArea">
                <img src={sample.img}/>
                <div className="productInfos">
                    <li className="brand">{sample.brand}</li>
                    <li className="name">{sample.name}</li>
                    <>
                        {sample.s_percent > 0 ? (
                            <div>
                                <li className="price">{nf.format(sample.price)}원</li>
                                <li className="price">{sample.s_percent}% {nf.format(sample.s_price)}원</li>
                            </div>
                        ) : (
                            <div>
                                <li className="price">{nf.format(sample.price)}원</li>
                            </div>
                        )}
                    </>
                    <li className="option">옵션 : [SIZE]{sample.size}, [COLOR]{sample.color} </li>
                    <button className="close" onClick={remove}>
                        <IoMdClose size="25"/>
                    </button>
                </div>
            </div>
            <div className="quantityBoxArea">
                <button className="quantityButton button1" onClick={minus}>
                    <TiMinus size="16"/>
                </button>
                <div className="quantityButton button2">
                    {sample.count}
                </div>
                <button className="quantityButton button3" onClick={plus}>
                    <TiPlus size="20"/>
                </button>
            </div>
            <div className="priceArea">
                <div className="finalPrice">{nf.format(sample.price * sample.count)}<span>원</span></div>
                <button className="buyNow">BUY NOW</button>
            </div>
            <div className="shippingArea">
                <p className="shippingPrice">2500원 업체배송</p>
                <p className="shippingDes"><span>[fennec]</span> 제품으로만 50,000원 이상 구매시 무료배송됩니다. (배송비 2,500원)</p>
            </div>
        </div>
    )
};

export default CartItem;

