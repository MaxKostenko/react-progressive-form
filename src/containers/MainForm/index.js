import React, {Component} from 'react';
import Layout from '../../components/Layout';
import * as actions from '../../store/actions';
import {connect} from 'react-redux';
import FormsList from './FormsList';


class MainForm extends Component {

    render() {


        return (
            <Layout>
                <FormsList list={this.props.data.visible} />
            </Layout>
        )
    }

}

const mapStateToProps = state => {
    return {
        data: state
    };
};

const mapDispatchToProps = dispatch => {

    const actionList = {};
    for (let key in actions) {
        actionList[key] = (val) => dispatch(actions[key](val))
    }

    return {
        actions: actionList
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainForm);
