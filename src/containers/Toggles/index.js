import React, {Component} from 'react';
import Form from '../../components/Form';
import ToggleBoxList from './ToggleBoxList';

const valuesList = ['B1', 'B2'];

class Toggles extends Component {

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
                    currentValue={this.props.values.b}
                    onChange={this.handleChange}
                />
            </Form>
        )
    }
}

export default Toggles;