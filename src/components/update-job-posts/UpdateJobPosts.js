import React, { useContext, useEffect, Fragment } from 'react';
import {
  UpdatePostTitle,
  UpdatePostInfo,
  UpdatePostContainer,
  JobTitleInput,
  JObDescription,
  SelectPost,
  JobSelectContent,
  SelectPostOption,
  DropdownLeftIcon,
  DropdownRightIcon,
  PostItemTitle,
  PostItemBody,
  UpdatePostContent,
  ButtonContent,
  SaveButton,
} from './elements';
import dropdownIcon from '../../assets/icons/dropdown-icon.svg';
import PostsContext from '../../context/get-posts/postsContext';

const UpdateJobPosts = () => {
  const postContext = useContext(PostsContext);
  const { posts, updatePosts } = postContext;
  const { data } = posts;

  useEffect(() => {
    updatePosts();
  }, [updatePosts]);

  return (
    <UpdatePostContainer>
      <UpdatePostTitle>Update job post</UpdatePostTitle>
      <UpdatePostInfo>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </UpdatePostInfo>
      <JobTitleInput type='text' value='Job Title' onChange={() => {}} />
      <JObDescription placeholder='Description'></JObDescription>
      <JobSelectContent>
        <DropdownLeftIcon src={dropdownIcon} alt='dropdown' />
        <SelectPost>
          <SelectPostOption>Category</SelectPostOption>
        </SelectPost>
        <DropdownRightIcon src={dropdownIcon} alt='dropdown' />
        <SelectPost>
          <SelectPostOption>Location</SelectPostOption>
        </SelectPost>
      </JobSelectContent>
      <UpdatePostContent>
        {data?.map((post) => {
          return (
            <Fragment key={post.id}>
              <PostItemTitle>
                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
              </PostItemTitle>
              <PostItemBody>{post.body}</PostItemBody>
            </Fragment>
          );
        })}
      </UpdatePostContent>
      <ButtonContent>
        <SaveButton>Save</SaveButton>
      </ButtonContent>
    </UpdatePostContainer>
  );
};

export default UpdateJobPosts;
