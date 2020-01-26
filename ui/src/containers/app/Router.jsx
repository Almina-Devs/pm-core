import React, { Component } from 'react'
import {
    BrowserRouter as Routes,
    Switch,
    Route
  } from "react-router-dom";
  import Navigation from './Navigation';
  import Dashboard from '../dashboard/Dashboard';
  import BoardView from '../board/BoardView';
  import ProjectList from '../projects/ProjectList';
  import CreateProject from '../projects/CreateProject';

  
export default class Router extends Component {
    
    render() {
        return (
            <div>
                <Navigation />
                <Routes>
                    <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/boards">
                        <BoardView />
                    </Route>
                    <Route path="/projects" exact={true}>
                        <ProjectList />
                    </Route>
                    <Route path="/projects/create">
                        <CreateProject />
                    </Route>
                    </Switch>
                </Routes>
            </div>
        )
    }
}
