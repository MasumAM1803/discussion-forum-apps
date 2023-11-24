import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ThreadDetail from '../../components/thread/Detail';
import ThreadItem from '../../components/thread/Item';
// import ThreadReplyInput from '../components/ThreadReplyInput';
import { asyncReceiveThreadDetail } from '../../states/threadDetail/action';
// import { asyncAddThread } from '../states/threads/action';

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

  // const onLikeThread = () => {
  //   dispatch(asyncToogleLikeThreadDetail());
  // };

  // const onReplyThread = (text) => {
  //   dispatch(asyncAddThread({ text, replyTo: id }));
  // };

  if (!detailThread) {
    return null;
  }

  return (
    <section className="detail-page">
      {
        detailThread.parent && (
          <div className="detail-page__parent">
            <h3>Replying To</h3>
            {/* <ThreadItem {...detailThread.parent} authUser={authUser.id} /> */}
            <ThreadItem {...detailThread.parent} authUser={authUser.id} />
          </div>
        )
      }
      {/* <ThreadDetail {...detailThread} /> */}
      <ThreadDetail {...detailThread} authUser={authUser.id} />
      {/* <ThreadReplyInput replyThread={onReplyThread} /> */}
    </section>
  );
}

export default Detail;
