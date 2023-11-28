import React from 'react';
import PropTypes from 'prop-types';
import {
  FaRegThumbsDown, FaRegThumbsUp,
} from 'react-icons/fa';
import { postedAt } from '../../utils';
import CardHeader from '../styled/cards/CardHeader';
import CardContent from '../styled/cards/CardContent';
import UserProfile from '../styled/UserProfile';
import UserImage from '../styled/UserImage';
import CardFooter from '../styled/cards/CardFooter';
import ButtonFlex from '../styled/buttons/ButtonFlex';
import ButtonIcon from '../styled/buttons/ButtonIcon';

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
    <section className="thread-detail thread-comment">
      <CardHeader inline style={{ justifyContent: 'space-between' }}>
        <UserProfile>
          <UserImage src={owner.avatar} alt={owner.name} />
          <h4>{owner.name}</h4>
        </UserProfile>
        <div className="thread-comment__createdAt">{postedAt(createdAt)}</div>
      </CardHeader>
      <CardContent>
        <p className="thread-item__text">
          {content.replace(/<[^>]+>/g, '').substring(0, 200)}
        </p>
        <CardFooter>
          <ButtonFlex>
            <ButtonIcon type="button" className="btn__action" onClick={onUpVoteCommentClick} aria-label="up vote">
              <FaRegThumbsUp />
            </ButtonIcon>
            {' '}
            {upVotesBy.length}
          </ButtonFlex>
          <ButtonFlex>
            <ButtonIcon type="button" className="btn__action" onClick={onDownVoteCommentClick} aria-label="down vote">
              <FaRegThumbsDown />
            </ButtonIcon>
            {' '}
            {downVotesBy.length}
          </ButtonFlex>
        </CardFooter>
      </CardContent>
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
