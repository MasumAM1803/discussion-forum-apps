/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import {
  FaRegThumbsDown, FaRegThumbsUp,
} from 'react-icons/fa';
import { postedAt } from '../../utils';

function Comment({
  threadId,
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  upVoteComment,
  downVoteComment,
  neutralVoteComment,
  authUser,
}) {
  const isUpVoteComment = upVotesBy.includes(authUser);
  const isDownVoteComment = downVotesBy.includes(authUser);

  const onUpVoteCommentClick = (event) => {
    event.stopPropagation();
    isUpVoteComment ? neutralVoteComment(threadId, id) : upVoteComment(threadId, id);
  };

  const onDownVoteCommentClick = (event) => {
    event.stopPropagation();
    isDownVoteComment ? neutralVoteComment(threadId, id) : downVoteComment(threadId, id);
  };

  return (
    <section className="thread-detail">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src={owner.avatar} alt={owner.name} />
          <h4>{owner.name}</h4>
        </div>
        <div>{postedAt(createdAt)}</div>
      </header>
      <article>
        <p className="thread-item__text">
          {content.replace(/<[^>]+>/g, '').substring(0, 200)}
        </p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <button type="button" onClick={onUpVoteCommentClick} aria-label="up vote">
              <FaRegThumbsUp />
            </button>
            {' '}
            {upVotesBy.length}
          </div>
          <div>
            <button type="button" onClick={onDownVoteCommentClick} aria-label="down vote">
              <FaRegThumbsDown />
            </button>
            {' '}
            {downVotesBy.length}
          </div>
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

const commentItemShape = {
  threadId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
};

Comment.propTypes = {
  ...commentItemShape,
  upVoteComment: PropTypes.func,
  downVoteComment: PropTypes.func,
  neutralVoteComment: PropTypes.func,
};

Comment.defaultProps = {
  upVoteComment: null,
  downVoteComment: null,
  neutralVoteComment: null,
};

export default Comment;
