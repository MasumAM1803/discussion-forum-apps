import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiPlusCircle } from 'react-icons/fi';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import List from '../components/thread/List';
import { asyncDownVoteThread, asyncNeutralVoteThread, asyncUpVoteThread } from '../states/threads/action';
import { Link } from 'react-router-dom';

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

  // const onAddTalk = (text) => {
  //   // @TODO: dispatch async action to add talk

  // };

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
      <List
        threads={threadList}
        upVote={onUpVote}
        downVote={onDownVote}
        neutralVote={onNeutralVote}
      />
      <Link to="/threads/new">
        <button type="button" className="add-new-page__action" aria-label="add"><FiPlusCircle /></button>
      </Link>
    </section>
  );
}

export default HomePage;
