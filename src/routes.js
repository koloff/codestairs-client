import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import { App } from './containers/App';
import { Home } from './containers/Home';
import { AddResource } from './containers/AddResource'
import { Organize } from './containers/organize/Organize';
import { OrganizeCourses } from './containers/organize/OrganizeCourses';
import { EditCourse } from './containers/organize/EditCourse';
import { LoginForm } from './containers/account/Login';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="login" component={LoginForm} />
    <Route path="add" component={AddResource} />
    <Route path="organize" component={Organize}>
      <IndexRedirect to="courses" />
      <Route path="courses" component={OrganizeCourses} />
    </Route>
    <Route path="edit">
      <Route path="course/:course" component={EditCourse} />
    </Route>
  </Route>
);