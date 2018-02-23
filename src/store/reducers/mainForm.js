import {combineReducers} from 'redux';
import checkBoxes from './checkBoxes';
import toggles from './toggles';
import textInput from './textInput';
import selector from './selector';
import * as formActions from '../actions/actionFormTypes';
import * as actions from '../actions/actionMainFormTypes';
import {requestStatuses} from '../../utils';

const formsReducersMap = {
    checkBoxes,
    toggles,
    textInput,
    selector
};

const formsReducersKeysList = Object.keys(formsReducersMap);

const initialState = {
    forms: {},
    visibleStepsCount: 1,
    isVisibleSubmit: false,
    isDisabledSubmit: true,
    requestState: null,
    errorMessage: ''
};

export function makeNextFormVisible(state) {
    return {
        ...state,
        visibleStepsCount: state.visibleStepsCount+1,
    }
}

export function validateMainForm(state) {

    let isSubmitDisabled = false;
    for(let key in state.forms) {
        if(!state.forms[key].isValid) {
            isSubmitDisabled = true;
            break;
        }
    }

    return {
        ...state,
        isVisibleSubmit: true,
        isDisabledSubmit: isSubmitDisabled
    }
}

//This reducer calculate list forms that should be visible
function setFormsVisibility(state) {

    const stepCount = formsReducersKeysList.reduce((accumulator, subFormKey) => {
        if(state.forms[subFormKey].wasValid) return accumulator+1;
        return accumulator;
    }, 0);

    if(stepCount === state.visibleStepsCount) {
        if(state.visibleStepsCount < formsReducersKeysList.length) {
            return makeNextFormVisible(state);
        } else {
            return validateMainForm(state);
        }
    }

    return state;
}

const reducer = (state = initialState, action) => {

    const newState = {
        ...state,
        forms: combineReducers(formsReducersMap)(state.forms, action),
        errorMessage: '',
        requestState: null
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