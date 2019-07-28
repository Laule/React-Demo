import React, { Component } from 'react';

class Test extends Component {
    // 当父组件的Render函数被运行时，它的子组件Render函数也会被重新运行一次
    render() {
        console.log('Test Render');
        return <div>{this.props.content}</div>
    }
}

export default Test;