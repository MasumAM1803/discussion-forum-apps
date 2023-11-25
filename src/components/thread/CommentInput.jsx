import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function CommentInput({ addComment }) {
  const [content, handleContentChange] = useInput('');

  return (
    <form className="thread-input">
      <textarea type="text" placeholder="" value={content} onChange={handleContentChange} />
      <button type="submit" onClick={() => addComment({ content })}>Kirim</button>
    </form>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentInput;
