import React from 'react';

import { Dropdown } from 'semantic-ui-react';

const DropdownAPI = ({ placeholder, value, API, handleChange }) => {
  return (
    <Dropdown
      selection
      fluid
      multiple
      placeholder={placeholder}
      value={value}
      options={API.options}
      search
      onChange={handleChange}
      loading={API.isLoading}
      disabled={API.isLoading}
    />
  );
};

export default DropdownAPI;
