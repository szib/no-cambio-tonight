import React, { useContext } from 'react';

import { Segment, Item, Header } from 'semantic-ui-react';

import Comment from './Comment';
import NewCommentForm from './NewCommentForm';

import { ProfileContext } from '../../lib/context';

const Comments = ({ API }) => {
  const profile = useContext(ProfileContext);
  const authorId = profile.user.id;

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
        {comments && comments.length === 0 && <Header>No comments yet.</Header>}
        {comments &&
          comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </Item.Group>
    </Segment>
  );
};

export default Comments;
