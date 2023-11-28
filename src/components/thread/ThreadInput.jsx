import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';
import InputField from '../styled/InputField';
import TextArea from '../styled/TextArea';

function ThreadInput({ addThread }) {
  const [title, handleTitleChange] = useInput('');
  const [body, handleBodyChange] = useInput('');
  const [category, handleCategoryChange] = useInput('');

  return (
    <form className="thread-input">
      <InputField type="text" placeholder="Judul" value={title} onChange={handleTitleChange} />
      <InputField type="text" placeholder="Kategori" value={category} onChange={handleCategoryChange} />
      <TextArea type="text" placeholder="" value={body} onChange={handleBodyChange} />
      <p className="thread-input__char-left">
        <strong>{body.length}</strong>
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
