import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {GET_INIT} from './actionType'
import axios from 'axios';
import {initListAction} from "./actionCreator";

//generator函数
//这里面异步请求就不用promise形式了
function* getInitList() {
    try {
        const res = yield axios.get('/list.json');
        const data = res.data;
        const action = initListAction(data);
        yield put(action)
    }catch (e) {
        console.log('failed')
    }

}
function* todoSaga() {
    //捕捉action的类型,执行方法
    yield takeEvery(GET_INIT, getInitList);

}
export default todoSaga;
