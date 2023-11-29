import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';
import TextArea from '../styled/TextArea';

function CommentInput({ addComment }) {
  const [content, handleContentChange, setContent] = useInput('');

  function addcomment() {
    addComment({ content });
    setContent('');
  }

  return (
    <form className="thread-input thread-comment__input">
      <TextArea id="comment-input" type="text" placeholder="" value={content} onChange={handleContentChange} />
      <p className="thread-input__char-left">
        <strong>{content.length}</strong>
        /320
      </p>
      <button type="button" onClick={addcomment}>Kirim</button>
    </form>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentInput;
