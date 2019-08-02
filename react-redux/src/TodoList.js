import React, {Component} from 'react';
import store from './store/index';
import {getInputChangeAction, getAddItemAction, delItemAction, getInitList} from './store/actionCreators';
import TodoListUI from './TodoListUI';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        console.log(this.state);
        console.log(store.getState());
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        // store 内容发生改变，subscribe内函数就会自动自行
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }

    componentDidMount() {
        const action = getInitList();
        store.dispatch(action);
        console.log(action);
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
        console.log(e.target.value);
    }

    handleItemDelete(index) {
        const action = delItemAction(index);
        store.dispatch(action);
    }

    handleStoreChange() {
        // console.log('store handleStoreChange');
        this.setState(store.getState());
    }

    handleBtnClick() {
        const action = getAddItemAction();
        store.dispatch(action);
    }
}


export default TodoList;