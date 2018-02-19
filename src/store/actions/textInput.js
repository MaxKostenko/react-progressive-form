import * as actionTypes from './actionTypes';

export const checkText = ( text ) => {
    return {
        type: actionTypes.TXT_INPUT_SET_MESSAGE,
        text: text,
        isValid: false
    };
};
