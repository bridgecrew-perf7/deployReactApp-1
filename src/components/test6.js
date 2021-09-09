import React from "react";

export default class Counter3 extends React.Component{
    state = {
        count: 0
    }
    increment = ()=>{
        this.setState({count: this.state.count+1});
    }
    componentDidMount(){
        this.setState({count: this.state.count + 3});
        console.log('Initial (componentDidMount)');
    }
    componentDidUpdate(){
        console.log('Update (componentDidUpdate)');
    }
    render(){
        return(
            <div>
                <p>Counter3 app: {this.state.count}</p>
                <button onClick={this.increment}>Incre</button>
            </div>
        );
    }
}