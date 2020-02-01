import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Dashboard = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">PM Core - Project Management</h1>
        <p className="lead">A single app for managing your product & development teams.</p>
        <a href="/projects/create">
          <Button color="primary">Create a Project</Button>
        </a>
      </Jumbotron>
    </div>
  );
};

export default Dashboard;
