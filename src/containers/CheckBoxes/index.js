import React, {Component} from 'react';

import Form from '../../components/Form';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/checkBoxes';
import CheckBoxList from './CheckBoxList';

const valuesList = ['A1', 'A2'];

class CheckBoxes extends Component {

    handleChange = (event) => {
        if (event.target.checked) {
            this.props.setCheckbox(event.target.value);
        } else {
            this.props.unsetCheckbox(event.target.value);
        }
    };

    render() {
        return (
            <Form>
                <CheckBoxList
                    values={valuesList}
                    checkedValues={this.props.checkedValues}
                    onChange={this.handleChange}
                />
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return {
        checkedValues: state.checkBoxes.values.a,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCheckbox: (name) => dispatch(actions.setCheckbox(name)),
        unsetCheckbox: (name) => dispatch(actions.unsetCheckbox(name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckBoxes);
