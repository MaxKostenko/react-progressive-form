import React from 'react';
import ReactDOM from 'react-dom';
import {CheckBoxes} from './index';

const props = {
  checkedValues: ['B34']
};

it('CheckBoxes renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CheckBoxes {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
