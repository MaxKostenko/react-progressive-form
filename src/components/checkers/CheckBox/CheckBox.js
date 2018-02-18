import styled from 'styled-components';
import CheckMark from './CheckMark';

const CheckBox = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    & input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    
        &:checked ~ ${CheckMark} {
            background-color: #2196F3;

            &:after {
                display: block;
            }
        }
    }
`;

export default CheckBox;