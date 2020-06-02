import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import WRAPNEW from '../jsons/new.json';
import { AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import './Wrap.css';

const WomenWrapNew = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };

    const [ view, setView ] = useState([ WRAPNEW ]);
    
    useEffect(() => {
        setView(WRAPNEW);
    }, []);

    return (
    <div>
        <Slider {...settings}>
            {view.map(wrapnew => (
                <div className="itemBox">
                    <img src={wrapnew.src}/>
                    <div className="brand">{wrapnew.brand}</div>
                    <div className="item">{wrapnew.name}</div>
                    <div className="price">{wrapnew.rate} {wrapnew.price}원</div>
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
        </Slider>
    </div>
    );
}

export default WomenWrapNew;