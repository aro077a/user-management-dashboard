import React from 'react';
import {
  JobAsideContent,
  AsideTitleContent,
  AsideTitle,
  AsideTitleInfo,
  AsideArea,
  AsideButtonsContent,
  UpdateButton,
  DeleteButton,
} from './elements';
import { withRouter } from 'react-router';

const JobAside = (props) => {
  return (
    <JobAsideContent>
      <AsideTitleContent>
        {props.location.pathname === '/create' ? (
          <AsideTitle>Preview</AsideTitle>
        ) : (
          <AsideTitle>Job post {'{name}'}</AsideTitle>
        )}
        <AsideTitleInfo>Lorem ipsum</AsideTitleInfo>
      </AsideTitleContent>
      <AsideArea></AsideArea>
      <AsideButtonsContent>
        <UpdateButton>Update</UpdateButton>
        <DeleteButton>Delete</DeleteButton>
      </AsideButtonsContent>
    </JobAsideContent>
  );
};

export default withRouter(JobAside);
