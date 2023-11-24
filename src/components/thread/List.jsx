import React from 'react';
import PropTypes from 'prop-types';
import Item, { threadItemShape } from './Item';

function List({
  threads, upVote, downVote, neutralVote,
}) {
  return (
    <div className="threads-list">
      {
         threads.map((thread) => (
           <Item
             key={thread.id}
             {...thread}
             upVote={upVote}
             downVote={downVote}
             neutralVote={neutralVote}
           />
         ))
      }
    </div>
  );
}

List.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
};

export default List;
