import React,{ Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'dva';
import { message } from 'antd';
class CommentTab extends Component{
  static defaultProps ={
    comment:''
  };
  static propTypes = {
    comment:PropTypes.object.isRequired,
    onDeleteComment:PropTypes.func,
    index:PropTypes.number
  }
  constructor(props){
    super(props)
    this.state = {timeString:''}
  }
  componentWillMount(){
    this._updateTimeString();
    this._timer = setInterval(this._updateTimeString.bind(this),5000)
  }
  componentWillUnmount(){
    clearInterval(this._timer)
  }
  _updateTimeString(){
    let createTime = this.props.comment.createTime;
    let duration = (+Date.now() -  createTime)/1000;
    this.setState({
      timeString:duration > 60
        ?`${Math.round(duration/60)}分钟前`
        : `${Math.round(Math.max(duration,1))}秒前`
    })
  }
  handleDeleteComment(event){
    const { dispatch,comment } = this.props
    console.log(comment)
    dispatch({
      type:'comment/remove',
      payload:{id:comment.id}
    }).then(({data})=>{
      //console.log(data)
      if(data.code === "000"){
        message.success(data.data);
      }
    });
    // if(this.props.onDeleteComment){
    //   this.props.onDeleteComment(this.props.index)
    // }
  }
  render(){
    //console.log(this.props.comment)
    return(
      <div className="comment-tab">
        <label style={{marginRight:'10px',color:'#1890ff'}}>{this.props.comment.userName}:</label>
        <span style={{flexGrow:2}}>{this.props.comment.content}</span>
        <span style={{fontSize:12}}>{this.state.timeString}</span>
        <div style={{marginLeft:10,fontSize:12,color:'#1890ff',cursor:'pointer'}}
             onClick={this.handleDeleteComment.bind(this)}
        >
          <span>delete</span>
        </div>
      </div>
    )
  }
}
export default connect()(CommentTab);
