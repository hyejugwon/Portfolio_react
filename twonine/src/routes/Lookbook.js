import React, { useEffect, useState, useRef } from 'react';
import './LookBook.css';
import LOOKBOOKLI from '../component/Lookbook/lookBook.json'

const Lookbook = () => {
    const [ view, setView ] = useState([ LOOKBOOKLI ]);
    const [ itemWidth, setItemWidth ] = useState(0);
    const [ itemHeight, setItemHeight ] = useState(0);
    const image = useRef();
    
    const setItemSize = () => {
        const _itemWidth = image.current ? image.current.offsetWidth : 0;
        const _itemHeight = image.current ? image.current.offsetHeight : 0;
        setItemWidth(_itemWidth);
    }

    useEffect(() => {
        setItemSize();
        setView(LOOKBOOKLI);
    }, []);

    return (
        <div className="lookBookContainer">
            {view.map(lookBook => (
                <div className="lookBookList">
                    <div className="imgContainer" ref={image} style={{ backgroundImage: `url(${lookBook.src})`, height: `${itemWidth}px`}}>
                        <div className="lookBookImg" ref={image} style={{ backgroundImage: `url(${lookBook.src})`, height: `${itemWidth}px`}}></div>
                        <div className="tag">LookBook</div>
                    </div>
                    <div className="brandName">{lookBook.name}</div>
                </div>
            ))}
        </div>
    )
};

export default Lookbook;
