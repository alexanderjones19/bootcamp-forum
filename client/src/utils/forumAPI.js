import axios from 'axios';

export default {
  // Forum

  // Create a forum 
  createForum: (forumData) => {
    return axios.post('/api/forum', forumData);
  },
  // Get all forums in database
  getAllForums: () => {
    return axios.get('/api/forum');
  },
  // Update a forum by forum_id
  updateForum: (forumId) => {
    return axios.put('/api/forum/' + forumId);
  },
  // Delete a forum by forum_id
  deleteForum: (forumId) => {
    return axios.delete('/api/forum/' + forumId);
  },
  // Get forum by slug
  getForumBySlug: (forumSlug) => {
    return axios.get('/api/forum/' + forumSlug);
  },

  // Discussion

  // Create a discussion
  createDiscussion: (discussionData) => {
    return axios.post('/api/discussion', discussionData);
  },
  // Get a discussion by discussion_id
  getDiscussion: (discussionId) => {
    return axios.get('/api/discussion/' + discussionId);
  },
  // Update a discussion by discussion_id
  updateDiscussion: (discussionId) => {
    return axios.put('/api/discussion/' + discussionId);
  },
  // Delete a discussion by discussion_id
  deleteDiscussion: (discussionId) => {
    return axios.delete('/api/discussion/' + discussionId);
  },
  // Get all discussions of a forum by forum_id
  getAllDiscussions: (forumSlug) => {
    return axios.get('/api/discussion', {
      params: {
        forum_slug: forumSlug
      }
    });
  },

  // Reply

  // Create a reply
  createReply: (replyData) => {
    return axios.post('/api/reply', replyData);
  },
  // Get a reply by reply_id
  getReply: (replyId) => {
    return axios.get('/api/reply/' + replyId);
  },
  // Update a reply by reply_id
  updateReply: (replyId) => {
    return axios.put('/api/reply/' + replyId);
  },
  // Delete a reply by reply_id
  deleteReply: (replyId) => {
    return axios.delete('/api/reply/' + replyId);
  },
  // Get all replies of a discussion by discussion_id
  getAllReplies: (discussionSlug) => {
    return axios.get('/api/reply', {
      params: {
        discussion_slug: discussionSlug
      }
    });
  }
};