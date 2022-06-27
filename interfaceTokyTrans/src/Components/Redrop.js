import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React from 'react';

function Drop() {
    return (
        <DropdownButton id="dropdown-basic-button" title="Status">
            <Dropdown.Item href="#/action-1">Payé</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Non-Payé</Dropdown.Item>
        </DropdownButton>
    );
}

export default Drop;