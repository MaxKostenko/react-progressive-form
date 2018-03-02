import * as actionTypes from '../actions/actionTypes';
import {requestStatuses} from '../../utils';

const initialState = {
    values: {
        text: ''
    },
    isValid: false,
    wasValid: false,
    requestState: null,
    errorMessage: '',
    isDisabledButtonCheck: false
};

function setTextCheckingResult(state = initialState, action) {
    return {
        ...state,
        wasValid: action.isValid ? true : state.wasValid,
        isValid: action.isValid,
        values: {
            ...state.values,
            text: action.text
        },
        requestState: action.isValid ? requestStatuses.success : requestStatuses.failed,
        isDisabledButtonCheck: false
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TXT_INPUT_SET_MESSAGE:
            return setTextCheckingResult(state, action);

        case actionTypes.TXT_INPUT_SEND_IN_PROGRESS:
            return {
                ...state,
                requestState: requestStatuses.inProgress,
                isValid: false,
                isDisabledButtonCheck: true
            };
        case actionTypes.SEND_ALL_FORM:
            return {
                ...state,
                isDisabledButtonCheck: true
            };
        case actionTypes.REQUEST_FAILED:
        case actionTypes.REQUEST_SUCCESSFUL:
            return {
                ...state,
                isDisabledButtonCheck: false
            };

        default:
            return state;
    }
};

export default reducer;