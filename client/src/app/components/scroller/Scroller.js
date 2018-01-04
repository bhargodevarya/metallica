import React from 'react'
import FlatButton from 'material-ui/FlatButton/FlatButton';

class Scroller extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data:["a","b"]
        }
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick() {
        this.state.data[0]="l"
        console.log(this.state.data)
    }

    render() {
        return(
            <div>
            <marquee behavior="scroll" direction="left"
            onfinish={() => console.log("finished")}>{this.state.data}</marquee>
            <br></br>
            <FlatButton label="toggle" onClick={this.handleClick}/>
            </div>
        )
    }
}

module.exports = Scroller