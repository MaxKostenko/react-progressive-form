import React, {Component} from 'react';

import MainForm from './containers/MainForm';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './store/reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import textInputMiddleware from './middlewares/textInput';
import mainFformMiddleware from './middlewares/mainForm';

const store = createStore(rootReducer, composeWithDevTools(
        applyMiddleware(textInputMiddleware, mainFformMiddleware)
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
