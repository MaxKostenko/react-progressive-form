import React from 'react';
import StyledSubmit from './SubmitButton';
import StyledSubmitHolder from './SubmitHolder';

function Submit(props) {
    return (
        <StyledSubmitHolder>
            <StyledSubmit {...props}>
                {props.requestState === 'IN_PROGRESS' ? 'Loading' : 'Submit'}
            </StyledSubmit>
        </StyledSubmitHolder>
    );
}

export default Submit;