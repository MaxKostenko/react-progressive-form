import { combineReducers } from 'redux';
import checkBoxes from './checkBoxes';
import toggles from './toggles';
import textInput from './textInput';
import selector from './selector';

export default combineReducers({
    checkBoxes,
    toggles,
    textInput,
    selector
});