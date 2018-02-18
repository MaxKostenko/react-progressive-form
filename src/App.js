import React, {Component} from 'react';

import ToggleButton from './components/checkers/ToggleButton';
import CheckBox from './components/checkers/CheckBox';
import Layout from './components/Layout';
import Form from './components/Form';

class App extends Component {

    state = {
        ch: true
    };

    clicked = () => {
        this.setState({ch: !this.state.ch});
    }

    render() {
        return (

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
