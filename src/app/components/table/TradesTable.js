import React from 'React';
import {Table, TableBody, TableRow, TableHeader, TableHeaderColumn, TableRowColumn} from 'material-ui/Table'

import _ from 'lodash'

const DummyTableRow = (props) => {
    let myRows = props.trades.map((trade, index) => {
        return <TableRow>
        <TableRowColumn key={index} style={{fontSize:'10px'}}>{trade[0]}</TableRowColumn>
        <TableRowColumn key={index} style={{fontSize:'10px'}}>{trade[1]}</TableRowColumn>
        <TableRowColumn key={index} style={{fontSize:'10px'}}>{trade[2]}</TableRowColumn>
        <TableRowColumn key={index} style={{fontSize:'10px'}}>{trade[3]}</TableRowColumn>
        <TableRowColumn key={index} style={{fontSize:'10px'}}>{trade[4]}</TableRowColumn>
        <TableRowColumn key={index} style={{fontSize:'10px'}}>{trade[5]}</TableRowColumn>
        <TableRowColumn key={index} style={{fontSize:'10px'}}>{trade[6]}</TableRowColumn>
        </TableRow>
        });
    return myRows;
}

const TradesTable = (props) => {
    return(
        <Table bodyStyle={{overflow:'visible'}}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
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
        <TableBody displayRowCheckbox={false}>
            <DummyTableRow trades={props.trades}/>
        </TableBody>
    </Table>
    );
}

module.exports = TradesTable