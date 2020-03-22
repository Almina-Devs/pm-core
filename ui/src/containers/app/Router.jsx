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
import Project from '../projects/Project';
import Lane from '../lanes/Lane';
import LanesList from '../lanes/LanesList';
import Login from '../app/auth/Login';
import Logout from '../app/auth/Logout';
import Register from '../app/auth/Register';
import StoryList from '../stories/StoryList';
import Story from '../stories/Story';
import TaskList from '../tasks/TaskList';
import Task from '../tasks/Task';
import UserList from '../users/UserList';
import Gantt from '../gantt/Gantt';
import ProjectCalendar from '../calendar/ProjectCalendar';
import PageNotFound from './PageNotFound';
import ServerError from './ServerError';
  
export default class Router extends Component {
    
    render() {
        return (
            <div>
                <Navigation />
                <Routes>
                    <Switch>
                        <Route path="/" component={Dashboard} exact={true} />
                        <Route path="/dashboard" component={Dashboard} exact={true} />
                        <PrivateRoute path="/boards" component={BoardView} exact={true} />
                        <PrivateRoute path="/projects" component={ProjectList} exact={true} />
                        <PrivateRoute path="/projects/create" component={Project} exact={true} />
                        <PrivateRoute path="/projects/edit/:id" component={Project} exact={true} />
                        <PrivateRoute path='/lanes' component={LanesList} exact={true} />
                        <PrivateRoute path="/lanes/create" component={Lane} exact={true} />
                        <PrivateRoute path="/lanes/edit/:id" component={Lane} exact={true} />
                        <PrivateRoute path="/stories" component={StoryList} exact={true} />
                        <PrivateRoute path="/stories/create" component={Story} exact={true} />
                        <PrivateRoute path="/stories/edit/:id" component={Story} exact={true} />
                        <PrivateRoute path="/users" component={UserList} exact={true} />
                        <PrivateRoute path="/gantt" component={Gantt} exact={true} />
                        <PrivateRoute path="/calendar" component={ProjectCalendar} exact={true} />
                        <PrivateRoute path="/tasks" component={TaskList} exact={true} />
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
