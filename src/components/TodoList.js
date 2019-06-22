import React from 'react';
import {connect} from 'react-redux';
//import {} from './../redux/actions';
import CreateTask from './CreateTask';
import ViewTasks from './ViewTasks';

class TodoList extends React.Component {
    render() {
        return (
            <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
                <div>
                    <CreateTask />
                    <ViewTasks />
                </div>
            </div>
            )
    }
}

const stateToProps = (state) => {
    return {
        
    }
}

export default connect(stateToProps, {})(TodoList)