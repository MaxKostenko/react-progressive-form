import {combineReducers} from 'redux';
import checkBoxes from './checkBoxes';
import toggles from './toggles';
import textInput from './textInput';
import selector from './selector';
import * as formActions from '../actions/actionFormTypes';
import * as actions from '../actions/actionMainFormTypes';
import {requestStatuses} from '../../utils';

const formsReducersList = {
    checkBoxes,
    toggles,
    textInput,
    selector
};



const formsReducersKeysList = Object.keys(formsReducersList);

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
    isDisabledSubmit: true,
    requestState: null,
    errorMessage: ''
};

//This reducer calculate list forms that should be visible
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
        forms: combineReducers(formsReducersList)(state.forms, action),
        errorMessage: ''
    };

    switch (action.type) {
        case actions.SEND_ALL_FORM:
            newState.requestState = requestStatuses.inProgress;
            break;
        case actions.REQUEST_SUCCESSFUL:
            newState.requestState = requestStatuses.success;
            break;
        case actions.REQUEST_FAILED:
            newState.requestState = requestStatuses.failed;
            newState.errorMessage = action.message;
            break;
        default:
            if (formActions[action.type]) {
                return setFormsVisibility(newState);
            }

    }
    return newState;
};

export default reducer;