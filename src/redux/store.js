import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export const initialState = {
    pending: false,
    warriors: [],
    error: null
}

const middlewares = [thunk];

export default createStore(rootReducer, initialState, applyMiddleware(...middlewares));
