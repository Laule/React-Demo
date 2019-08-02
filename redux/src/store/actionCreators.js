import {CHANGE_INPUT_VALUE, DELETE_TODO_ITEM,INIT_LIST_ACTION, ADD_TODO_ITEM,GET_INIT_LIST} from './actionTypes';

export const getInputChangeAction = (value) =>({
    type:CHANGE_INPUT_VALUE,
    value
});


export const delItemAction = (index) =>({
    type:DELETE_TODO_ITEM,
    index
});

export const getAddItemAction = () =>({
    type:ADD_TODO_ITEM
});

export const initListAction = (data) =>({
    type:INIT_LIST_ACTION,
    data
});
export const getInitList = () =>({
    type:GET_INIT_LIST
});


// export const getTodoList = () =>{
//     return (dispatch) => {
//         axios.get('http://www.hemaisi.com/service/msg/get?page=1&limit=5').then((res)=>{
//             const arr = res.data.data;
//             let list = [];
//             for (let v of arr) {
//                 list.push(v['ip_city']);
//             }
//             const action = initListAction(list);
//             dispatch(action);
//         });
//     }
// }


