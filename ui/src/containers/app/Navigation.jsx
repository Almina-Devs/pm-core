import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

const Navigation = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="navigation">
      <Nav>
        <NavItem>
          <NavLink href="/dashboard" active>Dashboard</NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Projects
          </DropdownToggle>
          <DropdownMenu>
            <a href="/projects">
              <DropdownItem>List</DropdownItem>
            </a>
            <DropdownItem divider />
            <a href="/projects/create">
              <DropdownItem>Create</DropdownItem>
            </a>
            <DropdownItem divider />
            <DropdownItem header>Lanes</DropdownItem>
            <a href="/lanes">
              <DropdownItem>Lanes</DropdownItem>
            </a>
            <a href="/lanes/create">
              <DropdownItem>Create Lane</DropdownItem>
            </a>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="/boards">Boards</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/login">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/logout">Logout</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navigation;