import React, { useEffect, useState, useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './component/Navigation';
import './App.css';
import ScrollToTop from './ScrollToTop';
import Main from './routes/Main';
import Mypage from './routes/Mypage';
import Cart from './routes/Cart';
import Login from './routes/Login';
import Specialorder from './routes/Specialorder';
import Showcase from './routes/Showcase';
import Media from './routes/Media';
import Pthistory from './routes/Pthistory';
import Welove from './routes/Welove';
import Best from './routes/Best';
import Event from './routes/Event';
import Brand from './routes/Brand';
import Lookbook from './routes/Lookbook';
import Footer from './component/Footer';
import ProductDetail from './routes/ProductDetail';
import ShopCate from './routes/ShopCate';
import AppContext from './Contexts/AppContext';
import CartReducer from './reducers/CartReducer';

const initialState = {
	cart: []
};

const App = () => {
    // const [top, setTop] = useState(0);

    // const onScroll = ev => {
	// 	const { srcElement: { scrollingElement: { scrollTop } } } = ev;
	// 	setTop(scrollTop);
	// };

	// useEffect(() => {
	// 	window.addEventListener('scroll', onScroll);

	// 	return () => {
	// 		window.removeEventListener('scroll');
	// 	}
	// }, []);

    const [state, dispatch] = useReducer(CartReducer, initialState);
    
    return (
        <div className="container">
            <BrowserRouter>
                <AppContext.Provider value={{ state, dispatch }}>
                    <Navigation/>
                    <ScrollToTop/>
                    <div style={{ marginTop: '320px'}}>
                        <Switch>
                            <Route path="/" exact={true} component={Main}/>
                            <Route path="/mypage/:myMid" component={Mypage}/>
                            <Route path="/order/cart" component={Cart}/>
                            <Route path="/member/login" component={Login}/>
                            <Route path="/special-order/main" component={Specialorder}/>
                            <Route path="/showcase/main" component={Showcase}/>
                            <Route path="/media/main" component={Media}/>
                            <Route path="/pt/main" component={Pthistory}/>
                            <Route path="/welove/main" component={Welove}/>
                            <Route path="/shop/:category/:midCategory" component={ShopCate}/>
                            <Route path="/best/main" component={Best}/>
                            <Route path="/event/main" component={Event}/>
                            <Route path="/brand/main" component={Brand}/>
                            <Route path="/lookbook/main" component={Lookbook}/>
                            <Route path="/detail/:id" component={ProductDetail}/>
                        </Switch>
                    </div>
                </AppContext.Provider>
                <Footer/>
            </BrowserRouter>
        </div>
        
    )
};

export default App;