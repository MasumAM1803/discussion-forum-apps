import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';
import TextArea from '../styled/TextArea';

function CommentInput({ addComment }) {
  const [content, handleContentChange] = useInput('');

  return (
    <form className="thread-input thread-comment__input">
      <TextArea type="text" placeholder="" value={content} onChange={handleContentChange} />
      <p className="thread-input__char-left">
        <strong>{content.length}</strong>
        /320
      </p>
      <button type="submit" onClick={() => addComment({ content })}>Kirim</button>
    </form>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentInput;
