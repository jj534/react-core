import React from 'react';
import {connect} from 'react-redux';
//import {} from './../redux/actions';
import Counter from './Counter';
import TodoList from './TodoList';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Counter />
                    </div>
                    <div className="col-lg-6">
                        <TodoList />
                    </div>
                </div>
            </div>
            )
    }
}

const stateToProps = (state) => {
    return {
        
    }
}

export default connect(stateToProps, {})(Home)