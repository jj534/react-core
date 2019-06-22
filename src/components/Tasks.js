import React from 'react';
import {connect} from 'react-redux';
//import {} from './../redux/actions';
import Task from './Task';
import {readCollection} from './../redux/firebase';

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            snapshot: null
        }
    }
    
    componentDidMount() {
        const snapshot = readCollection('tasks');
        console.log('returned snapshot', snapshot)
        if (snapshot) {
            this.setState({snapshot,})
        }
    }
    
    render() {
        console.log('state', this.state.snapshot);
        if (this.state.snapshot) {
            //console.log(this.state.snapshot);
            return (
                <div>
                loaded
                </div>
                )
        }
        
        return (
            <div>
            unloaded
            </div>
            )
    }
}

const stateToProps = (state) => {
    return {
        
    }
}

export default connect(stateToProps, {})(Tasks)