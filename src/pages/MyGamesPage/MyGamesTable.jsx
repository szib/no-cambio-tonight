import React from 'react';

import { Table } from 'semantic-ui-react';

const GamesTable = props => {
  const { children } = props;
  return (
    <Table striped textAlign="center">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Image</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Rating</Table.HeaderCell>
          <Table.HeaderCell>Players</Table.HeaderCell>
          <Table.HeaderCell>Play time</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{children}</Table.Body>
    </Table>
  );
};

export default GamesTable;
