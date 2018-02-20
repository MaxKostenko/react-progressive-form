import React, {Component} from 'react';
import Layout from '../../components/Layout';
import * as formsActions from '../../store/actions/FormsActions';
import {connect} from 'react-redux';
import FormsList from './FormsList';


class MainForm extends Component {

    render() {
        return (
            <Layout>
                <FormsList
                    list={this.props.data.visible}
                    forms={this.props.data.forms}
                    actions={this.props.formsActions}
                />
            </Layout>
        );
    }

}

const mapStateToProps = state => {
    return {
        data: state
    };
};

const mapDispatchToProps = dispatch => {

    const dispatchedActions = {};
    const fAction = {...formsActions.default};

    for (let formKey in fAction) {
        dispatchedActions[formKey] = {};
        for (let actionKey in fAction[formKey]) {
            dispatchedActions[formKey][actionKey] = (val) => dispatch(fAction[formKey][actionKey](val))
        }
    }

    return {
        formsActions: dispatchedActions
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainForm);
