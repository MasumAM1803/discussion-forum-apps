import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaCirclePlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import List from '../components/thread/List';
import { asyncDownVoteThread, asyncNeutralVoteThread, asyncUpVoteThread } from '../states/threads/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpVote = (id) => {
    dispatch(asyncUpVoteThread(id));
  };

  const onDownVote = (id) => {
    dispatch(asyncDownVoteThread(id));
  };

  const onNeutralVote = (id) => {
    dispatch(asyncNeutralVoteThread(id));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      <h2>Diskusi Tersedia</h2>
      <List
        threads={threadList}
        upVote={onUpVote}
        downVote={onDownVote}
        neutralVote={onNeutralVote}
      />
      <Link to="/threads/new">
        <button type="button" className="add-new-page__action" aria-label="add"><FaCirclePlus /></button>
      </Link>
    </section>
  );
}

export default HomePage;
