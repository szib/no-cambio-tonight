import React, { useState, useEffect } from 'react';
import useCategories from '../../hooks/useCategories';
import useMechanics from '../../hooks/useMechanics';

// import Loader from '../../components/LoaderWithDimmer';

import DropdownAPI from './DropdownAPI';

import { Container, Dropdown, Segment, Label } from 'semantic-ui-react';

const speedOptions = [
  {
    key: 'quick',
    text: 'quick',
    value: 'quick'
  },
  {
    key: 'normal',
    text: 'normal',
    value: 'normal'
  },
  {
    key: 'long',
    text: 'long',
    value: 'long'
  }
];

const groupSizeOptions = [
  {
    key: 'small',
    text: 'small',
    value: 'small'
  },
  {
    key: 'normal',
    text: 'normal',
    value: 'normal'
  },
  {
    key: 'big',
    text: 'big',
    value: 'big'
  }
];

const RecommendGamesPage = () => {
  const [speed, setSpeed] = useState('normal');
  const [groupSize, setGroupSize] = useState('normal');

  const mechanicsAPI = useMechanics();
  const [mechanics, setMechanics] = useState([]);
  const handleMechanicsChange = (e, { value }) => setMechanics(value);

  const categoriesAPI = useCategories();
  const [categories, setCategories] = useState([]);
  const handleCategoryChange = (e, { value }) => setCategories(value);

  console.log('categoriesAPI.options', categoriesAPI.options);
  console.log('cat', categories);
  console.log('mech', mechanics);
  console.log('speed', speed);
  console.log('groupSize', groupSize);

  return (
    <Container>
      <Segment>
        <Dropdown
          selection
          fluid
          options={speedOptions}
          onChange={(_, v) => setSpeed(v.value)}
        />

        <Dropdown
          selection
          fluid
          options={groupSizeOptions}
          onChange={(_, v) => setGroupSize(v.value)}
        />

        <DropdownAPI
          placeholder="Game mechanics"
          value={mechanics}
          API={mechanicsAPI}
          handleChange={handleMechanicsChange}
        />
        <DropdownAPI
          placeholder="Category"
          value={categories}
          API={categoriesAPI}
          handleChange={handleCategoryChange}
        />
      </Segment>
    </Container>
  );
};

export default RecommendGamesPage;
