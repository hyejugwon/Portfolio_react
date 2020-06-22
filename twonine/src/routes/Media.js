import React, { useState, useEffect } from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import LIST from '../component/Media/list.json';
import './Media.css';

const Media = () => {
    const [ view, setView ] = useState([]);

    useEffect(() => {
        setView(LIST);
    }, []);

    return (
        <div className="Media">
            {view.map(list => (
                <div className="mediaList">
                    <img className="listImage" src={list.src}/>
                    <div className="nameArea">
                        <img src={list.src2}/>
                        <div className="name">{list.name}</div>
                    </div>
                    <div>{list.profile}</div>
                    <div>{list.tag}</div>
                    <div className="heart">
                        <AiOutlineHeart/>
                        <div className="count">00</div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Media;
