import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Courses from './Courses/Courses';
import Course from '../components/Course/Course';
import Users from './Users/Users';
import Done from '../components/Done/Done';
import NoMatch from '../components/NoMatch/NoMatch';

import './CoursePage.css';

class CoursePage extends Component {
    render () {
        return (
            <div className="CoursePage">
                <ol style={{textAlign: 'left'}}>
                    <li>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)<Done /></li>
                    <li>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"<Done /></li>
                    <li>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)<Done /></li>
                    <li>Pass the course ID to the "Course" page and output it there<Done /></li>
                    <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)<Done /></li>
                    <li>Load the "Course" component as a nested component of "Courses"<Done /></li>
                    <li>Add a 404 error page and render it for any unknown routes<Done /></li>
                    <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)<Done /></li>
                </ol>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/courses" exact>Courses</NavLink></li>
                            <li><NavLink to="/users" exact>Users</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/courses" component={Courses} />
                    <Route path="/users" component={Users} />
                    <Route path="/courses/course" component={Course} />
                    <Redirect from="/all-courses" to="/courses" />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        );
    }
}

export default CoursePage;
