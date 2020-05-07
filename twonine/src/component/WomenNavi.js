import React from 'react';
import './WomenNavi.css';

const WomenNavi = () => {
    return (
        <div className="womenNaviContainer">
            <div className="womenTitle">women</div>
            <div className="womenNaviLine"></div>
            <div className="womenBtns">
                <button className="engBtn" to="/shop/category/women/main">new</button>
                <button className="engBtn" to="/shop/category/women/best">best</button>
                <button className="engBtn" to="/shop/category/women/only29">only 29cm</button>
                <button to="/shop/category/women/topall">상의</button>
                <button to="/shop/category/women/dressAll">원피스</button>
                <button to="/shop/category/women/ptAll">바지</button>
                <button to="/shop/category/women/skAll">치마</button>
                <button to="/shop/category/women/denimAll">데님</button>
                <button to="/shop/category/women/outerAll">아우터</button>
                <button to="/shop/category/women/sportsAll">스포츠웨어</button>
                <button to="/shop/category/women/knitAll">니트</button>
                <button to="/shop/category/women/innerAll">이너웨어</button>
                <button to="/shop/category/women/homewearAll">홈웨어</button>
                <button to="/shop/category/women/swimAll">수영복</button>
            </div>
        </div>
    )
}

export default WomenNavi;