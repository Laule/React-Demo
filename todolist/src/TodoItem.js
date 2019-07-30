import React, {Component} from 'react';
// 属性接收的强校验
import PropTypes from 'prop-types';

class TodoItem extends Component {

    constructor(props) {
        // 固定的写法
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        // 接收父组件传过来的值
        // 加了括号可以换行写
        const {content, test} = this.props;
        // JSX -> 虚拟DOM (JS对象) -> 真实的DOM
        // return React.createElement('div',{},'item') // JS 对象
        return (
            <li onClick={this.handleClick}>
                {test} - {content}
            </li>
        )
    }

    handleClick() {
        // 子组件调用父组件方法，来修改父组件的内容
        // this.props.deleteItem(this.props.index);
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
    // 当一个组件从父组件接收了参数
    // 只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行
    // 如果这个组件第一次存在于父组件中，不会执行
    // 如果这个组件之前已经存在于父组件中，才会执行
    componentWillReceiveProps()
    {
        console.log('child componentWillReceiveProps');
    }

    // 当这个组件即将被从页面中剔除的时候，会被执行
    componentWillUnmount()
    {
        console.log('componentWillUnmount');
    }

}

// 对 TodoItem 属性进行校验
TodoItem.propTypes = {
    // 要求父组件必须向子组件传值
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

// 设置默认值
TodoItem.defaultProps = {
    test:'Say Hello'
}

export default TodoItem;