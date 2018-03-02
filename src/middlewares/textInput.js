import {checkIt} from  '../apis/api';
import * as actionTypes from '../store/actions/actionFormTypes';

const formMiddleware = store => next => action => {

    switch (action.type) {
        case actionTypes.TXT_INPUT_SET_MESSAGE:
            checkIt(action.text).then(() => {
                action.isValid = true;
                return next(action);
            }).catch(() => {
                action.isValid = false;
                return next(action);
            });
            return next({
                type: actionTypes.TXT_INPUT_SEND_IN_PROGRESS
            });
        default:
            return next(action);
    }
};

export default formMiddleware;