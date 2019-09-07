import {createStore, applyMiddleware} from "redux";
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga'
import todoSaga from './todoSaga'
import { composeWithDevTools } from 'redux-devtools-extension';
//创建store时把reducer传过来,store就能查看数据了
//创建store时使用中间件
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools;
const store = createStore(reducer,composeEnhancers(
    applyMiddleware(sagaMiddleware)

)
);
//运行saga
sagaMiddleware.run(todoSaga);
//[thunk,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()]

export default store;
