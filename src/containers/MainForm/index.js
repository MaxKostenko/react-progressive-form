import React, {Component} from 'react';
import Layout from '../../components/Layout';
import Submit from '../../components/Submit';
import FormError from '../../components/Form/FormError';
import * as formsActions from '../../store/actions/FormsActions';
import * as actions from '../../store/actions/mainForm';
import {connect} from 'react-redux';
import FormsList from './FormsList';
import {requestStatuses} from '../../utils';

class MainForm extends Component {

    handleSubmit = (event) => {
        this.props.submitForm()
    };

    render() {
        return (
            <Layout>
                <FormsList
                    list={this.props.visible}
                    forms={this.props.forms}
                    actions={this.props.formsActions}
                />
                {this.props.requestState === requestStatuses.failed ? (
                    <FormError>{this.props.errorMessage}</FormError>
                ) : ''}

                {this.props.isVisibleSubmit ? (
                    <Submit
                        onClick={this.handleSubmit}
                        disabled={this.props.isDisabledSubmit || this.props.requestState === requestStatuses.inProgress}
                        requestState={this.props.requestState}
                    />
                ) : ''}
            </Layout>
        );
    }
}

const createChildFormsActions = dispatch => {
    const dispatchedActions = {};
    const formsActionList = {...formsActions.default};

    for (let formKey in formsActionList) {
        dispatchedActions[formKey] = {};
        for (let actionKey in formsActionList[formKey]) {
            dispatchedActions[formKey][actionKey] = (val) => dispatch(formsActionList[formKey][actionKey](val))
        }
    }
    return dispatchedActions;
};


const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => {
    return {
        formsActions: createChildFormsActions(dispatch),
        submitForm: () => dispatch(actions.sendForm())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainForm);
