import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider as StateProvider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import persistLocal from "redux-localstorage";
import reducer from "./reducers"
import timerMiddleware from 'redux-timer';

const middleWare = compose(
    applyMiddleware(thunk),
    persistLocal(["category", "image", "imageReady", "topSitesToDisplay"], { key: "niceStartPage" }),
    applyMiddleware(timerMiddleware)
)
const store = createStore(reducer, { currentTime: new Date() }, middleWare)

ReactDOM.render(<StateProvider store={store}><App /></StateProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
