import React, { useEffect } from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import './ListViewArea.css';

const nf = new Intl.NumberFormat();


const ListViewArea = ({ category, sample: { id, img, sale, coupon, newP, soldOut, brand, name, price, rate, salePrice, check }, onClickHandler}) => {
   
    // useEffect(() => {
    // }, [category]);

    
    return(
        <div className="ListViewAreaAll" >
            <div className="sampleBox" onClick={() => onClickHandler(id)}>
                <div className="image">
                    <img src={img}/>
                    <div className="spanIcons">
                        <span className={ (sale) === true ? 'show' : '' }>
                            <div className="sale">S</div>
                        </span>
                        <span className={ (coupon) === true ? 'show' : '' }>
                            <div className="bestCoupon">C</div>
                        </span>
                        <span className={ (newP) === true ? 'show' : '' }>
                            <div className="new">N</div>
                        </span>
                        <span className={ (soldOut) === true ? 'show' : '' }>
                            <div className="soldout">Sold Out</div>
                        </span>
                    </div>
                </div>
                <div className="brand">{brand}</div>
                <div className="name">{name}</div>
                <div className={ (sale) === false ? 'blackPrice' : '' }>
                    <div className="netPrice">
                        <div className="price">{nf.format(price)}</div>
                        <div className="unit">원</div>
                    </div>
                </div>
                <div className={ (sale) === true ? 'redPrice' : '' }>
                    <div className="saleBox">
                        <div className="rate">{rate}</div>
                        <div className="salePrice">{salePrice}</div>
                        <div className="unit">원</div>
                    </div>
                </div>
            </div>
            <div className="userSelec">
                <div className="heart">
                    <div className="noneHeart heartArea">
                        <span className={ check ? 'checked' : '' } onClick={() => onHeart(index)}>
                            <AiOutlineHeart size="18"/>
                        </span>
                    </div>
                    <div className="fullHeart heartArea">
                        <span className={ check ? 'checked' : '' } onClick={() => onHeart(index)}>
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
    )
};

export default ListViewArea;
