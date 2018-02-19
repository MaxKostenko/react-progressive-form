import React from 'react';
import ToggleButton from '../../components/ToggleButton';
import PropTypes from 'prop-types';

function ToggleBoxList(props) {

    const {values, currentValue, ...parentProps} = props;

    return values.map((el) => {
        return <ToggleButton
            key={el}
            checked={el===currentValue}
            value={el}
            {...parentProps}
        >{el}</ToggleButton>
    })
}

ToggleBoxList.propTypes = {
    values: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentValue: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.node
};

ToggleBoxList.defaultProps = {
    children: null,
    currentValue: null
};

export default ToggleBoxList;