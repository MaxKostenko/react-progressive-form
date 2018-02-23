import React, {Component} from 'react';
import Form from '../../components/Form';
import Select from '../../components/Select';
import * as actions from '../../store/actions/selector';
import {connect} from 'react-redux';

const valueList = ['C1', 'C2', 'C3'];

function valueListRender(values) {
    return values.map((val) => {
        return <option key={val} value={val}>{val}</option>
    })
}

class Selector extends Component {
    handleChange = (event) => {
        this.props.setSelectedValue(event.target.value);
    };

    render() {
        return (
            <Form>
                <Select value={this.props.currentValue} onChange={this.handleChange} size="3" autocomplete="off">
                    <option key="" className="hidden"></option>
                    {valueListRender(valueList)}
                </Select>
            </Form>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentValue: state.forms.selector.values.c,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setSelectedValue: (value) => dispatch(actions.setSelectedValue(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);