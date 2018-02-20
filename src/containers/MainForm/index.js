import React, {Component} from 'react';
import Layout from '../../components/Layout';
import Submit from '../../components/Submit';
import * as formsActions from '../../store/actions/FormsActions';
import {connect} from 'react-redux';
import FormsList from './FormsList';



class MainForm extends Component {

    render() {
        return (
            <Layout>
                <FormsList
                    list={this.props.visible}
                    forms={this.props.forms}
                    actions={this.props.formsActions}
                />
                {this.props.isVisibleSubmit ? <Submit disabled={this.props.isDisabledSubmit} /> : ''}
            </Layout>
        );
    }

}

const mapStateToProps = state => {
    return state;
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
