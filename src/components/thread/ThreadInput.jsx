import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function ThreadInput({ addThread }) {
  const [title, handleTitleChange] = useInput('');
  const [body, handleBodyChange] = useInput('');
  const [category, handleCategoryChange] = useInput('');

  return (
    <form className="thread-input">
      <input className="new-thread__input" type="text" placeholder="Judul" value={title} onChange={handleTitleChange} />
      <input className="new-thread__input" type="text" placeholder="Kategori" value={category} onChange={handleCategoryChange} />
      <textarea type="text" placeholder="" value={body} onChange={handleBodyChange} />
      <p className="thread-input__char-left">
        <strong>{title.length}</strong>
        /320
      </p>
      <button type="submit" onClick={() => addThread({ title, body, category })}>Thread</button>
    </form>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
