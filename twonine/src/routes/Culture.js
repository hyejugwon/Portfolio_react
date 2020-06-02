import React, { useState, useEffect } from 'react';
import './ShopCate.css';
import Slider from "react-slick";
import SLIDER from '../component/Culture/jsons/main.json';
import CultureNavi from '../component/Culture/CultureNavi.js';
import FEED from '../component/Culture/jsons/feed.json';
import ItemList from './ItemList';

const Culture = ({ history, match : { params: { midCategory } }}) => {
    const [ view, setView ] = useState([  ]);
    const [ view2, setView2 ] = useState([  ]);
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    useEffect(() => {
        setView(SLIDER);
        setView2(FEED);
    },[]);

    useEffect(() => {
    },[midCategory]);

    return (
        <>
            {midCategory === 'main' ? (
                <div className="shopContainer">
                    <div className="slider">
                        <Slider {...settings}>
                            {view.map(slider => (
                                <div className="shopSlide">
                                    <div className="slideImg" style={{backgroundImage: `url(${slider.src})`}}></div>
                                    <div className="description">
                                        <div className={ (slider.id) === 4 || 5 || 9 ? 'white' : ''}>
                                            <div className="imageTitle">{slider.title}</div>
                                            <div className="imageSub">{slider.sub}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        <div className="NaviArea">
                            <CultureNavi/>
                        </div>
                    </div>
                    <div className="shopBox2">
                        <div className="shopBoxL">
                            <img className="image1" src="https://img.29cm.co.kr/next-product/2020/05/08/68ac7d59192846ae98ad965153b7acfa_20200508113606.jpg?width=700"/>
                            <div className="Box2Title">르네 마그리트 특별전</div>
                            <div className="Box2Sub">르네 마그리트는 비틀즈, 롤링 스톤즈 등 세계적으로 유명한 아티스트뿐 아니라 영화 [매트릭스], [하울의 움직이는 성]을 비롯해 패션, 건축, 광고 등 현대 대중문화에 영향을 미친 초현실주의 거장입니다. [르네 마그리트 특별전]은 160여 점에 달하는 그의 회화를 재해석한 비주얼아트 및 증강현실, 다큐멘터리 영상과 포토존 등 다양한 콘텐츠로 이뤄진 멀티미디어 체험형 전시입니다. 밀라노와 피렌체에서 성공적으로 개최된 대규모 전시를 국내 최초 단독으로 만나보세요. </div>
                            <div className="goShow">보러가기</div>
                        </div>
                        <div className="shopBoxR">
                            <div className="BoxRTop">
                                <img className="image2" src="https://img.29cm.co.kr/next-product/2020/05/08/34844022994443288d13a2d780076de0_20200508113524.jpg?width=1100"/>
                                <div className="Box2Title">우편함에 도착할 가장 사적인 이야기</div>
                                <div className="Box2Sub">애프터눈 티 클럽(Afternoon Tea Club)은 '편지 배송 서비스'입니다. 매 달 다른 주제 아래, 매 달 다른 세 명의 작가들이 쓴 편지 글과 '질문 카드', '답장 카드', '커피 드립백' 패키지가 함께 발송됩니다. 작가들은 각각의 편지를 통해 삶에 꼭 필요한 질문들을 독자에게 제시하며, 독자는 작가의 이야기를 실마리로 답장을 써내려 가는 시간을 제안합니다. 따뜻한 차 한 잔과 함께 오롯이 나를 위한 사유의 시간을 가져보세요. </div>
                                <div className="goShow">보러가기</div>
                            </div>
                            <div className="BoxRBottom">
                                <img className="image3" src="https://img.29cm.co.kr/next-product/2020/05/08/142d854efc224f7182db53d3fa0889ac_20200508113647.jpg?width=700"/>
                                <div className="textBox">
                                    <div className="Box2Title">모조산업 ~50%</div>
                                    <div className="Box2Sub">그래픽 스튜디오 모조산업의 오브제이자, 일상에서도 사용할 수 있는 실용적인 아트워크들이 최대 50% 할인 중.</div>
                                    <div className="goShow">보러가기</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shopBox3">
                        {view2.map(feed => (
                            <div className="B3Contents">
                                <img src={feed.src}/>
                                <div className="Box3Title">{feed.title}</div>
                                <div className="Box3Sub">{feed.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <ItemList history={history} category={midCategory}/>
            )}
        </>
    )
};

export default Culture;
