import React from 'react';
import PropTypes from 'prop-types';
import Item, { threadItemShape } from './Item';

function List({ threads }) {
  return (
    <div className="threads-list">
      {
         threads.map((thread) => (
           <Item key={thread.id} {...thread} />
         ))
      }
    </div>
  );
}

List.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  // like: PropTypes.func.isRequired,
};

export default List;
