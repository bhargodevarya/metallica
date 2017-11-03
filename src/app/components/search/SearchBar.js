import React from 'react';
import AppBar from 'material-ui/AppBar'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'
import Checkbox from 'material-ui/Checkbox'
import MenuItem from 'material-ui/MenuItem'

import SelectComp from '../common/SelectComp'
import DatePickerComp from '../common/DatePickerComp'

import * as SearchAction from '../../actions/SearchAction'
import * as TradesAction from '../../actions/TradesAction'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'


class SearchBar extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state={
            searchCriteria:{}
        }

        this.addSearchCriteria=this.addSearchCriteria.bind(this)
        this.search=this.search.bind(this)
    }

    addSearchCriteria(obj) {
        //console.log('added to search criteria',obj);
        this.state.searchCriteria = Object.assign(this.state.searchCriteria, obj);
        //console.log(this.props.searchCriteria)
    }

    clearSearchCriteria() {
        this.setState({searchCriteria:{}});
        console.log('cleared the search criteria')
    }

    search(event) {
        event.preventDefault();
        //searchTrades(this.state.searchCriteria)        
        //console.log('This should dispatch an action', this.state.searchCriteria)
        //console.log(this.props)
        this.props.action.loadTrades();
    }

    render() {
        //console.log(this.props.searchCriteria.Commodity)
        let commodityMenuItems = this.props.searchCriteria.Commodity;
        let counterpartyMenuItems = this.props.searchCriteria.Countertparty
        let locationMenuItems = this.props.searchCriteria.Location
        return(
            <Toolbar>
                <ToolbarGroup>  
                    <DatePickerComp addToSearchCriteria={this.addSearchCriteria} style={{width:'100px'}} hintText="from"/>
                    <DatePickerComp addToSearchCriteria={this.addSearchCriteria} style={{width:'100px'}} hintText="to"/> 
                    <SelectComp addToSearchCriteria={this.addSearchCriteria} label="Commodity" menuItems={commodityMenuItems} style={{width:'100px'}}/>                   
                    <Checkbox style={{width:'50px'}} label="Buy"/>                    
                    <Checkbox style={{width:'50px'}} label="Sell"/>
                    <SelectComp addToSearchCriteria={this.addSearchCriteria} label="Counterparty" menuItems={counterpartyMenuItems} style={{width:'100px'}}/>                  
                    <SelectComp addToSearchCriteria={this.addSearchCriteria} label="Location" menuItems={locationMenuItems} style={{width:'100px'}}/>     
                    <FlatButton label="search" onClick={this.search}/>                    
                    <FlatButton label="clear" onClick={this.clearSearchCriteria.bind(this)}/>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

function mapStateToProps(state, ownProps) {
    //console.log(state.SearchCritReducer)
    return {
        searchCriteria: state.SearchCritReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(Object.assign({}, TradesAction, SearchAction), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)