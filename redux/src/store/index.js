// 创建store要引入redux 的 createStore方法
import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer';
import todoSagas from './sagas'

// 创建store时，传递reducer （创建管理员的时候，要给小本子）
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const sagaMiddleware = createSagaMiddleware()
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducer,enhancer);
sagaMiddleware.run(todoSagas);

export default store;

