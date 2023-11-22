/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
// import { FaRegHeart, FaHeart } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
import { postedAt } from '../../utils';

function Item({
  // id, title, body, createdAt, likes, user, authUser, like,
  title, body, createdAt, user, authUser, likes,
}) {
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
      <div className="thread-item__user-photo">
        <img src={user.avatar} alt={user} />
      </div>
      <div className="thread-item__detail">
        <header>
          <div className="thread-item__user-info">
            <p className="thread-item__user-name">{user.name}</p>
            <p className="thread-item__user-id">
              @
              {user.id}
            </p>
          </div>
          <p className="thread-item__created-at">{postedAt(createdAt)}</p>
        </header>
        <article>
          <h2 className="thread-item__text">{title}</h2>
          <p className="thread-item__text">{body}</p>
        </article>
        {/* {
          like && (
            <div className="thread-item__likes">
              <p>
                <button type="button" aria-label="like" onClick={onLikeClick}>
                  { isThreadLiked ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
                </button>
                {' '}
                {likes.length}
              </p>
            </div>
          )
        } */}
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
