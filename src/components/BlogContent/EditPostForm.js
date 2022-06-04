import React from 'react';
import './EditPostForm.css';
import CancelIcon from '@mui/icons-material/Cancel';

export class EditPostForm extends React.Component {
  state = {
    postTitle: this.props.selectedPost.title,
    postDesc: this.props.selectedPost.description,
  };

  handlePostTitleChange = (e) => {
    this.setState({
      postTitle: e.target.value,
    });
  };

  handlePostDescChange = (e) => {
    this.setState({
      postDesc: e.target.value,
    });
  };

  savePost = (e) => {
      e.preventDefault()
      const post = {
        id: this.props.selectedPost.id,
        title: this.state.postTitle,
        description: this.state.postDesc,
        liked: this.props.selectedPost.liked,
      }
      this.props.editBlogPost(post)

      this.props.handleEditFormHide()
  }



  render() {
    return (
      <>
        <form action="" className="editPostform" onSubmit={this.savePost}>
          <h2>Редактирование поста</h2>
          <button onClick={this.props.handleEditFormHide} className="hideBtn">
            <CancelIcon />
          </button>
          <div>
            <input
            className='editFormInput'
              onChange={this.handlePostTitleChange}
              type="text"
              name="postTitle"
              value={this.state.postTitle} 
              required
            />
          </div>
          <div>
            <textarea
            className='editFormInput'
              onChange={this.handlePostDescChange}
              name="postDescription"
              id=""
              cols="38"
              rows="10"
              value={this.state.postDesc} 
              required
            />
          </div>
          <div>
            <button className="blackBtn" type="submit">
              Сохранить пост
            </button>
          </div>
        </form>
        <div onClick={this.props.handleEditFormHide} className="overlay"></div>
      </>
    );
  }
}
