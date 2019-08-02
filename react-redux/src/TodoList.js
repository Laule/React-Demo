import React, {Component} from 'react';
import {connect} from 'react-redux';

const TodoList = (props) => {
    const {inputValue, list, handleInputChange, handleDelete, handleBtnClick} = props;
    return (
        <div>
            <div>
                <input value={inputValue} onChange={handleInputChange}/>
                <button onClick={handleBtnClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li onClick={handleDelete} key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}


// 将state映射给props
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
// map Dispatch Props
const mapDispatchProps = (dispatch) => {
    return {
        handleInputChange(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            };
            dispatch(action);
            // console.log(e.target.value);
        },
        handleBtnClick() {
            const action = {
                type: 'add_list_item'
            };
            dispatch(action);
        },
        handleDelete() {
            const action = {
                type: 'delete_list_item'
            };
            dispatch(action);
        }
    }
}


// 让TodoList组件和store做连接,规则在mapStateToProps里面
export default connect(mapStateToProps, mapDispatchProps)(TodoList);

//connect 是连接
// 谁和谁连接？TodoList和store进行连接
// 怎么做连接，映射关系mapStateToProps
// 如果需要对数据进行修改，可以使用mapDispatchProps进行修改

// UI组件 和业务逻辑相结合 ，执行返回的结果 ，就是容器组件。