import React, { useEffect, useState } from 'react';
import './ShopCate.css';
import ItemList from './ItemList';
import MAIN from '../component/Shop/jsons/main.json';
import FEED from '../component/Shop/jsons/feed.json';
import Slider from "react-slick";
import ShopNavi from '../component/ShopNavi';
import WrapNew from '../component/Shop/mainWrap/WrapNew';
import WrapWeekly from '../component/Shop/mainWrap/WrapWeekly';
import WrapPick from '../component/Shop/mainWrap/WrapPick';
import LEFTBOX from '../component/Shop/jsons/leftBox.json';
import RIGHTBOX from '../component/Shop/jsons/rightBox.json';

const ShopCate = ({ history, match : { params: { category, midCategory }} }) => {
    const [ view1, setView1 ] = useState([]); 
    const [ view3, setView3 ] = useState([]); 
    const [ view6, setView6 ] = useState([]); 
    const [ view7, setView7 ] = useState([]); 
    const [ wrapMenu, setWrapMenu ] = useState(1);
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    useEffect(() => {
        setView1(MAIN);
        setView3(FEED);
        setView6(LEFTBOX);
        setView7(RIGHTBOX);
    }, []);

    const transCategory = _cate => {
        switch(_cate) {
            case 'women': return 1;
            case 'acc': return 2;
            case 'men': return 3;
            case 'home': return 4;
            case 'beauty': return 5;
            case 'tech': return 6;
            case 'culture': return 7;
        }
    }

    useEffect(() => {
        const value = transCategory(category);
        const data1 = MAIN.filter(item => item.type === value);
        setView1(data1);
        const data3 = FEED.filter(item => item.type === value);
        setView3(data3);
        
    }, [category])

    return(
        <>
            {midCategory === 'main' ? (
                <div className="shopContainer">
                    <div className="slider">
                        <Slider {...settings}>
                            {view1.map(main => (
                                <div className="shopSlide">
                                    <div className="slideImg" style={{backgroundImage: `url(${main.src})`}}></div>
                                    <div className="description">
                                        <div className="imageTitle">{main.title}</div>
                                        <div className="imageSub">{main.sub}</div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        <div className="NaviArea">
                            <ShopNavi history={history} category={category} midCategory={midCategory}/>
                        </div>
                    </div>
                    <div className="SCM2">
                        {category === 'women' && (
                            <div className="shopBox2">
                                <div className="shopBoxL">
                                    <img className="image1" src="https://img.29cm.co.kr/next-product/2020/04/29/58f8422fea25498398b403a2736bddaa_20200429160513.jpg?"/>
                                    <div className="Box2Title">봄 신상품 오픈 소식</div>
                                    <div className="Box2Sub">기대되는 우먼 패션 브랜드의 봄 신상품 업데이트 소식을 알려드려요.</div>
                                    <div className="goShow">보러가기</div>
                                </div>
                                <div className="shopBoxR">
                                    <div className="BoxRTop">
                                        <img className="image2" src="https://img.29cm.co.kr/next-product/2020/04/29/dd538a6e065d4eb3b6e488970c2228ac_20200429160454.jpg?"/>
                                        <div className="Box2Title">우먼 에센셜 20SS 컬렉션</div>
                                        <div className="Box2Sub">화사한 봄옷으로 기분 전환하고 싶은 마음, 29CM 우먼 에센셜 컬렉션이 빈틈없이 채워드릴게요. 봄부터 여름까지 매일의 스타일링 고민을 덜어줄 가장 기본의 아이템으로 모았습니다.</div>
                                        <div className="goShow">보러가기</div>
                                    </div>
                                    <div className="BoxRBottom">
                                        <img className="image3" src="https://img.29cm.co.kr/next-product/2020/04/29/5a9305245a9b440ba61fd74d56b7a922_20200429160618.jpg?"/>
                                        <div className="textBox">
                                            <div className="Box2Title">특별해지고 싶은 날을 위한 세레모니 스타일 가이드</div>
                                            <div className="Box2Sub">누구에게나 간직하고 싶은 기념일이 하나쯤 있죠. 매일 입던 평범한 옷 대신, 평소에는 망설였던 조금은 화려한 아이템도 이런 날 만큼은 과감히 시도할 용기가 생깁니다. 이 모든 순간들이 오랫동안 소중하게 추억될 수 있도록, 29CM가 특별해지고 싶은 날을 위한 세레모니 스타일 가이드를 준비했습니다.</div>
                                            <div className="goShow">보러가기</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {category === 'acc' && (
                            <div className="shopBox2">
                                <div className="shopBoxL">
                                    <img className="image1" src="https://img.29cm.co.kr/next-product/2020/05/06/566668f0f6034a4cb86865c1b1ebb184_20200506181005.jpg?width=700"/>
                                    <div className="Box2Title">청량한 실버 주얼리</div>
                                    <div className="Box2Sub">시원함을 더해줄 실버 주얼리로 다가올 여름, 스타일링에 섬세한 포인트를 줘보는 건 어떨까요? 부답스럽지 않은 은은함이 피부 톤을 환하게 밝혀줄 거예요. </div>
                                    <div className="goShow">보러가기</div>
                                </div>
                                <div className="shopBoxR">
                                    <div className="BoxRTop">
                                        <img className="image2" src="https://img.29cm.co.kr/next-product/2020/05/06/8f1580f65e9340fd8d153a71e8c54db1_20200506180905.jpg?width=1100"/>
                                        <div className="Box2Title">하나만으로는 부족한 에코백</div>
                                        <div className="Box2Sub">여기저기 툭 걸쳐도 멋스럽고 가벼우며 감각적인 디자인까지 모두가 에코백의 일입니다. </div>
                                        <div className="goShow">보러가기</div>
                                    </div>
                                    <div className="BoxRBottom">
                                        <img className="image3" src="https://img.29cm.co.kr/next-product/2020/05/06/2b7d4bc1e75e47bd9209352983d901ac_20200506181039.jpg?width=700"/>
                                        <div className="textBox">
                                            <div className="Box2Title">미리 준비하는 여름 샌들 최대 70%</div>
                                            <div className="Box2Sub">긴 여름 동안 시원하고 스타일리시하게 신을 수 있는 샌들. 여름 내내 신기 좋은 샌들을 미리 준비해보세요!</div>
                                            <div className="goShow">보러가기</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {category === 'men' && (
                            <div className="shopBox2">
                                <div className="shopBoxL">
                                    <img className="image1" src="https://img.29cm.co.kr/next-product/2020/05/08/f6fd4386eaac408e802830c13e45c311_20200508181534.jpg?width=700"/>
                                    <div className="Box2Title">가볍고 편하게 들기 좋은 가죽 가방</div>
                                    <div className="Box2Sub">내 피부 결처럼 가볍고 편하게 들기 좋은 가방 브랜드, 결의 20SS를 소개합니다. 오직 29CM에서만 만나볼 수 있는 브랜드인 결의 20SS를 댓글 이벤트, 후기 이벤트와 함께 만나보세요. </div>
                                    <div className="goShow">보러가기</div>
                                </div>
                                <div className="shopBoxR">
                                    <div className="BoxRTop">
                                        <img className="image2" src="https://img.29cm.co.kr/next-product/2020/05/08/ddb7aaa508c342cca99119a7bf918636_20200508181508.jpg?width=1100"/>
                                        <div className="Box2Title">여름이 어울리는 브랜드</div>
                                        <div className="Box2Sub">반원이 가장 어울릴 계절은 여름입니다. 여름에 어울리는 리넨 소재를 자유롭게 사용하는 브랜드답게 이번 시즌 신상품들도 리넨 상품들이 즐비합니다. 무더운 날씨에는 시원한 리넨 소재로 스타일링을 해보는 것은 어떨까요? </div>
                                        <div className="goShow">보러가기</div>
                                    </div>
                                    <div className="BoxRBottom">
                                        <img className="image3" src="https://img.29cm.co.kr/next-product/2020/05/08/2fcd3f26cce74333b18f6f152b821dff_20200508181653.jpg?width=700"/>
                                        <div className="textBox">
                                            <div className="Box2Title">여름을 보다 재밌게</div>
                                            <div className="Box2Sub">호랑이를 기반으로 다양한 아트웍이 담긴 티셔츠 컬렉션을 발매한 백야의 20SUMMER 2차 신상품이 발매되었습니다. 개성 있는 티셔츠로 올여름 더욱더 재밌게 스타일링 해보는 건 어떨까요? 단독 ~20%</div>
                                            <div className="goShow">보러가기</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {category === 'home' && (
                            <div className="shopBox2">
                                <div className="shopBoxL">
                                    <img className="image1" src="https://img.29cm.co.kr/next-product/2020/05/08/16b58ebeda6740138c73cec4d4101fcc_20200508100459.jpg?width=700"/>
                                    <div className="Box2Title">대담하고 독창적인 컬러와 패턴의 축제</div>
                                    <div className="Box2Sub">북유럽 감성을 대표하는 라이프 스타일 브랜드 마리메꼬가 일부상품 10% 세일을 진행합니다. 마리메꼬 특유의 유니크한 패턴을 가진 패브릭부터 식기와 패션까지 다양한 상품을 만나보세요. </div>
                                    <div className="goShow">보러가기</div>
                                </div>
                                <div className="shopBoxR">
                                    <div className="BoxRTop">
                                        <img className="image2" src="https://img.29cm.co.kr/next-product/2020/05/08/67b68303cdd343a6a88e304f8adcf519_20200508100437.jpg?width=1100"/>
                                        <div className="Box2Title">북유럽 대표 오랄 케어 브랜드</div>
                                        <div className="Box2Sub">조르단의 가장 큰 장점은 바로 품질과 디자인입니다. 단순위생 제품이 아닌, 고객과 함께 하는 라이프스타일을 제시합니다. 편안한 그립감과 다양한 컬러의 핸들의 칫솔로 기분 좋은 양치를 해보세요. </div>
                                        <div className="goShow">보러가기</div>
                                    </div>
                                    <div className="BoxRBottom">
                                        <img className="image3" src="https://img.29cm.co.kr/next-product/2020/05/08/710bac57c8694882beeb2057410e2895_20200508100524.jpg?width=700"/>
                                        <div className="textBox">
                                            <div className="Box2Title">꾸밈없는 맛과 멋</div>
                                            <div className="Box2Sub">구름처럼 가볍고 깨끗한 소미노의 미유분을 소개합니다. 약콩과 백태의 식물성 영양을 더한 새콤하고 산뜻한 간편식을 선택해보세요.</div>
                                            <div className="goShow">보러가기</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {category === 'beauty' && (
                            <div className="shopBox2">
                                <div className="shopBoxL">
                                    <img className="image1" src="https://img.29cm.co.kr/next-product/2020/05/08/46460cd23c61407a8cddadad07617426_20200508182111.jpg?width=700"/>
                                    <div className="Box2Title">샬랑드파리의 트래블키트 500개 한정수량</div>
                                    <div className="Box2Sub">오로라 온더고는 샬랑드파리의 베스트 셀러인 오로라 시리즈의 네가지 제품을 콤팩트하게 만나볼 수 있는 트래블 키트입니다. 배송비 3,000원으로 체험해보세요. </div>
                                    <div className="goShow">보러가기</div>
                                </div>
                                <div className="shopBoxR">
                                    <div className="BoxRTop">
                                        <img className="image2" src="https://img.29cm.co.kr/next-product/2020/05/08/2f11cc6a9594467d9f1f852ae02ee78c_20200508182047.jpg?width=1100"/>
                                        <div className="Box2Title">29CM 단독 론칭, 클레어스 미드데이 블루 선크림</div>
                                        <div className="Box2Sub">클레어스의 베스트 셀러 선크림을 좋아하는 사람이라면 주목하세요. 무기자차 버전으로 새롭게 선보이는 미드데이 블루 UV 쉴드는 로션 바르듯 가벼운 질감과 산뜻한 마무리감을 선사합니다.  </div>
                                        <div className="goShow">보러가기</div>
                                    </div>
                                    <div className="BoxRBottom">
                                        <img className="image3" src="https://img.29cm.co.kr/next-product/2020/05/08/148ce9021ab54da0b50c2b0a0e5f43ed_20200508182154.jpg?width=700"/>
                                        <div className="textBox">
                                            <div className="Box2Title">이철헤어커커에서 만든 프라브아</div>
                                            <div className="Box2Sub">전국 200개 매장의 대한민국 대표 헤어살롱 브랜드, 이철헤어커커의 30년 노하우가 담긴 프리미엄 헤어 솔루션 프라브아를 최대 40% 할인과 무료배송 혜택으로 만나보세요.</div>
                                            <div className="goShow">보러가기</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {category === 'tech' && (
                            <div className="shopBox2">
                                <div className="shopBoxL">
                                    <img className="image1" src="https://img.29cm.co.kr/next-product/2020/05/08/29bdf0fe322e4cdcbd50641b5118acb6_20200508113429.jpg?width=700"/>
                                    <div className="Box2Title">나랑 별보러 가지 않을래?</div>
                                    <div className="Box2Sub">밤하늘 보기 좋은 날씨예요. 너무 높은 빌딩 숲 사이에서 너무 밝은 네온사인에 지쳤다면 맑게 갠 밤하늘을 한 번 올려다보세요. </div>
                                    <div className="goShow">보러가기</div>
                                </div>
                                <div className="shopBoxR">
                                    <div className="BoxRTop">
                                        <img className="image2" src="https://img.29cm.co.kr/next-product/2020/05/08/8bf18b9e6b254c5793c5032d5d1685da_20200508113409.jpg?width=1100"/>
                                        <div className="Box2Title">더위를 피하고 싶어서</div>
                                        <div className="Box2Sub">어떻게 지나갔는지도 모르게 정신을 차리고 보니 더위가 훌쩍 찾아왔습니다. 똑똑하게 더위에 맞서 보자고요! </div>
                                        <div className="goShow">보러가기</div>
                                    </div>
                                    <div className="BoxRBottom">
                                        <img className="image3" src="https://img.29cm.co.kr/next-product/2020/04/29/7358e9405a9d438393d979ebbb0b46fd_20200429114727.jpg?width=700"/>
                                        <div className="textBox">
                                            <div className="Box2Title">스무 살을 축하해 #JMW</div>
                                            <div className="Box2Sub">사회로 이제 막 내딛는 첫걸음이 무겁고 어렵지 않도록 당신의 스무 살을 응원합니다.</div>
                                            <div className="goShow">보러가기</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {category === 'culture' && (
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
                        )}
                    </div>
                    <div className="SCM3">
                        <div className="shopBox3">
                            {view3.map(feed => (
                                <div className="B3Contents">
                                    <img src={feed.src}/>
                                    <div className="Box3Title">{feed.title}</div>
                                    <div className="Box3Sub">{feed.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="shopBox4">
                        <div className="wrapMenu">
                            <li className={wrapMenu === 1 ? 'wrapMenuActive' : ''} onClick={() => setWrapMenu(1)}>New arrivals</li>
                            <li className={wrapMenu === 2 ? 'wrapMenuActive' : ''} onClick={() => setWrapMenu(2)}>Weekly best</li>
                            <li className={wrapMenu === 3 ? 'wrapMenuActive' : ''} onClick={() => setWrapMenu(3)}>29 pick</li>
                        </div>
                        <div className="wrapItems">
                            { wrapMenu === 1 && (
                                <div className="wrapItemsBox">
                                    <WrapNew/>
                                </div>
                            )}
                            { wrapMenu === 2 && (
                                <div className="wrapItemsBox">
                                    <WrapWeekly/>
                                </div>
                            )}
                            { wrapMenu === 3 && (
                                <div className="wrapItemsBox">
                                    <WrapPick/>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="shopBox5">
                        <div className="boxTitle">Shop by Brands</div>
                        <div className="brandList">
                            <li>P/A by PAUL&ALICE</li>
                            <li>DEBB</li>
                            <li>38comeoncommon</li>
                            <li>MONOPISPA</li>
                            <li>Jo's lounge</li>
                            <li>Vert Berry</li>
                            <li>TILLIDIE</li>
                            <li>STAN ARD WOMEN</li>
                            <li>LANG&LU</li>
                            <li>ONNE</li>
                            <li>FAYRI</li>
                            <li>CITYBREEZE</li>
                            <li>BALCONY</li>
                            <li>EIRIN</li>
                            <li>QUAFE</li>
                        </div>
                    </div>
                    <div className="shopBox6">
                        <div className="section">
                            <img className="left_main_img" src="http:////img.29cm.co.kr/next-edition/2020/05/04/c721d8e4de264dfb97e64409f74ee59f_20200504103542.jpg?width=600"></img>
                            {view6.map(leftBox => (
                                <div className="feedContainer">
                                    <span className={ (leftBox.line) ? 'inlineBlocked' : '' }></span>
                                    <div className="feedBox">
                                        <img className="feedImage" src={leftBox.src}/>
                                        <span className={ (leftBox.sideBox) ? 'sideArea' : '' }>
                                            <div className="sideBox">
                                                <img className="sideImage" src={leftBox.mdImage}/>
                                                <div className="sideTextBox">
                                                    <div className="sideText">{leftBox.mdTitle}</div>
                                                    <div className="sideText">{leftBox.mdSub}</div>
                                                </div>
                                            </div>
                                        </span>
                                        <div className="title">{leftBox.title}</div>
                                        <div className="subTitle">{leftBox.sub}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="section">
                            <img className="right_main_img" src="http:////img.29cm.co.kr/next-edition/2020/05/04/d9b60ff1b3174fb3808b70a328c007a0_20200504103434.jpg?width=600"></img>
                            {view7.map(rightBox => (
                                <div className="feedContainer">
                                    <span className={ (rightBox.line) ? 'inlineBlocked' : '' }></span>
                                    <div className="feedBox">
                                        <img className="feedImage" src={rightBox.src}/>
                                        <span className={ (rightBox.sideBox) ? 'sideArea' : '' }>
                                            <div className="sideBox">
                                                <img className="sideImage" src={rightBox.mdImage}/>
                                                <div className="sideTextBox">
                                                    <div className="sideText">{rightBox.mdTitle}</div>
                                                    <div className="sideText">{rightBox.mdSub}</div>
                                                </div>
                                            </div>
                                        </span>
                                        <div className="title">{rightBox.title}</div>
                                        <div className="subTitle">{rightBox.sub}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="section">
                            <img className="left_main_img" src="http:////img.29cm.co.kr/next-edition/2020/05/04/c721d8e4de264dfb97e64409f74ee59f_20200504103542.jpg?width=600"></img>
                            {view6.map(leftBox => (
                                <div className="feedContainer">
                                    <span className={ (leftBox.line) ? 'inlineBlocked' : '' }></span>
                                    <div className="feedBox">
                                        <img className="feedImage" src={leftBox.src}/>
                                        <span className={ (leftBox.sideBox) ? 'sideArea' : '' }>
                                            <div className="sideBox">
                                                <img className="sideImage" src={leftBox.mdImage}/>
                                                <div className="sideTextBox">
                                                    <div className="sideText">{leftBox.mdTitle}</div>
                                                    <div className="sideText">{leftBox.mdSub}</div>
                                                </div>
                                            </div>
                                        </span>
                                        <div className="title">{leftBox.title}</div>
                                        <div className="subTitle">{leftBox.sub}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <ItemList history={history} category={category} midCategory={midCategory}/>
            )}
        </>
    )
};

export default ShopCate;
