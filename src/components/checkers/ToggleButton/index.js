import React, {Component} from 'react';
import StyledToggleControl from './ToggleControl';
import StyledSlider from './Slider';
import StyledFormCheckerElement from '../FormCheckerElement'
import StyledFormCheckerControl from '../FormCheckerControl'
import StyledFormCheckerText from '../FormCheckerText'


function ToggleButton(props) {
    return (
        <StyledFormCheckerElement>
            <StyledFormCheckerControl>
                <StyledToggleControl>
                    <input type="checkbox"/>
                    <StyledSlider></StyledSlider>
                </StyledToggleControl>
            </StyledFormCheckerControl>
            <StyledFormCheckerText>{props.children}</StyledFormCheckerText>
        </StyledFormCheckerElement>
    )
}

export default ToggleButton;