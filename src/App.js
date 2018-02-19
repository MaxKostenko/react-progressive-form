import React, {Component} from 'react';

import MainForm from './containers/MainForm';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import rootReducer from './store/reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(rootReducer, devToolsEnhancer());

class App extends Component {




    render() {
        return (
            <Provider store={store}>
                <MainForm/>
            </Provider>
/*


 state = {
 ch: true
 };

 clicked = () => {
 this.setState({ch: !this.state.ch});
 };

            <Layout>
                <Form>
                    <ToggleButton>Togglebutton Text</ToggleButton>
                    <CheckBox>Checkbox text</CheckBox>
                </Form>
                 <Form>
                    <ToggleButton>Togglebutton Text</ToggleButton>
                    <CheckBox>Checkbox text</CheckBox>
                </Form>
                 <Form>
                    <ToggleButton>Togglebutton Text</ToggleButton>
                    <CheckBox>Checkbox text</CheckBox>
                </Form>
            </Layout>

            /*
             <div className="App">
             <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
             <h1 className="App-title">Welcome to React</h1>
             </header>
             <p className="App-intro" onClick={this.clicked}>
             To get started, edit <code>src/App.js</code> and save to reload.

             </p>
             <ToggleButton checked={this.state.ch}>Togglebutton Text</ToggleButton>
             <CheckBox >Checkbox text</CheckBox>
             </div>
             */
        );
    }
}

export default App;
