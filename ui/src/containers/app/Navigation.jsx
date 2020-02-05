import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { isAuthenticated } from '../app/auth/auth';

const Navigation = (props) => {
  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [authDropDown, setAuthDropDown] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  const authToggle = () => setAuthDropDown(!authDropDown);

  return (
    <div className="navigation">
      
      <i className="fa fa-quote-left fa-3x fa-pull-left fa-border" aria-hidden="true"></i>
      
      <Nav>
        <NavItem>
          <NavLink href="/dashboard" active>Dashboard</NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret className="dropdown__togggle">
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
            <DropdownItem divider />
            <DropdownItem header>Stories</DropdownItem>
            <a href="/stories">
              <DropdownItem>List</DropdownItem>
            </a>
            <a href="/stories/create">
              <DropdownItem>Create</DropdownItem>
            </a>
            <DropdownItem header>Users</DropdownItem>
            <a href="/users">
              <DropdownItem>List</DropdownItem>
            </a>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="/boards">Boards</NavLink>
        </NavItem>
      </Nav>

      <Nav>
      <Dropdown nav isOpen={authDropDown} toggle={authToggle}>
          <DropdownToggle nav caret className="dropdown__togggle">
            <i className="fas fa-user-lock"></i>
          </DropdownToggle>
          <DropdownMenu>
            {!isAuthenticated() ?
              <React.Fragment>
                <a href="/login">
                  <DropdownItem>Login</DropdownItem>
                </a>
              </React.Fragment>
            :
              <React.Fragment>
                <a href="/logout">
                  <DropdownItem>Logout</DropdownItem>
                </a>

              </React.Fragment>
            }
            <DropdownItem divider />
            <a href="/Register">
              <DropdownItem>Register</DropdownItem>
            </a>
          </DropdownMenu>
        </Dropdown>
      </Nav>
      
      
    </div>
  );
}

export default Navigation;