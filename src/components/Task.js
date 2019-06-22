import React from 'react';
import {connect} from 'react-redux';
//import {} from './../redux/actions';

class Task extends React.Component {
    render() {
        return (
            <li className="list-group-item">
                <p className="mb-0">test task</p>
            </li>
            )
    }
}

const stateToProps = (state) => {
    return {
        
    }
}

export default connect(stateToProps, {})(Task)