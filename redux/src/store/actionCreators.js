import {CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, ADD_TODO_ITEM} from './actionTypes';

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


