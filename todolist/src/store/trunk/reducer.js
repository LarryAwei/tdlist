import {CHANGE_INPUT_VALUE, DEL_TODO_ITEM, ADD_TODO_ITEM, INIT_LIST, GET_INIT} from "../actionType";
//state 存储的数据
const defaultState = {
    inputValue: '',
    list: []
};
//返回一个函数. state是上一次的数据，action是传来的要做的指令
//reducer可以接收state，但不能修改state。所以要把以前的拷贝出来
export default (state = defaultState, action) => {
    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));//深拷贝
        newState.inputValue = action.value;
        return newState;//返回给store去更新
    }
    if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));//深拷贝
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === DEL_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));//深拷贝
        newState.list.splice(action.index, 1);
        return newState;
    }
    if (action.type === INIT_LIST) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }

    return state;
}
