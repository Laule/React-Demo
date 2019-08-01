import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import './style.css';
import Test from './Test';
import axios from 'axios';
// JSX 需要一个最外层的标签包裹住
// 如果不想用标签包裹，可以使用占位符（Fragment）标签
class TodoList extends Component {

    constructor(props) {
        super(props);
        // 当组件的state或者props发生改变的时候，render函数就会重新执行
        this.state = {
            inputValue: '',
            list: []
        };
        // 初始化this指向问题
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    // 在组件即将被挂载到页面的时刻自动执行
    componentWillMount() {
        console.log('componentWillMount');
    }

    // 在组件被挂载之后执行
    componentDidMount() {
        axios.get('http://www.hemaisi.com/service/msg/get?page=1&limit=5').then((res) => {
            const arr = res.data.data;
            let list = new Set();
            for (let v of arr) {
                list.add(v['ip_city']);
            }
            this.setState(() => ({
                list: [...list]
            }))
        }).catch(() => {
            alert('error')
        });

        console.log('componentDidMount');
    }

    // 组件被更新之前，会被自动执行
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        // [true，false]
        return true;
    }

    // 组件被更新之前，它会自动执行，但是它在shouldComponentUpdate之后被执行，
    // 如果shouldComponentUpdate返回true,它才会执行，返回false就不执行
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    // 组件更新完后，它会被自动执行
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    // 没有Props 情况下，是不会自动执行的
    // componentWillReceiveProps()
    // {
    //     console.log('componentWillReceiveProps');
    // }

    render() {
        console.log('render');
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
                           onChange={this.handleInputChange}
                           ref={(input) => {
                               this.input = input
                           }}
                    />
                    <button onClick={this.handleBtnClick}>
                        提交
                    </button>
                </div>
                <ul ref={(ul) => {
                    this.ul = ul
                }}>
                    {
                        this.getTodoItem()
                    }
                </ul>
                {/*<Test content={this.state.inputValue}/>*/}
            </Fragment>
        );
    }

    handleInputChange(e) {
        console.log(e.target);
        // console.log(this.input); ref
        // console.log(this); // this 指向问题
        // React修改数据内容必须使用setState属性
        // this.setState({
        //     inputValue: e.target.value
        // });
        // 异步的setState，需要先保存一下数据
        const value = e.target.value;
        // const value =  this.input.value; ref
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleBtnClick(e) {
        // prevState 修改数据之前的数据
        // 异步函数，不会立即执行
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }), () => {
            // 回调函数，setState执行完再执行
            console.log(this.ul.querySelectorAll('li').length);
        })


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
