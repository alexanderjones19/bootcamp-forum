import {
  GET_FORUMS,
  GET_FORUMS_SUCCESS,
  GET_FORUMS_FAIL,
  GET_ONE_FORUM,
  GET_ONE_FORUM_SUCCESS,
  GET_ONE_FORUM_FAIL,
  GET_DISCUSSIONS,
  GET_DISCUSSIONS_SUCCESS,
  GET_DISCUSSIONS_FAIL,
  HANDLE_INPUT_CHANGE,
  CREATE_DISCUSSION,
  CREATE_DISCUSSION_SUCCESS,
  CREATE_DISCUSSION_FAIL,
  GET_REPLIES,
  GET_REPLIES_SUCCESS,
  GET_REPLIES_FAIL,
  GET_ONE_DISCUSSION,
  GET_ONE_DISCUSSION_SUCCESS,
  GET_ONE_DISCUSSION_FAIL
} from './types';
import forumAPI from '../utils/forumAPI';

// get all forums
export const getAllForums = () => dispatch => {
  dispatch({ type: GET_FORUMS });
  forumAPI.getAllForums()
    .then(res => {
      dispatch({
        type: GET_FORUMS_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: GET_FORUMS_FAIL,
        payload: err
      })
    });
};

// get one forum by slug
export const getOneForum = (forumSlug) => dispatch => {
  dispatch({ type: GET_ONE_FORUM });
  forumAPI.getForumBySlug(forumSlug)
    .then(res => {
      dispatch({
        type: GET_ONE_FORUM_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ONE_FORUM_FAIL,
        payload: err
      })
    });
};

// get all discussions by forum slug
export const getAllDiscussions = (forumSlug) => dispatch => {
  dispatch({ type: GET_DISCUSSIONS });
  forumAPI.getAllDiscussions(forumSlug)
    .then(res => {
      dispatch({
        type: GET_DISCUSSIONS_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: GET_DISCUSSIONS_FAIL,
        payload: err
      })
    });
};

// handle input change 
export const handleInputChange = (event) => dispatch => {
  const { name, value } = event.target;
  let payload = {};
  payload[name] = value;
  dispatch({
    type: HANDLE_INPUT_CHANGE,
    payload: payload
  });
};

//handle discussion submit using CREATE_DISCUSSION types
export const handleDiscussionSubmit = (discussionData) => dispatch => {
  let discussionPromise = new Promise(function(resolve, reject) {
    dispatch({ type: CREATE_DISCUSSION });
    forumAPI.createDiscussion(discussionData)
      .then(res => {
        dispatch({
          type: CREATE_DISCUSSION_SUCCESS,
          payload: res.data
        })
        resolve(res.data);
      })
      .catch(err => {
        dispatch({
          type: CREATE_DISCUSSION_FAIL,
          payload: err
        })
        reject(err);
      });
    });
  return discussionPromise;
};

//get all replies for a discussion
export const getAllReplies = (discussionId) => dispatch => {
  dispatch({ type: GET_REPLIES });
  forumAPI.getAllReplies(discussionId)
    .then(res => {
      dispatch({
        type: GET_REPLIES_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: GET_REPLIES_FAIL,
        payload: err
      })
    });
};

//get current discussion
export const getOneDiscussion = (discussionId) => dispatch => {
  dispatch({ type: GET_ONE_DISCUSSION });
  forumAPI.getDiscussion(discussionId)
    .then(res => {
      dispatch({
        type: GET_ONE_DISCUSSION_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ONE_DISCUSSION_FAIL,
        payload: err
      })
    });
};