import React from 'react';
import CheckBoxesForm from '../CheckBoxes';
import TogglesForm from '../Toggles';
import TextInput from '../TextInput';
import Selector from '../Selector';

const forms = {
    checkBoxes: (props) => <CheckBoxesForm {...props} />,
    toggles: (props) => <TogglesForm {...props}/>,
    textInput: (props) => <TextInput {...props}/>,
    selector: (props) => <Selector {...props}/>
};

export default function FormsList(props) {

    return props.list.map((key) => {

        return forms[key]({
            key: key,
        });

    })
}