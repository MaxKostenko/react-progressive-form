import * as actionTypes from './actionTypes';

export const setToggle = ( name ) => {
    return {
        type: actionTypes.TGS_SET_ACTIVE_TOGGLE,
        toggleName: name
    };
};