import React from 'react';
import './BlogContent.css';
import { posts } from '../../shared/ProjectData';
import BlogCard from './BlogCard';
import { AddPostForm } from './AddPostForm';
import { SatelliteAlt } from '@mui/icons-material';
import axios from 'axios';

export class BlogContent extends React.Component {
  state = {
    showAddForm: false,
    blogArr: [],
  };

  likePost = (pos) => {
    const temp = [...this.state.blogArr];
    temp[pos].liked = !temp[pos].liked;

    this.setState({
      blogArr: temp,
    });

    localStorage.setItem('blogPosts', JSON.stringify(temp));
  };

  deletePost = (pos) => {
    if (window.confirm(`Удалить ${this.state.blogArr[pos].title}?`)) {
      const temp = [...this.state.blogArr];
      temp.splice(pos, 1);
      this.setState({
        blogArr: temp,
      });
      localStorage.setItem('blogPosts', JSON.stringify(temp));
    }
  };
  handleAddFormShow = () => {
    this.setState({
      showAddForm: true,
    });
  };

  handleAddFormHide = () => {
    this.setState({
      showAddForm: false,
    });
  };

  
  addNewBlogPost = (blogPost) => {
    this.setState((state) => {
      const posts = [...state.blogArr]
      posts.push(blogPost)
      localStorage.setItem('blogPosts', JSON.stringify(posts));
      return {
        blogArr: posts
      }
    })

  }

  handleEscape = (e) => {
    if (e.key === 'Escape' && this.state.showAddForm) {
      this.handleAddFormHide();
    }
  };


  componentDidMount() {
    axios.get("https://629a0d587b866a90ec486a69.mockapi.io/posts").then((response) => {
      this.setState({
        blogArr: response.data
      })
    })

    window.addEventListener('keyup', this.handleEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleEscape);
  }

  render() {
    const blogPosts = this.state.blogArr.map((item, pos) => {
      return (
        <BlogCard
          key={item.id}
          title={item.title}
          description={item.description}
          liked={item.liked}
          likePost={() => this.likePost(pos)}
          deletePost={() => this.deletePost(pos)}
        />
      );
    });
    return (
      <>
        {this.state.showAddForm && (
          <AddPostForm addNewBlogPost={this.addNewBlogPost} blogArr={this.state.blogArr} handleAddFormHide={this.handleAddFormHide} />
        )}

        <h1>Simple Blog</h1>
        <button onClick={this.handleAddFormShow} className="blackBtn">
          Создать пост
        </button>
        <div className="posts">{blogPosts}</div>
      </>
    );
  }
}
