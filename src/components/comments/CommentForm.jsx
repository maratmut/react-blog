import React, { useState } from 'react';

const CommentForm = ({
  btnLabel,
  formSubmitHandler,
  formCancelHandler = null,
  initialText = '',
}) => {
  const [value, setValue] = useState(initialText);

  const submitHandler = (e) => {
    e.preventDefault();
    formSubmitHandler(value);
    setValue('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col items-end border border-primary rounded-lg p-4">
        <textarea
          onChange={(e) => setValue(e.target.value)}
          className="w-full focus:outline-none bg-transparent"
          rows="5"
          placeholder="Оставьте свой комментарий"
          value={value}
        />
        <div className="flex items-center gap-x-2 pt-2">
          {formCancelHandler && (
            <button
              onClick={formCancelHandler}
              className="px-6 py-2.5 rounded-lg border border-red-500 text-red-500">
              Закрыть
            </button>
          )}
          <button
            type="submit"
            className="px-6 py-2.5 rounded-lg bg-primary text-white font-semibold">
            {btnLabel}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
