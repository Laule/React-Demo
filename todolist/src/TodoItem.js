import React, {Component} from 'react';

class TodoItem extends Component {

    constructor(props) {
        // 固定的写法
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        // 接收父组件传过来的值
        // 加了括号可以换行写
        const {content} = this.props;
        return (
            <li onClick={this.handleClick}>
                {content}
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

export default TodoItem;