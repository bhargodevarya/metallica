import React from 'React';
import {Table, TableBody, TableRow, TableHeader, TableHeaderColumn, TableRowColumn} from 'material-ui/Table'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

let TradeLabel = (label) => { return <div>{label}</div>}

//TODO convert each row from textbox to respective component
const TradesDetailTable = (props) => {
    return(
        <div>
        <Table selectable={false}>
            <TableBody displayRowCheckbox={false}>
                <TableRow displayBorder={false}>
                    <TableRowColumn>{TradeLabel("Trade Date")}</TableRowColumn>
                    <TableRowColumn><TextField disabled={props.isDisabled} value={props.selectedTrade.TradeDate}/></TableRowColumn>
                </TableRow>
                <TableRow displayBorder={false}>
                    <TableRowColumn>{TradeLabel("Commodity")}</TableRowColumn>
                    <TableRowColumn><TextField disabled={props.isDisabled} value={props.selectedTrade.Commodity}/></TableRowColumn>
                </TableRow>
                <TableRow displayBorder={false}>
                    <TableRowColumn>{TradeLabel("Side")}</TableRowColumn>
                    <TableRowColumn><TextField disabled={props.isDisabled} value={props.selectedTrade.Side}/></TableRowColumn>
                </TableRow>
                <TableRow displayBorder={false}>
                    <TableRowColumn>{TradeLabel("Counter Party")}</TableRowColumn>
                    <TableRowColumn><TextField disabled={props.isDisabled} value={props.selectedTrade.CounterParty}/></TableRowColumn>
                </TableRow>
                <TableRow displayBorder={false}>
                    <TableRowColumn>{TradeLabel("Location")}</TableRowColumn>
                    <TableRowColumn><TextField disabled={props.isDisabled} value={props.selectedTrade.Location}/></TableRowColumn>
                </TableRow>
                <TableRow displayBorder={false}>
                    <TableRowColumn>{TradeLabel("Price")}</TableRowColumn>
                    <TableRowColumn><TextField disabled={props.isDisabled} value={props.selectedTrade.Price}/></TableRowColumn>
                </TableRow>
                <TableRow displayBorder={false}>
                    <TableRowColumn>{TradeLabel("Quantity")}</TableRowColumn>
                    <TableRowColumn><TextField disabled={props.isDisabled} value={props.selectedTrade.Qty}/></TableRowColumn>
                </TableRow>
                <TableRow displayBorder={false}>
                    <TableRowColumn></TableRowColumn>
                    <TableRowColumn><FlatButton label="Save"/><FlatButton label="Cancel"/></TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
    </div>
    );
}

module.exports = TradesDetailTable;