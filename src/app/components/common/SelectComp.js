import React from 'react';
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField';

class SelectComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedValue: props.menuItems[0]
        }
    }

    handleSelection(event, index, value) {
        event.preventDefault();
        this.setState({selectedValue: value});
        let data = {}
        data[this.props.label] = value;      
        {this.props.addToSearchCriteria(data)}
    }

    render() {
        let menuItems = this.props.menuItems.map(menu => {return <MenuItem value={menu} primaryText={menu}/>})
        return (
            <SelectField value={this.state.selectedValue} style={{width:'100px'}} 
            floatingLabelText={this.props.label} onChange={this.handleSelection.bind(this)}>
                {menuItems}
            </SelectField>
        );
    }
}

module.exports = SelectComp;