import React, { useEffect, useState } from 'react';
import WomenNavi from '../component/WomenNavi';
import './Women.css';
import FEED from '../jsons/womenFeed.json';
import ListPage from '../component/ListPage';

const Women2 = ({ match: {params: { category }} }) => {
    const [ view, setView ] = useState([ FEED ]);
    const [ wrapMenu, setWrapMenu ] = useState(1);

    useEffect(() => {
        console.log(category);
    }, [category]);

    useEffect(() => {
        setView(FEED);
    }, []);

    return (
        <div className="womenContainer">
            {category === 'main' ? (
                <>
                    <div className="womenMainImg">
                        <div className="topBackImg"></div>
                        <div className="pre"></div>
                        <div className="next"></div>
                        <div className="naviArea">
                        <WomenNavi/>
                        </div>
                    </div>
                    <div className="womenBox2">
                        <div className="womenBoxL">
                            <img className="image1" src="https://img.29cm.co.kr/next-product/2020/04/29/58f8422fea25498398b403a2736bddaa_20200429160513.jpg?"/>
                            <div className="WBox2Title">봄 신상품 오픈 소식</div>
                            <div className="WBox2Sub">기대되는 우먼 패션 브랜드의 봄 신상품 업데이트 소식을 알려드려요.</div>
                            <div className="goShow">보러가기</div>
                        </div>
                        <div className="womenBoxR">
                            <div className="BoxRTop">
                                <img className="image2" src="https://img.29cm.co.kr/next-product/2020/04/29/dd538a6e065d4eb3b6e488970c2228ac_20200429160454.jpg?"/>
                                <div className="WBox2Title">우먼 에센셜 20SS 컬렉션</div>
                                <div className="WBox2Sub">화사한 봄옷으로 기분 전환하고 싶은 마음, 29CM 우먼 에센셜 컬렉션이 빈틈없이 채워드릴게요. 봄부터 여름까지 매일의 스타일링 고민을 덜어줄 가장 기본의 아이템으로 모았습니다.</div>
                                <div className="goShow">보러가기</div>
                            </div>
                            <div className="BoxRBottom">
                                <img className="image3" src="https://img.29cm.co.kr/next-product/2020/04/29/5a9305245a9b440ba61fd74d56b7a922_20200429160618.jpg?"/>
                                <div className="textBox">
                                    <div className="WBox2Title">특별해지고 싶은 날을 위한 세레모니 스타일 가이드</div>
                                    <div className="WBox2Sub">누구에게나 간직하고 싶은 기념일이 하나쯤 있죠. 매일 입던 평범한 옷 대신, 평소에는 망설였던 조금은 화려한 아이템도 이런 날 만큼은 과감히 시도할 용기가 생깁니다. 이 모든 순간들이 오랫동안 소중하게 추억될 수 있도록, 29CM가 특별해지고 싶은 날을 위한 세레모니 스타일 가이드를 준비했습니다.</div>
                                    <div className="goShow">보러가기</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="womenBox3">
                        {view.map(feed => (
                            <div className="WB3Contents">
                                <img src={feed.src}/>
                                <div className="WBox3Title">{feed.title}</div>
                                <div className="WBox3Sub">{feed.sub}</div>
                            </div>
                        ))}
                    </div>
                    <div className="womenBox4">
                        <div className="wrapMenu">
                            <li className={wrapMenu === 1 ? 'wrapMenuActive' : ''} onClick={() => setWrapMenu(1)}>New arrivals</li>
                            <li className={wrapMenu === 2 ? 'wrapMenuActive' : ''} onClick={() => setWrapMenu(2)}>Weekly best</li>
                            <li className={wrapMenu === 3 ? 'wrapMenuActive' : ''} onClick={() => setWrapMenu(3)}>29 pick</li>
                        </div>
                        <div className="wrapItems">
                            { wrapMenu === 1 && (
                                <div className="wrapItemsBox">new</div>
                            )}
                            { wrapMenu === 2 && (
                                <div className="wrapItemsBox">weekly</div>
                            )}
                            { wrapMenu === 3 && (
                                <div className="wrapItemsBox">29pick</div>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <ListPage path={category} />
            )}
        </div>
    )
};

export default Women2;
