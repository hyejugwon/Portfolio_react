import React, { useState, useEffect } from 'react';
import './ItemList.css';
import ListViewArea from '../component/ListViewArea';
import ShopNavi from '../component/ShopNavi';
import Filter_1 from '../component/Shop/Filter_1';
import Axios from 'axios';
const API = process.env.API;

const ItemList = ({ history, category, midCategory }) => {
    const [ view, setView ] = useState([]);
    const [ small, setSmall ] = useState([]);

    useEffect(() => {
        getItem();
        getSmallCete();
    }, [midCategory, category]);

    const goDetail = id => {
        history.push(`/detail/${id}`);
    };
    
    const getItem = () => { 
        Axios.post(`${API}/TWgetItemsMid`, { big : category, mid : midCategory }). then(res => {
            const { data : { result, data, error } } = res;
            if(result) {
                setView(data);
            } else {
                alert('네트워크 오류가 발생했습니다.');
            }
        })
     };

    
    const getSmallCete = () => {
        Axios.post(`${API}/TWgetSmallCates`, { big : category, mid : midCategory }). then(res => {
            const { data : { result, data, error }} = res;
            if(result) {
                setSmall(data);
            } else {
                alert('네트워크 오류');
            }
        })
    };

    const onClickSmall = (smallData) => {
        // Axios.post(`$(API)/TWgetItemsSmall`, { small : smallCategory }). then( res => {
        //     const { data : { result, data, error }} = res;
                
        // })
        console.log(smallData);
    }
    // const getItems = () => {
    //     Axios.post(`${API}/`)
    // };


    return (
        <div className="ItemListContainer">
            <div className="ItemListNaviArea">
                <ShopNavi history={history} category={category} midCategory={midCategory}/>
            </div>
            <div className="ItemListsArea">
                <div className="itemFilterArea">
                    <div className="itemFilter" >
                        <li onClick={() => onClickSmall(getSmallCete)}>전체</li>
                        {small.map(item => (
                            <li onClick={() => onClickSmall(item.smallCode)}>{item.smallPath}</li>
                        ))}
                    </div>
                    <div className="filter_1">
                        <Filter_1/>
                    </div>
                </div>
                <div className="ListViewArea">
                    {view.map((sample, index) => (
                        <ListViewArea key={`SAMPLE${sample.id}`} sample={sample} onClickHandler={goDetail}/>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default ItemList;