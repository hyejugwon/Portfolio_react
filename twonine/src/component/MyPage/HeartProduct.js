import React, { useState, useEffect } from 'react';
import './HeartProduct.css';
import SAMPLE from '../Shop/jsons/sample.json';
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";

const HeartProduct = ({ history }) => {
    const [ view, setView ] = useState([]);
    useEffect(() => {
        setView(SAMPLE);
    }, []);

    const goDetail = id => {
        history.push(`/detail/${sample.id}`);
    };

    return (
        <div className="HeartProduct">
            {view.map((sample, index) => (
                <div className="ListViewAreaAll" key={`SAMPLE${sample.id}`} onClick={() => goDetail(sample.id)}>
                    <div className="sampleBox">
                        <div className="image">
                            <img src={sample.src}/>
                            <div className="spanIcons">
                                <span className={ (sample.sale) === true ? 'show' : '' }>
                                    <div className="sale">S</div>
                                </span>
                                <span className={ (sample.coupon) === true ? 'show' : '' }>
                                    <div className="bestCoupon">C</div>
                                </span>
                                <span className={ (sample.newP) === true ? 'show' : '' }>
                                    <div className="new">N</div>
                                </span>
                                <span className={ (sample.soldOut) === true ? 'show' : '' }>
                                    <div className="soldout">Sold Out</div>
                                </span>
                            </div>
                        </div>
                        <div className="brand">{sample.brand}</div>
                        <div className="name">{sample.name}</div>
                        <div className={ (sample.sale) === false ? 'blackPrice' : '' }>
                            <div className="netPrice">
                                <div className="price">{sample.price}</div>
                                <div className="unit">원</div>
                            </div>
                        </div>
                        <div className={ (sample.sale) === true ? 'redPrice' : '' }>
                            <div className="saleBox">
                                <div className="rate">{sample.rate}</div>
                                <div className="salePrice">{sample.salePrice}</div>
                                <div className="unit">원</div>
                            </div>
                        </div>
                    </div>
                    <div className="userSelec">
                        <div className="heart">
                            <div className="noneHeart heartArea">
                                <span className={ sample.check ? 'checked' : '' } onClick={() => onHeart(index)}>
                                    <AiOutlineHeart size="18"/>
                                </span>
                            </div>
                            <div className="fullHeart heartArea">
                                <span className={ sample.check ? 'checked' : '' } onClick={() => onHeart(index)}>
                                    <AiFillHeart size="18"/>
                                </span>
                            </div>
                            <div className="count">00</div>
                        </div>
                        <div className="review">
                            <FiMessageSquare size="18"/>
                            <div className="count">00</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default HeartProduct;