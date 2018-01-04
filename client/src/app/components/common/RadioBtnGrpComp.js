import React from 'react'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class RadioBtnGrpComp extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            value:""
        }
        this.updateValue=this.updateValue.bind(this)
    }
    componentWillReceiveProps(newProps) {
        this.state.value=newProps.value;
        console.log("radio", newProps)
    }

    updateValue(event, newValue) {
        this.setState(
            {value:newValue}
        )
        let data = {}
        data[this.props.label] = newValue; 
        this.props.handleChange(data)
    }

    render() {
        let radios = this.props.labels.map(lab => {
        return <RadioButton disabled={this.props.isDisabled} 
            value={lab} label={lab}>
        </RadioButton>})
            console.log("selected value is", this.props.value)
        return (            
            <RadioButtonGroup valueSelected={this.state.value} onChange={this.updateValue}>
             {radios}
            </RadioButtonGroup>
        );
    }
}

module.exports = RadioBtnGrpComp