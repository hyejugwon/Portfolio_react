import React, { useState, useEffect } from 'react';
import './ItemList.css';
import ListViewArea from '../component/ListViewArea';
import SAMPLE from '../component/Shop/jsons/sample.json';
import ShopNavi from '../component/ShopNavi';
import Filter_1 from '../component/Shop/Filter_1';

const ItemList = ({ history, category, midCategory }) => {
    const [ view, setView ] = useState([]);

    useEffect(() => {
        setView(SAMPLE);
        console.log(category, midCategory); // women, outer
    }, []);

    const goDetail = id => {
        history.push(`/detail/${id}`);
    };

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
                    <div className="itemFilter">
                        <li>전체</li>
                        <li>스커트</li>
                        <li>팬츠</li>
                        <li>원피스</li>
                        <li>자켓</li>
                        <li>쇼츠</li>
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