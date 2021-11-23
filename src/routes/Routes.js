import React from 'react';
import JobPosts from '../components/job-posts/JobPosts';
import UpdateJobPosts from '../components/update-job-posts/UpdateJobPosts';
import { Switch, Route } from 'react-router';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={JobPosts} />
      <Route path='/create' component={UpdateJobPosts} />
    </Switch>
  );
};

export default Routes;
