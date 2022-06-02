import React from 'react'
import './BlogContent.css'
import { posts } from '../../shared/ProjectData'
import BlogCard from './BlogCard'

export class BlogContent extends React.Component  {

  state = {
    showBlog: true,
    blogArr: JSON.parse(localStorage.getItem('blogPosts')) || posts
  }

  likePost = (pos) => {
    const temp = [...this.state.blogArr]
    temp[pos].liked = !temp[pos].liked

    this.setState({
      blogArr: temp
    })

    localStorage.setItem('blogPosts', JSON.stringify(temp))
  }

   

  toggleBlog = () => {
    this.setState({showBlog: !this.state.showBlog})
  }

  deletePost = (pos) => {
    if(window.confirm(`Удалить ${this.state.blogArr[pos].title}?`)) {
      const temp = [...this.state.blogArr]
    temp.splice(pos, 1)
    this.setState({
      blogArr: temp
    })
    localStorage.setItem('blogPosts', JSON.stringify(temp))
    }
    
    
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
          )
        })
        return (
          <>
          <button onClick={this.toggleBlog}>{
            this.state.showBlog ? 'скрыть блог' : 'показать блог'
          }</button>
          { this.state.showBlog &&
            <>
            <h1>Simple Blog</h1>
          <div className="posts">
            {blogPosts}
          </div>
          </>
          }
          
  
          
          
          </>
      )
      }
   
}