import React from 'react'
import DatePicker from 'material-ui/DatePicker'

class DatePickerComp extends React.Component {
    constructor(props) {
        super(props)
        //let initValue=this.props.value
        //console.log("intial value is ", initValue)
        this.state={
            selectedDate:null
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("called componentWillReceiveProps", nextProps.value)
        this.state.selectedDate=nextProps.value
    }

    handleSelection(event, date) {
        this.setState({selectedDate:date})
        let data = {}
        data[this.props.hintText] = date;
        console.log(data)      
        {this.props.handleChange(data)}
    }

    render() {
        return(
            <DatePicker disabled={this.props.disabled} value={this.state.selectedDate} autoOk={true} 
            style={{width:'100px'}} hintText={this.props.hintText} onChange={this.handleSelection.bind(this)}/>                    
        );
    }
}

module.exports = DatePickerComp;