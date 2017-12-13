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

/**
 * There are 2 state objects this component depend upon.
 * 1. all the possible values for the search criteria
 * 2. the currently active search criteria // should this be state, ponder about it.
 * 
 * This component should do 2 things:-
 * 1. Read the app store to get all the possible values for the search criteria
 * 2. On selection of the search criteria, use it to either fetch new trades or filter existing ones.
 */
class SearchBar extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state={
            localSearchCrit:{}
        }

        this.addSearchCriteria=this.addSearchCriteria.bind(this)
        this.search=this.search.bind(this)
    }
/**
 * 
 * in this function make sure that you add the current
 * component in the local search criteria
 */
    addSearchCriteria(obj) {
        console.log('added to search criteria',obj);
        this.state.localSearchCrit = Object.assign({},this.state.localSearchCrit, obj)
        //this.props.activeSearchCriteria = Object.assign(this.state.searchCriteria, obj);
        //console.log(this.props.searchCriteria)
    }

    clearSearchCriteria() {
        this.setState({localSearchCrit:{}});
        console.log('cleared the search criteria', this.state.localSearchCrit)
    }

    /**
     * in this function make sure you do the following:
     * 1. Take local search criteria object and pass it to the 
     * action creator that saves this criteria to the store.
     * 
     * 2. once this criteria reaches the store, call the function
     * to loadTrades, you have to pass the criteria from the store
     */
    search(event) {
        event.preventDefault();
        //searchTrades(this.state.searchCriteria)        
        //console.log('This should dispatch an action', this.state.searchCriteria)
        //console.log(this.props)
        //this.props.action.createActiveSearchCriteria(this.state.localSearchCrit)
        this.props.action.loadTrades();
        this.props.action.selectTradeAction(null,true)
        //console.log(this.state.localSearchCrit)
        //this.props.action.searchTrades(this.state.localSearchCrit);
    }

    render() {
        //console.log(this.props.searchCriteria.Commodity)
        console.log(this.props.searchCriteria)
        let commodityMenuItems = this.props.searchCriteria.Commodity;
        let counterpartyMenuItems = this.props.searchCriteria.Countertparty
        let locationMenuItems = this.props.searchCriteria.Location
        return(
            <Toolbar>
                <ToolbarGroup>  
                    <DatePickerComp addToSearchCriteria={this.addSearchCriteria} 
                    style={{width:'100px'}} hintText="from"/>

                    <DatePickerComp addToSearchCriteria={this.addSearchCriteria} 
                    style={{width:'100px'}} hintText="to"/> 

                    <SelectComp addToSearchCriteria={this.addSearchCriteria} 
                    label="Commodity" menuItems={commodityMenuItems} style={{width:'100px'}}/> 

                    <Checkbox style={{width:'75px'}} label="Buy"/>                    
                    <Checkbox style={{width:'75px'}} label="Sell"/>

                    <SelectComp addToSearchCriteria={this.addSearchCriteria} 
                    label="Counterparty" menuItems={counterpartyMenuItems} style={{width:'100px'}}/> 

                    <SelectComp addToSearchCriteria={this.addSearchCriteria} 
                    label="Location" menuItems={locationMenuItems} style={{width:'100px'}}/>  
                       
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
        searchCriteria: state.LoadSearchCritReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(Object.assign({}, TradesAction, SearchAction), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)