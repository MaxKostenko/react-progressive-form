import * as actionTypes from './actionTypes';

export const setSelectedValue = ( value ) => {
    return {
        type: actionTypes.SELECT_SET_VALUE,
        selectValue: value
    };
};