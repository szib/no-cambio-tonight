import React from 'react';
import { Segment, Item } from 'semantic-ui-react';

import Comment from './Comment';
import NewCommentForm from './NewCommentForm';

const Comments = ({ comments }) => {
  if (!comments) return null;

  const submitHandler = text => {
    console.log(text);
  };

  return (
    <Segment>
      <NewCommentForm onSubmitHandler={submitHandler} />
      <Item.Group divided>
        {comments &&
          comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </Item.Group>
    </Segment>
  );
};

export default Comments;
