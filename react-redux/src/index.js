import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import store from './store';
import { Provider } from 'react-redux';
// 提供器 Provider连接store，内部组件就都有能力获取store里内容
const App =(
    <Provider store={store}>
        <TodoList />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));

