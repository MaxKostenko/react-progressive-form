import React, {Component} from 'react';
import Form from '../../components/Form';
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
                    checkedValues={this.props.values.a}
                    onChange={this.handleChange}
                />
            </Form>
        )
    }
}

export default CheckBoxes;
