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
                            <Route path="/special-order/:id" component={Specialorder}/>
                            <Route path="/showcase/:id" component={Showcase}/>
                            <Route path="/media/:id" component={Media}/>
                            <Route path="/pt/main" component={Pthistory}/>
                            <Route path="/welove/:id" component={Welove}/>
                            <Route path="/shop/:category/:midCategory" component={ShopCate}/>
                            <Route path="/best/:id" component={Best}/>
                            <Route path="/event/:id" component={Event}/>
                            <Route path="/brand/:id" component={Brand}/>
                            <Route path="/lookbook/:id" component={Lookbook}/>
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