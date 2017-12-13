import React from 'React';
import {Table, TableBody, TableRow, TableHeader, TableHeaderColumn, TableRowColumn} from 'material-ui/Table'

import _ from 'lodash'

const createHeader = () => {
    return(
    <TableHeader>
        <TableRow>
            <TableHeaderColumn>Trade date</TableHeaderColumn>
            <TableHeaderColumn>Commodity</TableHeaderColumn>
            <TableHeaderColumn>Side</TableHeaderColumn>
            <TableHeaderColumn>Qty</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
            <TableHeaderColumn>CounterParty</TableHeaderColumn>
            <TableHeaderColumn>Location</TableHeaderColumn>
        </TableRow>
    </TableHeader>
    );
}

//let indexForData;
let tradesData;
let setEditableTradeFromParent

const selectRow = (index, trades) => {
    console.log("selected row is ",trades[index])
}

const setIndex = (index) => {
    //event.preventDefault()
    //console.log("index is ", index)
    //indexForData = index
    //selectRow(indexForData, tradesData)
    setEditableTradeFromParent(tradesData[index], true)
}

const createTable = (trades, setEditableTrade) => {
    let rows;
    console.log(">>>>>", typeof trades,trades)
    if(trades.length != 0) {
        
        rows = trades.map((trade, index) => {
            //console.log(">>>>>>>>>>", trade.TradeDate)
            return (
                <TableRow>
                <TableRowColumn style={{fontSize:'10px'}}>{trade.TradeDate}</TableRowColumn>
                <TableRowColumn style={{fontSize:'12px'}}>{trade.Commodity}</TableRowColumn>
                <TableRowColumn style={{fontSize:'12px'}}>{trade.Side}</TableRowColumn>
                <TableRowColumn style={{fontSize:'12px'}}>{trade.Qty}</TableRowColumn>
                <TableRowColumn style={{fontSize:'12px'}}>{trade.Price}</TableRowColumn>
                <TableRowColumn style={{fontSize:'12px'}}>{trade.CounterParty}</TableRowColumn>
                <TableRowColumn style={{fontSize:'12px'}}>{trade.Location}</TableRowColumn>
                </TableRow>
            )
        });
    }

    let tradesTable = <Table onCellClick={setIndex}>
        {createHeader()}
        <TableBody>
            {rows}
        </TableBody>  
    </Table>
    return (
        <div>
            {tradesTable}
        </div>
    )

}

const TradesTable = (props) => {
    tradesData = props.trades
    setEditableTradeFromParent = props.setEditableTrade
    return(
        <div id="tablediv">
            {createTable(props.trades, props.setEditableTrade)}
        </div>
    );
}

module.exports = TradesTable