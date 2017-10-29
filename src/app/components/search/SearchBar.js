import React from 'react';
import AppBar from 'material-ui/AppBar'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'
import Checkbox from 'material-ui/Checkbox'
import MenuItem from 'material-ui/MenuItem'

import SelectComp from '../common/SelectComp'
import DatePickerComp from '../common/DatePickerComp'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            searchCriteria:{}
        }
        this.addSearchCriteria=this.addSearchCriteria.bind(this)
        this.search=this.search.bind(this)
    }

    addSearchCriteria(obj) {
        console.log('added to search criteria',obj);
        this.state.searchCriteria = Object.assign(this.state.searchCriteria, obj);
        //console.log(this.state.searchCriteria)
    }

    clearSearchCriteria() {
        this.setState({searchCriteria:{}});
        console.log('cleared the search criteria')
    }

    search() {
        console.log(this.state.searchCriteria)
    }

    render() {
        return(
            <Toolbar>
                <ToolbarGroup>  
                    <DatePickerComp addToSearchCriteria={this.addSearchCriteria} style={{width:'100px'}} hintText="from"/>
                    <DatePickerComp addToSearchCriteria={this.addSearchCriteria} style={{width:'100px'}} hintText="to"/> 
                    <SelectComp addToSearchCriteria={this.addSearchCriteria} label="Commodity" menuItems={["AL","ZN"]} style={{width:'100px'}}/>                   
                    <Checkbox style={{width:'50px'}} label="Buy"/>                    
                    <Checkbox style={{width:'50px'}} label="Sell"/>
                    <SelectComp addToSearchCriteria={this.addSearchCriteria} label="Counterparty" menuItems={["AL","ZN"]} style={{width:'100px'}}/>                  
                    <SelectComp addToSearchCriteria={this.addSearchCriteria} label="Location" menuItems={["IND","NYC"]} style={{width:'100px'}}/>     
                    <FlatButton label="search" onClick={this.search}/>                    
                    <FlatButton label="clear" onClick={this.clearSearchCriteria.bind(this)}/>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

module.exports = SearchBar;