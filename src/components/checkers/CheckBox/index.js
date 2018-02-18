import React, {Component} from 'react';
import StyledCheckBox from './CheckBox';
import StyledCheckMark from './CheckMark';
import StyledFormCheckerElement from '../FormCheckerElement'
import StyledFormCheckerControl from '../FormCheckerControl'
import StyledFormCheckerText from '../FormCheckerText'


function CheckBox(props) {
        return (
            <StyledFormCheckerElement>
                <StyledFormCheckerControl>
                    <StyledCheckBox>
                        <input type="checkbox"/>
                        <StyledCheckMark/>
                    </StyledCheckBox>
                </StyledFormCheckerControl>
                <StyledFormCheckerText>{props.children}</StyledFormCheckerText>
            </StyledFormCheckerElement>
        )
    }

export default CheckBox