import React from 'react';
export default class Hello extends React.Component{
    state = {
        name: "Do Dang Kien Nam",
        count: 0
    }
    render(){
        return (
            <p>
                Hello, {this.state.name}<br/>
                Counting: {this.state.count}<br/>
                Another: {this.props.another ? this.props.another : "nnmnmn"}
            </p>
        );
    }
}