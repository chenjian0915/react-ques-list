import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter  } from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './App';
import store from './store/'
// import serverList from './server/serverList'

const Result = () => {
    return (
        <Provider store={store}>
            {/*<HashRouter history={createBrowserHistory()}>*/}
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    )
};

let resultElement = Result();

ReactDOM.render(resultElement, document.getElementById('root'));
