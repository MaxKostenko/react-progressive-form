import React, {Component} from 'react';
import Form from '../../components/Form';
import ButtonHolder from '../../components/Form/FormButtonHolder';
import Button from '../../components/Button';
import StyledTextInput from '../../components/TextInput';
import * as actions from '../../store/actions/textInput';
import {connect} from 'react-redux';

export class TextInput extends Component {

    state = {
        text: ''
    };

    handleChange = (event) => {
        this.setState({text: event.target.value});
    };

    handleCheck = () => {
        this.props.checkText(this.state.text);
    };

    render() {
        return (
            <Form>
                <StyledTextInput value={this.state.text} onChange={this.handleChange} />
                <ButtonHolder>
                    <Button onClick={this.handleCheck}>
                        Check Text
                    </Button>
                </ButtonHolder>
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
        checkText: (value) => dispatch(actions.checkText(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);