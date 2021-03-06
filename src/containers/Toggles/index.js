import React, {Component} from 'react';
import Form from '../../components/Form';
import ToggleBoxList from './ToggleBoxList';
import * as actions from '../../store/actions/toggles';
import {connect} from 'react-redux';

const valuesList = ['B1', 'B2'];

export class Toggles extends Component {

    handleChange = (event) => {
        if (event.target.checked) {
            this.props.setToggle(event.target.value);
        }
    };

    render() {
        return (
            <Form>
                <ToggleBoxList
                    values={valuesList}
                    currentValue={this.props.currentValue}
                    onChange={this.handleChange}
                />
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentValue: state.forms.toggles.values.b,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setToggle: (name) => dispatch(actions.setToggle(name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Toggles);