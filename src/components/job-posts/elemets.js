import styled from '@emotion/styled';

export const JobContainer = styled.section`
  height: 100vh;
  margin: 0 auto;
  padding: 60px 40px;
`;

export const JobContainerTitle = styled.h2`
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.04em;
  color: #000000;
`;

export const JobPostsInfo = styled.p`
  width: 500px;
  margin-top: 24px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #b5babe;
`;

export const JobPostsInput = styled.input`
  width: 560px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #e5e7fa;
  box-sizing: border-box;
  border-radius: 6px;
  margin-top: 40px;
  position: relative;

  ::placeholder {
    @font-face {
      font-family: 'SF Pro Text';
      src: url('../../fonts/SF Pro Text Regular.ttf');
    }
    font-size: 15px;
    line-height: 20px;
    color: #d0c9d6;
    padding-left: 46px;
  }
`;

export const JobPostsInputIcon = styled.img`
  width: 18.5px;
  height: 18.5px;
  position: absolute;
  left: 360px;
  top: 244px;
`;

export const PostsButtonContainer = styled.div`
  display: grid;
  justify-content: end;
`;

export const SortButton = styled.button`
  width: 136px;
  height: 36px;
  box-sizing: border-box;
  margin-top: 32px;
  padding: 8px 26px 8px 29px;
  outline: 0;
  border: 0;
  background: #6979f8;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  color: #fff;
  @font-face {
    font-family: 'SF Pro Text';
    src: url('../../fonts/SF Pro Text Regular.ttf');
  }
  display: grid;
  grid-auto-flow: column;
  justify-content: space-evenly;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  cursor: pointer;
`;

export const SortButtonIcon = styled.img`
  width: 18px;
  height: 16px;
  color: #fff;
`;

export const Posts = styled.div`
  margin-top: 24px;
`;
export const PostTitle = styled.h4`
  a {
    text-decoration: none;
    color: #000000;
  }
`;
export const PostBody = styled.p``;
