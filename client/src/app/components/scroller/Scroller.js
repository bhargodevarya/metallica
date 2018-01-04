import React from 'react'
import FlatButton from 'material-ui/FlatButton/FlatButton';
import { setInterval } from 'timers';
import util from '../../socket/util'

const socket = util.socket;

class Scroller extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        socket.on('metaldata',(msg) => {
            console.log("setting state as", msg)
            this.setState(msg)
        })
    }

    render() {
        let data = Object.keys(this.state).map(mp => {
            //console.log("state is",this.state)
            return mp+" "+this.state[mp]+" "
        });
        return(
            <div>
                {data}
            </div>
        )
    }
}

module.exports = Scroller