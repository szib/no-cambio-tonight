import React, { useState } from 'react';

import { Segment, Dropdown, Form } from 'semantic-ui-react';

const ParametersForm = ({ categories, mechanics }) => {
  return (
    <Segment>
      <Form>
        {/* <Form.Group label="Game options">

          <Form.Dropdown
            label='Game length'
            options={speedOptions}
            value={speed}
            onChange={(_, v) => setSpeed(v.value)}
          />
          <Form.Dropdown
            label='Group size'
            options={groupSizeOptions}
            value={groupSize}
            onChange={(_, v) => setGroupSize(v.value)}
          />
        </Form.Group> */}

        <Dropdown
          placeholder="Category"
          fluid
          multiple
          search
          selection
          options={categories}
        />
        <Dropdown
          placeholder="Mechanics"
          fluid
          multiple
          search
          selection
          options={mechanics}
        />
      </Form>
    </Segment>
  );
};

export default ParametersForm;
