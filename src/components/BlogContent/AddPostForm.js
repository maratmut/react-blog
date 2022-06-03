import './AddPostForm.css'
import CancelIcon from '@mui/icons-material/Cancel';

export const AddPostForm = ({ handleAddFormHide }) => {
    return (
        <>
        <form action="" className="addPostform">
            <h2>Создание поста</h2>
            <button onClick={handleAddFormHide} className='hideBtn'>
                <CancelIcon />
            </button>
            <div>
                <input type='text' name='postTitle' />
            </div>
            <div>
                <textarea name="postDescription" id="" cols="38" rows="10" />
            </div>
            <div>
                <button onClick={handleAddFormHide} className="blackBtn" type="button">Добавить пост</button>
            </div>
            
        </form>
        <div onClick={handleAddFormHide} className="overlay"></div>
       </>
    )
}