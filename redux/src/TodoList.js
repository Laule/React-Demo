import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
import store from './store/index';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        console.log(this.state);
        console.log(store.getState());
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        // store 内容发生改变，subscribe内函数就会自动自行
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <div>
                    <Input value={this.state.inputValue}
                           placeholder='todo info'
                           style={{width: '300px', marginRight: '10px'}}
                           onChange={this.handleInputChange}
                    />
                    <Button onClick={this.handleBtnClick} type="primary">提交</Button>
                </div>

                <List
                    style={{marginTop: '10px', 'width': '300px'}}
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />

            </div>
        )
    }

    handleInputChange(e) {
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action);
        console.log(e.target.value);
    }

    handleStoreChange() {
        // console.log('store handleStoreChange');
        this.setState(store.getState());
    }

    handleBtnClick() {
        const action = {
            type: 'add_todo_item'
        };
        store.dispatch(action);
    }
}


export default TodoList;