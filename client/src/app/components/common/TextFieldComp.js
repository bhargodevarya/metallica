import React from 'react'
import TextField from 'material-ui/TextField'

class TextFieldComp extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            value:""
        }
        this.updateValue=this.updateValue.bind(this)
    }
    componentWillReceiveProps(newProps) {
        this.state.value=newProps.value;
        console.log("Text", newProps)
    }

    updateValue(event, newValue) {
        this.setState(
            {value:newValue}
        )
        let data = {}
        data[this.props.label] = newValue; 
        //console.log("textfield is", newValue, data) 
        this.props.handleChange(data)
    }

    render() {
        return (<TextField disabled={this.props.isDisabled} 
                        onChange={this.updateValue}
                        value={this.state.value}/>);
    }
}

module.exports = TextFieldComp