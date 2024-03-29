import React from 'react';
import {connect} from 'react-redux';
import {getInputChangeAction, getAddItemAction, delItemAction} from './store/actionCreators';

const TodoList = (props) => {
    const {inputValue, list, handleInputChange, handleItemDelete, handleBtnClick} = props;
    return (
        <div>
            <div>
                <input value={inputValue} onChange={handleInputChange}/>
                <button onClick={handleBtnClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li onClick={() => {
                            handleItemDelete(index)
                        }} key={index}>{item}</li>
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
            const action = getInputChangeAction(e.target.value);
            dispatch(action);
        },
        handleBtnClick() {
            const action = getAddItemAction();
            dispatch(action);
        },
        handleItemDelete(index) {
            console.log(index);
            const action = delItemAction(index);
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
