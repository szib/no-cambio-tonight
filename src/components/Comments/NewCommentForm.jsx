import React, { useState } from 'react';

import { Form } from 'semantic-ui-react';

const NewCommentForm = ({ onSubmitHandler }) => {
  const [commentText, setCommentText] = useState('');

  const submitHandler = () => {
    onSubmitHandler(commentText);
    setCommentText('');
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Field>
        <Form.Input
          placeholder="Say something..."
          value={commentText}
          onChange={(e, v) => setCommentText(v.value)}
        />
      </Form.Field>
    </Form>
  );
};

export default NewCommentForm;
