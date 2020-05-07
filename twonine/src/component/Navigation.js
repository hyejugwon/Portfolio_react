import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    const [top, setTop] = useState(0);

	const onScroll = ev => {
		const { srcElement: { scrollingElement: { scrollTop } } } = ev;
		setTop(scrollTop);
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll');
		}
	}, []);

    return (
        <div className="naviContainer">
            <div className="naviContainer2">
                <div className="coupon">
                    <div className="coupon_txt">29CM 첫 쇼핑을 지원하는 앱 <span className="point">15%</span> 할인 쿠폰</div>
                    <div className="download">쿠폰받기<span className="download_img"></span></div>
                </div>
                <header className={top > 0 ? 'fixed' : '' }>
                    <div className="header1">
                        <ul>
                            <li><NavLink activeClassName="active" exact={true} to="/"><div className="logo"></div></NavLink></li>
                        </ul>
                    </div>
                    <nav>
                        <div className="nav_bar_wrap">
                            <div className="nav_bar_wrap_txt">
                                <ul>
                                    <li><NavLink activeClassName="active" to="/list/special-order">Special-Order</NavLink></li>
                                </ul>
                                <ul>
                                    <li><NavLink activeClassName="active" to="/list/showcase">Showcase</NavLink></li>
                                </ul>
                                <ul>
                                    <li className="rec"><NavLink activeClassName="active" to="/media/recommend">29TV</NavLink></li>
                                </ul>
                                <ul>
                                    <li><NavLink activeClassName="active" to="/list/pt/history">PT</NavLink></li>
                                </ul>
                                <ul>
                                    <li><NavLink activeClassName="active" to="/welove">Welove</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="bottomMenu">
                            <div className="nav1">
                                <ul>
                                    <li><NavLink activeClassName="active" to="/women">women</NavLink></li>
                                </ul>
                                <ul>
                                    <li><NavLink activeClassName="active" to="/acc">acc</NavLink></li>
                                </ul>
                                <ul>
                                    <li><NavLink activeClassName="active" to="/men">men</NavLink></li>
                                </ul>
                                <ul>
                                    <li><NavLink activeClassName="active" to="/homelist">home</NavLink></li>
                                </ul>
                                <ul>
                                    <li><NavLink activeClassName="active" to="/beauty">beauty</NavLink></li>
                                </ul>
                                <ul>
                                    <li><NavLink activeClassName="active" to="/tech">tech+</NavLink></li>
                                </ul>
                                <ul>
                                    <li><NavLink activeClassName="active" to="/culture">culture</NavLink></li>
                                </ul>
                            </div>
                            <div className="nav2">
                                <ul>
                                    <li><NavLink activeClassName="active" to="/best">Best</NavLink></li>
                                </ul>
                                <ul>
                                    <li><NavLink activeClassName="active" to="/event">Event</NavLink></li>
                                </ul>
                                <ul>
                                    <li><NavLink activeClassName="active" to="/brand">Brand</NavLink></li>
                                </ul>
                                <ul>
                                    <li><NavLink activeClassName="active" to="/lookbook">Lookbook</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="headerMenu">
                        <ul>
                            <li><NavLink className="headerMenuIcons" activeClassName="active" to="/mypage"><div className="wrap_icon mypage_img"></div>my page</NavLink></li>
                        </ul>
                        <ul>
                            <li><NavLink className="headerMenuIcons" activeClassName="active" to="/mypage/heart/product"><div className="wrap_icon myheart_img"></div>my heart</NavLink></li>
                        </ul>
                        <ul>
                            <li><NavLink className="headerMenuIcons" activeClassName="active" to="/order/cart"><div className="wrap_icon cart_img"></div>shopping bag</NavLink></li>
                        </ul>
                        <ul>
                            <li><NavLink className="headerMenuIcons" activeClassName="active" to="/member/login"><div className="wrap_icon logout_img"></div>login</NavLink></li>
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


