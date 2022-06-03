import React from 'react';
import './AddPostForm.css';
import CancelIcon from '@mui/icons-material/Cancel';

export class AddPostForm extends React.Component {
  state = {
    postTitle: '',
    postDesc: '',
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

  createPost = () => {
      
      const post = {
        id: this.props.blogArr.length + 1,
        title: this.state.postTitle,
        description: this.state.postDesc,
        liked: false,
      }
      this.props.addNewBlogPost(post)

      this.props.handleAddFormHide()
  }

  handleSubmit = (e) => {
        e.preventDefault()
        if(e.keyCode == 13) {
            this.createPost()
        }
    
  }

  componentDidMount() {
      window.addEventListener('keyup', this.handleSubmit)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleSubmit)
}

  render() {
    return (
      <>
        <form action="" className="addPostform" onSubmit={this.createPost}>
          <h2>Создание поста</h2>
          <button onClick={this.props.handleAddFormHide} className="hideBtn">
            <CancelIcon />
          </button>
          <div>
            <input
              onChange={this.handlePostTitleChange}
              type="text"
              name="postTitle"
              value={this.state.postTitle} 
              required
            />
          </div>
          <div>
            <textarea
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
              Добавить пост
            </button>
          </div>
        </form>
        <div onClick={this.props.handleAddFormHide} className="overlay"></div>
      </>
    );
  }
}
