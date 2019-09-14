import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import {Provider} from 'react-redux';
import TodoList from './newTodoList';
import store from "./store";
const App = (
    //Provider连接store，把store提供给了它内部所有组件
    <Provider store={store}>
        <TodoList />
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));


