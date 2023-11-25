import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '../components/leaderboard/List';
import { asyncReceiveLeaderboard } from '../states/leaderboards/action';

function Leaderboard() {
  const {
    leaderboards = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboard());
  }, [dispatch]);

  if (!leaderboards) {
    return null;
  }
  return (
    <section className="home-page">
      <h2>Klasmen Pengguna Aktif</h2>
      <List
        leaderboards={leaderboards}
      />
    </section>
  );
}

export default Leaderboard;
