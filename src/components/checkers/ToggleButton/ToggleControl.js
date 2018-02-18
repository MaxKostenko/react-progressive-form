import styled from 'styled-components';
import Slider from './Slider';

const ToggleButton = styled.div`
    position: relative;
    display: block;
    width: 40px;
    height: 18px;
    
    & input {
        display:none;
        
        &:checked + ${Slider} {
            background-color: #2196F3;

            &:before {
                transform: translateX(22px);
            }
        }      
    }
`;

export default ToggleButton