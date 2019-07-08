import React from 'react';

import { Input, Form, Segment } from 'semantic-ui-react';

const SearchBar = ({
  onSubmitHandler,
  onChangeHandler,
  searchTerm,
  isLoading
}) => {
  const submitHandler = onSubmitHandler || (() => {});

  return (
    <Form onSubmit={submitHandler}>
      <Input
        loading={isLoading}
        fluid
        placeholder="Search..."
        value={searchTerm}
        onChange={e => onChangeHandler(e.target.value)}
      />
    </Form>
  );
};

export default SearchBar;
