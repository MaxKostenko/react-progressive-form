import React from 'react';

export default function FormsList(props) {
    const children = React.Children.toArray(props.children);
    children.splice(props.visibleStepsCount);
    return children;
}