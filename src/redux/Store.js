import { legacy_createStore as createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import countries from './HomeSlice';

const reducers = combineReducers({
  countriesReducer: countries,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
