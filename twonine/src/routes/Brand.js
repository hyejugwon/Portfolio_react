import React, { useState, useEffect } from 'react';
import './Brand.css';
import BrandList from '../component/Brand/BrandList';

const BRAND = [
    {
        id: 10001,
        type: 1,
        name1: '로우클래식',
        name2: 'LOW CLASSIC',
    },
    {
        id: 10002,
        type: 2,
        name1: '더고보',
        name2: 'THE GOBO',
    },
    {
        id: 10003,
        type: 3,
        name1: '앤더슨벨 포 맨',
        name2: 'ANDERSSON BELL FOR MAN',
    },
    {
        id: 10004,
        type: 4,
        name1: '찰스퍼니처',
        name2: 'CHALSFURNITURE',
    },
    {
        id: 10005,
        type: 5,
        name1: '디오디너리',
        name2: 'THE ORDINARY',
    },
    {
        id: 10006,
        type: 6,
        name1: '롬버스',
        name2: 'RHOMBUS',
    },
    {
        id: 10007,
        type: 7,
        name1: '마틸다',
        name2: 'MAATILA',
    }
]
const BRANDFILTER = [
    {
		"id": 0,
		"path": "all",
		"label": "ALL"
	},
	{
		"id": 1,
		"path": "women",
		"label": "WOMEN"
	},
	{
		"id": 2,
		"path": "acc",
		"label": "ACC"
	},
	{
		"id": 3,
		"path": "men",
		"label": "MEN"
	},
	{
		"id": 4,
		"path": "home",
		"label": "HOME"
	},
	{
		"id": 5,
		"path": "beauty",
		"label": "BEAUTY"
	},
	{
		"id": 6,
		"path": "tech",
		"label": "TECH"
	},
	{
		"id": 7,
		"path": "culture",
		"label": "CULTURE"
	}
]

const Brand = () => {
    const [view, setView] = useState([]);
    const [onType, setOnType] = useState(0);
    const [category, setCategory] = useState(0);

    const sortItem = (filter) => {
        let _id  = 0;
        switch (filter) {
            case 'all' : _id = 0; break;
            case 'women' : _id = 1; break;
            case 'acc' : _id = 2; break;
            case 'men' : _id = 3; break;
            case 'home' : _id = 4; break;
            case 'beauty' : _id = 5; break;
            case 'tech' : _id = 6; break;
            case 'culture' : _id = 7; break;
        }

        setOnType(_id);
        if (_id === 0) {
            setView(BRAND);
        } else {
            const sort = BRAND.filter(item => {
                return item.type === _id;
            });
            setView(sort);
        }

    }

    useEffect(() => {
        const _brand = BRAND.filter(item => item.type === category);
        setView(_brand);
    }, [category]);


    return (
        <div className="Brand">
            <div className="brandTop">
                <li><img src="//img.29cm.co.kr/next29cm/brand_01_200211.png?width=400"/></li>
                <li><img src="//img.29cm.co.kr/next29cm/brand_02_200211.png?width=400"/></li>
                <li><img src="//img.29cm.co.kr/next29cm/brand_03_0716.jpg?width=400"/></li>
                <li><img src="//img.29cm.co.kr/next29cm/brand_04_0716.jpg?width=400"/></li>
                <li><img src="//img.29cm.co.kr/next29cm/brand_05_0716.jpg?width=400"/></li>
                <li><img src="//img.29cm.co.kr/next29cm/brand_01_0107.jpg?width=400"/></li>
                <li><img src="//img.29cm.co.kr/next29cm/brand_07_0716.jpg?width=400"/></li>
                <li><img src="//img.29cm.co.kr/next29cm/brand_08_0716.jpg?width=400"/></li>
                <li><img src="//img.29cm.co.kr/next29cm/brand_09_0401.jpg?width=400"/></li>
                <li><img src="//img.29cm.co.kr/next29cm/brand_10_0716.jpg?width=400"/></li>
            </div>
            <div className="brandArea">
                <div className="brandFilter">
                    <ul className="brandCate">
                        {BRANDFILTER.map(item => (
                            <li
                                className={`label ${ onType === item.id ? 'select' : ''}`}
                                key={`category${item.id}`}
                                onClick={() => setCategory(item.id)}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                    <input type="text" className="brandSearch"></input>
                </div>
                <div className="items">
                    {view.map(item => (
                        <BrandList key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Brand;
