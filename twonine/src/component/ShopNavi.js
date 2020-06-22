import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import TransCategory from '../customs/big';
import './ShopNavi.css';
import Axios from 'axios';
const API = process.env.API;

const ShopNavi = ({ category }) => {
    const [mid, setMid] = useState([]);

    const getMidCategory = bigCode =>  {
        Axios.post(`${API}/TWgetMidCate`, { big: bigCode }).then(res => {
            const { data: { result, data, error } } = res;
            if (result) {
                setMid(data);
            } else {
                alert('네크워크 오류가 발생했습니다. 다시 시도해주세요.');
            }
        })
    };

    useEffect(() => {
        const bigCode = TransCategory(category);
        getMidCategory(bigCode);
    }, [category]);

    return(
        <div>
            <div className="ShopNaviContainer">
                <div className="shopTitle">{category}</div>
                <div className="shopNaviLine"></div>
                <div className="shopList">
                    <ul>
                        {mid.map(item => (
                            <li><NavLink className="engBtn" to={`/shop/${item.bigPath}/${item.midPath}`}>{item.midLabel}</NavLink></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ShopNavi;
