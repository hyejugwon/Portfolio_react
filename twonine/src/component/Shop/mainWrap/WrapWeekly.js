import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import WRAPWEEKLY from '../jsons/weekly.json';
import { AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import './Wrap.css';

const WomenWrapWeekly = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };

    const [ view, setView ] = useState([ WRAPWEEKLY ]);

    useEffect(() => {
        setView(WRAPWEEKLY);
    }, []);

    return (
    <div>
        <Slider {...settings}>
            {view.map(wrapweekly => (
                <div className="itemBox">
                    <img src={wrapweekly.src}/>
                    <div className="brand">{wrapweekly.brand}</div>
                    <div className="item">{wrapweekly.name}</div>
                    <div className="price">{wrapweekly.rate} {wrapweekly.price}원</div>
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

export default WomenWrapWeekly;