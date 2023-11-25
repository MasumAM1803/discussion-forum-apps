import React from 'react';
import PropTypes from 'prop-types';
import { FaRegThumbsUp, FaRegThumbsDown, FaRegCommentDots } from 'react-icons/fa';
import { Markup } from 'interweave';
import { postedAt } from '../../utils';

function Item({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  user,
  upVote,
  downVote,
  neutralVote,
  authUser,
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

  return (
    <div className="thread-item">
      <div className="thread-item__detail">
        <header>
          <div className="badge">
            {category}
          </div>
          <a href={`/threads/${id}`} className="thread-item__user-name">
            <h3 className="thread-item__user-title">{title}</h3>
          </a>
        </header>
        <article>
          {
          body.length < 280
            ? <Markup content={body} className="thread-item__text" />
            : <Markup content={`${body.substring(0, 280)}...`} className="thread-item__text" />
          }
          <div className="thread-item__action">
            <div>
              <button type="button" className="btn__action" onClick={onUpVoteClick} aria-label="up vote">
                <FaRegThumbsUp />
              </button>
              {' '}
              {
                upVotesBy.length
              }
            </div>
            <div>
              <button type="button" className="btn__action" onClick={onDownVoteClick} aria-label="down vote">
                <FaRegThumbsDown />
              </button>
              {' '}
              {
                downVotesBy.length
              }
            </div>
            <div>
              <FaRegCommentDots />
              {' '}
              {totalComments}
            </div>
            <div>{postedAt(createdAt)}</div>
            <div>
              Dibuat oleh
              {' '}
              <strong>{user.name}</strong>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

const userShape = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

Item.propTypes = {
  ...threadItemShape,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
  neutralVote: PropTypes.func,
};

Item.defaultProps = {
  upVote: null,
  downVote: null,
  neutralVote: null,
};

export { threadItemShape };

export default Item;
