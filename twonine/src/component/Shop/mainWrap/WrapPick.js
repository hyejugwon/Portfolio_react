import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import WRAPPICK from '../jsons/pick.json';
import { AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import './Wrap.css';

const WomenWrapPick = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };
    
    const [ view, setView ] = useState([ WRAPPICK ]);

    useEffect(() => {
        setView(WRAPPICK);
    }, []);
    
    return (
    <div>
        <Slider {...settings}>
            {view.map(wrappick => (
                <div className="itemBox">
                    <img src={wrappick.src}/>
                    <div className="brand">{wrappick.brand}</div>
                    <div className="item">{wrappick.name}</div>
                    <div className="price">{wrappick.rate} {wrappick.price}원</div>
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

export default WomenWrapPick;