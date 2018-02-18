import styled from 'styled-components'

const CheckMark = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    height: 16px;
    width: 16px;
    background-color: #eee;
    
    &:after {
        content: "";
        position: absolute;
        display: none;
        left: 5px;
        top: 2px;
        width: 4px;
        height: 8px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }
`;

export default CheckMark;