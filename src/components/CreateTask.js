import React from 'react';
import {connect} from 'react-redux';
//import {} from './../redux/actions';
import {createDocument} from './../redux/firebase';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            task: ""
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCreateTask = this.handleCreateTask.bind(this);
    }
    
    handleInputChange(e) {
        //console.log(e.target.value);
        this.setState({task: e.target.value});
    }
    
    handleCreateTask(e) {
        e.preventDefault();
        
        const data = {
            title: this.state.task
        }
        
        createDocument('tasks', data);
        this.setState({task: ""});
    }
    
    render() {
        return (
            <div className="">
                <form onSubmit={this.handleCreateTask}>
                    <input type="text" value={this.state.task} onChange={this.handleInputChange} />
                    <button className="btn btn-primary ml-2" type="submit">create</button>
                </form>
            </div>
            )
    }
}

const stateToProps = (state) => {
    return {
        
    }
}

export default connect(stateToProps, {})(TodoList)