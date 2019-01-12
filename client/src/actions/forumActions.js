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