import React, { Component } from 'react'
import {
    BrowserRouter as Routes,
    Switch,
    Route
  } from "react-router-dom";
import PrivateRoute from './PrivateRoute';  
import Navigation from './Navigation';
import Dashboard from '../dashboard/Dashboard';
import BoardView from '../board/BoardView';
import ProjectList from '../projects/ProjectList';
import CreateProject from '../projects/CreateProject';
import CreateLane from '../lanes/CreateLane';
import LanesList from '../lanes/LanesList';
import Login from '../app/auth/Login';
import Logout from '../app/auth/Logout';
import Register from '../app/auth/Register';
import StoryList from '../stories/StoryList';
import CreateStory from '../stories/CreateStory';
import UserList from '../users/UserList';
import PageNotFound from './PageNotFound';
import ServerError from './ServerError';
  
export default class Router extends Component {
    
    render() {
        return (
            <div>
                <Navigation />
                <Routes>
                    <Switch>
                        <Route path="/dashboard" component={Dashboard} exact={true} />
                        <PrivateRoute path="/boards" component={BoardView} exact={true} />
                        <PrivateRoute path="/projects" component={ProjectList} exact={true} />
                        <PrivateRoute path="/projects/create" component={CreateProject} exact={true} />
                        <PrivateRoute path='/lanes' component={LanesList} exact={true} />
                        <PrivateRoute path="/lanes/create" component={CreateLane} exact={true} />
                        <PrivateRoute path="/stories" component={StoryList} exact={true} />
                        <PrivateRoute path="/stories/create" component={CreateStory} exact={true} />
                        <PrivateRoute path="/users" component={UserList} exact={true} />
                        <Route path="/login" component={Login} exact={true} />
                        <Route path="/logout" component={Logout} exact={true} />
                        <Route path="/Register" component={Register} exact={true} />
                        <Route path="/error" component={ServerError} exact={true} />
                        <Route path="*" component={PageNotFound} />             
                    </Switch>
                </Routes>
            </div>
        )
    }
}
