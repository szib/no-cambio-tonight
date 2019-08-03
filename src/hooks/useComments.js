import useAPI from './useAPI';
import convertToCamelCase from 'lodash-humps';

// commentable: { path: '/events', id: 1 }
const useComments = commentable => {
  const apiConfig = {
    url: `http://localhost:3030/api/v1${commentable.path}/${commentable.id}/comments`,
    initialData: {
      comments: []
    }
  };

  const API = useAPI(apiConfig);

  API.postComment = comment => {
    fetch(apiConfig.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        comment_text: comment.text,
        author_id: comment.authorId
      })
    })
      .then(resp => resp.json())
      .then(json => {
        if (!json.error) {
          API.setData({ comments: convertToCamelCase(json.comments) });
        } else {
          console.error(json.error);
        }
      });
  };

  return API;
};

export default useComments;
