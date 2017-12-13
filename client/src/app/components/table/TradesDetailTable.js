import React from 'React';
import {Table, TableBody, TableRow, TableHeader, TableHeaderColumn, TableRowColumn} from 'material-ui/Table'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

let TradeLabel = (label) => { return <div>{label}</div>}

//TODO convert each row from textbox to respective component
const TradesDetailTable = (props) => {
    let tradeDate;
    if(props.selectedTrade.TradeDate) {
        console.log(props.selectedTrade.TradeDate.replace("/","-"))
        //tradeDate=new Date(props.selectedTrade.TradeDate)
        //TODO parse TradeDate in the following format
        tradeDate=new Date(props.selectedTrade.TradeDate)
    } else {
        console.log("setting date as null")
        tradeDate=null
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
                    <DatePicker disabled={props.isDisabled} 
                    onChange={props.handleTradeFieldUpdate()}
                    value={tradeDate} 
                    autoOk={true} 
                    style={{width:'100px'}} />
                    </TableRowColumn>
                </TableRow>
                <TableRow displayBorder={false}>
                    <TableRowColumn>
                    {TradeLabel("Commodity")}
                    </TableRowColumn>
                    <TableRowColumn>
                    <SelectField style={{'width':'120px','padding-left':'0.5cm'}} disabled={props.isDisabled} value={props.selectedTrade.Commodity}>
                        <MenuItem value={props.selectedTrade.Commodity} primaryText={props.selectedTrade.Commodity}></MenuItem>
                    </SelectField>
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
                    <SelectField disabled={props.isDisabled} style={{'width':'120px','padding-left':'0.5cm'}} value={props.selectedTrade.CounterParty}>
                        <MenuItem value={props.selectedTrade.CounterParty} primaryText={props.selectedTrade.CounterParty}></MenuItem>
                    </SelectField>
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
                        <SelectField disabled={props.isDisabled} value={props.selectedTrade.Location}>
                        <MenuItem value={props.selectedTrade.Location} primaryText={props.selectedTrade.Location}></MenuItem>
                        </SelectField>
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