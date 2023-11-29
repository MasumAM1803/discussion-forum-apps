import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
  UP_VOTE_THREAD_DETAIL: 'UP_VOTE_THREAD_DETAIL',
  DOWN_VOTE_THREAD_DETAIL: 'DOWN_VOTE_THREAD_DETAIL',
  NEUTRAL_VOTE_THREAD_DETAIL: 'NEUTRAL_VOTE_THREAD_DETAIL',
  UP_VOTE_COMMENT: 'UP_VOTE_COMMENT',
  DOWN_VOTE_COMMENT: 'DOWN_VOTE_COMMENT',
  NEUTRAL_VOTE_COMMENT: 'NEUTRAL_VOTE_COMMENT',
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

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function upVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function downVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function neutralVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.NEUTRAL_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function upVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.UP_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function downVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function neutralVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.NEUTRAL_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearThreadDetailActionCreator());
    try {
      const detailThread = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(detailThread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncAddComment({ id, content }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const comment = await api.createComment({ id, content });
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralVoteThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(neutralVoteThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.neutralVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(neutralVoteThreadActionCreator({ threadId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(upVoteThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.upVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(asyncNeutralVoteThread(threadId));
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(downVoteThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.downVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(asyncNeutralVoteThread(threadId));
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralVoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(neutralVoteCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.neutralVoteComment(threadId, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(neutralVoteCommentActionCreator({ commentId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(upVoteCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.upVoteComment(threadId, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(asyncNeutralVoteComment(threadId, commentId));
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(downVoteCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.downVoteComment(threadId, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(asyncNeutralVoteComment(threadId, commentId));
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  addCommentActionCreator,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
  neutralVoteThreadActionCreator,
  upVoteCommentActionCreator,
  downVoteCommentActionCreator,
  neutralVoteCommentActionCreator,
  asyncReceiveThreadDetail,
  asyncAddComment,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralVoteThread,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralVoteComment,
};
