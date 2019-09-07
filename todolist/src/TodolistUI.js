import React from "react";
import {Button, Input, List, Typography} from "antd";
//无状态组件性能比较高，因为它就是一个函数，而原来的组件是一个类，里面会有生命周期函数要执行
//当UI组件只进行页面渲染没有逻辑的时候，一般可以改写
const TodolistUI = (props) =>{
    return (
        <div>
            <div style={{textAlign: "center", marginTop: "10px"}}>
                <Input value={props.inputValue}
                       onChange={props.handleInputChange}
                       placeholder={'todo info'} style={{width: 300}}/>
                <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
            </div>
            <List style={{margin: '10px auto', width: 300}}
                  header={<div>Header</div>}
                  footer={<div>Footer</div>}
                  bordered
                  dataSource={props.list}
                  renderItem={(item, index) => (

                      <List.Item onClick={ ()=> {
                          props.handleItemDel(index)
                      }
                      }>
                          <Typography.Text mark>[ITEM]</Typography.Text> {item}
                      </List.Item>
                  )}
            />
        </div>
    )
}
// class TodolistUI extends Component {
//     render() {
//
//     }
// }
export default TodolistUI;
