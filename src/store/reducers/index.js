import { combineReducers } from 'redux';
import checkBoxesReducer from './checkBoxes';
import togglesReducer from './toggles';

export default combineReducers({
    checkBoxes: checkBoxesReducer,
    toggles: togglesReducer
});