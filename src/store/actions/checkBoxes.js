import * as actionTypes from './actionTypes';

export const setCheckbox = ( name ) => {
    return {
        type: actionTypes.CBF_SET_CHECKBOX,
        checkboxName: name
    };
};

export const unsetCheckbox = ( name ) => {
    return {
        type: actionTypes.CBF_UNSET_CHECKBOX,
        checkboxName: name
    };
};
