import React from 'react';
import { DateTime } from 'luxon';

import { Item } from 'semantic-ui-react';

const Comment = ({ comment }) => {
  if (!comment) return null;
  const { commentText, author, id, createdAt } = comment;

  const creationTime = new DateTime.fromISO(createdAt)
    .setLocale('en')
    .toFormat('cccc, dd LLLL, yyyy t');

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
          {author.fullName} @ {creationTime}
        </Item.Meta>
        <Item.Header>{commentText}</Item.Header>
      </Item.Content>
    </Item>
  );
};

export default Comment;
