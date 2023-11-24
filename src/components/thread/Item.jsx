/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { FaRegThumbsUp, FaRegThumbsDown, FaRegCommentDots } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
import { postedAt } from '../../utils';

function Item({
  // id, title, body, category, createdAt, upVotesBy, ownerId, downVotesBy, totalComments, user, upVote, downVote, neutralVote
  id, title, body, category, createdAt, upVotesBy, downVotesBy, totalComments, user, upVote, downVote, neutralVote, authUser,
}) {
  // const navigate = useNavigate();
  const isUpVoteThread = upVotesBy.includes(authUser);
  const isDownVoteThread = downVotesBy.includes(authUser);
  // let upVoteLength = upVotesBy.length;
  // let downVoteLength = downVotesBy.length;

  const onUpVoteClick = (event) => {
    event.stopPropagation();
    isUpVoteThread ? neutralVote(id) : upVote(id);
  };

  const onDownVoteClick = (event) => {
    event.stopPropagation();
    isDownVoteThread ? neutralVote(id) : downVote(id);
  };

  // const onThreadClick = () => {
  //   navigate(`/threads/${id}`);
  // };

  // const onThreadPress = (event) => {
  //   if (event.key === 'Enter' || event.key === ' ') {
  //     navigate(`/threads/${id}`);
  //   }
  // };

  return (
    // <div role="button" tabIndex={0} className="thread-item" onClick={onThreadClick} onKeyDown={onThreadPress}>
    <div role="button" tabIndex={0} className="thread-item">
      <div className="thread-item__detail">
        <header style={{ display: 'block' }}>
          <div style={{
            padding: '4px 5px', border: '1px solid black', borderRadius: '5px', width: 'fit-content',
          }}
          >
            {category}
          </div>
          <a href={`/threads/${id}`} className="thread-item__user-name">
            <h4 className="">{title}</h4>
          </a>
        </header>
        <article>
          <p className="thread-item__text">
            {body.replace(/<[^>]+>/g, '').substring(0, 200)}
            {/* {extractContent(body)} */}
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div>
              <button type="button" onClick={onUpVoteClick} aria-label="up vote">
                <FaRegThumbsUp />
              </button>
              {' '}
              {
                isDownVoteThread
                  ? upVotesBy.length === 0 ? upVotesBy.length : upVotesBy.length - 1
                  : upVotesBy.length === 0 ? upVotesBy.length + 1 : upVotesBy.length
              }
            </div>
            <div>
              <button type="button" onClick={onDownVoteClick} aria-label="down vote">
                <FaRegThumbsDown />
              </button>
              {' '}
              {/* {downVotesBy.length} */}
              {
                isUpVoteThread
                  ? downVotesBy.length === 0 ? downVotesBy.length : downVotesBy.length - 1
                  : downVotesBy.length === 0 ? downVotesBy.length + 1 : downVotesBy.length
              }
              {/* { isUpVoteThread ? downVotesBy.length - 1 : downVotesBy.length} */}
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
