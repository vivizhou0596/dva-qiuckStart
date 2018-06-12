import React, {Component } from 'react';
import { connect } from 'dva';
// import { Card } from 'antd';
import MainLayout from '../components/MainLayout/MainLayout';
import CommentInput from '../components/comment/CommentInput';
import CommentList from '../components/comment/CommentList';
import { routerRedux } from "dva/router"

import '../index.css';
class CommentLayout extends Component{
  constructor(props){
    super(props);
    this.state = {
      comments:[]
    }
  }
  componentWillMount(){
    let comments = localStorage.getItem('comments');
    if(comments){
      comments = JSON.parse(comments);
      this.setState({comments:comments})
    }
  }
  _saveComment(comments){
    localStorage.setItem('comments',JSON.stringify(comments))
  }
  handleSubmitComment(comment){
    //console.log(comment)
    this.state.comments.push(comment)
    this.setState({
      comments:this.state.comments
    })
    this._saveComment(this.state.comments)
  }
  handleDeleteComment(index){
    let comments = this.state.comments;
    comments.splice(index,1)
    this.setState({
      comments:comments
    })
    this._saveComment(this.state.comments)
  }
  render(){
    const {location,list} = this.props;
    //console.log(list)
    return (
      <MainLayout location={location}>
        <div className="wrapper">
          <CommentInput
            onSubmit = {this.handleSubmitComment.bind(this)}
          />
          <CommentList
            comments={list}
            onDeleteComment ={this.handleDeleteComment.bind(this)}/>
        </div>
      </MainLayout>
    )
  }
}
export default connect((state) => {
 //console.log(state.comment.list)
  return {
    list: state.comment.list
  }
})(CommentLayout);
