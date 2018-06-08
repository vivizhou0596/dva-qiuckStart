import React, {Component} from 'react';
import PropTypes from "prop-types"
import CommentTab from './CommentTab'
class CommentList extends Component{
  static defaultProps={
    comments : []
  }
  static propTypes = {
    onDeleteComment:PropTypes.func
  }
  handleDeleteComment(index){
      if(this.props.onDeleteComment){
        this.props.onDeleteComment(index)
      }
  }
  render(){
    return(
      <div className="comment-list">
        {
          this.props.comments.map((item,i)=>{
            return <CommentTab
                      comment = {item}
                      index = {i}
                      key={i}
                      onDeleteComment={this.handleDeleteComment.bind(this)}/>
          })
        }
      </div>
    )
  }
}
export default CommentList;
