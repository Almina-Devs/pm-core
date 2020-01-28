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
import CreateLane from '../lanes/CreateLane';
import LanesList from '../lanes/LanesList';

  
export default class Router extends Component {
    
    render() {
        return (
            <div>
                <Navigation />
                <Routes>
                    <Switch>
                    <Route path="/dashboard" exact={true}>
                        <Dashboard />
                    </Route>
                    <Route path="/boards" exact={true}>
                        <BoardView />
                    </Route>
                    <Route path="/projects" exact={true}>
                        <ProjectList />
                    </Route>
                    <Route path="/projects/create" exact={true}>
                        <CreateProject />
                    </Route>
                    <Route path="/lanes" exact={true}>
                        <LanesList />
                    </Route>
                    <Route path="/lanes/create" exact={true}>
                        <CreateLane />
                    </Route>
                    </Switch>
                </Routes>
            </div>
        )
    }
}
