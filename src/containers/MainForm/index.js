import React, {Component} from 'react';
import Layout from '../../components/Layout';
import CheckBoxesForm from '../CheckBoxes';
import TogglesForm from '../Toggles';
import TextInput from '../TextInput';
import Selector from '../Selector';


class MainForm extends Component {

    render() {
        return (
            <Layout>
                <CheckBoxesForm/>
                <TogglesForm/>
                <TextInput/>
                <Selector/>
            </Layout>
        )
    }

}

export default MainForm;