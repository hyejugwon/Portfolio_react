import React, { useEffect, useState } from 'react';
import './Main.css';
import LEFTIMAGE from '../jsons/homeleft.json';
import RIGHTBOX from '../jsons/rightBox.json';
import LEFTBOX from '../jsons/leftBox.json';

const Main = () => {
    console.log(LEFTIMAGE)
    const [ view, setView ] = useState([ LEFTIMAGE ]);
    const [ view3, setView3 ] = useState([ RIGHTBOX ]);
    const [ view2, setView2 ] = useState([ LEFTBOX ]);

    useEffect(() => {
        setView(LEFTIMAGE);
    }, []);

    useEffect(() => {
        setView2(LEFTBOX);
    }, []);

    useEffect(() => {
        setView3(RIGHTBOX);
    }, []);
    


    return (
        <div className="MainContainer">
            <div className="MainBody">
                <div className="body_left">
                    {view.map(leftimage => (
                        <img className="leftImage" src={leftimage.src}></img>
                    ))}
                </div>
                <div className="body_right">
                    <div className="bodyLine"></div>
                    <div className="r_left">
                        <img className="left_main_img" src="http:////img.29cm.co.kr/next-edition/2020/05/04/c721d8e4de264dfb97e64409f74ee59f_20200504103542.jpg?width=600"></img>
                        {view2.map(leftBox => (
                            <div className="feedContainer">
                                <span className={ (leftBox.line) ? 'inlineBlocked' : '' }></span>
                                <div className="feedBox">
                                    <img className="feedImage" src={leftBox.src}/>
                                    <span className={ (leftBox.sideBox) ? 'sideArea' : '' }>
                                        <div className="sideBox">
                                            <img className="sideImage" src={leftBox.mdImage}/>
                                            <div className="sideTextBox">
                                                <div className="sideText">{leftBox.mdTitle}</div>
                                                <div className="sideText">{leftBox.mdSub}</div>
                                            </div>
                                        </div>
                                    </span>
                                    <div className="title">{leftBox.title}</div>
                                    <div className="subTitle">{leftBox.sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bodyLine"></div>
                    <div className="r_right">
                        <img className="right_main_img" src="http:////img.29cm.co.kr/next-edition/2020/05/04/d9b60ff1b3174fb3808b70a328c007a0_20200504103434.jpg?width=600"></img>
                        {view3.map(rightBox => (
                            <div className="feedContainer">
                                <span className={ (rightBox.line) ? 'inlineBlocked' : '' }></span>
                                <div className="feedBox">
                                    <img className="feedImage" src={rightBox.src}/>
                                    <span className={ (rightBox.sideBox) ? 'sideArea' : '' }>
                                        <div className="sideBox">
                                            <img className="sideImage" src={rightBox.mdImage}/>
                                            <div className="sideTextBox">
                                                <div className="sideText">{rightBox.mdTitle}</div>
                                                <div className="sideText">{rightBox.mdSub}</div>
                                            </div>
                                        </div>
                                    </span>
                                    <div className="title">{rightBox.title}</div>
                                    <div className="subTitle">{rightBox.sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="moreContainer">
                <button className="more">more</button>
            </div>
        </div>
    )
};

export default Main;
