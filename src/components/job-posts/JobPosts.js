import React, { useContext, useEffect, Fragment } from 'react';

import searchIcon from '../../assets/icons/search-icon.svg';
import sortIcon from '../../assets/icons/sort-icon.svg';

import {
  JobContainer,
  JobContainerTitle,
  JobPostsInfo,
  JobPostsInput,
  JobPostsInputIcon,
  PostsButtonContainer,
  SortButton,
  SortButtonIcon,
  Posts,
  PostTitle,
  PostBody,
} from './elemets';
import PostsContext from '../../context/get-posts/postsContext';
import { Link } from 'react-router-dom';

const JobPosts = () => {
  const postContext = useContext(PostsContext);
  const { posts, getPosts } = postContext;
  const { data } = posts;

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <JobContainer>
      <JobContainerTitle>Job Posts</JobContainerTitle>
      <JobPostsInfo>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </JobPostsInfo>
      <JobPostsInput type='search' placeholder='Search' />
      <JobPostsInputIcon src={searchIcon} alt='search' />
      <PostsButtonContainer>
        <SortButton>
          <SortButtonIcon src={sortIcon} alt='sort'></SortButtonIcon>
          Sort by
        </SortButton>
      </PostsButtonContainer>
      <Posts>
        {data?.map((post) => {
          return (
            <Fragment key={post.id}>
              <PostTitle>
                <Link to='/create'>
                  {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                </Link>
              </PostTitle>
              <PostBody>{post.body}</PostBody>
            </Fragment>
          );
        })}
      </Posts>
    </JobContainer>
  );
};

export default JobPosts;
