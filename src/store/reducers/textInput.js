import * as actionTypes from '../actions/actionTypes';

const initialState = {
    values: {
        text: ''
    },
    isValid: false,
    wasValid: false
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
        default:
            return state;
    }
};

export default reducer;