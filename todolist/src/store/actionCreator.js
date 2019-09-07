import {GET_INIT,ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DEL_TODO_ITEM, INIT_LIST} from "./actionType";

import store from "./index";

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});
export const getAddAction = ()=>({
    type: ADD_TODO_ITEM

});
export const getDelAction = (index)=>({
    type: DEL_TODO_ITEM,
    index
});
export const initListAction = (data) => ({
    type: INIT_LIST,
        data
});

export const getInitList = () => ({
    type: GET_INIT,
})
