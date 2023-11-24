import React from 'react';
import PropTypes from 'prop-types';
import {
  FaRegThumbsDown, FaRegThumbsUp,
} from 'react-icons/fa';
import { postedAt } from '../../utils';

function Detail({
  // id, title, body, category, createdAt, upVotesBy, downVotesBy, comments, user,
  id, title, body, category, createdAt, upVotesBy, downVotesBy, owner,
}) {
  // const isThreadLiked = likes.includes(authUser);

  return (
    <section className="thread-detail">
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
            <FaRegThumbsUp />
            {' '}
            {upVotesBy.length}
          </div>
          <div>
            <FaRegThumbsDown />
            {' '}
            {downVotesBy.length}
          </div>
          {/* <div>
            <FaRegCommentDots />
            {' '}
            {totalComments}
          </div> */}
          <div>{postedAt(createdAt)}</div>
          <div>
            Dibuat oleh
            {' '}
            <strong>{owner.name}</strong>
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

Detail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  // totalComments: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  // authUser: PropTypes.string.isRequired,
};

export default Detail;
