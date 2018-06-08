import React, {Component, PropTypes} from 'react';
import { connect } from 'dva';
// import { Card } from 'antd';
import MainLayout from '../components/MainLayout/MainLayout';
import CommentInput from '../components/comment/CommentInput';
import CommentList from '../components/comment/CommentList';
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
    console.log(comment)
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
    const {location} = this.props;
    return (
      <MainLayout location={location}>
        <div className="wrapper">
          <CommentInput
            onSubmit = {this.handleSubmitComment.bind(this)}
          />
          <CommentList
            comments={this.state.comments}
            onDeleteComment={this.handleDeleteComment.bind(this)}/>
        </div>
      </MainLayout>
    )
  }
}
export default connect()(CommentLayout);
