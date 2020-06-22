import React, { useEffect } from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import './ListViewArea.css';

const nf = new Intl.NumberFormat();


const ListViewArea = ({ category, sample: { id, img, sale, coupon, news, soldOut, brand, name, price, s_percent, s_price, check }, onClickHandler}) => {
   
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
                        <span className={ (news) === true ? 'show' : '' }>
                            <div className="new">N</div>
                        </span>
                        <span className={ (soldOut) === true ? 'show' : '' }>
                            <div className="soldout">Sold Out</div>
                        </span>
                    </div>
                </div>
                <div className="brand">{brand}</div>
                <div className="name">{name}</div>
                 <>
                    {s_percent > 0 ? (
                        <div className="listPriceArea">
                            <li className="price">{nf.format(price)}</li>
                            <li className="thisPrice redPrice">{s_percent}% {nf.format(s_price)}원</li>
                        </div>
                    ) : (
                        <div className="listPriceArea">
                            <li className="thisPrice">{nf.format(price)}원</li>
                        </div>
                    )}
                </>
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
                    <div className="count">{nf.format(3434)}</div>
                </div>
                <div className="review">
                    <FiMessageSquare size="18"/>
                    <div className="count">{nf.format(123)}</div>
                </div>
            </div>
        </div>
    )
};

export default ListViewArea;
