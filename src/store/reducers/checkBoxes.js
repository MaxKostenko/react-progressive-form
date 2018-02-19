import * as actionTypes from '../actions/actionTypes';

const initialState = {
    values: {
        a: []
    },
    isValid: false
};

function setCheckbox(state = initialState, action) {
    return {
        isValid: true,
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