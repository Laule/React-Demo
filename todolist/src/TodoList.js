import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import './style.css';
// JSX 需要一个最外层的标签包裹住
// 如果不想用标签包裹，可以使用占位符（Fragment）标签
class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['学习英语', '学习React']
        };
        // 初始化this指向问题
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
        return (
            <Fragment>
                <div>
                    {/*注释只会在开发上显示*/}
                    {
                        // 这是单行注释
                    }
                    {/* 借助ES6的bind函数 来改变this指向 */}
                    {/*用className代替class关键词*/}
                    <label htmlFor="insertAfter">输入内容</label>
                    <input id="insertAfter" className="input" type="text" value={this.state.inputValue}
                           onChange={this.handleInputChange}/>
                    <button onClick={this.handleBtnClick}>
                        提交
                    </button>
                </div>
                <ul>
                    {
                        this.getTodoItem()
                    }
                </ul>
            </Fragment>
        );
    }

    handleInputChange(e) {
        // console.log(this); // this 指向问题
        // React修改数据内容必须使用setState属性
        // this.setState({
        //     inputValue: e.target.value
        // });
        // 异步的setState，需要先保存一下数据
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleBtnClick(e) {
        // prevState 修改数据之前的数据
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <div key={index}>
                    {/* 当进行循环的时候，需要给每个列key标签 */}
                    {/* dangerouslySetInnerHTML 不转义html内容 容易被XSS攻击 */}
                    {/*父组件向子组件传值*/}
                    {/*既可以传递属性，又可以传递方法*/}
                    <TodoItem
                        content={item}
                        index={index}
                        deleteItem={this.handleItemDelete} // this指向要做改变
                    />
                    {/*面试题：React 父子组件怎么进行通信？ 父组件向子组件传递一个方法，子组件调用父组件传递过来的方法*/}
                    {/*父组件可以向子组件传值，子组件只能使用值，不能去修改值，单向数据流*/}
                    {/*
                            <li key={index} onClick={this.handleItemDelete.bind(this, index)}
                                       dangerouslySetInnerHTML={{__html:item}}
                            ></li>*/}
                </div>
            )
        })

    }

    handleItemDelete(index) {

        // 修改数据必须使用 setState
        // immutable
        // state 不允许我们做任何修改
        // this.setState({
        //     list: list
        // })
        this.setState((prevState) => {
            // 拷贝
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        });
    }
}

export default TodoList;
