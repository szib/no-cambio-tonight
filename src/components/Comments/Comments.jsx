import React from 'react';
import { useSelector } from 'react-redux';

import { Segment, Item } from 'semantic-ui-react';

import Comment from './Comment';
import NewCommentForm from './NewCommentForm';

const Comments = ({ API }) => {
  const authorId = useSelector(state => state.profile.user.id);

  if (API.isLoading) return <Segment>Loading...</Segment>;
  if (API.hasError) return <Segment>Error</Segment>;

  const { comments } = API.data;

  const submitHandler = text => {
    const comment = {
      text,
      authorId
    };
    API.postComment(comment);
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
