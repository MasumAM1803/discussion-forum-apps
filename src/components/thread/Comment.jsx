import React from 'react';
import PropTypes from 'prop-types';
import {
  FaRegThumbsDown, FaRegThumbsUp,
} from 'react-icons/fa';
import { postedAt } from '../../utils';

function Comment({
  // id, title, body, category, createdAt, upVotesBy, downVotesBy, comments, user,
  content, createdAt, owner, upVotesBy, downVotesBy,
}) {
  // const isThreadLiked = likes.includes(authUser);

  return (
    <section className="thread-detail">
      <header style={{ display: 'flex' }}>
        <h4>{owner.name}</h4>
      </header>
      <article>
        <p className="thread-item__text">
          {content.replace(/<[^>]+>/g, '').substring(0, 200)}
          {/* {extractContent(body)} */}
        </p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <FaRegThumbsUp />
            {' '}
            {upVotesBy.length}
          </div>
          <div>
            <FaRegThumbsDown />
            {' '}
            {downVotesBy.length}
          </div>
          <div>{postedAt(createdAt)}</div>
        </div>
      </article>
    </section>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Comment.propTypes = {
//   id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  // authUser: PropTypes.string.isRequired,
};

export default Comment;
