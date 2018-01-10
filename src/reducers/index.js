import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form'
import user from './userReducer';
import test from './testReducer';

export default combineReducers({
  currentUser: user,
  test: test,
  routing: routerReducer,
  form: reduxFormReducer
})
