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