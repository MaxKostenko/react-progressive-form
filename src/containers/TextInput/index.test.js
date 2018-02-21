import TextInput from './index';
import React from 'react';
import ReactDOM from 'react-dom';

it('TextInput renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TextInput />, div);
    ReactDOM.unmountComponentAtNode(div);
});


