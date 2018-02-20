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


function formsReducers(state, action) {
    return combineReducers(formsReducersList)(state, action);
}

function isSubmitDisabled(forms) {
    for(let key in forms) {
        if(!forms[key].isValid) return true;
    }
    return false
}

const initialState = {
    forms: {},
    visible: [formsReducersKeysList[0]],
    isVisibleSubmit: false,
    isDisabledSubmit: true
};

function setFormsVisibility(state) {


    if(state.forms[state.visible[state.visible.length-1]].isValid) {
        if(state.visible.length < formsReducersKeysList.length) {
            const visibleState = [...state.visible];
            visibleState.push(formsReducersKeysList[visibleState.length]);
            return {
                ...state,
                visible: visibleState
            }
        } else {
            return {
                ...state,
                isVisibleSubmit: true,
                isDisabledSubmit: isSubmitDisabled(state.forms)
            }
        }
    }
    return state;

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