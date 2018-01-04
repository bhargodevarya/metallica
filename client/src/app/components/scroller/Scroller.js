import React from 'react'
import FlatButton from 'material-ui/FlatButton/FlatButton';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar'
import AppBar from 'material-ui/AppBar'
import { setInterval } from 'timers';
import util from '../../socket/util'

const socket = util.socket;

const Data = (props) => {
        let Data = Object.keys(props.data).filter(k => k!='excluded').map(mp => {
            //console.log("state is",this.state)
            return <Chip style={{height:'20px'}}>
                <Avatar style={{height:'20px','fontSize': '90%'}}>{mp}</Avatar>
                <Avatar style={{height:'20px','fontSize': '90%'}}>{props.data[mp]}</Avatar>
                </Chip>
            //return mp+" "+this.state[mp]+" "
        });
        return (
            <div>
            {Data}</div>
        )
}

const Data2 = (props) => {
    return (
        <div>
        <Chip style={{height:'20px'}}>
            <Avatar style={{height:'20px','fontSize': '90%'}}>{props.comm}</Avatar>
            <Avatar style={{height:'20px','fontSize': '90%'}}>{props.price}</Avatar>
            </Chip>
        </div>
    )
}

class Scroller extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            excluded:['AL']
        }
        this.handleDelete=this.handleDelete.bind(this)
    }

    componentDidMount() {
        socket.on('metaldata',(msg) => {
            //console.log("setting state as", msg)
            this.setState(msg)
        })
    }

    handleDelete(event) {
        event.preventDefault()
        console.log(event)
    }

    render() {
        
        
    let scrollerAppBar = <AppBar 
        style={{height:'30px', 'background-color':'white'}}>
         {Object.keys(this.state).filter(k => k!='excluded').map(da => {
             return <Data2 key={da} comm={da} price={this.state[da]}></Data2>
         })}
        </AppBar>
        return(
            <div>
                {scrollerAppBar}
            </div>
        )
    }
}

module.exports = Scroller