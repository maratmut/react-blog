import React from 'react'
import './BlogCard.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const BlogCard = ({
    title, 
    description, 
    liked, 
    likePost, 
    deletePost,
    handleEditFormShow,
    handleSelectPost,
}) =>  {
    
    const heartFill = liked ? 'crimson' : 'black'

    const showEditForm = () => {
        handleSelectPost()
        handleEditFormShow()
    }

    return (
        <div className='post'>
            <div className="postContent">
                <h2>{title}</h2>
            <p>{description}</p>
            <div>
                <button onClick={likePost}>
                    <FavoriteIcon style={{fill: heartFill}} />
                </button>
            </div>
            </div>
            
            <div className="postControl" >
                <button className='editBtn' onClick={showEditForm}>
                    <EditIcon />
                </button>
                <button className='deleteBtn'>
                    <DeleteForeverIcon onClick={deletePost} />
            </button>
                
            </div>

            
            
            
          </div>
      )
  
}

export default BlogCard