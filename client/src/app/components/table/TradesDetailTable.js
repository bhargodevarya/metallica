import React from 'React';
import {Table, TableBody, TableRow, TableHeader, TableHeaderColumn, TableRowColumn} from 'material-ui/Table'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

import DatePickerComp from '../common/DatePickerComp'
import SelectComp from '../common/SelectComp'

let TradeLabel = (label) => { return <div>{label}</div>}

//TODO convert each row from textbox to respective component
const TradesDetailTable = (props) => {
    let tradeDate;let selectedCommodity,selectedCounterparty, selectedLocation;
    if(props.selectedTrade.TradeDate) {
        console.log(props.selectedTrade.TradeDate.replace("/","-"))
        //tradeDate=new Date(props.selectedTrade.TradeDate)
        //TODO parse TradeDate in the following format
        tradeDate=new Date(props.selectedTrade.TradeDate)
        selectedCommodity=props.selectedTrade.Commodity
        selectedCounterparty=props.selectedTrade.CounterParty
        selectedLocation=props.selectedTrade.Location
    } else {
        console.log("setting date as null")
        tradeDate=null
    }
    if(Object.keys(props.refData).length > 0) {
    console.log("TradesDetailTable ",props.refData.commodities)
    var myCommodities=props.refData.commodities
    var myLocations=props.refData.locations
    var myCounterparties=props.refData.counterparties
    var locationsMenu = props.refData.locations.map(loc => 
    <MenuItem value={loc.code} primaryText={loc.code}></MenuItem>)
    var commoditiesMenu = props.refData.commodities.map(com =>
    <MenuItem value={com.code} primaryText={com.code}></MenuItem>)
    var counterPartiesMenu = props.refData.counterparties.map(counterP => 
            <MenuItem value={counterP.code} primaryText={counterP.code}></MenuItem>)
    } else {
        console.log("TradesDetailTable in the else block ")
        myCommodities=[]
        myLocations=[]
        myCounterparties=[]
    }        
    return(
        <div>
        <Table selectable={false}>
            <TableBody displayRowCheckbox={false}>
                <TableRow displayBorder={false}>
                    <TableRowColumn>
                    {TradeLabel("Trade Date")}
                    </TableRowColumn>
                    <TableRowColumn>
                   <DatePickerComp handleChange={props.handleTradeFieldUpdate} 
                    value={tradeDate}
                    style={{width:'100px'}}
                    disabled={props.isDisabled}/>
                    </TableRowColumn>
                </TableRow>
                <TableRow displayBorder={false}>
                    <TableRowColumn>
                    {TradeLabel("Commodity")}
                    </TableRowColumn>
                    <TableRowColumn>
                    <SelectComp value={selectedCommodity} handleChange={props.handleTradeFieldUpdate} 
                    disabled={props.isDisabled}
                    menuItems={myCommodities} 
                    style={{'width':'120px','padding-left':'0.5cm'}}/> 
                    </TableRowColumn>
                </TableRow>
                <TableRow displayBorder={false}>
                    <TableRowColumn>
                    {TradeLabel("Side")}
                    </TableRowColumn>
                    <TableRowColumn>
                        <TextField disabled={props.isDisabled} value={props.selectedTrade.Side}/>
                    </TableRowColumn>
                </TableRow>
                <TableRow displayBorder={false}>
                    <TableRowColumn>
                    {TradeLabel("Counter Party")}
                    </TableRowColumn>
                    <TableRowColumn>
                    <SelectComp value={selectedCounterparty} handleChange={props.handleTradeFieldUpdate} 
                    disabled={props.isDisabled}
                    menuItems={myCounterparties} 
                    style={{'width':'120px','padding-left':'0.5cm'}}/>
                    </TableRowColumn>
                </TableRow>
                <TableRow displayBorder={false}>
                    <TableRowColumn>
                    {TradeLabel("Price")}
                    </TableRowColumn>
                    <TableRowColumn>
                        <TextField disabled={props.isDisabled} value={props.selectedTrade.Price}/>
                    </TableRowColumn>
                </TableRow>
                <TableRow displayBorder={false}>
                    <TableRowColumn>
                    {TradeLabel("Quantity")}
                    </TableRowColumn>
                    <TableRowColumn>
                        <TextField disabled={props.isDisabled} value={props.selectedTrade.Qty}/>
                    </TableRowColumn>
                </TableRow>
                <TableRow displayBorder={false}>
                    <TableRowColumn>
                    {TradeLabel("Location")}
                    </TableRowColumn>
                    <TableRowColumn>
                        <SelectComp value={selectedLocation} handleChange={props.handleTradeFieldUpdate} 
                    disabled={props.isDisabled}
                    menuItems={myLocations}/>
                    </TableRowColumn>
                </TableRow>
                <TableRow displayBorder={false}>
                    <TableRowColumn></TableRowColumn>
                    <TableRowColumn>
                        <FlatButton label="Save"/>
                        <FlatButton label="Cancel"/>
                    </TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
    </div>
    );
}

module.exports = TradesDetailTable;