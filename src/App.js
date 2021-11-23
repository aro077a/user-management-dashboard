import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import styled from '@emotion/styled';
import JobAside from './components/job-aside/JobAside';
import PostsState from './context/get-posts/postsState';
import Routes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <PostsState>
        <AppContainer>
          <Sidebar />
          <Routes />
          <JobAside />
        </AppContainer>
      </PostsState>
    </BrowserRouter>
  );
};

const AppContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 21% 45% 34%;
`;

export default App;
