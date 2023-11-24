import { ActionType } from './action';

function threadDetailReducer(detailThread = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.detailThread;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    // case ActionType.TOGGLE_LIKE_THREAD_DETAIL:
    //   return {
    //     ...detailThread,
    //     likes: detailThread.likes.includes(action.payload.userId)
    //       ? detailThread.likes.filter((id) => id !== action.payload.userId)
    //       : detailThread.likes.concat(action.payload.userId),
    //   };
    default:
      return detailThread;
  }
}

export default threadDetailReducer;
