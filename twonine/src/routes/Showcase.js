import React, { useState, useEffect } from 'react';
import './Showcase.css';
import LIST from '../component/Showcase/List.json';

const Showcase = () => {
    const [ view, setView ] = useState([]);

    useEffect(() => {
        setView(LIST);
    }, []);

    return (
        <div className="Showcase">
            <div className="showcaseTop">
                <div className="topCon">
                    <img src="//img.29cm.co.kr/next-edition/2020/06/08/840df3b2ffb24a25b333ab1f59526fb6_20200608115850.jpg?width=800"/>
                    <div className="title">본질에 충실한 가방</div>
                    <div className="sub">29CM 단독 선발매, 최대 20% 할인, 구매자 선착순 10명 파우치 증정, 포토 후기 3명 추첨 미니 크로스백 증정 이벤트</div>
                    <div className="date">2020.06.10 ~ 06.23</div>
                </div>
                <div className="topCon">
                    <img src="//img.29cm.co.kr/next-edition/2020/06/04/503bef5ea9d14ad2a57a04df3f484812_20200604100256.jpg?width=800"/>
                    <div className="title">여유를 느끼고 싶을 때</div>
                    <div className="sub">29CM 단독 5+5% 할인, 포토 후기 3명 추첨 bag 증정 이벤트</div>
                    <div className="date">2020.06.09 ~ 06.22</div>
                </div>
            </div>
            <div className="showcaseBottom">
                {view.map(list => (
                    <div className="scListArea">
                        <img src={list.src}/>
                        <div className="title">{list.title}</div>
                        <div className="sub">{list.sub}</div>
                        <div className="date">{list.date}</div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Showcase;
