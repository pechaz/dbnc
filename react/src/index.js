import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {compose, createStore, applyMiddleware} from "redux";
import reduxThunk from 'redux-thunk';

import './asset/style/main.scss';
import App from './components/App';
import {reducers} from "./redux/reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
);

const view = function () {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
};

ReactDom.render(
    view(),
    document.querySelector('#root')
);
