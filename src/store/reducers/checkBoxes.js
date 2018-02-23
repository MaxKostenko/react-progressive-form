import * as actionTypes from '../actions/actionTypes';

export const initialState = {
    values: {
        a: []
    },
    isValid: false,
    wasValid: false
};

function setCheckbox(state = initialState, action) {
    if(state.values.a.includes(action.checkboxName))
        return state;

    return {
        ...state,
        isValid: true,
        wasValid: true,
        values: {
            ...state.values,
            a: [
                ...state.values.a, action.checkboxName
            ]
        }
    };
}

function unsetCheckbox(state = initialState, action) {

    const checkedValues = state.values.a.filter((value) => value !== action.checkboxName);

    return {
        ...state,
        isValid: Boolean(checkedValues.length),
        values: {
            ...state.values,
            a: checkedValues
        }
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CBF_SET_CHECKBOX:
            return setCheckbox(state, action);
        case actionTypes.CBF_UNSET_CHECKBOX:
            return unsetCheckbox(state, action);
        default:
            return state;
    }
};

export default reducer;