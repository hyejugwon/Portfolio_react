import React, { useState, useEffect } from 'react';
import './Best.css';
import BestNavi from '../component/Best/BestNavi';
import Timer from '../component/Best/Timer';
import BEST3 from '../component/Best/jsons/best3.json';
import BESTITEMS from '../component/Best/jsons/bestItems.json';
import { AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";


const Best = () => {
    const [ view,setView ] = useState([ BEST3 ]);
    const [ view2,setView2 ] = useState([ BESTITEMS ]);

    useEffect(() => {
        setView(BEST3);
        setView2(BESTITEMS);
    })


    return (
        <div className="BestContainer">
            <div className="naviArea">
                <BestNavi/>
            </div>
            <div className="itemArea">
                <div className="realTimeBox">
                    <div>실시간 클릭</div>
                    <Timer/>
                </div>
                <div className="Best3">
                    {view.map(best3 => (
                        <div className="bestItemBox">
                            <div className="image">
                                <img src={best3.src}/>
                                <div className="rank">{best3.id}</div>
                                <div className="spanIcons">
                                    <span className={ (best3.sale) === true ? 'active' : '' }>
                                        <div className="sale">S</div>
                                    </span>
                                    <span className={ (best3.coupon) === true ? 'active' : '' }>
                                        <div className="bestCoupon">C</div>
                                    </span>
                                    <span className={ (best3.new) === true ? 'active' : '' }>
                                        <div className="new">N</div>
                                    </span>
                                    <span className={ (best3.soldOut) === true ? 'active' : '' }>
                                        <div className="soldout">Sold Out</div>
                                    </span>
                                </div>
                            </div>
                            <div className="brand">{best3.brand}</div>
                            <div className="name">{best3.name}</div>
                            <div className={ (best3.sale) === false ? 'blackPrice' : '' }>
                                <div className="price">{best3.price}</div>
                                <div className="unit">원</div>
                            </div>
                            <div className={ (best3.sale) === true ? 'redPrice' : '' }>
                                <div className="saleBox">
                                    <div className="rate">{best3.rate}</div>
                                    <div className="salePrice">{best3.salePrice}</div>
                                    <div className="unit">원</div>
                                </div>
                            </div>
                            <div className="userSelec">
                                <div className="heart">
                                    <AiOutlineHeart/>
                                    <div className="count">00</div>
                                </div>
                                <div className="review">
                                    <FiMessageSquare/>
                                    <div className="count">00</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="BestItems">
                    {view2.map(bestItems => (
                        <div className="bestItemBox">
                            <div className="image">
                                <img src={bestItems.src}/>
                                <div className="rank">{bestItems.id}</div>
                                <div className="spanIcons">
                                    <span className={ (bestItems.sale) === true ? 'active' : '' }>
                                        <div className="sale">S</div>
                                    </span>
                                    <span className={ (bestItems.coupon) === true ? 'active' : '' }>
                                        <div className="bestCoupon">C</div>
                                    </span>
                                    <span className={ (bestItems.new) === true ? 'active' : '' }>
                                        <div className="new">N</div>
                                    </span>
                                    <span className={ (bestItems.soldOut) === true ? 'active' : '' }>
                                        <div className="soldout">Sold Out</div>
                                    </span>
                                </div>
                            </div>
                            <div className="brand">{bestItems.brand}</div>
                            <div className="name">{bestItems.name}</div>
                            <div className={ (bestItems.sale) === false ? 'blackPrice' : '' }>
                                <div className="netPrice">
                                    <div className="price">{bestItems.price}</div>
                                    <div className="unit">원</div>
                                </div>
                            </div>
                            <div className={ (bestItems.sale) === true ? 'redPrice' : '' }>
                                <div className="saleBox">
                                    <div className="rate">{bestItems.rate}</div>
                                    <div className="salePrice">{bestItems.salePrice}</div>
                                    <div className="unit">원</div>
                                </div>
                            </div>
                            <div className="userSelec">
                                <div className="heart">
                                    <AiOutlineHeart/>
                                    <div className="count">00</div>
                                </div>
                                <div className="review">
                                    <FiMessageSquare/>
                                    <div className="count">00</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Best;
