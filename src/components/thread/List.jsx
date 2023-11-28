import React from 'react';
import PropTypes from 'prop-types';
import Item, { threadItemShape } from './Item';
import Container from '../styled/Container';
import Flex from '../styled/Flex';

function List({
  threads, upVote, downVote, neutralVote,
}) {
  return (
    <Container>
      <Flex>
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
      </Flex>
    </Container>
  );
}

List.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
};

export default List;
