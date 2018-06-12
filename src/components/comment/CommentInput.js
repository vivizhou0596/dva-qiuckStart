import React, {Component} from 'react';
import { connect } from 'dva';
import PropTypes from "prop-types"
import { Input,Row, Col, Button , message} from 'antd';
const { TextArea } = Input;
class CommentInput extends Component{
  static propTypes = {
    onSubmit:PropTypes.func
  }
  constructor(props){
    super(props);
    this.state={
      userName:'',
      content:''
    }
  }
  componentWillMount(){
    this._lodashUserName()
  }
  componentDidMount(){
    this.textarea.focus()
  }
  _lodashUserName(){
    let userName = localStorage.getItem('userName')
    if(userName){
      this.setState({
        userName:userName
      })
    }
  }
  _saveUserName(name){
    localStorage.setItem('userName',name)
  }
  handleSaveUsername(event){
    if(event.target.value){
      this._saveUserName(event.target.value)
    }
  }
  handleUserChange(event){
    this.setState({
      userName:event.target.value
    })
  }
  handleContentChange(event){
    this.setState({
      content:event.target.value
    })
  }
  handleSubmit(){
    let {dispatch} = this.props;
    let {userName,content} = this.state
    dispatch({
      type:'comment/create',
      payload:{
        userName,
        content,
        createTime:+new Date()}
    }).then(({data})=>{
      console.log(data)
      if(data.code === "000"){
        message.success(data.data);
        dispatch({
          type:'comment/fetch',
        })
      }else{
        message.error('新增失败');
      }
    }).catch((err)=>{
      console.error(err)
    })
    this.setState({ content:'' })
  }
  render(){
    return(
      <div className="comment-input">
        <Row >
          <Col span={6}><label>用户：</label></Col>
          <Col span={18}>
            <Input
              value={this.state.userName}
              onChange={this.handleUserChange.bind(this)}
              onBlur = {this.handleSaveUsername.bind(this)}
            />
          </Col>
        </Row>
        <Row  style={{margin:'10px 0'}}>
          <Col span={6}><label>评价：</label></Col>
          <Col span={18}>
            <TextArea rows={4}
                value={this.state.content}
                ref = {(textarea)=>this.textarea=textarea}
                onChange={this.handleContentChange.bind(this)}
            />
          </Col>
        </Row>
        <div style={{textAlign:'right'}}>
          <Button type="primary" size={"small"} style={{fontSize:'12px'}}
            onClick = {this.handleSubmit.bind(this)}
          >提交</Button>
        </div>
      </div>
    )
  }
}
export default connect()(CommentInput);
