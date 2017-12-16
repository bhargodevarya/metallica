import Actions from '../actions/Actions'

export function RefDataReducer(state =[], action) {
    switch (action.type) {
        case Actions.LOAD_REF_DATA:
        console.log('RefDataReducer returning', action.refData)
            return action.refData
        default:
            return state;
    }
}