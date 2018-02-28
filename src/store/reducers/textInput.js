import * as actionTypes from '../actions/actionTypes';
import {requestStatuses} from '../../utils';

const initialState = {
    values: {
        text: ''
    },
    isValid: false,
    wasValid: false,
    requestState: null,
    errorMessage: ''
};

function setTextCheckingResult(state = initialState, action) {
    return {
        ...state,
        wasValid: action.isValid ? true : state.wasValid,
        isValid: action.isValid,
        values: {
            ...state.values,
            text: action.text
        }
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TXT_INPUT_SET_MESSAGE:
            return setTextCheckingResult(state, action);
        case actionTypes.TXT_INPUT_SEND_IN_PROGRESS:
            return {
                ...state,
                requestState: requestStatuses.inProgress
            };
        case actionTypes.TXT_INPUT_REQUEST_SUCCESSFUL:
            return {
                ...state,
                requestState: requestStatuses.success
            };
        case actionTypes.TXT_INPUT_REQUEST_FAILED:
            return {
                ...state,
                requestState: requestStatuses.failed,
                errorMessage: action.message
            };
        default:
            return state;
    }
};

export default reducer;