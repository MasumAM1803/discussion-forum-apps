import React from 'react';
import PropTypes from 'prop-types';
import { FaRegThumbsUp, FaRegThumbsDown, FaRegCommentDots } from 'react-icons/fa';
import { Markup } from 'interweave';
import { Link } from 'react-router-dom';
import { postedAt } from '../../utils';
import Card from '../styled/cards/Card';
import CardHeader from '../styled/cards/CardHeader';
import CardContent from '../styled/cards/CardContent';
import CardFooter from '../styled/cards/CardFooter';
import ButtonIcon from '../styled/buttons/ButtonIcon';
import ButtonFlex from '../styled/buttons/ButtonFlex';
import UserProfile from '../styled/UserProfile';

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
    <Card>
      <div className="thread-item__detail">
        <CardHeader>
          <div className="badge">
            {category}
          </div>
          <Link to={`/threads/${id}`} className="thread-item__user-name">
            <h3 className="thread-item__user-title">{title}</h3>
          </Link>
        </CardHeader>
        <CardContent>
          {
          body.length < 280
            ? <Markup content={body} className="thread-item__text" />
            : <Markup content={`${body.substring(0, 280)}...`} className="thread-item__text" />
          }
          <CardFooter>
            <ButtonFlex>
              <ButtonIcon type="button" onClick={onUpVoteClick} aria-label="up vote">
                <FaRegThumbsUp />
              </ButtonIcon>
              {' '}
              {
                upVotesBy.length
              }
            </ButtonFlex>
            <ButtonFlex>
              <ButtonIcon type="button" onClick={onDownVoteClick} aria-label="down vote">
                <FaRegThumbsDown />
              </ButtonIcon>
              {' '}
              {
                downVotesBy.length
              }
            </ButtonFlex>
            <ButtonFlex>
              <FaRegCommentDots />
              {' '}
              {totalComments}
            </ButtonFlex>
            <div>{postedAt(createdAt)}</div>
            <UserProfile>
              Dibuat oleh
              {' '}
              <strong>{user.name}</strong>
            </UserProfile>
          </CardFooter>
        </CardContent>
      </div>
    </Card>
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
