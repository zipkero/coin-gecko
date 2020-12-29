import React from 'react';
import {HashRouter, Route, Redirect, Switch} from 'react-router-dom';
import CoinDetail from './pages/CoinDetail';
import CoinList from './pages/CoinList';
import Bookmark from './pages/Bookmark';

export default () => {
  return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={CoinList}/>
          <Route path="/Bookmark" exact component={Bookmark}/>
          <Route path="/:id" exact component={CoinDetail}/>
          <Redirect from="*" to="/"/>
        </Switch>
      </HashRouter>
  );
}
