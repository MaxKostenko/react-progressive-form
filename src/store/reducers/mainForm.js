import {combineReducers} from 'redux';
import checkBoxes from './checkBoxes';
import toggles from './toggles';
import textInput from './textInput';
import selector from './selector';
import * as formActions from '../actions/actionFormTypes';

const formsReducersList = {
    checkBoxes,
    toggles,
    textInput,
    selector
};



const formsReducersKeysList = Object.keys(formsReducersList);
const visibleFormKey = formsReducersKeysList.shift();

function formsReducers(state, action) {
    return combineReducers(formsReducersList)(state, action);
}

const initialState = {
    forms: {},
    visible: [visibleFormKey]
};

function setFormsVisibility(state) {
    const visibleState = [...state.visible];

    if(state.forms[visibleState[visibleState.length-1]].isValid && formsReducersKeysList.length) {
        visibleState.push(formsReducersKeysList.shift())
    }

    return {
        ...state,
        visible: visibleState
    }
}

const reducer = (state = initialState, action) => {
    const newState = {
        ...state,
        forms: formsReducers(state.forms, action)
    };

    switch (action.type) {
        default:
            if (formActions[action.type])
                return setFormsVisibility(newState);

            return newState;
    }
};

export default reducer;