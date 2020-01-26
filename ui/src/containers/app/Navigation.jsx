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
            <DropdownItem>
                <a href="/projects">List</a>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
                <a href="/projects/create">Create</a>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="/boards">Boards</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navigation;