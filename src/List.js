import React, { Component } from "react";
import Comment from "./Comment";
import commentsResource from "./commentsResource";

class List extends Component {
  state = {
    filteredContent: ""
  };
  handleInputChange = event => {
    this.setState({
      filteredContent: event.target.value
    });
  };
  getFilteredComments(comments) {
    const { filteredContent } = this.state;
    return filteredContent
      ? comments.filter(comment => {
          return comment.body.includes(filteredContent);
        })
      : comments;
  }
  render() {
    const comments = commentsResource.read();
    return (
      <div>
        <input
          onChange={this.handleInputChange}
          value={this.state.filteredContent}
          placeholder="Filter the comments by content"
        />
        {this.getFilteredComments(comments).map(comment => (
          <Comment
            key={comment.id}
            author={comment.email}
            content={comment.body}
          />
        ))}
      </div>
    );
  }
}

export default List;
