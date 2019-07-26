import React, {Component, Fragment} from 'react';
import './style.css';
import TodoItem from './TodoItem';

// JSX 需要一个最外层的标签包裹住
// 如果不想用标签包裹，可以使用占位符（Fragment）标签
class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['学习英语', '学习React']
        };
    }

    render() {
        return (
            <Fragment>
                {/*注释只会在开发上显示*/}
                {
                    // 这是单行注释
                }
                {/* 借助ES6的bind函数 来改变this指向 */}
                {/*用className代替class关键词*/}
                <label htmlFor="insertAfter">输入内容</label>
                <input id="insertAfter" className="input" type="text" value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
                <button onClick={this.handleBtnClick.bind(this)}>
                    提交
                </button>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            {/* 当进行循环的时候，需要给每个列key标签 */}
                            {/*dangerouslySetInnerHTML 不转义html内容 容易被XSS攻击*/}
                            return <li key={index} onClick={this.handleItemDelete.bind(this, index)}
                                       dangerouslySetInnerHTML={{__html:item}}
                            ></li>
                        })
                    }
                </ul>
            </Fragment>
        );
    }

    handleInputChange(e) {
        // console.log(this); // this 指向问题
        // React修改数据内容必须使用setState属性
        this.setState({
            inputValue: e.target.value
        });
    }

    handleBtnClick(e) {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        });
    }

    handleItemDelete(index) {
        // 拷贝
        const list = [...this.state.list];
        list.splice(index, 1);
        // 修改数据必须使用 setState
        // immutable
        // state 不允许我们做任何修改
        this.setState({
            list:list
        })
        console.log(index);

    }
}

export default TodoList;
