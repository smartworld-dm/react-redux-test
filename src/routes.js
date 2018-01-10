import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/Layout';
import MusicList from './components/musiclist/MusicList';
import Landing from './components/Landing';
import { getCurrentUser } from './actions/user.actions';

import requireAuth from './lib/requireAuth';
// import waitingForAuth from './lib/waitingForAuth';
import store from './store';

export default (
  <Route path="/" component={Layout} onEnter={store.dispatch(getCurrentUser())}>
    <IndexRoute component={requireAuth(Landing)} />
		<Route path="test" component={MusicList}/>
  </Route>
);
