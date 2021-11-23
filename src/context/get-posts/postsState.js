import React, { useReducer, useCallback } from 'react';
import axios from 'axios';

import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  UPDATE_POSTS,
} from '../types';
import PostsContext from './postsContext';
import postReducer from './postReducer';

const url = 'https://jsonplaceholder.typicode.com/posts';

const PostsState = (props) => {
  const initialState = {
    posts: [],
  };

  const [state, dispatch] = useReducer(postReducer, initialState);

  const getPosts = useCallback(async () => {
    try {
      const res = await axios.get(`${url}?_start=0&_limit=3`);
      dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: FETCH_POSTS_FAILURE,
      });
    }
  }, []);

  const updatePosts = async () => {
    try {
      const res = await axios.get(`${url}/1`);
      dispatch({
        type: UPDATE_POSTS,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: FETCH_POSTS_FAILURE,
      });
    }
  };

  return (
    <PostsContext.Provider
      value={{
        posts: state.posts,
        getPosts,
        updatePosts,
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
};
export default PostsState;
