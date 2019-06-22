import React from 'react';
import {connect} from 'react-redux';
//import {} from './../redux/actions';
import Tasks from './Tasks';

class ViewTasks extends React.Component {
    render() {
        return (
            <div className="mt-2">
                <ul className="list-group">
                  <Tasks />
                </ul>
            </div>
            )
    }
}

const stateToProps = (state) => {
    return {
        
    }
}

export default connect(stateToProps, {})(ViewTasks)