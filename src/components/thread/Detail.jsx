/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import {
  FaRegThumbsDown, FaRegThumbsUp,
} from 'react-icons/fa';
import Comment from './Comment';
import { postedAt } from '../../utils';
import CommentInput from './CommentInput';

function Detail({
  id,
  title,
  body,
  category,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  comments,
  authUser,
  upVote,
  downVote,
  neutralVote,
  upVoteComment,
  downVoteComment,
  neutralVoteComment,
  addComment,
}) {
  const isUpVoteThread = upVotesBy.includes(authUser);
  const isDownVoteThread = downVotesBy.includes(authUser);

  const onUpVoteClick = (event) => {
    event.stopPropagation();
    isUpVoteThread ? neutralVote(id) : upVote(id);
  };

  const onDownVoteClick = (event) => {
    event.stopPropagation();
    isDownVoteThread ? neutralVote(id) : downVote(id);
  };

  const onAddComment = ({ content }) => {
    addComment({ content });
  };

  return (
    <section className="thread-detail">
      <header>
        <div className="badge">
          {category}
        </div>
        <h1 className="thread-item__user-title">{title}</h1>
      </header>
      <article>
        <p className="thread-item__text">
          {body.replace(/<[^>]+>/g, '').substring(0, 200)}
        </p>
        <div className="thread-item__action">
          <div>
            <button type="button" className="btn__action" onClick={onUpVoteClick} aria-label="up vote">
              <FaRegThumbsUp />
            </button>
            {' '}
            {upVotesBy.length}
          </div>
          <div>
            <button type="button" className="btn__action" onClick={onDownVoteClick} aria-label="down vote">
              <FaRegThumbsDown />
            </button>
            {' '}
            {downVotesBy.length}
          </div>
          <div>{postedAt(createdAt)}</div>
          <div style={{ margin: '20px 0px' }}>
            Dibuat oleh
            {' '}
            <strong>{owner.name}</strong>
          </div>
        </div>
      </article>
      <section>
        <CommentInput addComment={onAddComment} />
      </section>
      <section>
        <h2>
          Komentar (
          {comments.length}
          )
        </h2>
        {
         comments.map((comment) => (
           <Comment
             key={comment.id}
             {...comment}
             threadId={id}
             authUser={authUser}
             upVoteComment={upVoteComment}
             downVoteComment={downVoteComment}
             neutralVoteComment={neutralVoteComment}
           />
         ))
      }
      </section>
    </section>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  addComment: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired,
};

Detail.propTypes = {
  ...threadItemShape,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
  neutralVote: PropTypes.func,
};

Detail.defaultProps = {
  upVote: null,
  downVote: null,
  neutralVote: null,
};

export default Detail;
