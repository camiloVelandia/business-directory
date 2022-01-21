import {createStore , combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { businessReducer } from '../reducers/businessReducer';
// import { errorReducer } from '../reducers/errorReducer';
// import { personReducer } from '../reducers/personReducer';
// import { uiReducer } from '../reducers/uiReducer';


const reducers = combineReducers({
    // business: businessReducer,
    // people: personReducer,
    // ui: uiReducer,
    // error: errorReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);