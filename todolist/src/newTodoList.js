import React, {Component} from "react";

import {connect} from 'react-redux';
//一个组件只有render，那可以写成无状态组件，其没有生命周期函数，性能高
const TodoList = (props) => {
    const {inputValue, list, changeInputValue, handleClick, handleDel} = props;
    return(
        <div>
            <div>
                <input value={inputValue} onChange={changeInputValue}/>
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {list.map((item,index)=>{
                    return <li key={index} onClick={() => {handleDel(index)}}>{item}</li>
                })}
            </ul>
        </div>
    )
};

//store.dispatch和props。input值发生变化时，我们想改变store内容
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e){
            const action = {
                type: 'change_input_value',
                value: e.target.value
            };
            //console.log(e.target.value);
            dispatch(action)

        },
        handleClick(){
            const action = {
                type: 'add_item'
            };
            dispatch(action);
        },
        handleDel(index){
            //console.log(this);
            const action = {
                type: 'del_item',
                index: index
            };
            dispatch(action);
        }
    }
};
//怎么做连接？这是映射关系。store的inputValue映射到props到inputValue里面去
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
};
//TodoList组件和store进行连接
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
//TodoList是个UI组件，用connect返回的就是一个容器组件了