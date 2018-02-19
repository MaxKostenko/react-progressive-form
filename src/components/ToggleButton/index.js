import React from 'react';
import StyledToggleControl from './ToggleControl';
import StyledSlider from './Slider';
import StyledFormCheckerElement from '../Form/FormCheckerElement';
import StyledFormCheckerControl from '../Form/FormCheckerControl';
import StyledFormCheckerText from '../Form/FormCheckerText';
import PropTypes from 'prop-types';


function ToggleButton(props) {
    return (
        <StyledFormCheckerElement>
            <StyledFormCheckerControl>
                <StyledToggleControl>
                    <input
                        type="checkbox"
                        value={props.value}
                        checked={props.checked}
                        onChange={props.onChange}
                    />
                    <StyledSlider></StyledSlider>
                </StyledToggleControl>
            </StyledFormCheckerControl>
            <StyledFormCheckerText>{props.children}</StyledFormCheckerText>
        </StyledFormCheckerElement>
    )
}

ToggleButton.propTypes = {
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.node
};

ToggleButton.defaultProps = {
    children: null
};

export default ToggleButton;