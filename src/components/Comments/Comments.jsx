import React from 'react';
import { Segment, Item } from 'semantic-ui-react';

import Comment from './Comment';

const Comments = ({ comments }) => {
  if (!comments) return null;

  return (
    <Segment>
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
