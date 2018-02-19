import React from 'react';
import CheckBox from '../../components/checkers/CheckBox';
import PropTypes from 'prop-types';

function CheckBoxList(props) {

    const {values, checkedValues, ...parentProps} = props;

    return values.map((el) => {
        return <CheckBox
            key={el}
            checked={checkedValues.includes(el)}
            value={el}
            {...parentProps}
        >{el}</CheckBox>
    })
}

CheckBoxList.propTypes = {
    values: PropTypes.arrayOf(PropTypes.string).isRequired,
    checkedValues: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.node
};

CheckBoxList.defaultProps = {
    children: null
};

export default CheckBoxList;