import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ThreadDetail from '../../components/thread/Detail';
import {
  asyncAddComment,
  asyncReceiveThreadDetail,
  asyncDownVoteThread,
  asyncNeutralVoteThread,
  asyncUpVoteThread,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralVoteComment,
} from '../../states/threadDetail/action';

function Detail() {
  const { id } = useParams();
  const {
    detailThread = null,
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onAddComment = ({ content }) => {
    dispatch(asyncAddComment({ id, content }));
  };

  const onUpVote = (id) => {
    dispatch(asyncUpVoteThread(id));
  };

  const onDownVote = (id) => {
    dispatch(asyncDownVoteThread(id));
  };

  const onNeutralVote = (id) => {
    dispatch(asyncNeutralVoteThread(id));
  };

  const onUpVoteComment = (threadId, id) => {
    dispatch(asyncUpVoteComment(threadId, id));
  };

  const onDownVoteComment = (threadId, id) => {
    dispatch(asyncDownVoteComment(threadId, id));
  };

  const onNeutralVoteComment = (threadId, id) => {
    dispatch(asyncNeutralVoteComment(threadId, id));
  };

  if (!detailThread) {
    return null;
  }

  return (
    <section className="detail-page">
      <ThreadDetail
        {...detailThread}
        authUser={authUser.id}
        addComment={onAddComment}
        upVote={onUpVote}
        downVote={onDownVote}
        neutralVote={onNeutralVote}
        upVoteComment={onUpVoteComment}
        downVoteComment={onDownVoteComment}
        neutralVoteComment={onNeutralVoteComment}
      />
    </section>
  );
}

export default Detail;
