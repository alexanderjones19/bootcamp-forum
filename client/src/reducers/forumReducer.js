import{
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
} from '../actions/types';

const initialState = {
  forums: [],
  discussions: [],
  currentForum: {},
  replies: [],
  loading: false,
  errors: null,
  newDiscussionForm: {
    title: '',
    content: ''
  }
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_FORUMS: 
      return {
        ...state,
        loading: true
      };
    case GET_FORUMS_SUCCESS:
      return {
        ...state,
        forums: action.payload,
        loading: false
      };
    case GET_FORUMS_FAIL:
      return {
        ...state,
        errors: action.payload,
        loading: false
      };
    case GET_ONE_FORUM:
      return {
        ...state,
        loading: true
      };
    case GET_ONE_FORUM_SUCCESS:
      return {
        ...state,
        currentForum: action.payload,
        loading: false
      };
    case GET_ONE_FORUM_FAIL:
      return {
        ...state,
        errors: action.payload,
        loading: false
      };
    case GET_DISCUSSIONS:
      return {
        ...state,
        loading: true
      };
    case GET_DISCUSSIONS_SUCCESS:
      return {
        ...state,
        discussions: action.payload.discussions,
        currentForum: action.payload.forum,
        loading: false
      };
    case GET_DISCUSSIONS_FAIL:
      return {
        ...state,
        errors: action.payload,
        loading: false
      };
    case HANDLE_INPUT_CHANGE:
      return {
        ...state,
        newDiscussionForm: {...state.newDiscussionForm, ...action.payload}
      };
    case CREATE_DISCUSSION:
      return {
        ...state,
        loading: true
      };
    case CREATE_DISCUSSION_SUCCESS:
      let newDiscussions = [action.payload].concat(state.discussions);
      return {
        ...state,
        discussions: newDiscussions,
        loading: false
      };
    case CREATE_DISCUSSION_FAIL:
      return {
        ...state,
        errors: action.payload,
        loading: false
      };
    default: {
      return state;
    } 
  }
}