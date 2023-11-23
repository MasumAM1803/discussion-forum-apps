/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { FaRegThumbsUp, FaRegThumbsDown, FaRegCommentDots } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
import { postedAt } from '../../utils';

function Item({
  // id, title, body, createdAt, likes, user, authUser, like,
  title, body, category, createdAt, ownerId, upVotesBy, downVotesBy, totalComments, user, authUser,
}) {
  function extractContent(s, space) {
    const span = document.createElement('span');
    span.innerHTML = s;
    if (space) {
      const children = span.querySelectorAll('*');
      for (let i = 0; i < children.length; i++) {
        if (children[i].textContent) { children[i].textContent += ' '; } else { children[i].innerText += ' '; }
      }
    }
    return [span.textContent || span.innerText].toString().replace(/ +/g, ' ');
  }
  // const navigate = useNavigate();
  // const isThreadLiked = likes.includes(authUser);

  // const onLikeClick = (event) => {
  //   event.stopPropagation();
  //   like(id);
  // };

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
          <a href="#" className="thread-item__user-name">
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
              <FaRegThumbsUp />
              {' '}
              {upVotesBy.length}
            </div>
            <div>
              <FaRegThumbsDown />
              {' '}
              {downVotesBy.length}
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  likes: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

Item.propTypes = {
  ...threadItemShape,
  // like: PropTypes.func,
};

Item.defaultProps = {
  like: null,
};

export { threadItemShape };

export default Item;
