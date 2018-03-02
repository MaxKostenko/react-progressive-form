import React, {Component} from 'react';
import Form from '../../components/Form';
import ButtonHolder from '../../components/Form/FormButtonHolder';
import Loader from '../../components/Form/FormButtonHolderLoader'
import Button from '../../components/Button';
import StyledTextInput from '../../components/TextInput';
import * as actions from '../../store/actions/textInput';
import {connect} from 'react-redux';
import {requestStatuses} from '../../utils';

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
                    {this.props.requestState === requestStatuses.inProgress ? (
                        <Loader>Loading...</Loader>
                    ) : ''}
                    <Button
                        disabled={this.props.isDisabledButtonCheck}
                        onClick={this.handleCheck}>
                        Check Text
                    </Button>
                </ButtonHolder>
            </Form>
        );

    }
}

const mapStateToProps = state => {
    return state.forms.textInput;
};

const mapDispatchToProps = dispatch => {
    return {
        checkText: (value) => dispatch(actions.checkText(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);