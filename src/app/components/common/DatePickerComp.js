import React from 'react'
import DatePicker from 'material-ui/DatePicker'

class DatePickerComp extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            selectedDate:null
        }
    }

    handleSelection(event, date) {
        this.setState({selectedDate:date})
        let data = {}
        data[this.props.hintText] = date;
        console.log(data)      
        {this.props.addToSearchCriteria(data)}
    }

    render() {
        return(
            <DatePicker value={this.state.selectedDate} autoOk={true} 
            style={{width:'100px'}} hintText={this.props.hintText} onChange={this.handleSelection.bind(this)}/>                    
        );
    }
}

module.exports = DatePickerComp;