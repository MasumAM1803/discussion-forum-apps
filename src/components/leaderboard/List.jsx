import React from 'react';
import PropTypes from 'prop-types';

function List({ leaderboards }) {
  return (
    <div className="leaderboards-list">
      <div className="standing-header">
        <h3>Pengguna</h3>
        <h3>Skor</h3>
      </div>
      {
         leaderboards.map((leaderboard) => (
           <div key={leaderboard.user.id} className="standing-item">
             <div className="user-profile">
               <img src={leaderboard.user.avatar} alt={leaderboard.user.name} />
               <h4>{leaderboard.user.name}</h4>
             </div>
             <div>{leaderboard.score}</div>
           </div>
         ))
      }
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const leaderboardItemShape = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};

List.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardItemShape)).isRequired,
};

export default List;
