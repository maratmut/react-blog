import React from 'react';
import { images } from '../../constants';
import { FiMessageSquare, FiEdit2, FiTrash } from 'react-icons/fi';
import CommentForm from './CommentForm';

const Comment = ({
  comment,
  logginedUserId,
  affectedComment,
  setAffectedComment,
  addComment,
  parentId = null,
  updateComment,
  deleteComment,
  replies,
}) => {
  const isUserLoggined = Boolean(logginedUserId);
  const commentBelongsToUser = logginedUserId === comment.user._id;
  const isReplying =
    affectedComment && affectedComment.type === 'replying' && affectedComment._id === comment._id;

  const isEditing =
    affectedComment && affectedComment.type === 'editing' && affectedComment._id === comment._id;

  const repliedCommentId = parentId ? parentId : comment._id;
  const replyOnUserId = comment.user._id;

  return (
    <div className="flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] p-3 rounded-lg">
      <img
        src={images.PostProfileImage}
        className="w-9 h-9 object-cover rounded-full"
        alt="профиль пользователя"
      />
      <div className="flex-1 flex flex-col">
        <h5 className="font-bold text-dark-hard text-xs">{comment.user.name}</h5>
        <span className="text-xs text-dark-light">
          {new Date(comment.createdAt).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
          })}
        </span>
        {!isEditing && <p className="font-opensans mt-[10px] text-dark-light">{comment.desc}</p>}

        {isEditing && (
          <CommentForm
            btnLabel="Обновить"
            formSubmitHandler={(value) => updateComment(value, comment._id)}
            formCancelHandler={() => setAffectedComment(null)}
            initialText={comment.desc}
          />
        )}
        <div className="flex items-center gap-x-3 text-dark-light font-roboto text-[12px] mt-3 mb-3">
          {isUserLoggined && (
            <button
              onClick={() => setAffectedComment({ type: 'replying', _id: comment._id })}
              className="flex items-center space-x-2">
              <FiMessageSquare className="w-h h-auto" />
              <span>Ответить</span>
            </button>
          )}

          {commentBelongsToUser && (
            <>
              <button
                onClick={() => setAffectedComment({ type: 'editing', _id: comment._id })}
                className="flex items-center space-x-2">
                <FiEdit2 className="w-h h-auto" />
                <span>Редактировать</span>
              </button>
              <button
                onClick={() => deleteComment(comment._id)}
                className="flex items-center space-x-2">
                <FiTrash className="w-h h-auto" />
                <span>Удалить</span>
              </button>
            </>
          )}
        </div>
        {isReplying && (
          <CommentForm
            btnLabel="Ответить"
            formSubmitHandler={(value) => addComment(value, repliedCommentId, replyOnUserId)}
            formCancelHandler={() => setAffectedComment(null)}
          />
        )}
        {replies.length > 0 && (
          <div>
            {replies.map((reply) => (
              <Comment
                key={reply._id}
                addComment={addComment}
                affectedComment={affectedComment}
                setAffectedComment={setAffectedComment}
                comment={reply}
                deleteComment={deleteComment}
                logginedUserId={logginedUserId}
                replies={[]}
                updateComment={updateComment}
                parentId={comment._id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
