import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            Core Admin
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Projects</DropdownItem>
            <a href="/projects">
              <DropdownItem>List</DropdownItem>
            </a>
            <a href="/projects/create">
              <DropdownItem>Create</DropdownItem>
            </a>
            <DropdownItem divider />
            <DropdownItem header>Lanes</DropdownItem>
            <a href="/lanes">
              <DropdownItem>List</DropdownItem>
            </a>
            <a href="/lanes/create">
              <DropdownItem>Create</DropdownItem>
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
        <NavItem>
          <NavLink href="/register">Register</NavLink>
        </NavItem>        
      </Nav>
      <ToastContainer autoClose={5000} />
    </div>
  );
}

export default Navigation;