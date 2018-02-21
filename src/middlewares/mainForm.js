import {submitIt} from  '../apis/api';
import * as actionTypes from '../store/actions/actionMainFormTypes';

export const getFieldsValue = (state) => {
    let values = {};
    for(let key in state.forms) {
        values = {
            ...values,
            ...state.forms[key].values
        };
    }
    return values;
};

const formMiddleware = store => next => action => {

    switch (action.type) {
        case actionTypes.SEND_ALL_FORM:
            submitIt(getFieldsValue(store.getState())).then(() => {
                next({
                    type: actionTypes.REQUEST_SUCCESSFUL
                });
            }).catch((e) => {
                next({
                    type: actionTypes.REQUEST_FAILED,
                    message: e.message
                });
            });
            next(action);
            break;
        default:
            next(action);
    }
};

export default formMiddleware;