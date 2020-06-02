import React from 'react';
import './BestNavi.css';

const BestNavi = () =>{
    return(
        <div className="BestNaviContainer">
            <div className="shop2Title">Best</div>
            <div className="shop2NaviLine"></div>
            <div className="shop2Li">
                <button className="underLine" to="/shop/category/acc/bag">실시간 클릭</button>
                <button className="underLine" to="/shop/category/acc/shoes">베스트 브랜드</button>
                <button className="underLine lineNone" to="/shop/category/acc/jewel">베스트 상품</button>
                <button className="engBtn" to="/shop/category/acc/main">Women</button>
                <button className="engBtn" to="/shop/category/acc/best">Acc</button>
                <button className="engBtn" to="/shop/category/acc/only29">men</button>
                <button className="engBtn" to="/shop/category/acc/only29">home</button>
                <button className="engBtn" to="/shop/category/acc/only29">beauty</button>
                <button className="engBtn" to="/shop/category/acc/only29">tech+</button>
                <button className="engBtn" to="/shop/category/acc/only29">culture+</button>
            </div>
        </div>
    )
}


export default BestNavi;