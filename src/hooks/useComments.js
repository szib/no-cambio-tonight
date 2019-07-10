import useAPI from './useAPI';
import convertToCamelCase from 'lodash-humps';

const initialData = {
  comments: []
};

// commentable: { path: '/events', id: 1 }
const useComments = commentable => {
  let url = `http://localhost:3030/api/v1${commentable.path}/${commentable.id}/comments`;
  const API = useAPI(url, initialData);

  API.postComment = comment => {
    fetch(url, {
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
          API.setFetchedData({ comments: convertToCamelCase(json.comments) });
        } else {
          console.error(json.error);
        }
      });
  };

  return API;
};

export default useComments;
