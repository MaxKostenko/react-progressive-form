import {checkIt} from  '../apis/api';
import * as actionTypes from '../store/actions/actionTypes';

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
            break;
        default:
            return next(action);
    }
};

export default formMiddleware;