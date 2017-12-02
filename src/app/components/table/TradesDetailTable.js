import React from 'React';
import {Table, TableBody, TableRow, TableHeader, TableHeaderColumn, TableRowColumn} from 'material-ui/Table'
import TextField from 'material-ui/TextField'

let TradeLabel = (label) => { return <div>{label}</div>}

//TODO convert each row from textbox to respective component
const TradesDetailTable = (props) => {
    return(
        <div>
        <Table>
            <TableBody displayRowCheckbox={false}>
                <TableRow>
                    <TableRowColumn>{TradeLabel("Trade Date")}</TableRowColumn>
                    <TableRowColumn><TextField disabled={props.isDisabled} value={props.selectedTrade.TradeDate}/></TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>{TradeLabel("Commodity")}</TableRowColumn>
                    <TableRowColumn><TextField disabled={props.isDisabled} value={props.selectedTrade.Commodity}/></TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>{TradeLabel("Side")}</TableRowColumn>
                    <TableRowColumn><TextField disabled={props.isDisabled} value={props.selectedTrade.Side}/></TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>{TradeLabel("Counter Party")}</TableRowColumn>
                    <TableRowColumn><TextField disabled={props.isDisabled} value={props.selectedTrade.CounterParty}/></TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>{TradeLabel("Location")}</TableRowColumn>
                    <TableRowColumn><TextField disabled={props.isDisabled} value={props.selectedTrade.Location}/></TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>{TradeLabel("Price")}</TableRowColumn>
                    <TableRowColumn><TextField disabled={props.isDisabled} value={props.selectedTrade.Price}/></TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>{TradeLabel("Quantity")}</TableRowColumn>
                    <TableRowColumn><TextField disabled={props.isDisabled} value={props.selectedTrade.Qty}/></TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
    </div>
    );
}

module.exports = TradesDetailTable;