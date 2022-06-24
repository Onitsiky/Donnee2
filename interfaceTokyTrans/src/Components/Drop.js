import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React from 'react';

function Drop() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Tous">
      <Dropdown.Item href="#/action-1">Jour</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Nuit</Dropdown.Item>
    </DropdownButton>
  );
}

export default Drop;