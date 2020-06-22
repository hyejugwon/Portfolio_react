import React, { useState, useEffect } from 'react';
import LIST from '../component/Special/List.json';
import './Specialorder.css';

const Specialorder = () => {
    const [ view, setView ] = useState([]); 

    useEffect(() => {
        setView(LIST);
    }, []);

    return (
        <div className="Special">
            {view.map(list => (
                <div className="specialArea">
                    <img src={list.src}/>
                    <div className="title">{list.title}</div>
                    <div className="sub">{list.sub}</div>
                    <div className="line"></div>
                    <div className="date">{list.date}</div>
                </div>
            ))}
        </div>
    )
};

export default Specialorder;
