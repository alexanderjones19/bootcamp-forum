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
  GET_REPLIES,
  GET_REPLIES_SUCCESS,
  GET_REPLIES_FAIL,
  GET_ONE_DISCUSSION,
  GET_ONE_DISCUSSION_SUCCESS,
  GET_ONE_DISCUSSION_FAIL,
  TOGGLE_REPLY_FORM,
  CREATE_REPLY,
  CREATE_REPLY_SUCCESS,
  CREATE_REPLY_FAIL,
  HANDLE_REPLY_INPUT_CHANGE,
  TOGGLE_CHEAT_SHEET
} from '../actions/types';

const initialState = {
  forums: [],
  discussions: [],
  currentForum: {},
  currentDiscussion: {},
  replies: [],
  loading: false,
  errors: null,
  newDiscussionForm: {
    title: '',
    content: ''
  },
  newReplyForm: {
    reply: ''
  },
  isReplying: false,
  modal: false
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
    case HANDLE_REPLY_INPUT_CHANGE:
      return {
        ...state,
        newReplyForm: {...state.newReplyForm, ...action.payload}
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
        currentDiscussion: action.payload,
        newDiscussionForm: initialState.newDiscussionForm,
        loading: false
      };
    case CREATE_DISCUSSION_FAIL:
      return {
        ...state,
        errors: action.payload,
        loading: false
      };
    case GET_REPLIES:
      return {
        ...state,
        loading: true
      };
    case GET_REPLIES_SUCCESS:
      return {
        ...state,
        replies: action.payload,
        loading: false
      };
    case GET_REPLIES_FAIL:
      return {
        ...state,
        errors: action.payload,
        loading: false
      };
    case GET_ONE_DISCUSSION:
      return {
        ...state,
        loading: true
      };
    case GET_ONE_DISCUSSION_SUCCESS:
      return {
        ...state,
        currentDiscussion: action.payload,
        loading: false
      };
    case GET_ONE_DISCUSSION_FAIL:
      return {
        ...state,
        errors: action.payload,
        loading: false
      };
    case TOGGLE_REPLY_FORM:
      return {
        ...state,
        isReplying: !state.isReplying
      };
    case CREATE_REPLY:
      return {
        ...state,
        loading: true
      };
    case CREATE_REPLY_SUCCESS:
      let newReplies = [action.payload].concat(state.replies);
      return {
        ...state,
        replies: newReplies,
        newReplyForm: initialState.newReplyForm,
        isReplying: false,
        loading: false
      };
    case CREATE_REPLY_FAIL:
      return {
        ...state,
        errors: action.payload,
        loading: false
      };
    case TOGGLE_CHEAT_SHEET:
      return {
        ...state,
        modal: !state.modal
      };
    default: {
      return state;
    } 
  }
}