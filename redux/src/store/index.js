// 创建store要引入redux 的 createStore方法
import {createStore} from 'redux';
import reducer from './reducer';
// 创建store时，传递reducer （创建管理员的时候，要给小本子）
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;