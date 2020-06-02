import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    const [top, setTop] = useState(0);

	const onScroll = ev => {
		const { srcElement: { scrollingElement: { scrollTop } } } = ev;
		setTop(scrollTop);
	};

	// useEffect(() => {
	// 	window.addEventListener('scroll', onScroll);

	// 	return () => {
	// 		window.removeEventListener('scroll');
	// 	}
	// }, []);

    return (
        <div className="naviContainer">
            <div className="naviContainer2">
                <div className="coupon">
                    <div className="coupon_txt">29CM 첫 쇼핑을 지원하는 앱 <span className="point">15%</span> 할인 쿠폰</div>
                    <div className="download">쿠폰받기<span className="download_img"></span></div>
                </div>
                <header className={top > 40 ? 'fixed' : '' }>
                    <div className="header1">
                        <ul>
                            <li><NavLink activeClassName="active" exact={true} to="/"><div className="logo"></div></NavLink></li>
                        </ul>
                    </div>
                    <nav>
                        <div className="nav_bar_wrap">
                            <div className="nav_bar_wrap_txt">
                                <ul>
                                    <li><NavLink activeClassName="active" to="/special-order/main">Special-Order</NavLink></li>
                                    <li><NavLink activeClassName="active" to="/showcase/main">Showcase</NavLink></li>
                                    <li className="rec"><NavLink activeClassName="active" to="/media/main">29TV</NavLink></li>
                                    <li><NavLink activeClassName="active" to="/pt/main">PT</NavLink></li>
                                    <li><NavLink activeClassName="active" to="/welove/main">Welove</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="bottomMenu">
                            <div className="nav1">
                                <ul>
                                    <li><NavLink activeClassName="active" to="/shop/women/main">women</NavLink></li>
                                    <li><NavLink activeClassName="active" to="/shop/acc/main">acc</NavLink></li>
                                    <li><NavLink activeClassName="active" to="/shop/men/main">men</NavLink></li>
                                    <li><NavLink activeClassName="active" to="/shop/home/main">home</NavLink></li>
                                    <li><NavLink activeClassName="active" to="/shop/beauty/main">beauty</NavLink></li>
                                    <li><NavLink activeClassName="active" to="/shop/tech/main">tech+</NavLink></li>
                                    <li><NavLink activeClassName="active" to="/shop/culture/main">culture</NavLink></li>
                                </ul>
                            </div>
                            <div className="nav2">
                                <ul>
                                    <li><NavLink activeClassName="active" to="/best/main">Best</NavLink></li>
                                    <li><NavLink activeClassName="active" to="/event/main">Event</NavLink></li>
                                    <li><NavLink activeClassName="active" to="/brand/main">Brand</NavLink></li>
                                    <li><NavLink activeClassName="active" to="/lookbook/main">Lookbook</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="headerMenu">
                        <ul>
                            <li><NavLink className="headerMenuIcons" activeClassName="maintain" to="/mypage/main"><div className="wrap_icon mypage_img"></div>my page</NavLink></li>
                            <li><NavLink className="headerMenuIcons" activeClassName="maintain" to="/mypage/myheart"><div className="wrap_icon myheart_img"></div>my heart</NavLink></li>
                            <li><NavLink className="headerMenuIcons" activeClassName="maintain" to="/order/cart"><div className="wrap_icon cart_img"></div>shopping bag</NavLink></li>
                            <li><NavLink className="headerMenuIcons" activeClassName="maintain" to="/member/login"><div className="wrap_icon logout_img"></div>login</NavLink></li>
                        </ul>
                    </div>
                    <ul>
                        <li className="search"></li>
                    </ul>
                </header>
            </div>
        </div>
    )
};

export default Navigation;


