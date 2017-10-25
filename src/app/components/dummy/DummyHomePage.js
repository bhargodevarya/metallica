import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactDom from 'react-dom';

import * as PersonAction from '../../actions/PersonAction'
import PersonList from './DummyPersonList'

/**
 * This is a container component and should not have any markup.
 * It should use a presentation component for displaying data.
 * The relevant state should be passed as props to the presentation components.
 * mapStateToProps, maps the portion of the state to this component
 * 
 * The presentation component should have the ability to dispatch actions.
 * Since only actions can be used to modify state via reducers.
 * Therefore actions and dispatch should also be passed to the presentation components.
 * mapDisptachToProps, does this.
 * 
 * Since this is a simple example, I have not done it.
 * 
 */
class DummyHomePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div>Values below came from react-redux, redux and thunk
            <PersonList persons={this.props.persons} />
        </div>
    }
}

function mapStateToProps(state, ownProps) {
    return {
        persons: state.PersonReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(PersonAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DummyHomePage)