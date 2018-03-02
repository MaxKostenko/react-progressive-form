import * as reducer from './checkBoxes';
import * as actionTypes from '../actions/actionFormTypes';

const firstCheckboxWasCheckedAction = {
    type: actionTypes.CBF_SET_CHECKBOX,
    checkboxName: 'A1'
};

const firstExpectedState = {
    values: {
        a: ['A1']
    },
    isValid: true,
    wasValid: true
};

const firstCheckboxWasUncheckedAction = {
    type: actionTypes.CBF_UNSET_CHECKBOX,
    checkboxName: 'A1'
};

const secondExpectedState = {
    values: {
        a: []
    },
    isValid: false,
    wasValid: true
};

const secondCheckboxWasCheckedAfterFirstAction = {
    type: actionTypes.CBF_SET_CHECKBOX,
    checkboxName: 'A2'
};

const thirdExpectedState = {
    values: {
        a: ['A1', 'A2']
    },
    isValid: true,
    wasValid: true
};




it('Reducer checkBoxes', () => {
    expect(reducer.default(reducer.initialState, firstCheckboxWasCheckedAction)).toEqual(firstExpectedState);
    expect(reducer.default(firstExpectedState, firstCheckboxWasCheckedAction)).toEqual(firstExpectedState);
    expect(reducer.default(firstExpectedState, firstCheckboxWasUncheckedAction)).toEqual(secondExpectedState);
    expect(reducer.default(firstExpectedState, secondCheckboxWasCheckedAfterFirstAction)).toEqual(thirdExpectedState);
});