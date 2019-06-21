import {combineReducers} from 'redux';

const user = (state = null, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const count = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT_COUNT":
            return state + action.payload;
        
        default:
            return state;
    }
}

export default combineReducers({
    user,
    count,
})