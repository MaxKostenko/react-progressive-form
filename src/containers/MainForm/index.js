import React, {Component} from 'react';
import Layout from '../../components/Layout';
import CheckBoxesForm from '../CheckBoxes';
import TogglesForm from '../Toggles';


class MainForm extends Component {

    render() {
        return (
            <Layout>
                <CheckBoxesForm/>
                <TogglesForm/>
            </Layout>
        )
    }

}

export default MainForm;