import React from 'react';
import StyledSubmit from './SubmitButton';
import StyledSubmitHolder from './SubmitHolder';

function Submit(props) {
    return (
        <StyledSubmitHolder>
            <StyledSubmit disabled={props.disabled}>
                Submit
            </StyledSubmit>
        </StyledSubmitHolder>
    );
}

export default Submit;