import React, {Component} from 'react';

import MainForm from './containers/MainForm';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import formMiddleware from './middlewares/middleware';

const store = createStore(rootReducer, composeWithDevTools(
        applyMiddleware(formMiddleware)
    )
);

class App extends Component {


    render() {
        return (
            <Provider store={store}>
                <MainForm/>
            </Provider>
        );
    }
}

export default App;
