import React from 'react'
import FlatButton from 'material-ui/FlatButton/FlatButton';
import { setInterval } from 'timers';

class Scroller extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data:1
        }
        this.handleClick=this.handleClick.bind(this)
    }

    componentDidMount() {
        setInterval(() => {this.setState({data:Math.random()})},3000)
    }

    updatePrices(){
        
    }

    handleClick() {
        this.state.data=2
        console.log(this.state.data)
    }

    render() {
        return(
            <div>
                {"AU"}{this.state.data}
            </div>
        )
    }
}

module.exports = Scroller