import React from "react"
export default class Counter extends React.Component{
    state = {
        count: 0
    }
    increment = ()=>{
        this.setState({count: this.state.count+1});
    }
    render(){
        return (
            <div>
                <p>Counter app: {this.state.count}</p>
                <button onClick={this.increment}>incre</button>
            </div>
        );
    }
}