import * as actionTypes from '../actions/actionTypes';

const initialState = {
    values: {
        b: null
    },
    isValid: false
};

function setActiveToggle(state = initialState, action) {
    return {
        ...state,
        isValid: true,
        values: {
            ...state.values,
            b: action.toggleName
        }
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TGS_SET_ACTIVE_TOGGLE:
            return setActiveToggle(state, action);
        default:
            return state;
    }
};

export default reducer;