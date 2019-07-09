import React from 'react';

import { Item } from 'semantic-ui-react';

const Comment = ({ comment }) => {
  if (!comment) return null;
  const { commentText, author, id, createdAt } = comment;

  return (
    <Item size="small">
      <Item.Image
        avatar
        circular
        bordered
        size="tiny"
        src={author.picture.medium}
      />
      <Item.Content>
        <Item.Meta>
          {author.fullName} @ {createdAt}
        </Item.Meta>
        <Item.Header>{commentText}</Item.Header>
      </Item.Content>
    </Item>
  );
};

export default Comment;
