import React, {Component} from 'react';
import TodoItem from "./TodoItem";

import TodolistUI from "./TodolistUI";
import 'antd/dist/antd.css';
import store from './store/index';
import { getAddAction, getDelAction, getInputChangeAction,  getInitList} from "./store/actionCreator";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDel = this.handleItemDel.bind(this);
        store.subscribe(this.handleStoreChange);//订阅改变，就执行

    }
    render() {
        return (
            <TodolistUI
            inputValue = {this.state.inputValue}
            handleInputChange = {this.handleInputChange}
            handleBtnClick = {this.handleBtnClick}
            list = {this.state.list}
            handleItemDel = {this.handleItemDel}
            />

            )
    }
     componentDidMount() {
        const action = getInitList();
        store.dispatch(action);
        console.log(action)
        // axios.get('/list.json').then((res)=>{
        //     const data = res.data;
        //     const action = initListAction(data);
        //     store.dispatch(action)
        // })
    }

    handleInputChange(e) {
        //告诉store要做什么事情
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // };
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action)
    }
    handleStoreChange() {
        //感知到store发生变化时，从store重新去数据.替换
        this.setState(store.getState())
        console.log('ok')
    }
    handleBtnClick(){
        // const action = {
        //     type: ADD_TODO_ITEM
        // };
        const action = getAddAction();
        store.dispatch(action)

    }
    handleItemDel(index) {
        // const action = {
        //     type: DEL_TODO_ITEM,
        //     index
        // };
        const action = getDelAction(index);
        store.dispatch(action)
    }
}
export default TodoList;
