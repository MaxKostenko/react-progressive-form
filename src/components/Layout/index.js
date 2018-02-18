import React from 'react';
import StyledLayout from './Layout';


function Layout (props) {
    return (
        <StyledLayout>
           {props.children}
        </StyledLayout>
    )
}

export default Layout;