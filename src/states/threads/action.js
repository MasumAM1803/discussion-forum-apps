// import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  // ADD_THREAD: 'ADD_THREAD',
  // TOGGLE_LIKE_THREAD: 'TOGGLE_LIKE_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

// function addTalkActionCreator(thread) {
//   return {
//     type: ActionType.ADD_THREAD,
//     payload: {
//       thread,
//     },
//   };
// }

// function toggleLikeTalkActionCreator({ threadId, userId }) {
//   return {
//     type: ActionType.TOGGLE_LIKE_THREAD,
//     payload: {
//       threadId,
//       userId,
//     },
//   };
// }

// function asyncAddTalk({ text, replyTo = '' }) {
//   return async (dispatch) => {
//     try {
//       const thread = await api.createTalk({ text, replyTo });
//       dispatch(addTalkActionCreator(thread));
//     } catch (error) {
//       alert(error.message);
//     }
//   };
// }

// function asyncToogleLikeTalk(threadId) {
//   return async (dispatch, getState) => {
//     const { authUser } = getState();
//     dispatch(toggleLikeTalkActionCreator({ threadId, userId: authUser.id }));

//     try {
//       await api.toggleLikeTalk(threadId);
//     } catch (error) {
//       alert(error.message);
//       dispatch(toggleLikeTalkActionCreator({ threadId, userId: authUser.id }));
//     }
//   };
// }

export {
  ActionType,
  receiveThreadsActionCreator,
  // addTalkActionCreator,
  // toggleLikeTalkActionCreator,
  // asyncAddTalk,
  // asyncToogleLikeTalk,
};
