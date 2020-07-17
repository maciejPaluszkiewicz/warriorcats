import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer, { initialState } from './reducers';

// import initialState from './initialState';
// const initialState = {};

const middlewares = [thunk];

export default createStore(rootReducer, initialState, applyMiddleware(...middlewares));
