import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './component/Navigation';
import './App.css';
import Main from './routes/Main';
import Mypage from './routes/Mypage';
import MyHeart from './routes/Myheart';
import Cart from './routes/Cart';
import Login from './routes/Login';
import Specialorder from './routes/Specialorder';
import Showcase from './routes/Showcase';
import Media from './routes/Media';
import Pthistory from './routes/Pthistory';
import Welove from './routes/Welove';
import Women from './routes/Women';
import Acc from './routes/Acc';
import Men from './routes/Men';
import Home from './routes/Home';
import Beauty from './routes/Beauty';
import Tech from './routes/Tech';
import Culture from './routes/Culture';
import Best from './routes/Best';
import Event from './routes/Event';
import Brand from './routes/Brand';
import Lookbook from './routes/Lookbook';
import Footer from './component/Footer';


const App = () => {

    return (
        <div className="container">
            <BrowserRouter>
                <Navigation/>
                <Switch>
                    <Route path="/" exact={true} component={Main}/>
                    <Route path="/mypage" exact={true} component={Mypage}/>
                    <Route path="/mypage/heart/product" exact={true} component={MyHeart}/>
                    <Route path="/order/cart" exact={true} component={Cart}/>
                    <Route path="/member/login" exact={true} component={Login}/>
                    <Route path="/list/special-order" exact={true} component={Specialorder}/>
                    <Route path="/list/showcase" exact={true} component={Showcase}/>
                    <Route path="/media/recommend" exact={true} component={Media}/>
                    <Route path="/list/pt/history" exact={true} component={Pthistory}/>
                    <Route path="/welove" exact={true} component={Welove}/>
                    <Route path="/women" exact={true} component={Women}/>
                    <Route path="/acc" exact={true} component={Acc}/>
                    <Route path="/men" exact={true} component={Men}/>
                    <Route path="/home" exact={true} component={Home}/>
                    <Route path="/beauty" exact={true} component={Beauty}/>
                    <Route path="/tech" exact={true} component={Tech}/>
                    <Route path="/culture" exact={true} component={Culture}/>
                    <Route path="/best" exact={true} component={Best}/>
                    <Route path="/event" exact={true} component={Event}/>
                    <Route path="/brand" exact={true} component={Brand}/>
                    <Route path="/lookbook" exact={true} component={Lookbook}/>
                </Switch>
            </BrowserRouter>
            <Footer/>
        </div>
        
    )
};

export default App;