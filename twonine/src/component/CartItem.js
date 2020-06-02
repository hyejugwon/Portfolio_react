import React, { useContext } from 'react';
import AppContext from '../Contexts/AppContext';
import { IoIosCheckboxOutline } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { TiMinus } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";

const CartItem = ({ sample }) => {
    const { state, dispatch } = useContext(AppContext);

    const onChangeCount = ev => {
        const { target: { value } }= ev;
        dispatch({ type: 'SET_COUNT', data: {...sample, count: Number(value)}});
    };

    return(
        <div className="listform" key={`CARTITEM${sample.id}`}>
            <div className="checkBoxArea">
                <span>
                    <IoIosCheckboxOutline size="30"/>
                </span>
            </div>
            <div className="productInfoArea">
                <img src="//img.29cm.co.kr/next-product/2019/10/30/95cd75137123472d8e2cd7bb9dd7ab4c_20191030114350.jpg?width=150"/>
                <div className="productInfos">
                    <li className="brand">{sample.brand}</li>
                    <li className="name">{sample.name}</li>
                    <li className="price">{sample.price}원</li>
                    <div className="close">
                        <IoMdClose size="25"/>
                    </div>
                </div>
            </div>
            <div className="quantityBoxArea">
                <div className="quantityButton button1">
                    <TiMinus size="16"/>
                </div>
                <select className="quantityButton button2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <div className="quantityButton button3">
                    <TiPlus size="20"/>
                </div>
            </div>
            <div className="priceArea">
                <div className="finalPrice">{sample.price}<span>원</span></div>
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

