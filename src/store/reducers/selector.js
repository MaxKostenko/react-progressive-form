import * as actionTypes from '../actions/actionTypes';

const initialState = {
    values: {
        c: ''
    },
    isValid: false,
    wasValid: false
};

function setActiveSelect(state = initialState, action) {
    return {
        ...state,
        isValid: true,
        wasValid: true,
        values: {
            ...state.values,
            c: action.selectValue
        }
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SELECT_SET_VALUE:
            return setActiveSelect(state, action);
        default:
            return state;
    }
};

export default reducer;