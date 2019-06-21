import React from 'react';
import {connect} from 'react-redux';
import {incrementCount} from './../redux/actions';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.props.incrementCount(1);
    }
    
    render() {
        return (
            <div className="container-fluid vh-100 d-flex flex-column align-items-center justify-content-center">
                <p>count: {this.props.count}</p>
                <button className="btn btn-primary" onClick={this.handleClick}>increment</button>
            </div>
            )
    }
}

const stateToProps = (state) => {
    return {
        count: state.count
    }
}

export default connect(stateToProps, {incrementCount})(Counter);