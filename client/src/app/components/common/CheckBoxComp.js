import React from 'react'
import Checkbox from 'material-ui/Checkbox'

class CheckBoxComp extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            buyCheck:false,
            sellCheck:false,
            sides:[]
        }
        this.handleBuyCheckbox=this.handleBuyCheckbox.bind(this)
        this.handleSellCheckbox=this.handleSellCheckbox.bind(this)
    }

    handleBuyCheckbox(event) {
        this.setState((oldState) => {
            console.log("sides is", this.state.sides)
            if(oldState.buyCheck) {
                console.log("unchecking", this.state.sides)
                let newSides = this.state.sides.filter(side => side != "Buy")
                console.log("unchecking, after filter", newSides)
                if(newSides.length < 1) {
                    this.state.sides = []
                    this.props.addSearchCriteria({side:this.state.sides})
                } else {
                    this.state.sides=[newSides]
                    this.props.addSearchCriteria({side:[newSides]})
                }
            } else {
                console.log("else sides is", this.state.sides)
                this.state.sides.push("Buy")
                this.props.addSearchCriteria({side:this.state.sides})
            }
            return {
              buyCheck: !oldState.buyCheck,
            };
          });
    }

    handleSellCheckbox(event) {
        this.setState((oldState) => {
            console.log("sides is", this.state.sides)
            if(oldState.sellCheck) {
                let newSides = this.state.sides.filter(side => side != "Sell")
                if(newSides.length < 1) {
                    this.state.sides = []
                    this.props.addSearchCriteria({side:this.state.sides})
                } else {
                    this.state.sides=[newSides]
                    this.props.addSearchCriteria({side:[newSides]})
                }
            } else {
                console.log("else sides is", this.state.sides)
                this.state.sides.push("Sell")
                this.props.addSearchCriteria({side:this.state.sides})
            }
            return {
              sellCheck: !oldState.sellCheck,
            };
          });
    }

    render() {
        return (<div>
            <Checkbox checked={this.state.sellCheck} onCheck={this.handleSellCheckbox}
                    style={{width:'75px'}} label="Sell"/>
            <Checkbox checked={this.state.buyCheck} onCheck={this.handleBuyCheckbox}
                    style={{width:'75px'}} label="Buy"/>
                    </div>
        );
    }

}

module.exports = CheckBoxComp