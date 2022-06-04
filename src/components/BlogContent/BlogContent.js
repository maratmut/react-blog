import React from 'react';
import './BlogContent.css';
import BlogCard from './BlogCard';
import { AddPostForm } from './AddPostForm';
import { EditPostForm } from './EditPostForm';

import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

export class BlogContent extends React.Component {
  state = {
    showAddForm: false,
    showEditForm: false,
    blogArr: [],
    isPending: false,
    selectedPost: {},
  };

  fetchPosts = () => {
    
    axios.get("https://629a0d587b866a90ec486a69.mockapi.io/posts").then((response) => {
      this.setState({
        blogArr: response.data,
        isPending: false,
      })
    })
  }

  likePost = (blogPost) => {
    const temp = {...blogPost}
    temp.liked = !temp.liked

    axios.put(`https://629a0d587b866a90ec486a69.mockapi.io/posts/${blogPost.id}`, temp)
    .then((response) => {
       
      this.fetchPosts()
    })
  };

  deletePost = (blogPost) => {
    
    if (window.confirm(`Удалить ${blogPost.title}?`)) {
      this.setState({
        isPending: true,
      })
      axios.delete(`https://629a0d587b866a90ec486a69.mockapi.io/posts/${blogPost.id}`)
      .then((response) => {
        
        this.fetchPosts()
    })
  }
}

  handleAddFormShow = () => {
    this.setState({
      showAddForm: true,
    });
  };
  
  handleEditFormShow = () => {
    this.setState({
      showEditForm: true,
    });
  };

  handleEditFormHide = () => {
    this.setState({
      showEditForm: false,
    });
  };


  handleAddFormHide = () => {
    this.setState({
      showAddForm: false,
    });
  };

  
  addNewBlogPost = (blogPost) => {
    this.setState({
      isPending: true,
    })
    axios.post('https://629a0d587b866a90ec486a69.mockapi.io/posts/', blogPost)
    .then((response) => {
      
      this.fetchPosts()
    })
    .catch((err) => {
      console.log(err)
    })

  }

  editBlogPost = (updatedBlogPost) => {
    this.setState({
      isPending: true,
    })
    axios.put(`https://629a0d587b866a90ec486a69.mockapi.io/posts/${updatedBlogPost.id}`, updatedBlogPost)
    .then((response) => {
      
      this.fetchPosts()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  handleEscape = (e) => {
    if (e.key === 'Escape' && this.state.showAddForm) {
      this.handleAddFormHide();
    }
  };

  handleSelectPost = (blogPost) => {
    this.setState({
      selectedPost: blogPost
    })
  }

  


  componentDidMount() {
    this.fetchPosts()

    window.addEventListener('keyup', this.handleEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleEscape);
  }

  render() {
    const blogPosts = this.state.blogArr.map((item) => {
      return (
        <BlogCard
          key={item.id}
          title={item.title}
          description={item.description}
          liked={item.liked}
          likePost={() => this.likePost(item)}
          deletePost={() => this.deletePost(item)}
          handleEditFormShow={this.handleEditFormShow}
          handleSelectPost= {() => this.handleSelectPost(item)}
        />
      );
    });

    const postOpacity = this.state.isPending ? 0.5 : 1
    
    return (
      <div className="blogPage">
      {this.state.isPending && <CircularProgress className='preloader' />}
      
        {this.state.showAddForm && (
          <AddPostForm addNewBlogPost={this.addNewBlogPost} blogArr={this.state.blogArr} handleAddFormHide={this.handleAddFormHide} />
        )}

        
          {
            this.state.showEditForm && (
              <EditPostForm 
              handleEditFormHide={this.handleEditFormHide} 
              selectedPost={this.state.selectedPost} 
              editBlogPost={this.editBlogPost}
               />
            )
          }
          <>
          <h1>Simple Blog</h1>
        <div className="addNewPost">
          
          <button onClick={this.handleAddFormShow} className="blackBtn">
            Создать пост
          </button>
        </div>

        <div className="posts" style={{opacity: postOpacity}}>
          {blogPosts}
          
          </div>
      </>

      </div>

    );
  }
}
