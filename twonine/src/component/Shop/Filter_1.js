import React from 'react';
import Dropdown from 'react-dropdown';
import './Filter_1.css';

const Filter_1 = () =>{
    const options = ['추천순', '신상품순', '베스트순', '낮은가격순', '높은가격순', '높은할인순', '베스트리뷰순', '베스트하트순'];

    return(
        <div>
            <Dropdown options={options}  placeholder="추천순" />
        </div>
    )
}

export default Filter_1;