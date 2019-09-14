import React, {Component} from "react";
import store from "./store";
import {connect} from 'react-redux';
class TodoList  extends Component{
    render() {
        return(
            <div>
                <div>
                    <input defaultValue={this.props.inputValue}/>
                    <button onClick={this.handleClick}>提交</button>
                </div>
                <ul>
                    <li>dell</li>
                </ul>
            </div>
        )
    }
    handleInputChange(e) {
        console.log(e.target.value);
    }

}
//store.dispatch
const mapDispatchToProps = () => {
    return {

    }
};
//怎么做连接？这是映射关系
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
};
//TodoList组件和store进行连接
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
