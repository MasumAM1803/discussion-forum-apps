import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    // @TODO: dispatch async action to populate talks and users data
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
    user: users.find((user) => user.id === thread.user),
    authUser: authUser.id,
  }));

  console.log(threadList);

  return (
    <section className="home-page">
      <p>Thread</p>
    </section>
  );
}

export default HomePage;
