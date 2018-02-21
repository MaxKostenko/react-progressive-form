import React from 'react';
import StyledSubmit from './SubmitButton';
import StyledSubmitHolder from './SubmitHolder';
import {requestStatuses} from '../../utils';
import PropTypes from 'prop-types';

function Submit(props) {
    return (
        <StyledSubmitHolder>
            <StyledSubmit {...props}>
                {props.requestState === requestStatuses.inProgress ? 'Loading' : 'Submit'}
            </StyledSubmit>
        </StyledSubmitHolder>
    );
}

Submit.propTypes = {
    requestState: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node
};

Submit.defaultProps = {
    requestState: null,
    disabled: false,
    onClick: null,
    children: null,
};

export default Submit;