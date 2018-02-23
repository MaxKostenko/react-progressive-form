import React, {Component} from 'react';
import Layout from '../../components/Layout';
import Submit from '../../components/Submit';
import FormError from '../../components/Form/FormError';
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

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => {
    return {
        submitForm: () => dispatch(actions.sendForm())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainForm);
