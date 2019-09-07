import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.content !== this.props.content;  //避免子组件无谓的render
    }

    render() {
        const {content} = this.props;
        return (
            <div>
                <li onClick={this.handleClick}>
                    {content}
                </li>

            </div>


        );
    }

    handleClick() {
        const {del, index} = this.props;
        del(index)
    }
}

TodoItem.propTypes = {   //类型检验
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    del: PropTypes.func,
    index: PropTypes.number
};


export default TodoItem;
