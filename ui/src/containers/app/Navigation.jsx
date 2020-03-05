import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, Row, Col } from 'reactstrap';
import { isAuthenticated } from '../app/auth/auth';
import UserCard from '../users/UserCard';

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
            <DropdownItem header>
                Projects
            </DropdownItem>
            <DropdownItem>
                <Row>
                    <Col>
                        <a href="/projects">
                            <i className="fas fa-list"></i>
                        </a>                
                    </Col>
                    <Col>
                        <a href="/projects/create">
                            <i className="fas fa-plus"></i>
                        </a>
                    </Col>
                </Row>
            </DropdownItem>
            
            <DropdownItem divider />

            <DropdownItem header>Lanes</DropdownItem>
            <DropdownItem>
                <Row>
                    <Col>
                        <a href="/lanes">
                            <i className="fas fa-list"></i>
                        </a>                
                    </Col>
                    <Col>
                        <a href="/lanes/create">
                            <i className="fas fa-plus"></i>
                        </a>
                    </Col>
                </Row>
            </DropdownItem>

            <DropdownItem divider />

            <DropdownItem header>Stories</DropdownItem>
            <DropdownItem>
                <Row>
                    <Col>
                        <a href="/stories">
                            <i className="fas fa-list"></i>
                        </a>                
                    </Col>
                    <Col>
                        <a href="/stories/create">
                            <i className="fas fa-plus"></i>
                        </a>
                    </Col>
                </Row>
            </DropdownItem>

            <DropdownItem divider />

            <DropdownItem header>Users</DropdownItem>
            <DropdownItem>
                <Row>
                    <Col>
                        <a href="/users">
                            <i className="fas fa-list"></i>
                        </a>                
                    </Col>
                    <Col>
                        <a href="/users/create">
                            <i className="fas fa-plus"></i>
                        </a>
                    </Col>
                </Row>
            </DropdownItem>
            
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="/boards">Boards</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/gantt">Gantt</NavLink>
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
                <UserCard />
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