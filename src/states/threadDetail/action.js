import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  // TOGGLE_LIKE_THREAD_DETAIL: 'TOGGLE_LIKE_THREAD_DETAIL',
};

function receiveThreadDetailActionCreator(detailThread) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      detailThread,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

// function toggleLikeThreadDetailActionCreator(userId) {
//   return {
//     type: ActionType.TOGGLE_LIKE_THREAD_DETAIL,
//     payload: {
//       userId,
//     },
//   };
// }

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(clearThreadDetailActionCreator());
    try {
      const detailThread = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(detailThread));
    } catch (error) {
      alert(error.message);
    }
  };
}

// function asyncToogleLikeThreadDetail() {
//   return async (dispatch, getState) => {
//     const { authUser, detailThread } = getState();
//     dispatch(toggleLikeThreadDetailActionCreator(authUser.id));

//     try {
//       await api.toggleLikeThread(detailThread.id);
//     } catch (error) {
//       alert(error.message);
//     }
//   };
// }

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  // toggleLikeThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  // asyncToogleLikeThreadDetail,
};
