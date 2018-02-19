import React from 'react';
import StyledCheckBox from './CheckBox';
import StyledCheckMark from './CheckMark';
import StyledFormCheckerElement from '../FormCheckerElement';
import StyledFormCheckerControl from '../FormCheckerControl';
import StyledFormCheckerText from '../FormCheckerText';
import PropTypes from 'prop-types';


function CheckBox(props) {
    return (
        <StyledFormCheckerElement>
            <StyledFormCheckerControl>
                <StyledCheckBox>
                    <input
                        type="checkbox"
                        value={props.value}
                        checked={props.checked}
                        onChange={props.onChange}
                    />
                    <StyledCheckMark/>
                </StyledCheckBox>
            </StyledFormCheckerControl>
            <StyledFormCheckerText>{props.children}</StyledFormCheckerText>
        </StyledFormCheckerElement>
    );
}

CheckBox.propTypes = {
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.node
};

CheckBox.defaultProps = {
    children: null
};

export default CheckBox;