import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import List from '../components/thread/List';

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

  // const onLike = (id) => {
  //   // @TODO: dispatch async action to toggle like talk
  // };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      <List threads={threadList} />
    </section>
  );
}

export default HomePage;
