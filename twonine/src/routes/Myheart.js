import React, { useState } from 'react';
import HeartProduct from '../component/MyPage/HeartProduct';
import HeartBrand from '../component/MyPage/HeartBrand';
import HeartTv from '../component/MyPage/HeartTv';
import HeartPost from '../component/MyPage/HeartPost';
import './Myheart.css';

const Myheart = () => {
    const [ heartTab , setHeartTab ] = useState(1);
    // console.log(caregory, page);

    // const onPage = _category => {
    //     history.push(`/mypage/myheart/${_category}/1`);
    // };
    
    return(
        <div className="heartArea">
            <div className="heartTab">
                <li className={heartTab === 1 ? 'heartTabActive' : ''} onClick={() => setHeartTab(1)}>product(66)</li>
                <li className={heartTab === 2 ? 'heartTabActive' : ''} onClick={() => setHeartTab(2)}>brand(21)</li>
                <li className={heartTab === 3 ? 'heartTabActive' : ''} onClick={() => setHeartTab(3)}>tv(0)</li>
                <li className={heartTab === 4 ? 'heartTabActive' : ''} onClick={() => setHeartTab(4)}>post(0)</li>
            </div>
            <div className="wrapItems">
                { heartTab === 1 && (
                    <div className="heartTabBox">
                        <HeartProduct/>
                    </div>
                )}
                { heartTab === 2 && (
                    <div className="heartTabBox">
                        <HeartBrand history={history}/>
                    </div>
                )}
                { heartTab === 3 && (
                    <div className="heartTabBox">
                        <HeartTv/>
                    </div>
                )}
                { heartTab === 4 && (
                    <div className="heartTabBox">
                        <HeartPost/>
                    </div>
                )}
            </div>
        </div>
    )
};

export default Myheart;
