import React from 'react';
import AppBar from 'material-ui/AppBar'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'
import Checkbox from 'material-ui/Checkbox'
import MenuItem from 'material-ui/MenuItem'

import SelectComp from '../common/SelectComp'
import DatePickerComp from '../common/DatePickerComp'
import CheckBoxComp from '../common/CheckBoxComp'

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
            localSearchCrit:{},
            buyCheck:false,
            sellCheck:false
        }

        this.addSearchCriteria=this.addSearchCriteria.bind(this)
        this.search=this.search.bind(this)
        this.handleBuyCheckbox=this.handleBuyCheckbox.bind(this)
        this.handleSellCheckbox=this.handleSellCheckbox.bind(this)
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
        console.log(this.state.localSearchCrit)
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
        //TODO need to remove the call below
        //this.props.action.loadTrades();
        if(Object.keys(this.state.localSearchCrit).length < 1) {
            alert('Please select atleast one criteria')
            return;
        }
        this.props.action.selectTradeAction(null,true)
        //console.log(this.state.localSearchCrit)
        this.props.action.searchTrades(this.state.localSearchCrit);
    }

    handleBuyCheckbox(event) {
        //event.preventDefault();
        console.log("buy checkbox",event.target)
        this.setState((oldState) => {
            return {
              buyCheck: !oldState.buyCheck,
            };
          });
        this.addSearchCriteria({Side:"Buy"})
    }

    handleSellCheckbox(event) {
        event.preventDefault();
        console.log("sell checkbox",event)
        this.setState((oldState) => {
            console.log("oldstate is", oldState)
            if(oldState.sellCheck) {
                this.addSearchCriteria({Side:""})
            } else {
                this.addSearchCriteria({Side:"Sell"})
            }
            return {
              sellCheck: !oldState.sellCheck,
            };
          });
    }

    render() {
        //console.log(this.props.searchCriteria.Commodity)
        console.log(this.props.searchCriteria)
        let commodityMenuItems = []
        let counterpartyMenuItems = []
        let locationMenuItems = []
        let selectedCommodity,selectedCounterparty, selectedLocation;
        console.log("SearchBar refData is ",this.props.refData)
        if(Object.keys(this.props.refData).length > 0) {
            commodityMenuItems = this.props.refData.commodities
            selectedCommodity=commodityMenuItems[0]
            counterpartyMenuItems = this.props.refData.counterparties
            selectedCounterparty=counterpartyMenuItems[0]
            locationMenuItems = this.props.refData.locations
            selectedLocation=locationMenuItems[0]
        } else {
            console.log("in the else block", this.props.refData)
        }
        return(
            <Toolbar>
                <ToolbarGroup>  
                    <DatePickerComp handleChange={this.addSearchCriteria} 
                    style={{width:'100px'}} hintText="From"/>

                    <DatePickerComp handleChange={this.addSearchCriteria} 
                    style={{width:'100px'}} hintText="To"/> 

                    <SelectComp handleChange={this.addSearchCriteria} value={selectedCommodity}
                    label="Commodity" menuItems={commodityMenuItems} style={{width:'100px'}}/> 

                    <CheckBoxComp addSearchCriteria={this.addSearchCriteria}/>

                    <SelectComp handleChange={this.addSearchCriteria} value={selectedCounterparty}
                    label="Counterparty" menuItems={counterpartyMenuItems} style={{width:'100px'}}/> 

                    <SelectComp handleChange={this.addSearchCriteria} value={selectedLocation}
                    label="Location" menuItems={locationMenuItems} style={{width:'100px'}}/>  
                       
                    <FlatButton label="Search" onClick={this.search}/>                    
                    <FlatButton label="Clear" onClick={this.clearSearchCriteria.bind(this)}/>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

function mapStateToProps(state, ownProps) {
    //console.log(state.SearchCritReducer)
    return {
        searchCriteria: state.LoadSearchCritReducer,
        refData: state.RefDataReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(Object.assign({}, TradesAction, SearchAction), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)