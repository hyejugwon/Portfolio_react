import React from 'react';
import { NavLink } from 'react-router-dom';
import './ShopNavi.css';

const ShopNavi = ({ category }) => {
    return(
        <div>
            {category === 'women' && (
                <div className="ShopNaviContainer">
                    <div className="shopTitle">women</div>
                    <div className="shopNaviLine"></div>
                    <div className="shopList">
                        <ul>
                            <li><NavLink className="engBtn" exact={true} to="/shop/women/new">new</NavLink></li>
                            <li><NavLink className="engBtn" to="/shop/women/best">best</NavLink></li>
                            <li><NavLink className="engBtn" to="/shop/women/only">only 29cm</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/women/top">상의</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/women/ops">원피스</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/women/pants">바지</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/women/skits">치마</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/women/denim">데님</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/women/outer">아우터</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/women/sportwear">스포츠웨어</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/women/knit">니트</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/women/innerwear">이너웨어</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/women/homewear">홈웨어</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/women/swim">수영복</NavLink></li>
                        </ul>
                    </div>
                </div>
            )}
            {category === 'acc' && (
                <div className="ShopNaviContainer">
                    <div className="shopTitle">Acc</div>
                    <div className="shopNaviLine"></div>
                    <div className="shopList">
                        <ul>
                            <li><NavLink className="engBtn" exact={true} to="/shop/acc/new">new</NavLink></li>
                            <li><NavLink className="engBtn" to="/shop/acc/best">best</NavLink></li>
                            <li><NavLink className="engBtn" to="/shop/acc/only29">only 29cm</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/acc/bag">가방</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/acc/shoes">신발</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/acc/jewel">주얼리</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/acc/clock">시계</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/acc/eyewear">아이웨어</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/acc/hat">모자</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/acc/accessories">액세서리</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/acc/socks">양말</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/acc/umbrella">우산</NavLink></li>
                        </ul>
                    </div>
                </div>
            )}
            {category === 'men' && (
                <div className="ShopNaviContainer">
                    <div className="shopTitle">Men</div>
                    <div className="shopNaviLine"></div>
                    <div className="shopList">
                        <ul>
                            <li><NavLink className="engBtn" to="/shop/men/new">new</NavLink></li>
                            <li><NavLink className="engBtn" to="/shop/men/best">best</NavLink></li>
                            <li><NavLink className="engBtn" to="/shop/men/only29">only 29cm</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/men/top">상의</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/men/shirts">셔츠</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/men/pants">바지</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/men/knit">니트</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/men/shoes">신발</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/men/outer">아우터</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/men/bag">가방</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/men/acc">액세서리</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/men/jewel">주얼리</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/men/swim">수영복</NavLink></li>
                        </ul>
                    </div>
                </div>
            )}
            {category === 'home' && (
                <div className="ShopNaviContainer">
                    <div className="shopTitle">Home</div>
                    <div className="shopNaviLine"></div>
                    <div className="shopList">
                        <ul>
                            <li><NavLink className="engBtn" to="/shop/home/new">new</NavLink></li>
                            <li><NavLink className="engBtn" to="/shop/home/best">best</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/home/only29">홈데코</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/home/furniture">가구, 수납</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/home/fabric">패브릭</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/home/kitchen">주방</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/home/bathroom">욕실</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/home/homeCare">홈케어</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/home/child">유아, 아동</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/home/pet">반려동물</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/home/plant">식물, 꽃</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/home/food">음식</NavLink></li>
                        </ul>
                    </div>
                </div>
            )}
            {category === 'beauty' && (
                <div className="ShopNaviContainer">
                    <div className="shopTitle">Beauty</div>
                    <div className="shopNaviLine"></div>
                    <div className="shopList">
                        <ul>
                            <li><NavLink className="engBtn" exact={true} to="/shop/beauty/new">new</NavLink></li>
                            <li><NavLink className="engBtn" to="/shop/beauty/best">best</NavLink></li>
                            <li><NavLink className="engBtn" to="/shop/beauty/only29">only 29cm</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/beauty/presentset">5월 선물 세트</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/beauty/skin">스킨케어</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/beauty/body">바디케어</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/beauty/hear">헤어케어</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/beauty/makeup">메이크업</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/beauty/nail">네일, 디자인타투</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/beauty/perfume">향수</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/beauty/womengoods">여성용품</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/beauty/beautytech">뷰티기기, 소품</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/beauty/menbeauty">남성뷰티</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/beauty/skintype">스킨타입</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/beauty/gym">실내운동</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/beauty/innerbeauty">이너뷰티</NavLink></li>
                        </ul>
                    </div>
                </div>
            )}
            {category === 'tech' && (
                <div className="ShopNaviContainer">
                    <div className="shopTitle">TECH+</div>
                    <div className="shopNaviLine"></div>
                    <div className="shopList">
                        <ul>
                            <li><NavLink className="engBtn" to="/shop/tech/new">new</NavLink></li>
                            <li><NavLink className="engBtn" to="/shop/tech/best">best</NavLink></li>
                            <li><NavLink className="engBtn" to="/shop/tech/mayslae">5월 주말특가</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/tech/thankuParents">감사의달, 부모님께</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/tech/comingOfAge">감사의달,성년의 달</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/tech/householdAppliances">생활가전</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/tech/audioCamera">오디오, 카메라</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/tech/digitalPhone">디지털, 핸드폰</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/tech/car">자동차용품</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/tech/toy">장난감</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/tech/outdoor">아웃도어</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/tech/refurbished">리퍼브</NavLink></li>
                        </ul>
                    </div>
                </div>
            )}
            {category === 'culture' && (
                <div className="ShopNaviContainer">
                    <div className="shopTitle">culture</div>
                    <div className="shopNaviLine"></div>
                    <div className="shopList">
                        <ul>
                            <li><NavLink className="engBtn" to="/shop/culture/new">new</NavLink></li>
                            <li><NavLink className="engBtn" to="/shop/culture/best">best</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/culture/cultureCalender">컬처캘린더</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/culture/ticket">티켓, 숙박</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/culture/goodArt">굿즈, 아트</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/culture/bookMusic">음반, 책</NavLink></li>
                            <li><NavLink className="shopLi" to="/shop/culture/staitionary">스테이셔너리</NavLink></li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShopNavi;
