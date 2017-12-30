import React from 'react';
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField';

class SelectComp extends React.Component {
    constructor(props) {
        super(props)
        //console.log('>>>>>>>>>>>>', props)
        this.state = {
            selectedValue:null
        }
    }

    componentWillReceiveProps(newProps) {
        this.state.selectedValue=newProps.value
        console.log("componentsReceived",newProps.value, newProps.menuItems)
    }

    handleSelection(event, index, value) {
        //event.preventDefault();
        console.log("selected",index, value)
        this.setState({selectedValue: value});
        let data = {}
        data[this.props.label] = value;      
        {this.props.handleChange(data)}
    }

    render() {
        //console.log(this.props.menuItems)
        let myMenuItems;
        if(this.props.menuItems) {
            console.log("inside if",this.props.menuItems)
            myMenuItems = this.props.menuItems.map(menu => {return <MenuItem value={menu.code} primaryText={menu.code}/>})
        }
        return (
            <SelectField value={this.state.selectedValue} style={{width:'100px'}} disabled={this.props.disabled}
            floatingLabelText={this.props.label} onChange={this.handleSelection.bind(this)}>
            
                {myMenuItems}
                
            </SelectField>
        );
    }
}

module.exports = SelectComp;