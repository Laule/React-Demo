import axios from "axios";
import {initListAction} from "./actionCreators";
import { put,takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes';
// ES6 generator 函数
function* getInitList() {
    try {
        const res  = yield axios.get('http://www.hemaisi.com/service/msg/get?page=1&limit=5');
        const arr = res.data.data;
        let list = [];
        for (let v of arr) {
            list.push(v['ip_city']);
        }
        const action = initListAction(list);
        yield put(action);
    }catch (e) {
        console.log('network error');
    }
}

function* mySaga() {
    // 捕获每次派发出来的action
    yield takeEvery(GET_INIT_LIST, getInitList);
}
export default mySaga;