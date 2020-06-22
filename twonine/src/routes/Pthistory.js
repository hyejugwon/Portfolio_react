import React, { useState, useEffect } from 'react';
import './Pthistory.css';
import History from '../component/Pt/History';
import Now from '../component/Pt/Now';
import Coming from '../component/Pt/Coming';

const Pthistory = () => {
    const [ ptCate, setPtCate ] = useState(2);

    return (
        <div>
            <div>
                <div className="ptCate">
                    <li className={ptCate === 1 ? 'ptActive' : ''} onClick={() => setPtCate(1)}>History</li>
                    <li className={ptCate === 2 ? 'ptActive' : ''} onClick={() => setPtCate(2)}>Now</li>
                    <li className={ptCate === 3 ? 'ptActive' : ''} onClick={() => setPtCate(3)}>Coming</li>
                </div>
                <div>
                    { ptCate === 1 && (
                        <div className="ptContent">
                            <History/>
                        </div>
                    )}
                    { ptCate === 2 && (
                        <div className="ptContent">
                            <Now/>
                        </div>
                    )}
                    { ptCate === 3 && (
                        <div className="ptContent">
                            <Coming/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};

export default Pthistory;
