import {createStore} from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
//创建store时把reducer传过来,store就能查看数据了
//创建store时使用中间件

const composeEnhancers = composeWithDevTools;
const store = createStore(reducer);

export default store;
