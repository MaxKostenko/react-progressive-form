import * as actionTypes from './actionMainFormTypes';

export const sendForm = () => {
    return {
        type: actionTypes.SEND_ALL_FORM
    };
};

export const setRequestSuccessful = () => {
    return {
        type: actionTypes.REQUEST_SUCCESSFUL
    };
};

export const setRequestFailed = () => {
    return {
        type: actionTypes.REQUEST_FAILED
    };
};